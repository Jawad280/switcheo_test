"use client";
import React, { useState, useEffect, useMemo } from "react";
import WalletRow from "./WalletRow";

interface WalletBalance {
  currency: string;
  amount: number;
  blockchain: string;
}

interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
}

interface Price {
  currency: string;
  date: string;
  price: number;
}

interface Props {}

const sampleBalances: WalletBalance[] = [
  { currency: "ETH", amount: 1.5, blockchain: "Ethereum" },
  { currency: "BTC", amount: 0.05, blockchain: "Bitcoin" },
  { currency: "USDT", amount: 1000, blockchain: "USDT" },
  { currency: "OSMO", amount: 12, blockchain: "Osmosis" },
  { currency: "ZIL", amount: 6, blockchain: "Zilliqa" },
];

const useWalletBalances = () => {
  const [balances, setBalances] = useState<WalletBalance[]>([]);

  useEffect(() => {
    // Fetch the balances from endpoint if available
  }, []);

  return sampleBalances;
};

class Datasource {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getPrices(): Promise<Price[]> {
    try {
      const res = await fetch(this.endpoint);
      if (!res.ok) {
        throw new Error("Error in getting prices");
      }
      const prices = res.json();
      return prices;
    } catch (error) {
      console.error("Datasource getPrices error: ", error);
      return [];
    }
  }
}

const WalletPage: React.FC<Props> = (props: Props) => {
  //   const { children, ...rest } = props;
  const balances = useWalletBalances();
  const [prices, setPrices] = useState<Price[]>([]);

  useEffect(() => {
    const datasource = new Datasource(
      "https://interview.switcheo.com/prices.json"
    );
    datasource
      .getPrices()
      .then((prices) => {
        setPrices(prices);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getPriority = (blockchain: string): number => {
    switch (blockchain) {
      case "Osmosis":
        return 100;
      case "Ethereum":
        return 50;
      case "Arbitrum":
        return 30;
      case "Zilliqa":
        return 20;
      case "Neo":
        return 20;
      default:
        return -99;
    }
  };

  const sortedBalances: WalletBalance[] = useMemo(() => {
    return balances
      .filter((balance: WalletBalance) => {
        const balancePriority = getPriority(balance.blockchain);
        return balancePriority > -99 && balance.amount > 0;
      })
      .sort((lhs: WalletBalance, rhs: WalletBalance) => {
        const leftPriority = getPriority(lhs.blockchain);
        const rightPriority = getPriority(rhs.blockchain);
        if (leftPriority > rightPriority) {
          return -1;
        } else if (rightPriority > leftPriority) {
          return 1;
        }
        return 0;
      });
  }, [balances]);

  const formattedBalances: FormattedWalletBalance[] = sortedBalances.map(
    (balance: WalletBalance) => {
      return {
        ...balance,
        formatted: balance.amount.toFixed(),
      };
    }
  );

  const rows = formattedBalances.map(
    (balance: FormattedWalletBalance, index: number) => {
      const priceObj = prices.find(
        (price) => price.currency === balance.currency
      );
      const usdValue = (priceObj ? priceObj.price : 0) * balance.amount;

      return (
        <WalletRow
          key={index}
          currency={priceObj?.currency || ""}
          amount={balance.amount}
          usdValue={usdValue}
          formattedAmount={balance.formatted}
        />
      );
    }
  );

  return <div className="flex flex-col items-center gap-4 w-4/5">{rows}</div>;
};

export default WalletPage;

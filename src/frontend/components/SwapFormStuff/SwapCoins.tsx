"use client";
import { Coin } from "@/types";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TokenIcon from "../TokenIcon";

interface CoinDropdownProps {
  coins: Coin[];
  coin: Coin;
  setCoin: (coin: Coin) => void;
  setAlertOpen: (alertOpen: boolean) => void;
  defaultIndex: number;
}

const SwapCoins: React.FC<CoinDropdownProps> = ({
  coins,
  coin,
  setCoin,
  defaultIndex,
  setAlertOpen,
}) => {
  const handleValueChange = (value: string) => {
    const selectedCoin = JSON.parse(value) as Coin;
    setCoin(selectedCoin);
    setAlertOpen(false);
  };

  return (
    <Select
      defaultValue={JSON.stringify(coin) || JSON.stringify(coins[defaultIndex])}
      onValueChange={handleValueChange}
      onOpenChange={(open) => {
        if (!open) setAlertOpen(false);
      }}
    >
      <SelectTrigger className="w-full h-18 flex items-center justify-between border-none shadow-none focus:ring-0 focus:outline-none focus:border-none">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {coins.map((coin, idx) => (
          <SelectItem key={idx} value={JSON.stringify(coin)}>
            <div className="flex justify-between items-center gap-4 p-2">
              <TokenIcon token={coin.currency} size={50} />

              <div className="flex flex-col items-start">
                <div className="text-2xl font-bold text-[#193b4d]">
                  {coin.currency}
                </div>
                <div className="text-[#193b4d]">{coin.price}</div>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SwapCoins;

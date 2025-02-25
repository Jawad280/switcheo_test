import React from "react";
import TokenIcon from "../TokenIcon";

interface WalletRowProps {
  amount: number;
  usdValue: number;
  formattedAmount: string;
  currency: string;
}

const WalletRow: React.FC<WalletRowProps> = ({
  amount,
  usdValue,
  formattedAmount,
  currency,
}) => {
  return (
    <div className="flex p-4 items-center justify-between bg-[#c6e67a] rounded-lg w-full">
      <TokenIcon token={currency} size={30} />
      <div>{currency}</div>
      <div>{amount.toFixed(2)}</div>
      <div>{usdValue.toFixed(2)}</div>
      <div>{formattedAmount}</div>
    </div>
  );
};

export default WalletRow;

"use client";
import { Coin } from "@/types";
import TokenIcon from "../TokenIcon";
import React, { useEffect, useState } from "react";

interface SwapPanelProps {
  coin: Coin;
  amount: number;
  setAmount: (amount: number) => void;
  setAlertOpen: (alertOpen: boolean) => void;
}

// #193b4d, #c6e67a

const SwapPanel: React.FC<SwapPanelProps> = ({
  coin,
  amount,
  setAmount,
  setAlertOpen,
}) => {
  const [displayName, setDisplayName] = useState<string>(amount.toFixed(2));

  useEffect(() => {
    setDisplayName((amount / coin.price).toFixed(2));
  }, [amount, coin]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    var displayName = e.target.value;
    if (displayName == "") {
      displayName = "0.0";
    }
    setDisplayName(displayName);
    var newAmount = parseFloat(displayName) * coin.price;
    setAmount(newAmount);
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-[#193b4d] rounded-lg p-4">
      <div onClick={() => setAlertOpen(true)} className="hover: cursor-pointer">
        <TokenIcon token={coin.currency} size={150} />
      </div>

      <div className="flex-1 rounded-lg bg-[#193b4d]">
        <div className="flex flex-col items-center p-2">
          <div className="font-bold text-[#c6e67a] text-[18pt]">
            {coin.currency}
          </div>
          <div className="text-[12pt] text-[#c6e67a]">{coin.price}</div>
        </div>

        <div className="flex-1 bg-[#193b4d]">
          <input
            className="text-[24pt] bg-[#193b4d] font-bold text-center focus:ring-0 focus:outline-none focus:border-none text-slate-50"
            value={displayName}
            type="text"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SwapPanel;

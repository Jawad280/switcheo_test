"use client";
import { Coin } from "@/types";
import React, { useEffect, useState } from "react";
import SwapPanel from "./SwapPanel";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import SwapCoins from "./SwapCoins";

interface SwapProps {
  coins: Coin[];
}

const SwapForm: React.FC<SwapProps> = ({ coins }) => {
  const [coinA, setCoinA] = useState<Coin>(coins[0]);
  const [amountA, setAmountA] = useState<number>(0.0);
  const [alertOpenA, setAlertOpenA] = useState<boolean>(false);

  const [coinB, setCoinB] = useState<Coin>(coins[0]);
  const [amountB, setAmountB] = useState<number>(0.0);
  const [alertOpenB, setAlertOpenB] = useState<boolean>(false);

  return (
    <div className="bg-[#c6e67a] rounded-xl">
      <div className="flex flex-col items-center rounded-xl bg-[#193b4d]">
        {/* Coin A */}
        <div className="flex items-center justify-center">
          <AlertDialog open={alertOpenA}>
            <AlertDialogTrigger asChild>
              <SwapPanel
                coin={coinA}
                amount={amountA}
                setAmount={setAmountB}
                setAlertOpen={setAlertOpenA}
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle />
              <SwapCoins
                coins={coins}
                coin={coinA}
                defaultIndex={0}
                setCoin={setCoinA}
                setAlertOpen={setAlertOpenA}
              />
            </AlertDialogContent>
          </AlertDialog>

          {/* Arrow Icon */}
          <AiOutlineArrowRight size={32} color="#c6e67a" />

          {/* Coin B */}
          <AlertDialog open={alertOpenB}>
            <AlertDialogTrigger asChild>
              <SwapPanel
                coin={coinB}
                amount={amountB}
                setAmount={setAmountA}
                setAlertOpen={setAlertOpenB}
              />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogTitle />
              <SwapCoins
                coins={coins}
                coin={coinB}
                defaultIndex={1}
                setCoin={setCoinB}
                setAlertOpen={setAlertOpenB}
              />
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="p-4 flex items-center justify-center">
        <div className="bg-[#193b4d] p-6 rounded-full text-[#c6e67a] text-[18pt] w-2/5 flex justify-between items-center hover:cursor-pointer">
          <AiOutlineDoubleRight />
          <div>Transfer</div>
          <AiOutlineDoubleRight />
        </div>
      </div>
    </div>
  );
};

export default SwapForm;

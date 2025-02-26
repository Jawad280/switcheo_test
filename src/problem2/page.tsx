"use client";
import React from "react";
import ProblemHeader from "@/components/ProblemHeader";
import { GetCoinRates } from "@/lib/serverFunctions";
import Swap from "@/components/SwapFormStuff/SwapForm";

const ProblemPage2 = () => {
  const { coins, isLoading, error } = GetCoinRates();

  if (isLoading) {
    return (
      <div className="bg-slate-100 h-screen flex flex-col items-center justify-center w-full">
        <ProblemHeader problemTitle="Problem 2 - Coin Swap Form" />
        <p className="text-lg text-gray-500">Loading coin rates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-slate-100 h-screen flex flex-col items-center justify-center w-full">
        <ProblemHeader problemTitle="Problem 2 - Coin Swap Form" />
        <p className="text-lg text-red-500">
          Error fetching coin rates. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center w-full py-8">
      <ProblemHeader problemTitle="Problem 2 - Coin Swap Form" />
      {coins && <Swap coins={coins} />}
    </div>
  );
};

export default ProblemPage2;

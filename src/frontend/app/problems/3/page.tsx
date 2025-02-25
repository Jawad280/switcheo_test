import React from "react";
import ProblemHeader from "@/components/ProblemHeader";
import WalletPage from "@/components/Messy/WalletPage";

const ProblemPage3 = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center w-full py-8">
      <ProblemHeader problemTitle="Problem 3 - Messy Wallet" />
      <WalletPage />
    </div>
  );
};

export default ProblemPage3;

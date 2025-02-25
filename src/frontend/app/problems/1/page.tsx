"use client";
import ProblemHeader from "@/components/ProblemHeader";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const sampleCode = `
var sum_to_n_a = function(n) {
    // Summation formula = n(n+1)/2, O(1)
    return (n*(n+1))/2;
};

var sum_to_n_b = function(n) {
    // Recursion  -> Time complexity = O(n) Linear
    if (n == 1) {
        return n;
    }
    return n + sum_to_n_b(n-1);
};

var sum_to_n_c = function(n) {
    // Primary school methodish, O(1)
    var pairSum = n + 1;
    var pairs = Math.floor(n/2);
    
    if (n%2 == 0) {
        return pairs*pairSum;    
    }

    var middle = Math.ceil(n/2);
    return (pairs*pairSum) + middle;
};
`;

const ProblemPage1 = () => {
  return (
    <div className="bg-slate-100 h-screen flex flex-col items-center w-full py-8">
      <ProblemHeader problemTitle="Problem 1 - Number of Ways to Sum to N" />
      <div className="p-4 w-full">
        <CodeBlock
          text={sampleCode}
          language="javascript"
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </div>
  );
};

export default ProblemPage1;

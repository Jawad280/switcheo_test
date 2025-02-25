import React from "react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface ProblemHeaderProps {
  problemTitle: string;
}

const ProblemHeader: React.FC<ProblemHeaderProps> = ({ problemTitle }) => {
  return (
    <div className="w-full p-4 flex items-center">
      <Link className="flex-1" href="/">
        <AiOutlineArrowLeft size={36} color="#193b4d" />
      </Link>

      <div className="flex-2 font-bold text-4xl text-[#193b4d]">
        {problemTitle}
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default ProblemHeader;

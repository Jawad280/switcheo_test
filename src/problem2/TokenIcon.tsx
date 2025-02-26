import React from "react";
import Image from "next/image";

interface TokenIconProps {
  token: string;
  size: number;
}

const TokenIcon: React.FC<TokenIconProps> = ({ token, size }) => {
  return (
    <Image
      alt="token"
      src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token}.svg`}
      width={size}
      height={size}
    />
  );
};

export default TokenIcon;

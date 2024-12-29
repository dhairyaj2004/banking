"use client";
//we have to create this counter seperately bcz if we use it directly in TotalBalanceBox then we have to make it client side bcz this countUp uses useRef hook indirectly
import React from "react";
import CountUp from "react-countup";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div>
      <CountUp
        end={amount}
        decimal="."
        decimals={2}
        duration={0.5}
        prefix="₹"
      />
    </div>
  );
};

export default AnimatedCounter;

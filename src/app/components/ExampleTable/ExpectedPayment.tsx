import { Input } from "@nlmk/ds-2.0";
import React, { useState } from "react";

interface ExpectedPaymentProps {
  totalBet: number;
  totalWin: number;
  className: string;
}

export const ExpectedPayment = ({
  totalBet,
  totalWin,
  className,
}: ExpectedPaymentProps) => {
  const [rtp, setRtp] = useState("");
  const expectedPayment = totalBet * Number(rtp);
  return (
    <div className={`${className}`}>
      <p>Ожидаемая выплата = </p>
      <p>{totalBet} * </p>
      <Input
        label="RTP "
        value={rtp}
        onChange={(e) => setRtp(e.target.value)}
      />
      <br></br>
      <p> = {expectedPayment}</p>
      <p>Потенциал = </p>
      <p>
        {" "}
        {expectedPayment} - {totalWin}{" "}
      </p>
      <p>= {expectedPayment - totalWin} </p>
    </div>
  );
};

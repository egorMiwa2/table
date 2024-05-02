import { object, string, number, date, InferType } from "yup";

export const tableSchema = object({
  playerCount: number().required().positive().integer(),
  totalBet: number().required().positive(),
  totalWin: number().required().positive(),
  betsCount: number().required().positive(),
});

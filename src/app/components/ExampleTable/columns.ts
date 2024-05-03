import { GridColDef } from "@mui/x-data-grid";
import styles from "./index.module.scss";

export const columns: GridColDef[] = [
  {
    field: "currency",
    headerName: "Currency",
    flex: 1,
    headerClassName: styles.headerCell1,
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1,
    headerClassName: styles.headerCell1,
    valueGetter: (value: Date) => value.toLocaleDateString("ru-RU"),
  },
  {
    field: "game",
    headerName: "Game",
    flex: 1,
    headerClassName: styles.headerCell1,
  },
  {
    field: "gameProvider",
    headerName: "Game provider",
    flex: 1,
    headerClassName: styles.headerCell1,
  },
  {
    field: "totalBet",
    headerName: "Total Bet",
    flex: 1,
    headerClassName: styles.headerCell1,
  },
  {
    field: "totalWin",
    headerName: "Total Win",
    flex: 1,
    headerClassName: styles.headerCell1,
  },
  {
    field: "betsCount",
    headerName: "Bets count",
    flex: 1,
    headerClassName: styles.headerCell1,
  },
  {
    field: "averageBet",
    headerName: "Average bet",
    flex: 1,
    valueGetter: (value: number) => value.toFixed(2),
    headerClassName: styles.headerCell1,
  },
  {
    field: "payout",
    headerName: "Payout",
    flex: 1,
    valueGetter: (value: number) => `${value.toFixed(2)}%`,
    headerClassName: styles.headerCell1,
  },
];

"use client";
import styles from "./page.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ExampleTable } from "./components/ExampleTable/Table";
import { ExampleFormDataProvider } from "./provider/DataProvider";
import { NoSSR } from "next-dynamic-no-ssr";

import { useGridApiContext } from "@mui/x-data-grid";

export default function Home() {
  return (
    <NoSSR>
    <ExampleFormDataProvider>
      <main className={styles.main}>
        <Sidebar />
        <ExampleTable />
      </main>
    </ExampleFormDataProvider>
    </NoSSR>
  );
}


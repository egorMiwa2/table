"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import {
  ExampleFormData,
  useExampleFormDataContext,
} from "@/app/provider/DataProvider";
import { IconDeleteBinOutlined32 } from "@nlmk/ds-2.0";
import { columns } from "./columns";
import { ExpectedPayment } from "./ExpectedPayment";

export const ExampleTable = () => {
  const { exampleFormData, clearExampleFormData } = useExampleFormDataContext();
  const apiRef = useGridApiRef();
  const [selectedRow, setSelectedRow] = useState<ExampleFormData | undefined>();

  return (
    <div className={styles.container}>
      <div
        style={{
          height: 400,
          width: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DataGrid
          apiRef={apiRef}
          sx={{
            backgroundColor: "#dadada",
          }}
          rows={exampleFormData.map((item, index) => ({ ...item, id: index }))}
          columns={columns}
          onRowClick={(e) => {
            setSelectedRow(e.row);
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
        />
      </div>
      <div
        className={styles.deleteIcon}
        onClick={() => {
          clearExampleFormData();
          setSelectedRow(undefined);
        }}
      >
        <IconDeleteBinOutlined32 />
      </div>
      {selectedRow && (
        <ExpectedPayment
          className={styles.calc}
          totalBet={selectedRow.totalBet as number}
          totalWin={selectedRow.totalWin as number}
        />
      )}
    </div>
  );
};

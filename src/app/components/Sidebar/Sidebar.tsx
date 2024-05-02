"use client";
import styles from "./index.module.scss";
import React, { useState } from "react";
import { Input, Button, DatePicker, Select, Box } from "@nlmk/ds-2.0";
import { Field, Formik } from "formik";
import {
  ExampleFormData,
  useExampleFormDataContext,
} from "@/app/provider/DataProvider";
import { TSelected } from "@nlmk/ds-2.0/lib/dist/components/Select/types";
import { tableSchema } from "../ExampleTable/schema";
import { currencies, gameNames, gameProviders } from "@/app/constants/index";

// Our form component
export const Sidebar = () => {
  const { updateExampleFormData } = useExampleFormDataContext();
  const [date, setDate] = useState<Date | undefined>();
  const [selectedCurrency, setSelectedCurrency] = useState<TSelected>([]);
  const [selectedGame, setSelectedGames] = useState<TSelected>([]);
  const [selectedProvider, setSelectedProvider] = useState<TSelected>([]);

  return (
    <div className={styles.container}>
      <Formik<ExampleFormData>
        initialValues={{}}
        validationSchema={tableSchema}
        validateOnMount
        onSubmit={(values, { resetForm }) => {
          updateExampleFormData({
            ...values,
            currency: selectedCurrency as string,
            game: selectedGame as string,
            gameProvider: selectedProvider as string,
            date: date,
            averageBet:
              (values.totalBet as number) / (values.betsCount as number),
            payout: (values.totalWin as number) / (values.totalBet as number),
          });
          resetForm({});
          setSelectedCurrency([]);
          setSelectedGames([]);
          setSelectedProvider([]);
          setDate(undefined);
        }}
      >
        {({
          values,
          isValid,
          errors,
          handleChange,
          handleSubmit,
          touched,
          dirty,
        }) => {
          return (
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <Select
                options={currencies}
                selected={selectedCurrency}
                onSelectionChange={setSelectedCurrency}
                label="Валюта"
              />
              <DatePicker
                name="date"
                type="date"
                value={date}
                onChange={(date) => setDate(date)}
              />
              <Select
                options={gameNames}
                selected={selectedGame}
                onSelectionChange={setSelectedGames}
                label="Игра"
                isSearchable
              />
              <Select
                options={gameProviders}
                selected={selectedProvider}
                onSelectionChange={setSelectedProvider}
                label="Провайдер"
                isSearchable
              />
              <Box className={styles.inputContainer}>
                <Field name="playerCount">
                  {/* @ts-expect-error */}
                  {({ field, meta }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          label="Количество игроков"
                          name="playerCount"
                          onChange={handleChange}
                          value={values.playerCount ?? ""}
                        />
                        {meta.touched && meta.error && (
                          <p className="error">{meta.error}</p>
                        )}
                      </>
                    );
                  }}
                </Field>
              </Box>
              <Box className={styles.inputContainer}>
                <Field name="totalBet">
                  {/* @ts-expect-error */}
                  {({ field, meta }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          type="number"
                          label="Сумма ставок"
                          name="totalBet"
                          onChange={handleChange}
                          value={values.totalBet ?? ""}
                        />
                        {meta.touched && meta.error && (
                          <p className="error">{meta.error}</p>
                        )}
                      </>
                    );
                  }}
                </Field>
              </Box>
              <Box className={styles.inputContainer}>
                <Field name="totalWin">
                  {/* @ts-expect-error */}
                  {({ field, meta }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          label="Сумма выигрышей"
                          name="totalWin"
                          onChange={handleChange}
                          value={values.totalWin ?? ""}
                        />
                        {meta.touched && meta.error && (
                          <p className="error">{meta.error}</p>
                        )}
                      </>
                    );
                  }}
                </Field>
              </Box>
              <Box className={styles.inputContainer}>
                <Field name="betsCount">
                  {/* @ts-expect-error */}
                  {({ field, meta }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          label="Количество ставок"
                          name="betsCount"
                          onChange={handleChange}
                          value={values.betsCount ?? ""}
                        />
                        {meta.touched && meta.error && (
                          <p className="error">{meta.error}</p>
                        )}
                      </>
                    );
                  }}
                </Field>
              </Box>
              <Button
                disabled={!isValid || !dirty}
                className={styles.button}
                variant="primary"
                type="submit"
              >
                Добавить
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

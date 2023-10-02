import React from "react";
import { FilterContextProvider } from "./filter-context";
import { AppRouter } from "./router";

export const App = () => {
  return (
    <FilterContextProvider>
        <AppRouter/>
    </FilterContextProvider>
  );
};

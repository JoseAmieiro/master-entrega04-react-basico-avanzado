import React from "react";
import { AppRouter, ProfileProvider } from "@/core";
import { FilterContextProvider } from "./pods/list/list.filter-context";

export const App = () => {
  return (
    <ProfileProvider>
      <FilterContextProvider>
        <AppRouter />
      </FilterContextProvider>
    </ProfileProvider>
  );
};

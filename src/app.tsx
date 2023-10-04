import React from "react";
import { AppRouter, ProfileProvider, FilterContextProvider } from "@/core";

export const App = () => {
  return (
    <ProfileProvider>
      <FilterContextProvider>
        <AppRouter />
      </FilterContextProvider>
    </ProfileProvider>
  );
};

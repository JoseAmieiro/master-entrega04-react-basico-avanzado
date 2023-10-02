import React from "react";
import { AppRouter, ProfileProvider } from "@/core";
import { FilterContextProvider } from "./filter-context";

export const App = () => {
  return (
    <ProfileProvider>
      <FilterContextProvider>
        <AppRouter/>
      </FilterContextProvider>
    </ProfileProvider>
  );
};



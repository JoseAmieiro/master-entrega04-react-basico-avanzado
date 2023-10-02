import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import {  ListScene, DetailScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
      <Router>
        <Routes>
          <Route path={switchRoutes.root} element={<Navigate to={switchRoutes.list} />} />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailScene />} />
        </Routes>
      </Router>
  );
};

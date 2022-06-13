import React, { Suspense } from "react";
import { routes } from "../../routes";
import { Route, Routes, useLocation } from "react-router-dom";

export const Router = () => {
  const location = useLocation();

  return (
    <Routes>
      {routes.map(({ name, component: Component, path }) => (
        <Route key={name} path={path} element={<Component />} />
      ))}
      <Route
        key="notFoundPage"
        path={location.pathname}
        element={
          <Suspense fallback={null}>
            <section className="m-containter">
              <h1 className="color-fff">This page does not exist</h1>
            </section>
          </Suspense>
        }
      />
    </Routes>
  );
};

import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
const body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Login />
      <Browse />
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default body;

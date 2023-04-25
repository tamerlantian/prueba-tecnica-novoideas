import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Login, DashboardLayout } from "./pages";
import { Chat, Home } from "./components";

// routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route path="inicio" element={<Home />} />
        <Route path="chat" element={<Chat />} />
      </Route>
      <Route path="/logout" element={<div>Logout</div>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

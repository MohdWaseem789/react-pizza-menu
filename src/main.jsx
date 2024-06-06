import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "about",
//         element: <h1>About</h1>,
//       },
//       {
//         path: "contact",
//         element: <h1>Contact</h1>,
//       },
//       {
//         path: "service",
//         element: <h1>Service</h1>,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/about" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/service" element={<h1>service</h1>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

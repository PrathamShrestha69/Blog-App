import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link, Route } from "react-router";
import PostListPage from "./routes/PostListPage.jsx";
import Write from "./routes/Write.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
import MainLayouts from "./layouts/MainLayouts.jsx";
import Homepage from "./routes/Homepage.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <MainLayouts />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "/:slug", element: <SinglePostPage /> },
      { path: "/write", element: <Write /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import FriendProvider from "./context/FriendProvider";
import { Suspense } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner text-info"></span>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </FriendProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import "./index.css";
import "./styles/base.css"
import { Toaster } from "sonner";

const qc = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={qc}>
      <div className="font-ubuntu antialiased">
        <Toaster position="top-center" />
        <RouterProvider router={router} />
      </div>

    </QueryClientProvider>
  </StrictMode>
);

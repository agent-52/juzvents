// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";
import "./index.css";
import { Buffer } from 'buffer'
window.Buffer = window.Buffer || Buffer

const router = createBrowserRouter(routes);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,       // 5 minutes
      cacheTime: 1000 * 60 * 30,      // 30 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,          // do not refetch on mount if cached
      refetchOnReconnect: false,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);

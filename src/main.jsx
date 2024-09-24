import * as ReactDOM from "react-dom/client";
import {RouterProvider } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import "./index.css";
import { router } from "./routes/router";

const queryClient = new QueryClient();
Aos.init();
ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
  </QueryClientProvider>
);
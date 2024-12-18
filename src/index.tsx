//Recoil, React-query 등의 최상위 Provider 관리

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </RecoilRoot>
        </BrowserRouter>
    </React.StrictMode>
);

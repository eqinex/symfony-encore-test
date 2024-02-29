import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { ProductionPage } from "@/pages/ProductionPage";
import { ArmaturePage } from "@/pages/ArmaturePage";
import { Suspense } from "react";

/**
 * Маршрутизация страниц.
 */
export const createAppRouter = () => {
    return createBrowserRouter([
        {
            path: "/v3",
            element: <App />,
            children: [
                {
                    path: "",
                    element: <Suspense fallback={'Loading...'}><ProductionPage /></Suspense>,
                },
                {
                    path: "armature",
                    element: <Suspense fallback={'Loading...'}><ArmaturePage /></Suspense>,
                },
            ],
        },
    ]);
};

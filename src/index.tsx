import { createRoot } from 'react-dom/client';
import { App } from './App';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

import '@/assets/styles/app.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Production } from "@/pages/production";
import { Suspense } from "react";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const rootContainer = createRoot(root);

const router = createBrowserRouter([
    {
        path: "/v3",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to="production" />,
            },
            {
                path: "production",
                element: <Suspense fallback={'Loading...'}><Production /></Suspense>,
            },
        ],
    },
]);

rootContainer.render(
    <RouterProvider router={router} />
);

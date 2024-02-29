import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createAppRouter } from "@/routing/router";

import "@/assets/styles/index.scss";
import theme from "@/assets/styles/themes/theme";

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const rootContainer = createRoot(root);

const router = createAppRouter();

/**
 * Рендер корневого контейнера приложения.
 */
rootContainer.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
);

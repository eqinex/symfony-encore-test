import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "@/app/styles/index.scss";
import theme from "@/app/styles/themes/theme";
import { Provider } from "react-redux";
import AppRouter from "@/app/providers/router/AppRouter";
import { store } from "@/app/providers/StoreProvider";

const root = document.getElementById('root');

if (!root) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать React приложение.'
    );
}

const rootContainer = createRoot(root);

/**
 * Рендер корневого контейнера приложения.
 */
rootContainer.render(
    <BrowserRouter basename="/">
        <Provider store={store} >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppRouter />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

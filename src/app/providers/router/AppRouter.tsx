import {
    memo,
    Suspense,
    useCallback,
} from "react";
import {
    Route,
    RouteProps,
    Routes,
} from "react-router";
import { App } from "@/App";
import { routeConfig } from "./routeConfig";

/**
 * Маршрутизация страниц.
 */
const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={'Loading...'}>{route.element}</Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            <Route element={<App />}>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Route>
        </Routes>
    );
}

export default memo(AppRouter);

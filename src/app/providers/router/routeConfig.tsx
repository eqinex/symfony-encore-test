import { ProductionPage } from "@/pages/ProductionPage";
import { ArmaturePage } from "@/pages/ArmaturePage";
import {
    AppRoutes,
    getRouteArmature,
    getRouteMain,
} from "@/shared/const/router";

/**
 * Конфигурация маршрутизации страниц.
 */
export const routeConfig = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <ProductionPage />,
    },
    [AppRoutes.ARMATURE]: {
        path: getRouteArmature(),
        element: <ArmaturePage />,
    },
};

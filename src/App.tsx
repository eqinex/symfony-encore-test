import React from "react";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Outlet } from "react-router";

/**
 * Главный компонент приложения.
 */
export const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

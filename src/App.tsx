import React from "react";
import { Header } from "@/layouts/Header/Header";
import { Footer } from "@/layouts/Footer/Footer";
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

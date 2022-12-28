import React from "react";

// Routes
const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ImpactPage = React.lazy(() => import("../pages/ImpactPage"));

const routes = [
    // Home Page:
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/impact", element: <ImpactPage /> },
];

export default routes;

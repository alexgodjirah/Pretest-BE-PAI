import React from "react";

// Routes
const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));

const routes = [
    // Home Page:
    { path: "/", element: <HomePage /> },
    { path: "/About", element: <AboutPage /> },
];

export default routes;

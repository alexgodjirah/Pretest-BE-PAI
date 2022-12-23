import React from "react";

// Routes
const HomePage = React.lazy(() => import("../pages/HomePage"));

const routes = [
    // Home Page:
    { path: "/", element: <HomePage /> },
];

export default routes;

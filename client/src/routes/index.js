import React from "react";

// Routes
const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ImpactPage = React.lazy(() => import("../pages/ImpactPage"));
const SectorsPage = React.lazy(() => import("../pages/SectorsPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage"));
const CareerPage = React.lazy(() => import("../pages/CareerPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));

const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/impact", element: <ImpactPage /> },
    { path: "/sectors", element: <SectorsPage /> },
    { path: "/blog", element: <BlogPage /> },
    { path: "/career", element: <CareerPage /> },
    { path: "/contact", element: <ContactPage /> },
];

export default routes;

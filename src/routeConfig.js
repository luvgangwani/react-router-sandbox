import React from 'react';
import TestReactRoute from "./components/TestReactRoute";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";

export const routes = [
    {
        exact: true,
        path: "/",
        render: () => <Home content="This is the home page" />
    },
    {
        exact: true,
        path: "/about-us",
        render: () => <AboutUs content="This is the about us page" />
    },
    {
        exact: true,
        path: "/testing-react-router",
        render: () => <TestReactRoute content="This is the test react router page" />
    },
    {
        exact: true,
        path: "/contact-us",
        render: () => <ContactUs content="This is the contact us page" />
    },
    {
        component: NotFound
    }
]
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "./views/Layout.tsx";
import { Reset } from "styled-reset";
import GlobalStyles from "./components/GlobalStyles.tsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.ts";
import lv from "./translations/lv.ts";
import { lazy } from "react";
import About from "./views/About/About.tsx";
import Blog from "./views/Blog/Blog.tsx";
import Article from "./views/Blog/Article.tsx";
import { Client, cacheExchange, fetchExchange, Provider } from "urql";
import { Helmet } from "react-helmet";

export type SupportedLanguages = "lv" | "en";

const Home = lazy(() => import("./views/Home/Home.tsx"));

const client = new Client({
  url: "https://api.tournated.com/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      lv,
    },
    supportedLngs: ["lv", "en"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      caches: ["localStorage", "cookie"],
    },
  });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/${i18n.language}`} replace />,
  },
  {
    path: "/about",
    element: <Navigate to={`/${i18n.language}/about`} replace />,
  },
  {
    path: "/blog",
    element: <Navigate to={`/${i18n.language}/blog`} replace />,
  },
  {
    path: "blog/:slug",
    element: <Navigate to={`/${i18n.language}/blog/:slug`} replace />,
  },
  {
    path: "/:lang",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/article",
        element: <Article />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider value={client}>
      <Helmet>
        <title>
          About Tournated - Our Mission, Team, and Story | Learn More About Us
        </title>
        <meta
          name="description"
          content="Discover the story behind Tournated, our mission, and the team driving our innovative sports management solutions. Learn how we help organizations streamline sports events and maintain control over their data."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://tournated.com/" />
      </Helmet>
      <Reset />
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;

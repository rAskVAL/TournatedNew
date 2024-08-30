import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  useSearchParams,
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
import { GRAPHQL_ENDPOINT } from "./graphql/graphql.ts";

export type SupportedLanguages = "lv" | "en";

const Home = lazy(() => import("./views/Home/Home.tsx"));

const client = new Client({
  url: GRAPHQL_ENDPOINT,
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

const NavigateToArticle = () => {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");

  return (
    <Navigate to={`/${i18n.language}/blog/article?slug=${slug}`} replace />
  );
};

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
    path: "blog/article",
    element: <NavigateToArticle />,
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
          Tournated - Affordable White-Label Sports Management Software | Your
          Brand, Your Data | Free tournament sofware
        </title>
        <meta
          name="description"
          content="Launch your own custom sports management platform with Tournated. Our comprehensive, white-label software empowers you to manage sports organization, leagues, tournaments, clubs, events and athletes under your brand with full control over your data. Streamline sports events effortlessly."
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FPHFRKY695"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FPHFRKY695');
          `}
        </script>
      </Helmet>
      <Reset />
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;

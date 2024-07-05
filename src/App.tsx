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

export type SupportedLanguages = "lv" | "en";

const Home = lazy(() => import("./views/Home/Home.tsx"));

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en,
      lv,
    },
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
    path: "/:lang",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};
export default App;

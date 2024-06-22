import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./views/Layout.tsx";
import { Reset } from "styled-reset";
import GlobalStyles from "./components/GlobalStyles.tsx";
import Home from "./views/Home/Home.tsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./translations/en.ts";
import lv from "./translations/lv.ts";

export type SupportedLanguages = "lv" | "en";

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
    path: "/:lang",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
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

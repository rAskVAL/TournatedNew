import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./views/Layout.tsx";
import { Reset } from "styled-reset";
import GlobalStyles from "./components/GlobalStyles.tsx";
import Home from "./views/Home/Home.tsx";

const router = createBrowserRouter([
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

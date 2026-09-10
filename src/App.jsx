import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./component/Layout";
import Home from "./page/Home/Home";
import Product from "./page/Product/Product";
import ContactUs from "./page/Contact/ContactUs";
import OurService from "./page/ourService/OurService";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "product", element: <Product /> },
      { path: "contactUs", element: <ContactUs /> },
      { path: "service", element: <OurService /> },
    ],
  },
]);

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={routers} />
      </I18nextProvider>
    </>
  );
}

export default App;

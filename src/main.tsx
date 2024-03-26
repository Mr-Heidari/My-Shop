import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./routes/Layout";
import HomePage from "./routes/Home";
import ProductPage from "./routes/Product";
import AboutPage from "./routes/AboutUs";
import ContactPage from "./routes/ContactUs";
const router = createBrowserRouter([
  {
    path: "/My-Shop",
    element: <Layout />,
    children: [
      {
        path:"/My-Shop/Home",
        index: true,
        loader: async () => {
          const x = await (
            await fetch("https://farawin.iran.liara.run/api/user")
          )
            .json()
            .then((x) => x.userList);
          console.log(x);
          return x;
        },
        element: <HomePage />,
      },
      {
        path: "/My-Shop/Products",
        loader: async () => {
          const x = await (
            await fetch("https://farawin.iran.liara.run/api/user")
          )
            .json()
            .then((x) => x.userList);
          console.log(x);
          return x;
        },
        element: <ProductPage />,
      },
      {
        path: "/My-Shop/ContactUs",
        element: <ContactPage />,
      },
      {
        path: "/My-Shop/AboutUs",
        element: <AboutPage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

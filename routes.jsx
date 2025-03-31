import App from "./src/App";
import EventsPage from "./src/Components/EventsPage";
import ErrorPage from "./src/ErrorPage";
import ProductPage from "./src/Components/ProductPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events/:name",
    element: <EventsPage />
  },
  {
    path: "/product-page/:eventName",
    element: <ProductPage />
  }
];

export default routes;
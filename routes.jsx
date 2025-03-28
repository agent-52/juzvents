import App from "./src/App";
import EventsPage from "./src/Components/EventsPage";
import ErrorPage from "./src/ErrorPage";

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
];

export default routes;
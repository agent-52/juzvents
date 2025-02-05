import App from "./src/App";
// import Profile from "./Profile";
import ErrorPage from "./src/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    // element: <Profile />,
  },
];

export default routes;
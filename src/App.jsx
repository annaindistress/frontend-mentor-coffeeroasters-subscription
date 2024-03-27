import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import { BASE_URL } from "./constants";

function App() {
  const router = createBrowserRouter(
    [
      {
        element: <AppLayout />,
        children: [
          {
            path: "/",

            element: <Home />,
          },
        ],
      },
    ],
    { basename: BASE_URL }
  );

  return <RouterProvider router={router} />;
}

export default App;

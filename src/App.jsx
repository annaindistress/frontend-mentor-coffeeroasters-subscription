import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import CreatePlan from "./pages/CreatePlan";
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
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/create-plan",
            element: <CreatePlan />,
          },
        ],
      },
    ],
    { basename: BASE_URL }
  );

  return (
    <AnimatePresence>
      <RouterProvider router={router} />
    </AnimatePresence>
  );
}

export default App;

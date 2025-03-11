import "./App.css";
import MainPage from "./pages/MainPage";
import PrivacyPage from "./pages/PrivacyPage";
import AppFooter from "./components/AppFooter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

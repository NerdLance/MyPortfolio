import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NextLandingPage from "./pages/NextLandingPage";
import LaraconPage from "./pages/LaraconPage";
import NotFoundPage from "./pages/NotFoundPage";

const NextRouteRedirect = () => {
  const { search } = useLocation();

  return <Navigate to={{ pathname: "/", search }} replace />;
};

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Routes>
        {/* HomePage remains in src/pages/HomePage.jsx for a focused rollback. */}
        <Route path="/" element={<NextLandingPage />} />
        <Route path="/next" element={<NextRouteRedirect />} />
        <Route path="/laracon" element={<LaraconPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

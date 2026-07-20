import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NextLandingPage from "./pages/NextLandingPage";
import LaraconPage from "./pages/LaraconPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/next" element={<NextLandingPage />} />
        <Route path="/laracon" element={<LaraconPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import Loader from "./components/Loader/Loader.jsx";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

const HomePage = lazy(() => import("./pages/HomePage//HomePage.jsx"));

export default function App() {
  return (
    <SharedLayout>
      <Suspense
      // fallback={<Loader />}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          limit={3}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ScrollToTop />
      </Suspense>
    </SharedLayout>
  );
}

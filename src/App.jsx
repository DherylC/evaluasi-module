import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage.jsx";
import EvaluationsPage from "./pages/EvaluationsPage";
import AllEvaluationsPage from "./pages/AllEvaluationsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FlowPage from "./pages/FlowPage.jsx";
import StorylinePage from "./pages/StorylinePage.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '9999px',
            background: '#333',
            color: '#fff',
            fontWeight: '600',
            fontSize: '14px',
          },
        }}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/evaluations" element={<EvaluationsPage />} />
          <Route path="/all-evaluations" element={<AllEvaluationsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/flow" element={<FlowPage />} />
          <Route path="/storyline" element={<StorylinePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>

    </AuthProvider>
  );
}
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import NotFoundRedirect from "./components/NotFoundRedirect";
import About from "./pages/About/About";
import Team from "./pages/Team/Team";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Schedule from "./pages/Schedule/Schedule";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

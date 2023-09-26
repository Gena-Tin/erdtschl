import { Routes, Route } from "react-router-dom";
import Schedule from "./Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import NotFoundRedirect from "./components/NotFoundRedirect";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Team from "./pages/Team/Team";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Schedule />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFoundRedirect />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

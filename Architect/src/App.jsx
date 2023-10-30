import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import "./App.css";
import Projects from "./Pages/Projects";
import Certifications from "./Pages/Certifications";
import Contacts from "./Pages/Contacts";
import LoadingPage from "./Pages/LoadingPage";
import { ThemeContext } from "./Context/Context";
import { LoadingContext } from "./Context/Context";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className={theme ? "dark" : null}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/contacts" element={<Contacts />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            ) : (
              <LoadingPage />
            )}
          </LoadingContext.Provider>
        </ThemeContext.Provider>
      </section>
    </>
  );
}

export default App;

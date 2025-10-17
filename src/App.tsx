import { Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
//import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
//import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
//import { Testimonials } from "./components/Testimonials";
import VerifyEmail from "./pages/VerifyEmail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import DataProtection from "./pages/DataProtection";
import "./App.css";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Newsletter /> 
      <About />
      <Sponsors />
      <HowItWorks />
      {/* <Features /> */}
      {/* <Services /> */}

      <Cta />
      {/* <Testimonials /> */}

      <Team />
      <Pricing />

      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/data-protection" element={<DataProtection />} />
    </Routes>
  );
}

export default App;

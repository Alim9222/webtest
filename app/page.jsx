import Header from "./components/Header";
import Hero from "./components/Hero";
import ResultSection from "./components/ResultSection";
import TypesSection from "./components/TypesSection";
import RelocationSection from "./components/RelocationSection";
import ContactSection from "./components/ContactSection";
import "./components/residencia.css";

const WHATSAPP_URL = "https://wa.me/00000000000";
const TELEGRAM_URL = "https://t.me/your_telegram";
const FORM_ENDPOINT = "";

export default function Home() {
  return (
    <>
      <Header whatsappUrl={WHATSAPP_URL} telegramUrl={TELEGRAM_URL} />
      <main id="top">
        <Hero whatsappUrl={WHATSAPP_URL} />
        <ResultSection />
        <TypesSection />
        <RelocationSection />
        <ContactSection formEndpoint={FORM_ENDPOINT} />
      </main>
    </>
  );
}

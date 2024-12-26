import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Homepage } from "./pages/homepage.tsx";
import { Movies } from "./pages/movies.tsx";
import { Contactus } from "./pages/contactus.tsx";
import { Privacy } from "@/pages/privacypolicy.tsx";
import { Movieratings } from "@/pages/movieratings.tsx";
import { Friesup } from "@/pages/fries-UPPP.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Cailloumovie } from "@/pages/cailloumovie.tsx";
import { Cftwcftl123 } from "@/pages/cftwcftl123.tsx";
import { Cftwcftl4 } from "@/pages/cftwcftl4.tsx";
import { Cftwcftl5 } from "@/pages/cftwcftl5.tsx";
import { Gabricks } from "@/pages/gabricks.tsx";
import { Goofus1 } from "@/pages/goofus1.tsx";
import { Goofus2 } from "@/pages/goofus2.tsx";
import { Jpchristmas } from "@/pages/jpchristmas.tsx";
import { Jpspooktacular } from "@/pages/jpspooktacular.tsx";
import { Jackpaul } from "@/pages/jackpaul.tsx";
import { Littlevalendies } from "@/pages/littlevalendies.tsx";
import { Nightshiftsurvival } from "@/pages/nightshiftsurvival.tsx";
import { Rosiegetsgrounded } from "@/pages/rosiegetsgrounded.tsx";
import { Comedyworld } from "@/pages/comedyworld.tsx";
import { Fourofour } from "@/pages/404.tsx";
import { Vyondcinema } from "@/pages/vyondcinema.tsx";
import { Carlosbday } from "@/pages/carlosbday.tsx";
import { Maskmas } from "@/pages/maskmas.tsx";
import { Steamboatwillie } from "@/pages/steamboatwillie.tsx";
import { Aboutus } from "@/pages/aboutus.tsx";
import { TermsOfService } from "@/pages/terms-of-service.tsx";
import { Mathwarfare } from "@/pages/mathwarfare.tsx";
import { Unhappy } from "@/pages/unhappy.tsx";
import { AnimatePresence } from "motion/react";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { Veyshalmovie } from "@/pages/veyshalmovie.tsx";

function SidebarContent() {
  const { state } = useSidebar();

  return (
    <>
      <AppSidebar />
      <div
        className="fixed left-6 top-6 z-50 lg:left-[calc(var(--sidebar-width)+1rem)] lg:data-[state=collapsed]:left-6 lg:top-6 transition-all duration-200 ease-linear"
        data-state={state}
      >
        <SidebarTrigger />
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  const sidebarPaths = [
    "/Movies",
    "/Caillou-the-movie",
    "/Cftwcftl-the-movie-123",
    "/Cftwcftl-the-movie-4",
    "/Cftwcftl-the-movie-5",
    "/Ga-bricks-the-movie",
    "/Goofus-and-Doofus-1",
    "/Goofus-and-Doofus-2",
    "/Its-Jack-Paul-Christmas",
    "/Jack-Paul-Spooktacular",
    "/Jack-Paul-The-Movie",
    "/Little-Bills-Valendies-Movie",
    "/Nightshift-Survival",
    "/Rosie-Gets-Grounded-The-Movie",
    "/The-Comedy-World-Movie",
    "/The-Vyond-Cinema-Movie",
    "/Carlos-Birthday-Gone-Wrong",
    "/Maskmas",
    "/Steamboat-Willie",
    "/Math-Warfare",
    "/Unhappy-25-Years-Little-Brat",
    "/Veyshal-The-Movie",
  ];

  const shouldShowSidebar = sidebarPaths.includes(location.pathname);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        {shouldShowSidebar && <SidebarContent />}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Fourofour />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Contact-Us" element={<Contactus />} />
            <Route path="/Movie-ratings" element={<Movieratings />} />
            <Route path="/Privacy-policy" element={<Privacy />} />
            <Route path="/Terms-Of-Service" element={<TermsOfService />} />
            <Route path="/Fries-UP" element={<Friesup />} />
            <Route path="/About-Us" element={<Aboutus />} />
            <Route path="/Caillou-the-movie" element={<Cailloumovie />} />
            <Route path="/Cftwcftl-the-movie-123" element={<Cftwcftl123 />} />
            <Route path="/Cftwcftl-the-movie-4" element={<Cftwcftl4 />} />
            <Route path="/Cftwcftl-the-movie-5" element={<Cftwcftl5 />} />
            <Route path="/Ga-bricks-the-movie" element={<Gabricks />} />
            <Route path="/Goofus-and-Doofus-1" element={<Goofus1 />} />
            <Route path="/Goofus-and-Doofus-2" element={<Goofus2 />} />
            <Route path="/Its-Jack-Paul-Christmas" element={<Jpchristmas />} />
            <Route path="/Jack-Paul-Spooktacular" element={<Jpspooktacular />} />
            <Route path="/Jack-Paul-The-Movie" element={<Jackpaul />} />
            <Route path="/Little-Bills-Valendies-Movie" element={<Littlevalendies />} />
            <Route path="/Nightshift-Survival" element={<Nightshiftsurvival />} />
            <Route path="/Rosie-Gets-Grounded-The-Movie" element={<Rosiegetsgrounded />} />
            <Route path="/The-Comedy-World-Movie" element={<Comedyworld />} />
            <Route path="/The-Vyond-Cinema-Movie" element={<Vyondcinema />} />
            <Route path="/Carlos-Birthday-Gone-Wrong" element={<Carlosbday />} />
            <Route path="/Maskmas" element={<Maskmas />} />
            <Route path="/Steamboat-Willie" element={<Steamboatwillie />} />
            <Route path="/Math-Warfare" element={<Mathwarfare />} />
            <Route path="/Veyshal-The-Movie" element={<Veyshalmovie />} />
            <Route path="/Unhappy-25-Years-Little-Brat" element={<Unhappy />} />
          </Routes>
        </AnimatePresence>
      </SidebarProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

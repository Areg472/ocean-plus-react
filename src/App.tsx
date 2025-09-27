import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Homepage } from "./pages/homepage.tsx";
import { Movies } from "./pages/movies.tsx";
import { Contactus } from "./pages/contactus.tsx";
import { Privacy } from "@/pages/privacypolicy.tsx";
import { Movieratings } from "@/pages/movieratings.tsx";
import { Friesup } from "@/pages/fries-UPPP.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { Fourofour } from "@/pages/404.tsx";
import { Aboutus } from "@/pages/aboutus.tsx";
import { TermsOfService } from "@/pages/terms-of-service.tsx";
import { AnimatePresence } from "motion/react";
import {
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar.tsx";
import { movieComponents } from "@/pages/MoviePages.tsx";
import { shortComponents } from "@/pages/ShortPages.tsx";
import { movies } from "@/data/movies.ts";
import { shorts } from "@/data/shorts.ts";

function SidebarContent() {
  const { state } = useSidebar();

  return (
    <>
      <AppSidebar />
      <div
        className="fixed top-6 left-6 z-50 transition-all duration-200 ease-linear lg:top-6 lg:left-[calc(var(--sidebar-width)+1rem)] lg:data-[state=collapsed]:left-6"
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
    ...movies.map((movie) => movie.url),
    ...shorts.map((short) => short.url),
  ];

  const isValidPath = (path: string): boolean => {
    return sidebarPaths.some((p) => p.toLowerCase() === path.toLowerCase());
  };

  const shouldShowSidebar = isValidPath(location.pathname);

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
            
            {movies.map((movie) => {
              const Component = movieComponents[movie.functionName];
              return (
                <Route
                  key={movie.id}
                  path={movie.url}
                  element={<Component />}
                />
              );
            })}
            
            {shorts.map((short) => {
              const Component = shortComponents[short.functionName];
              return (
                <Route
                  key={short.id}
                  path={short.url}
                  element={<Component />}
                />
              );
            })}
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

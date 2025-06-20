import {
  Home,
  TvMinimalPlay,
  Film,
  SquareUser,
  MessageSquareCode,
  SquareActivity,
  ShieldEllipsis,
  Video,
  Clapperboard,
  SquareCode,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRef } from "react";
import { Link } from "react-router-dom";

const originals = [
  {
    title: "The Random Green Blah Blah Thing",
    url: "/The-Random-Green-Blah-Blah-Thing",
    icon: Star,
  },
];

const items = [
  {
    title: "Caillou The Movie",
    url: "/Caillou-the-movie",
    icon: TvMinimalPlay,
  },
  {
    title: "CFTWCFTL The Movie 1-3",
    url: "/Cftwcftl-the-movie-123",
    icon: TvMinimalPlay,
  },
  {
    title: "CFTWCFTL The Movie 4",
    url: "/Cftwcftl-the-movie-4",
    icon: TvMinimalPlay,
  },
  {
    title: "CFTWCFTL The Movie 5",
    url: "/Cftwcftl-the-movie-5",
    icon: TvMinimalPlay,
  },
  {
    title: "GA Bricks The Movie",
    url: "/Ga-bricks-the-movie",
    icon: TvMinimalPlay,
  },
  {
    title: "Goofus & Doofus",
    url: "/Goofus-and-Doofus-1",
    icon: TvMinimalPlay,
  },
  {
    title: "Goofus & Doofus 2",
    url: "/Goofus-and-Doofus-2",
    icon: TvMinimalPlay,
  },
  {
    title: "It's Jack Paul Christmas",
    url: "/Its-Jack-Paul-Christmas",
    icon: TvMinimalPlay,
  },
  {
    title: "Jack Paul Spooktacular",
    url: "/Jack-Paul-Spooktacular",
    icon: TvMinimalPlay,
  },
  {
    title: "Jack Paul The Movie",
    url: "/Jack-Paul-The-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "Little Bill's Valendies Movie",
    url: "/Little-Bills-Valendies-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "Math Warfare",
    url: "/Math-Warfare",
    icon: TvMinimalPlay,
  },
  {
    title: "Nightshift Survival",
    url: "/Nightshift-Survival",
    icon: TvMinimalPlay,
  },
  {
    title: "Rosie Gets Grounded Movie",
    url: "/Rosie-Gets-Grounded-The-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "The Comedy World Movie",
    url: "/The-Comedy-World-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "The Horrid James Movie",
    url: "/The-Horrid-James-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "The Surfs And The Peasants",
    url: "/The-Surfs-and-the-Peasants",
    icon: TvMinimalPlay,
  },
  {
    title: "The Vyond Cinema Movie",
    url: "/The-Vyond-Cinema-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "The Veyshal Movie",
    url: "/The-Veyshal-Movie",
    icon: TvMinimalPlay,
  },
  {
    title: "Unhappy 25 Years Little Brat",
    url: "/Unhappy-25-Years-Little-Brat",
    icon: TvMinimalPlay,
  },
];

const header = [
  {
    title: "Homepage",
    url: "/",
    icon: Home,
  },
  {
    title: "Movies",
    url: "/Movies",
    icon: Film,
  },
  {
    title: "Contact Us",
    url: "/Contact-Us",
    icon: SquareUser,
  },
  {
    title: "About Us",
    url: "/About-Us",
    icon: SquareCode,
  },
];

const footer = [
  {
    title: "Discord",
    url: "https://oceanbluestream.com/discord/",
    icon: MessageSquareCode,
  },

  {
    title: "Status Page",
    url: "https://status.oceanbluestream.com/",
    icon: SquareActivity,
  },

  {
    title: "BetterStack",
    url: "https://uptime.betterstack.com",
    icon: ShieldEllipsis,
  },

  {
    title: "Ocean Blue Pictures",
    url: "https://link.oceanbluestream.com/oceanbluepictures",
    icon: Video,
  },
];

const shorts = [
  {
    title: "Carlos Birthday Gone Wrong",
    url: "/Carlos-Birthday-Gone-Wrong",
    icon: Clapperboard,
  },
  {
    title: "Maskmas",
    url: "/Maskmas",
    icon: Clapperboard,
  },
  {
    title: "New Turkey Eve",
    url: "/New-Turkey-Eve",
    icon: Clapperboard,
  },
  {
    title: "Steamboat Willie",
    url: "/Steamboat-Willie",
    icon: Clapperboard,
  },
];

export function AppSidebar() {
  const scrollRef = useRef(null);
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          {header.map((header) => (
            <motion.div whileHover={{ scale: 1.05 }}>
              <SidebarMenuItem key={header.title}>
                <SidebarMenuButton asChild>
                  <Link to={header.url}>
                    <header.icon />
                    <span>{header.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ))}
        </SidebarMenu>
        <SidebarGroupLabel>The Content</SidebarGroupLabel>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>O+ Originals</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {originals.map((originals) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{
                    root: scrollRef,
                    margin: "40px 0px 0px 0px",
                    once: true,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SidebarMenuItem key={originals.title}>
                    <SidebarMenuButton asChild>
                      <Link to={originals.url}>
                        <originals.icon />
                        <span>{originals.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Movies</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{
                    root: scrollRef,
                    margin: "40px 0px 0px 0px",
                    once: true,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Shorts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {shorts.map((shorts) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, transition: { duration: 1 } }}
                  viewport={{
                    root: scrollRef,
                    margin: "40px 0px 0px 0px",
                    once: true,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <SidebarMenuItem key={shorts.title}>
                    <SidebarMenuButton asChild>
                      <Link to={shorts.url}>
                        <shorts.icon />
                        <span>{shorts.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroupLabel>Footer</SidebarGroupLabel>
        <SidebarMenu>
          {footer.map((footer) => (
            <motion.div whileHover={{ scale: 1.05 }}>
              <SidebarMenuItem key={footer.title}>
                <SidebarMenuButton asChild>
                  <a href={footer.url}>
                    <footer.icon />
                    <span>{footer.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

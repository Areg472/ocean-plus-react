import {Home, TvMinimalPlay, Film, SquareUser, MessageSquareCode, SquareActivity, ShieldEllipsis, Video, Clapperboard} from "lucide-react"

import {
    Sidebar,
    SidebarContent, SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

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
        url: "Its-Jack-Paul-Christmas",
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
        title: "The Vyond Cinema Movie",
        url: "#",
        icon: TvMinimalPlay,
    },
]

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
    }
]

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
        title: "Ocean Blue Studios",
        url: "https://www.youtube.com/@RosieBrosEntertainment",
        icon: Video,
    }
]

const shorts = [
    {
        title: "Carlos Birthday Gone Wrong",
        url: "#",
        icon: Clapperboard,
    },
    {
        title: "Maskmas",
        url: "#",
        icon: Clapperboard,
    },
    {
        title: "Steamboat Willie",
        url: "#",
        icon: Clapperboard,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarGroupLabel>
                    Navigation
                </SidebarGroupLabel>
                <SidebarMenu>
                    {header.map((header) => (
                        <SidebarMenuItem key={header.title}>
                            <SidebarMenuButton asChild>
                                <a href={header.url}>
                                    <header.icon />
                                    <span>{header.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                <SidebarGroupLabel>Movies & Shorts</SidebarGroupLabel>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Movies</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Shorts</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {shorts.map((shorts) => (
                                <SidebarMenuItem key={shorts.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={shorts.url}>
                                            <shorts.icon />
                                            <span>{shorts.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroupLabel>
                    Footer
                </SidebarGroupLabel>
                <SidebarMenu>
                    {footer.map((footer) => (
                        <SidebarMenuItem key={footer.title}>
                            <SidebarMenuButton asChild>
                                <a href={footer.url}>
                                    <footer.icon />
                                    <span>{footer.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

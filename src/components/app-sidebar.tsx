import {Home, TvMinimalPlay, Film, SquareUser, MessageSquareCode, SquareActivity, ShieldEllipsis, Video} from "lucide-react"

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

// Menu items.
const items = [
    {
        title: "Caillou The Movie",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "CFTWCFTL The Movie 1-3",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "CFTWCFTL The Movie 4",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "CFTWCFTL The Movie 5",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "GA Bricks The Movie",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "Goofus & Doofus",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "Goofus & Doofus 2",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "It's Jack Paul Christmas",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "Jack Paul Spooktacular",
        url: "#",
        icon: TvMinimalPlay,
    },
    {
        title: "Jack Paul The Movie",
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
                <SidebarGroupLabel>Movies</SidebarGroupLabel>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
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

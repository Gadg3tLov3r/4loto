"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Clover,
  Command,
  Diamond,
  DollarSign,
  Flag,
  Frame,
  GalleryVerticalEnd,
  Gift,
  GitBranch,
  Headphones,
  HelpCircle,
  Map,
  PieChart,
  Settings,
  Settings2,
  SquareTerminal,
  User,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { title } from "process";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "All games",
      url: "#",
      icon: Clover,
      isActive: false,
      items: [
        {
          title: "5-minute Draws",
          url: "#",
        },
        {
          title: "Hourly Draws",
          url: "#",
        },
        {
          title: "Daily Draws",
          url: "#",
        },
        {
          title: "Weekly Draws",
          url: "#",
        },
        {
          title: "Special lotteries",
          url: "#",
        },
        {
          title: "Scratch Cards",
          url: "#",
        },
        {
          title: "Spins",
          url: "#",
        },
        {
          title: "Results",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Bonuses",
      url: "#",
      icon: Gift,
    },
    {
      name: "VIP Club",
      url: "#",
      icon: Diamond,
    },
    {
      name: "Affiliate",
      url: "#",
      icon: GitBranch,
    },
  ],
  profile: [
    {
      name: "My Profile",
      url: "#",
      icon: User,
    },
    {
      name: "My Wallet",
      url: "#",
      icon: Wallet,
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
  help: [
    {
      name: "FAQ",
      url: "#",
      icon: HelpCircle,
    },
    {
      name: "Support",
      url: "#",
      icon: Headphones,
    },
  ],
  dropdowns: [
    {
      title: "English",
      url: "#",
      icon: Flag,
      isActive: false,
      items: [
        {
          title: "French",
          url: "#",
        },
        {
          title: "Spanish",
          url: "#",
        },
        {
          title: "German",
          url: "#",
        },
        {
          title: "Italian",
          url: "#",
        },
        {
          title: "Portuguese",
          url: "#",
        },
      ],
    },
    {
      title: "USD",
      url: "#",
      icon: DollarSign,
      isActive: false,
      items: [
        {
          title: "PKR",
          url: "#",
        },
        {
          title: "INR",
          url: "#",
        },
        {
          title: "EUR",
          url: "#",
        },
        {
          title: "GBP",
          url: "#",
        },
        {
          title: "CAD",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center">
                  <Image src="/4logo.png" alt="4loto" width="38" height="47" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-bold uppercase">Loto</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavProjects projects={data.profile} />
        <NavMain items={data.dropdowns} />
        <NavProjects projects={data.help} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}

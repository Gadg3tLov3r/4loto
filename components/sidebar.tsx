"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  FileText,
  TrendingUp,
  Activity,
  LineChart,
  FileBarChart,
  Download,
  ChevronDown,
  Calendar,
  Clock,
  Ticket,
  Clover,
  BadgeDollarSign,
} from "lucide-react";
import { useLayout } from "@/contexts/layout-context";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  subItems?: { id: string; label: string; icon: React.ElementType }[];
}

const menuItemsOne: MenuItem[] = [
  {
    id: "all-games",
    label: "All Games",
    icon: BadgeDollarSign,
    subItems: [
      { id: "5-minute-draws", label: "5-minute draws", icon: Clover },
      { id: "hourly-draws", label: "Hourly draws", icon: Clock },
      { id: "daily-draws", label: "Daily draws", icon: Calendar },
      { id: "weekly-draws", label: "Weekly draws", icon: Calendar },
      { id: "special-lotteries", label: "Special lotteries", icon: Calendar },
      { id: "scratch-cards", label: "Scratch Cards", icon: Ticket },
      { id: "spins", label: "Spins", icon: Calendar },
    ],
  },
];

const menuItemsTwo: MenuItem[] = [
  {
    id: "bonuses",
    label: "Bonuses",
    icon: LayoutDashboard,
  },
  {
    id: "vip-club",
    label: "VIP Club",
    icon: BarChart3,
  },
  {
    id: "affiliate",
    label: "Affiliate",
    icon: FileText,
  },
];

export function Sidebar() {
  const { isSidebarCollapsed, isMobileSidebarOpen, closeMobileSidebar } =
    useLayout();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState("dashboard");

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (window.innerWidth < 768) {
      closeMobileSidebar();
    }
  };

  const sidebarWidth = isSidebarCollapsed ? "w-20" : "w-64";

  return (
    <>
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-16 left-0 bottom-0 bg-[#0D063A] transition-all duration-300 z-40
          ${sidebarWidth}
          md:translate-x-0
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:block
        `}
      >
        <nav className="h-full overflow-y-auto py-4 px-2 space-y-2">
          <ul className="space-y-1 px-2 bg-[#231968] rounded-[16px]">
            {menuItemsOne.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              const isActive = activeItem === item.id;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (hasSubItems && !isSidebarCollapsed) {
                        toggleExpanded(item.id);
                      } else {
                        handleItemClick(item.id);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-[#231968] text-white"
                          : "text-white hover:bg-[#231968]"
                      }
                      ${isSidebarCollapsed ? "justify-center" : ""}
                    `}
                    title={isSidebarCollapsed ? item.label : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isSidebarCollapsed && (
                      <>
                        <span className="flex-1 text-left text-sm font-medium text-nowrap">
                          {item.label}
                        </span>
                        {hasSubItems && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </>
                    )}
                  </button>

                  {hasSubItems && isExpanded && !isSidebarCollapsed && (
                    <ul className="mt-1 space-y-1">
                      {item.subItems!.map((subItem) => {
                        const SubIcon = subItem.icon;
                        const isSubActive = activeItem === subItem.id;

                        return (
                          <li key={subItem.id}>
                            <button
                              onClick={() => handleItemClick(subItem.id)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm
                                ${
                                  isSubActive
                                    ? "bg-[#231968] text-white"
                                    : "text-white hover:bg-[#231968]"
                                }
                              `}
                            >
                              <SubIcon className="w-4 h-4 flex-shrink-0" />
                              <span className="flex-1 text-left text-nowrap">
                                {subItem.label}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <ul className="space-y-1 px-2 bg-[#231968] rounded-[16px]">
            {menuItemsTwo.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedItems.includes(item.id);
              const isActive = activeItem === item.id;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (hasSubItems && !isSidebarCollapsed) {
                        toggleExpanded(item.id);
                      } else {
                        handleItemClick(item.id);
                      }
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-[#231968] text-white"
                          : "text-white hover:bg-[#231968]"
                      }
                      ${isSidebarCollapsed ? "justify-center" : ""}
                    `}
                    title={isSidebarCollapsed ? item.label : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!isSidebarCollapsed && (
                      <>
                        <span className="flex-1 text-left text-sm font-medium text-nowrap">
                          {item.label}
                        </span>
                        {hasSubItems && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </>
                    )}
                  </button>

                  {hasSubItems && isExpanded && !isSidebarCollapsed && (
                    <ul className="mt-1 space-y-1">
                      {item.subItems!.map((subItem) => {
                        const SubIcon = subItem.icon;
                        const isSubActive = activeItem === subItem.id;

                        return (
                          <li key={subItem.id}>
                            <button
                              onClick={() => handleItemClick(subItem.id)}
                              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm
                                ${
                                  isSubActive
                                    ? "bg-[#231968] text-white"
                                    : "text-white hover:bg-[#231968]"
                                }
                              `}
                            >
                              <SubIcon className="w-4 h-4 flex-shrink-0" />
                              <span className="flex-1 text-left text-nowrap">
                                {subItem.label}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

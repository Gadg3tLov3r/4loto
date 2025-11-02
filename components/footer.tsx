"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

// Icon mapping for social media
const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
};

// Types for API response
interface FooterItem {
  id: number;
  column: string;
  title: string;
  slug: string;
  content: string;
  rank: number;
  is_active: boolean;
}

interface FooterData {
  [column: string]: FooterItem[];
}

// Extract URL and text from HTML content
const extractLinkFromContent = (
  content: string
): { url: string; text: string } | null => {
  const linkMatch = content.match(
    /<a\s+[^>]*href=['"]([^'"]+)['"][^>]*>(.*?)<\/a>/i
  );
  if (linkMatch) {
    return {
      url: linkMatch[1],
      text: linkMatch[2].replace(/<[^>]*>/g, "").trim() || linkMatch[1],
    };
  }
  return null;
};

// Extract plain text from HTML
const extractTextFromHTML = (html: string): string => {
  return html.replace(/<[^>]*>/g, "").trim();
};

// Determine if a column contains social media links
const isSocialMediaColumn = (column: string): boolean => {
  return (
    column.toLowerCase().includes("follow") || column.toLowerCase() === "social"
  );
};

export function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await fetch(
          "https://gateway.l0l0bo.com/api/v1/cmsblocks/footercontent"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch footer data");
        }
        const data: FooterData = await response.json();
        setFooterData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching footer data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  if (loading) {
    return (
      <footer className="bg-[#19172C] text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">Loading footer...</div>
        </div>
      </footer>
    );
  }

  if (error || !footerData) {
    return (
      <footer className="bg-[#19172C] text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            {error || "Unable to load footer content"}
          </div>
        </div>
      </footer>
    );
  }

  // Get all columns sorted by their appearance order
  const columns = Object.keys(footerData);
  const socialMediaColumns: string[] = [];
  const regularColumns: string[] = [];

  columns.forEach((column) => {
    if (isSocialMediaColumn(column)) {
      socialMediaColumns.push(column);
    } else {
      regularColumns.push(column);
    }
  });

  // Sort items by rank within each column
  const getSortedItems = (items: FooterItem[]) => {
    return items
      .filter((item) => item.is_active)
      .sort((a, b) => a.rank - b.rank);
  };

  const totalColumns =
    regularColumns.length + (socialMediaColumns.length > 0 ? 1 : 0);
  const gridColsClass =
    totalColumns === 1
      ? "lg:grid-cols-1"
      : totalColumns === 2
      ? "lg:grid-cols-2"
      : totalColumns === 3
      ? "lg:grid-cols-3"
      : totalColumns === 4
      ? "lg:grid-cols-4"
      : "lg:grid-cols-5";

  return (
    <footer className="bg-[#19172C] text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${gridColsClass} gap-8`}
        >
          {/* Regular Columns */}
          {regularColumns.map((column) => {
            const items = getSortedItems(footerData[column]);
            if (items.length === 0) return null;

            return (
              <div key={column}>
                <h3 className="text-lg font-semibold mb-4 uppercase">
                  {column}
                </h3>
                <ul className="space-y-2">
                  {items.map((item) => {
                    const link = extractLinkFromContent(item.content);
                    const url = link?.url || `/${item.slug}`;
                    const text = link?.text || item.title;

                    return (
                      <li key={item.id}>
                        {link ? (
                          link.url.startsWith("http") ||
                          link.url.startsWith("mailto:") ? (
                            <a
                              href={url}
                              target={
                                link.url.startsWith("http")
                                  ? "_blank"
                                  : undefined
                              }
                              rel={
                                link.url.startsWith("http")
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-gray-300 hover:text-white transition-colors"
                            >
                              {text}
                            </a>
                          ) : (
                            <Link
                              href={url}
                              className="text-gray-300 hover:text-white transition-colors"
                            >
                              {text}
                            </Link>
                          )
                        ) : (
                          <Link
                            href={url}
                            className="text-gray-300 hover:text-white transition-colors"
                          >
                            {text}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}

          {/* Social Media Column */}
          {socialMediaColumns.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 uppercase">
                {socialMediaColumns[0]}
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialMediaColumns.flatMap((column) =>
                  getSortedItems(footerData[column]).map((item) => {
                    const link = extractLinkFromContent(item.content);
                    if (!link) return null;

                    const platformName = item.title;
                    const IconComponent = iconMap[platformName] || Facebook;
                    const isExternal = link.url.startsWith("http");
                    const colorClasses: Record<string, string> = {
                      Facebook: "bg-blue-600 hover:bg-blue-700",
                      Twitter: "bg-sky-500 hover:bg-sky-600",
                      Instagram: "bg-pink-600 hover:bg-pink-700",
                      Youtube: "bg-red-600 hover:bg-red-700",
                      Linkedin: "bg-blue-700 hover:bg-blue-800",
                    };

                    return (
                      <a
                        key={item.id}
                        href={link.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className={`p-2 ${
                          colorClasses[platformName] ||
                          "bg-gray-600 hover:bg-gray-700"
                        } rounded transition-colors`}
                        aria-label={platformName}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })
                )}
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Stay connected for the latest updates, promotions, and winner
                announcements!
              </p>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 4Loto. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center md:justify-end">
              {/* Add common bottom links if needed from Legal column */}
              {footerData["Legal"] && (
                <>
                  {getSortedItems(footerData["Legal"])
                    .slice(0, 3)
                    .map((item) => {
                      const link = extractLinkFromContent(item.content);
                      const url = link?.url || `/${item.slug}`;
                      const text = link?.text || item.title;

                      return (
                        <Link
                          key={item.id}
                          href={url}
                          className="hover:text-white transition-colors"
                        >
                          {text}
                        </Link>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

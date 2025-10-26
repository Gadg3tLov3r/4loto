"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import footerData from "@/data/footer-links.json";

// Icon mapping for social media
const iconMap = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
};

export function Footer() {
  return (
    <footer className="bg-[#19172C] text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Our Lotteries Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              {footerData.ourLotteries.title}
            </h3>
            <ul className="space-y-2">
              {footerData.ourLotteries.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              {footerData.supportLegal.title}
            </h3>
            <ul className="space-y-2">
              {footerData.supportLegal.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              {footerData.aboutUs.title}
            </h3>
            <ul className="space-y-2">
              {footerData.aboutUs.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Promo Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              {footerData.promo.title}
            </h3>
            <ul className="space-y-2">
              {footerData.promo.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 uppercase">
              {footerData.socialMedia.title}
            </h3>
            <div className="flex space-x-4">
              {footerData.socialMedia.platforms.map((platform, index) => {
                const IconComponent =
                  iconMap[platform.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 ${platform.color} rounded transition-colors`}
                    aria-label={platform.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-gray-400 mt-4">
              {footerData.socialMedia.description}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              {footerData.copyright}
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              {footerData.bottomLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

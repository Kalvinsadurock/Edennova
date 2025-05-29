import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Zap, Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    {
      label: "Industries",
      items: [
        { href: "/industries/automotive", label: "Automotive" },
        { href: "/industries/aerospace", label: "Aerospace & Defense" },
        { href: "/industries/oil-gas", label: "Oil & Gas" },
      ],
    },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-emerald rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-navy-900">Edennova</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) =>
                  item.items ? (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuTrigger className="text-slate-600 hover:text-navy-900">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-4 w-48">
                          {item.items.map((subItem) => (
                            <NavigationMenuLink key={subItem.href} asChild>
                              <Link
                                href={subItem.href}
                                className="block px-3 py-2 text-slate-600 hover:text-navy-900 hover:bg-slate-50 rounded-md transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className={`text-slate-600 hover:text-navy-900 transition-colors px-3 py-2 ${
                            location === item.href ? "text-navy-900 font-medium" : ""
                          }`}
                        >
                          {item.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-accent-cyan text-navy-900 hover:bg-accent-emerald animate-pulse-glow font-medium">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) =>
                    item.items ? (
                      <div key={item.label} className="space-y-2">
                        <div className="font-medium text-navy-900 px-3 py-2">
                          {item.label}
                        </div>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-slate-600 hover:text-navy-900 px-6 py-2 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-slate-600 hover:text-navy-900 transition-colors px-3 py-2 ${
                          location === item.href ? "text-navy-900 font-medium" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                  <Link href="/contact" className="mt-4">
                    <Button className="w-full bg-accent-cyan text-navy-900 hover:bg-accent-emerald">
                      Request Demo
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

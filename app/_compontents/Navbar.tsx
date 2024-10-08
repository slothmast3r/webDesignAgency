"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/services", label: "Usługi" },
  { href: "/about", label: "O nas" },
];

function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <header className="p-5 m-auto max-w-[72rem] flex justify-between">
      <div>Ezytra</div>
      <NavigationMenu className="">
        {isDesktop ? (
          <NavigationMenuList>
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        ) : (
          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon />
            </DrawerTrigger>
            <DrawerContent className="flex flex-col">
              <div>Ezytra</div>
              <NavigationMenuList className="flex flex-col justify-start items-start h-fit">
                {navigationLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <Button className="w-fit">
                <Link href="/contact" passHref>
                  Darmowa konstultacja
                </Link>
              </Button>
            </DrawerContent>
          </Drawer>
        )}
      </NavigationMenu>
      {isDesktop && (
        <Button>
          <Link href="/contact" passHref>
            Darmowa konstultacja
          </Link>
        </Button>
      )}
    </header>
  );
}

export default Navbar;

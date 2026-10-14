import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface NavBarProps {
  location: ReturnType<typeof useLocation>;
}

interface NavItem {
  label: string;
  path: string;
}

export const NavBar = ({ location }: NavBarProps) => {

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "Users", path: "/users" },
    { label: "Birthday Countdown", path: "/birthdayCountdown" },
  ];

  return (
    <Flex gap={4} p={4} bg="gray.100" alignItems="center">
      {navItems.map((item) => (
        <ChakraLink asChild className={location.pathname === item.path ? "nav-link active-link" : ""} key={item.path}>
          <RouterLink to={item.path}>{item.label}</RouterLink>
        </ChakraLink>
      ))}
    </Flex>
  )
}

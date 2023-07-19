import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import ToolsMenu from "./ToolsMenu";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ToolsMenu />
    </HStack>
  );
};

export default NavBar;

import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

const ToolsMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<BsPerson />}>
        Profile
      </MenuButton>
      <MenuList>
        <MenuGroup title="Profile">
          <Link to={"/account/" + "1"}>
            <MenuItem>My Account</MenuItem>
          </Link>
          <Link to="/plans">
            <MenuItem>Plans </MenuItem>
          </Link>
        </MenuGroup>

        <MenuDivider />
        <MenuGroup title="Misc">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <Box paddingX={3}>
          <ColorModeSwitch />
        </Box>
      </MenuList>
    </Menu>
  );
};

export default ToolsMenu;

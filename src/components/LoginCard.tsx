import {
  Button,
  CloseButton,
  HStack,
  Heading,
  Input,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginCard = () => {
  const [menu, setMenu] = useState(true);

  return (
    menu && (
      <>
        <HStack justifyContent="space-evenly">
          <Heading fontSize="2xl">Login</Heading>
          <CloseButton onClick={() => setMenu(false)} />
        </HStack>
        <VStack marginY={4} spacing={4}>
          <form>
            <InputGroup>
              <Input
                width="171px"
                borderRadius={5}
                placeholder="Login"
                variant="outline"
              />
            </InputGroup>
            <InputGroup>
              <Input
                width="171px"
                borderRadius={5}
                placeholder="Password"
                variant="outline"
              />
            </InputGroup>
          </form>
        </VStack>
        <HStack
          justifyContent="left
      "
        >
          <Link to="/login">
            <Button size="md">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" size="md">
              Sign Up
            </Button>
          </Link>
        </HStack>
      </>
    )
  );
};

export default LoginCard;

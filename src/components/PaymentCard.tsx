import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  description: ReactNode;
  price: number;
  name: string;
  isActive: true | false;
  //   description: string;
  button_fn: () => void;
}

const PaymentCard = ({
  button_fn,
  isActive,
  price,
  name,
  description,
}: Props) => {
  return (
    <Card
      borderColor={"gray.500"}
      borderWidth={isActive ? 3 : 0}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <CardHeader>
        <Heading paddingY={3} size="xl">
          {price}$/mo
        </Heading>
        <Heading color={"gray.300"} size="md">
          {name}
        </Heading>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter>
        <Button onClick={button_fn} colorScheme={isActive ? "green" : "gray"}>
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;

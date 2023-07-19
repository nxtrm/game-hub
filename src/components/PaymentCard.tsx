import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  description: ReactNode;
  price: number;
  name: string;
  //   description: string;
  //   button_fn: Function;
}

const PaymentCard = ({ price, name, description }: Props) => {
  return (
    <Card
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
        <Button>Subscribe</Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;

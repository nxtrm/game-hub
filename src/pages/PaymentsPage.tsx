import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  position,
} from "@chakra-ui/react";
import PaymentCard from "../components/PaymentCard";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import FeatureItem from "../components/FeatureItem";

const PaymentsPage = () => {
  return (
    <>
      <Heading
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
        }}
        marginY={5}
        fontSize={"6xl"}
      >
        Plans
      </Heading>
      <SimpleGrid
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <PaymentCard
          // button_fn={() => setState(false)}
          description={
            <List spacing={3}>
              <FeatureItem isPositive={true} feature="Game Discovery" />
              <FeatureItem isPositive={true} feature="Game Reviews" />
              <FeatureItem isPositive={false} feature="Play Games" />
              <FeatureItem isPositive={false} feature="Item drops" />
              <FeatureItem isPositive={false} feature="Premium Games" />
            </List>
          }
          price={0}
          name="Free"
        />

        <Card
          _hover={{
            transform: "scale(1.03)",
            transition: "transform .15s ease-in",
          }}
          scale={"110%"}
          borderColor={"gray.500"}
          borderWidth={3}
        >
          <CardHeader>
            <Heading paddingY={3} size="xl">
              5$/mo
            </Heading>
            <Heading color={"gray.300"} size="md">
              Basics
            </Heading>
          </CardHeader>
          <CardBody>
            <List spacing={3}>
              <FeatureItem isPositive={true} feature="Full Game Access" />
              <FeatureItem isPositive={true} feature="Item drops" />
              <FeatureItem isPositive={false} feature="Analytics" />
              <FeatureItem isPositive={false} feature="Premium Games" />
              <FeatureItem isPositive={false} feature="Coaching" />
            </List>
          </CardBody>
          <CardFooter>
            <Button colorScheme="green">Subscribe</Button>
          </CardFooter>
        </Card>

        <PaymentCard
          // button_fn={() => setState(false)}
          description={
            <List spacing={3}>
              <FeatureItem isPositive={true} feature="Full Game Access" />
              <FeatureItem isPositive={true} feature="Item drops" />
              <FeatureItem isPositive={true} feature="Analytics" />
              <FeatureItem isPositive={true} feature="Premium Games" />
              <FeatureItem isPositive={true} feature="Coaching" />
            </List>
          }
          price={20}
          name="Premium"
        />
      </SimpleGrid>
    </>
  );
};

export default PaymentsPage;

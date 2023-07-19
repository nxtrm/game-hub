import { Heading, List, SimpleGrid } from "@chakra-ui/react";
import FeatureItem from "../components/FeatureItem";
import PaymentCard from "../components/PaymentCard";
import { Navigate } from "react-router-dom";

const PlansPage = () => {
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
        spacing={7}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <PaymentCard
          button_fn={() => console.log("free")}
          isActive={false}
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
        <PaymentCard
          button_fn={() => console.log("basics")}
          isActive={true}
          // button_fn={() => setState(false)}
          description={
            <List spacing={3}>
              <FeatureItem isPositive={true} feature="Full Game Access" />
              <FeatureItem isPositive={true} feature="Item drops" />
              <FeatureItem isPositive={false} feature="Analytics" />
              <FeatureItem isPositive={false} feature="Premium Games" />
              <FeatureItem isPositive={false} feature="Coaching" />
            </List>
          }
          price={5}
          name="Basics"
        />

        <PaymentCard
          button_fn={() => console.log("premium")}
          isActive={false}
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

export default PlansPage;

import { ListItem, ListIcon, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
  isPositive: true | false;
  feature: string;
}

const FeatureItem = ({ isPositive, feature }: Props) => {
  if (isPositive)
    return (
      <ListItem>
        <HStack>
          <ListIcon boxSize={5} as={AiOutlinePlus} color="green.100" />
          <Text>{feature}</Text>
        </HStack>
      </ListItem>
    );

  return (
    <ListItem>
      <HStack>
        <ListIcon boxSize={5} as={AiOutlineMinus} color="gray.600" />
        <Text color={"gray.600"}>{feature}</Text>
      </HStack>
    </ListItem>
  );
};

export default FeatureItem;

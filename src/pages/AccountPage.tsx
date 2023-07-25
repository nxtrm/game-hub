import {
  Image,
  Heading,
  HStack,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const username = "nextrem";
const userID = "1";
const pfpURL =
  "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwww.asiamediajournal.com%2Fwp-content%2Fuploads%2F2022%2F10%2FDog-Cool-PFP-300x300.jpg&sp=1690275611T043351653ce34e19fde3982b68fa4917f7dee28546f0800077e7bb112c0a9e1b";

const AccountPage = () => {
  return (
    <>
      <HStack>
        <Image
          borderRadius="full"
          boxSize="100px"
          src={pfpURL}
          alt={username}
        />
        <Heading paddingX={30}>{username}</Heading>
      </HStack>
      <Tabs colorScheme="white">
        <TabList>
          <Tab fontSize={"1xl"}>Overview</Tab>
          <Tab fontSize={"1xl"}>Statistics</Tab>
          <Tab fontSize={"1xl"}>Account Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>add overview element</p>
          </TabPanel>
          <TabPanel>
            <p>add statistics element</p>
          </TabPanel>
          <TabPanel>
            <p>add settings emelment</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default AccountPage;

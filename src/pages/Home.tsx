import { Button, Flex } from "@chakra-ui/react";

import worldBackground from "./../images/world.svg";

const Home = () => {
  return (
    <Flex
      w="full"
      pr='100px'
      alignItems="center"
      justifyContent="flex-end"
      bgImage={`url(${worldBackground})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Button>Show continents</Button>
    </Flex>
  );
};

export default Home;

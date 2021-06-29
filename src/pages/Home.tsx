import { Button, Flex } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import worldBackground from "./../images/world.svg";

const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/continents");
  }
  return (
    <Flex
      w="full"
      h='100vh'
      pr='100px'
      alignItems="center"
      justifyContent="flex-end"
      bgImage={`url(${worldBackground})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Button onClick={() => handleClick()}>Show continents</Button>
    </Flex>
  );
};

export default Home;

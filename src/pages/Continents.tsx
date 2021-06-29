import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import { GET_CONTINENTS } from "./../queries";
import { IContinentsData } from "../interfaces/IContinent";
import worldBackground from "./../images/world.svg";

const Continents = () => {
  const { loading, error, data } = useQuery<IContinentsData>(GET_CONTINENTS);
  const history = useHistory();

  const redirectToHomepage = () => {
    history.push("/");
  };

  const redirectToCountries = (code) => {
    history.push(`/continents/${code}`);
  };

  return (
    <Flex
      flexDirection="column"
      bgImage={`url(${worldBackground})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      alignItems="flex-end"
      p="100px"
      justifyContent="space-between"
      color="white"
    >
      <Heading>Continents</Heading>
      {loading && <Text color="white">Loading...</Text>}
      {error && <Text color="white">Error ;(</Text>}
      {data &&
        data.continents.map(({ code, name }) => (
          <Flex
            key={code}
            flexDirection="column"
            flexDir="row"
            cursor="pointer"
            onClick={() => redirectToCountries(code)}
          >
            <Text fontWeight="bold">{code}:</Text>
            <Text ml="10px">{name}</Text>
          </Flex>
        ))}
      <Button w="200px" color="black" onClick={() => redirectToHomepage()}>
        Back to homepage
      </Button>
    </Flex>
  );
};

export default Continents;

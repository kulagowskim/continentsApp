import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { ICountriesData } from "../interfaces/ICountry";
import { GET_COUNTRIES } from "../queries";
import worldBackground from "./../images/world.svg";

const Country = (props) => {
  const { loading, error, data } = useQuery<ICountriesData>(GET_COUNTRIES, {
    variables: { code: props.match.params.code },
  });
  const history = useHistory();

  const redirectToHomepage = () => {
    history.push("/");
  };

  const redirectToContinents = () => {
    history.push("/continents");
  };

  return (
    <Flex
      bgImage={`url(${worldBackground})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
      alignItems="flex-end"
      p="100px"
      justifyContent="flex-end"
      color="white"
      overflow="hidden"
      flexDirection="column"
    >
      {loading && <Text color="white">Loading...</Text>}
      {error && <Text color="white">Error ;(</Text>}
      <Flex height="100%" flexDirection="column" overflow="auto" mb="20px">
        {data &&
          React.Children.toArray(
            data?.countries.map((country, i) => (
              <Grid
                p="10px"
                gridTemplateColumns="1fr 30px 100px"
                gap="25px"
                bg={i % 2 === 0 ? "rgba(256, 256, 256, 0.1)" : ""}
              >
                <Text>{country.name}</Text>
                <Text>{country.emoji}</Text>
                <Text>{country.languages[0]?.name}</Text>
              </Grid>
            ))
          )}
      </Flex>
      <Grid gridTemplateColumns="1fr 1fr" color="black">
        <Button w="200px" mr="15px" onClick={() => redirectToHomepage()}>
          Back to homepage
        </Button>
        <Button w="200px" onClick={() => redirectToContinents()}>
          Back to continents
        </Button>
      </Grid>
    </Flex>
  );
};

export default Country;

import { Flex } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";

import { GET_CONTINENTS } from "./../queries";

const Continents = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.continents.map(({ code, name }) => (
    <Flex key={code} flexDirection='column'>
      <p>
        {code}: {name}
      </p>
    </Flex>
  ));
};

export default Continents;

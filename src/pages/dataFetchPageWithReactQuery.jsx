import { Code, Spinner, Heading, Center, Alert } from "@chakra-ui/react";

import React from "react";
import { useQuery } from "react-query";

const DataFetchPageWithReactQuery = () => {
  const dataUrl = "https://jsonplaceholder.typicode.com/users";
  const { isPending, error, data } = useQuery({
    queryFn: () => fetch(dataUrl).then((res) => res.json()),
  });
  if (isPending) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Alert.Root status="error">
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>Unable to Fetch Data</Alert.Title>
          <Alert.Description>
            There was an error fetching the data. Please try again later.
          </Alert.Description>
        </Alert.Content>
      </Alert.Root>
    );
  }

  return (
    <div>
      {data && (
        <>
          <Heading size="md">Fetched Data:</Heading>
          <Center>
            <Code w="80%" m="auto">
              {JSON.stringify(data, null, 2)}
            </Code>
          </Center>
        </>
      )}
    </div>
  );
};

export default DataFetchPageWithReactQuery;

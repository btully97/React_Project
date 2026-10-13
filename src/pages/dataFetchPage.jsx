import { Code, Spinner, Heading, Center, Alert } from "@chakra-ui/react";

import React, { useEffect } from "react";

const DataFetchPage = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const dataUrl = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let parsedData = await response.json();
        setData(parsedData);
        setLoading(false);
      } catch (e) {
        setError(e);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
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

export default DataFetchPage;

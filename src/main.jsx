import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
ReactDOM.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);

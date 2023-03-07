import { QueryClient, QueryClientProvider } from "react-query";

// Create a client and set delay 1 hour
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * (60 * 1000), // 5 mins
      cacheTime: 60 * (60 * 1000), // 10 mins
    },
  },
});

function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
export default ReactQueryProvider;

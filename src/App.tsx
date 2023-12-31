import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from "react-query";
import "./App.css";
import MainLayout from "./layout";
import Bycecles from "./pages/bycecles";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const queryClient = new QueryClient();
  const { reset } = useQueryErrorResetBoundary();
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            Error Occured!
            <button onClick={() => resetErrorBoundary()}>Try again!</button>
          </div>
        )}
      >
        <MainLayout>
          <Bycecles />
        </MainLayout>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;

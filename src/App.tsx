import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/VisualFeedbacks";
import LandingPage from "./pages/LandingPage";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Routes>
          <Route path={routes.landing} element={<LandingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;

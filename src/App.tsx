import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./components/VisualFeedbacks";
import LandingPage from "./pages/LandingPage";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <MantineProvider>
        <Notifications />
        <ModalsProvider>
          <Routes>
            <Route path={routes.landing} element={<LandingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>{" "}
        </ModalsProvider>
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;

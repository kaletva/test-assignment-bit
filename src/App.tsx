import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, DarkTheme } from "@/shared/Global";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { MyOrganization } from "./pages/MyOrganization";

function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MyOrganization />} />
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;

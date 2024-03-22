import React, { useEffect } from "react";
import { Container, Stack, Typography } from "@mui/material";
import "./css/App.css";
import { animateSplitText } from "./gsap.js";
import text from "./css/text.css";

function App() {
  useEffect(() => {
    animateSplitText();
  }, []);

  return (
    <div className="App">
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          style={{
            overflow: "hidden",
            paddingTop: "20px",
          }}
        >
          <Typography>
            <h1 className="title">Welcome to our GSAP website</h1>
          </Typography>
        </Stack>
      </Container>
    </div>
  );
}

export default App;

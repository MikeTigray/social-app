import React from "react";
import Form from "./Form";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

function Login() {
  const theme = useTheme();
  const isMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography color="primary" fontWeight="bold" fontSize="32px">
          Friends
        </Typography>
      </Box>

      <Box
        width={isMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          The one where you get together
        </Typography>

        <Form />
      </Box>
    </Box>
  );
}

export default Login;

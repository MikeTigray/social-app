import { Box, useMediaQuery } from "@mui/material";
import Navbar from "pages/Navbar/Navbar";
import React from "react";
import UserWidget from "pages/Widgets/UserWidget";
import MyPostWidget from "pages/Widgets/MyPostWidget";
import { useSelector } from "react-redux";
function Home() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, pictuePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />

      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={pictuePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget></MyPostWidget>
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </Box>
  );
}

export default Home;

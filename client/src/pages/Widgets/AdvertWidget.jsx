import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/arsenal.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Arsenal F.C</Typography>
        <Typography color={medium}>Skysports.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        The Premier League title race is about to get real for Arsenal. For the
        first time since Arsene Wenger's "Invincibles" won the club's last title
        in 2003-04, Arsenal feel like a team that can go all the way and take
        the trophy to the Emirates.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;

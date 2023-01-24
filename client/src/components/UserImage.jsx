import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "50%",
          height: "100%",
        }}
        src={`http://localhost:3001/assets/${image}`}
        alt="user"
      />
    </Box>
  );
};

export default UserImage;

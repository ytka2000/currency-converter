import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";

const Error = ({ error = "Error: something went wrong!" }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: "500" }}
        variant="h2"
        align="center"
        color="primary.dark"
        gutterBottom
      >
        Oops!
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        An Error Occurred.
      </Typography>
      <Typography variant="p" align="center" gutterBottom>
        {error}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tooltip title="Refresh page" followCursor sx={{ mt: 5 }}>
          <IconButton color="primary" onClick={handleRefresh}>
            <RefreshIcon sx={{ height: "100px", width: "100px" }} />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Error;

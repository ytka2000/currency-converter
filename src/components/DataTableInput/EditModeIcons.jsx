import Tooltip from "@mui/material/Tooltip";
import InputAdornment from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const InputIcon = ({ onClick, title, children }) => {
  return (
    <InputAdornment
      position="end"
      color="primary"
      sx={{ ml: "5px", height: "10px", width: "10px" }}
      onClick={onClick}
    >
      <Tooltip title={title}>{children}</Tooltip>
    </InputAdornment>
  );
};

const EditModeIcons = ({ showSaveIcon, onSave, onCancel }) => {
  return (
    <>
      {showSaveIcon ? (
        <InputIcon onClick={onSave} title="Save">
          <CheckCircleIcon sx={{ height: "20px", width: "20px" }} />
        </InputIcon>
      ) : null}
      <InputIcon onClick={onCancel} title="Cancel">
        <CancelIcon sx={{ height: "20px", width: "20px" }} />
      </InputIcon>
    </>
  );
};

export default EditModeIcons;

import { useRef, useState } from "react";
import useNumberInput from "../../hooks/useNumberInput";

import TableCell from "@mui/material/TableCell";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Input from "@mui/material/Input";

import EditModeIcons from "./EditModeIcons";

const DataTableCell = ({
  initialValue,
  globalEditMode,
  setGlobalEditMode,
  setRate,
}) => {
  const cellValue = useRef(Number(initialValue).toFixed(2));
  const [value, setValue, { onBlur }] = useNumberInput(cellValue.current);

  const [showEditIcon, setShowEditIcon] = useState(false);
  const [showSaveIcon, setShowSaveIcon] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
    setGlobalEditMode(true);
    setShowSaveIcon(true);
    setShowEditIcon(false);
  };

  const handleSaveClick = () => {
    cellValue.current = value;
    setRate(+value);
    setEditMode(false);
    setGlobalEditMode(false);
  };

  const handleCancelClick = () => {
    setValue(cellValue.current);
    setEditMode(false);
    setGlobalEditMode(false);
  };

  const handleChange = (e) => {
    const newValue = +e.target.value;

    if (newValue > initialValue * 1.1 || newValue < initialValue * 0.9) {
      setShowSaveIcon(false);
    } else {
      setShowSaveIcon(true);
    }

    setValue(e.target.value);
  };

  return (
    <>
      <TableCell
        align="right"
        sx={{
          fontSize: 18,
          position: "relative",
          pr: "24px",
          height: "50px",
        }}
        onMouseEnter={() => setShowEditIcon(!editMode)}
        onMouseLeave={() => setShowEditIcon(false)}
      >
        <Tooltip title={initialValue}>
          {editMode ? (
            <Input
              value={value}
              onChange={handleChange}
              onBlur={onBlur}
              sx={{ width: "160px", fontSize: 18 }}
              endAdornment={
                <EditModeIcons
                  showSaveIcon={showSaveIcon}
                  onSave={handleSaveClick}
                  onCancel={handleCancelClick}
                />
              }
            />
          ) : (
            cellValue.current
          )}
        </Tooltip>
        {showEditIcon && !globalEditMode ? (
          <Tooltip title="Edit">
            <IconButton
              color="primary"
              sx={{ position: "absolute", top: 10, right: 0 }}
              onClick={handleEditClick}
            >
              <EditIcon sx={{ height: "15px", width: "15px" }} />
            </IconButton>
          </Tooltip>
        ) : null}
      </TableCell>
    </>
  );
};

export default DataTableCell;

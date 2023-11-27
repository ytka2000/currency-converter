import { useState } from "react";
import { useStore } from "../../store";
import { getCurrenciesData } from "../../store/selectors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import DataTableInput from "../DataTableInput";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.body,
    color: theme.palette.primary.dark,
    fontWeight: 700,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const DataTable = () => {
  const data = useStore(getCurrenciesData);
  const setRateByName = useStore((state) => state.setRateByName);

  const [globalEditMode, setGlobalEditMode] = useState(false);

  const matches = useMediaQuery("(max-width:1100px)");

  return (
    <Paper sx={{ width: matches ? "100%" : "75%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 390 }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Currency Pair</StyledTableCell>
              <StyledTableCell align="right">Buy</StyledTableCell>
              <StyledTableCell align="right">Sell</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ ccy, base_ccy: baseCcy, buy, sale }) => (
              <TableRow
                key={ccy}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.dark",
                  }}
                >{`${ccy}/${baseCcy}`}</StyledTableCell>
                <DataTableInput
                  defaultValue={buy}
                  globalEditMode={globalEditMode}
                  setGlobalEditMode={setGlobalEditMode}
                  setRate={(value) =>
                    setRateByName({
                      ccy,
                      baseCcy,
                      operation: "buy",
                      amount: value,
                    })
                  }
                />
                <DataTableInput
                  defaultValue={sale}
                  globalEditMode={globalEditMode}
                  setGlobalEditMode={setGlobalEditMode}
                  setRate={(value) =>
                    setRateByName({
                      ccy,
                      baseCcy,
                      operation: "sell",
                      amount: 1 / value,
                    })
                  }
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;

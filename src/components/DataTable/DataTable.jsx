import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(ccy, base_ccy, buy, sale) {
  return { ccy, base_ccy, buy, sale };
}

const rows = [
  createData("PLZ", "UAH", "8.65850", "8.65850"),
  createData("SEK", "UAH", "3.31180", "3.31180"),
];

const DataTable = () => {
  return (
    <Paper sx={{ width: "75%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 430 }}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Buy</TableCell>
              <TableCell>Sell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ccy}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.ccy}</TableCell>
                <TableCell>{row.buy}</TableCell>
                <TableCell>{row.sale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;

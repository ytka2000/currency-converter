import { useEffect, useState } from "react";
import { useStore } from "../../store";
import {
  getCurrenciesData,
  getCurrenciesList,
  getRatesbyBase,
} from "../../store/selectors";
import { convert } from "../../utils";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

import ConverterItem from "../ConverterItem";

const Converter = () => {
  const currenciesList = useStore(getCurrenciesList);
  const currenciesData = useStore(getCurrenciesData);
  const ratesByBase = useStore(getRatesbyBase);

  const [currentPair, setCurrentPair] = useState();

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery("(max-width:1100px)");

  useEffect(() => {
    if (currenciesData.length > 0 && !currentPair) {
      setCurrentPair([
        { name: currenciesData[0].ccy, value: 100 },
        {
          name: currenciesData[0].base_ccy,
          value: (currenciesData[0].buy * 100).toFixed(2),
        },
      ]);
    }
  }, [currenciesData]);

  if (!currentPair) return;

  const handleInput = (newValue, id) => {
    setCurrentPair((prevPair) => {
      const secondItemId = id === 0 ? 1 : 0;

      const newPair = [...prevPair];

      newPair[id].value = newValue;
      newPair[secondItemId].value = convert({
        ccy: newPair[0].name,
        base_ccy: newPair[1].name,
        amount: newPair[id].value,
        rates: ratesByBase,
      });

      return newPair;
    });
  };

  const handleSelect = (newName, id) => {
    const secondItemId = id === 0 ? 1 : 0;

    if (currentPair[secondItemId].name === newName) {
      handleSwap();
    } else {
      setCurrentPair((prevPair) => {
        const newPair = [...prevPair];

        newPair[id].name = newName;
        newPair[1].value = convert({
          ccy: newPair[0].name,
          base_ccy: newPair[1].name,
          amount: newPair[0].value,
          rates: ratesByBase,
        });

        return newPair;
      });
    }
  };

  const handleSwap = () => {
    setCurrentPair((prevPair) => {
      const ccy = prevPair[1];
      const baseCcy = prevPair[0];

      const newPair = [ccy, baseCcy];

      newPair[1].value = convert({
        ccy: ccy.name,
        base_ccy: baseCcy.name,
        amount: ccy.value,
        rates: ratesByBase,
      });

      return newPair;
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: matchesSm ? "column" : "row",
        justifyContent: "space-evenly",
        alignContent: "center",
        width: matches ? "100%" : "75%",
        gap: "5px",
      }}
    >
      <ConverterItem
        label="Change"
        id={0}
        data={currentPair[0]}
        options={currenciesList}
        onInputChange={handleInput}
        onDropdownSelect={handleSelect}
      />
      <Box display="flex" justifyContent="center">
        <IconButton color="primary" onClick={handleSwap}>
          <SwapHorizIcon sx={{ height: "45px", width: "45px" }} />
        </IconButton>
      </Box>
      <ConverterItem
        label="Get"
        id={1}
        data={currentPair[1]}
        options={currenciesList}
        onInputChange={handleInput}
        onDropdownSelect={handleSelect}
      />
    </Container>
  );
};

export default Converter;

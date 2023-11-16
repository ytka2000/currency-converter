import { useEffect } from "react";
import useSWR from "swr";

import { fetcher } from "../../utils/fetcher";

import Container from "@mui/material/Container";
import Loader from "../Loader";
import Error from "../Error";

const ENDPOINT = "https://api.privatbank.ua/p24api/pubinfo";

const Content = () => {
  const { data, error, isLoading } = useSWR(ENDPOINT, fetcher);

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {isLoading ? <Loader /> : null}
      {error ? <Error error={error.message} /> : null}
      {data ? "data" : null}
    </Container>
  );
};

export default Content;

import { useEffect, useMemo } from "react";
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

  const currentComponent = useMemo(() => {
    if (isLoading) {
      return <Loader />;
    } else if (data) {
      return "data";
    } else {
      return <Error error={error?.message} />;
    }
  }, [data, error, isLoading]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {currentComponent}
    </Container>
  );
};

export default Content;

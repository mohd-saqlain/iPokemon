import { React, useEffect, useState } from "react";
import "./styles.css";
import Head from "./head";
import Loading from "./loading";
import Cards from "./Cards";

const Home = () => {
  const [myData, setMyData] = useState(false);
  var URL = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=100";
  const fetchAPI = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setMyData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  if (myData) {
    const { data } = myData;
    return (
      <>
        <Head />
        <Cards data={data} />
      </>
    );
  } else return <Loading />;
};

export default Home;

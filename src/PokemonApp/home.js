import { React, useEffect, useState } from "react";
import "./styles.css";
import Head from "./head";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Home = () => {
  const [myData, setMyData] = useState(false);
  const dispatch = useDispatch();
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
        <section className="first">
          <div className="main">
            {data.map((curEle) => {
              const { id, name } = curEle;
              const { small } = curEle.images;
              return (
                <div className="cart-main" key={id}>
                  <figure>
                    <img src={small} alt={name} />

                    <figcaption>
                      <Link
                        to="./About"
                        onClick={() =>
                          dispatch({ type: "GETDETAILS", payLoad: curEle })
                        }
                      >
                        {name}
                      </Link>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  } else return <h1>Loading...</h1>;
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Cards = ({data}) => {
  const dispatch = useDispatch();

  return (
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
  );
};

export default Cards;

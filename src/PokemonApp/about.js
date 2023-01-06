import React from "react";
import "./styles.css";
import Head from "./head";
import { useSelector } from "react-redux";
import { setDetails } from "../reducers/myReducers";

const About = (data = { data }) => {
  const myState = useSelector((state) => {
    return state.setDetails;
  });
  console.log(myState);
  return (
    <>
      <Head />
      <section className="second">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-5 right-col text-center">
              <figure className="lg-img">
                <img src="../images/1_hires.png" alt="Pokemon-Img" />
              </figure>
            </div>
            <div className="col-12 col-lg-7 ">
              <div className="row">
                <div className="col-4 at">
                  <span>Name</span>
                </div>
                <div className="col-8 val">
                  <span>Absol G</span>
                </div>
              </div>
              <div className="border-bot"></div>

              <div className="row ">
                <div className="col-4 at">
                  <span>Level</span>
                </div>
                <div className="col-8 val">
                  <span>59</span>
                </div>
              </div>
              <div className="border-bot"></div>

              <div className="row">
                <div className="col-4 at">
                  <span>HP</span>
                </div>
                <div className="col-8 val">
                  <span>70</span>
                </div>
              </div>
              <div className="border-bot"></div>

              <div className="row">
                <div className="col-4 at">
                  <span>Attack</span>
                </div>
                <div className="col-8 val">
                  <span>Feint Attacks</span>
                  <p>
                    Choose 1 of your opponent's Pokémon. This attack does 20
                    damage to that Pokémon. This attack's damage isn't affected
                    by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any
                    other effects on that Pokémon.
                  </p>
                </div>
              </div>
              <div className="border-bot"></div>
              <div className="row">
                <div className="col-4 at">
                  <span>Damage</span>
                </div>
                <div className="col-8 val">
                  <p>
                    Choose 1 of your opponent's Pokémon. This attack does 20
                    damage to that Pokémon. This attack's damage isn't affected
                    by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any
                    other effects on that Pokémon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

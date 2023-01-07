import React from "react";
import "./styles.css";
import Head from "./head";
import { useSelector } from "react-redux";
// import { setDetails } from "../reducers/myReducers";

const About = () => {
  const myState = useSelector((state) => {
    return state.setDetails;
  });
  console.log(myState);
  const { attacks, hp, images, level, name } = myState;
  const { name: attacksName, text } = attacks[0];
  const { large } = images;
  return (
    <>
      <Head />
      <section className="second">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-5 right-col text-center">
              <figure className="lg-img">
                <img src={large} alt={name} />
              </figure>
            </div>
            <div className="col-12 col-lg-7 pt-5 ">
              <div className="row">
                <div className="col-4 at">
                  <span>Name</span>
                </div>
                <div className="col-8 val">
                  <span>{name}</span>
                </div>
              </div>
              <div className="border-bot"></div>

              <div className="row ">
                <div className="col-4 at">
                  <span>Level</span>
                </div>
                <div className="col-8 val">
                  <span>{level}</span>
                </div>
              </div>
              <div className="border-bot"></div>

              <div className="row">
                <div className="col-4 at">
                  <span>HP</span>
                </div>
                <div className="col-8 val">
                  <span>{hp}</span>
                </div>
              </div>
              <div className="border-bot"></div>

              <div className="row">
                <div className="col-4 at">
                  <span>Attack</span>
                </div>
                <div className="col-8 val">
                  <span>{attacksName}</span>
                  <p>{text} </p>
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

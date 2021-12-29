import React, { useEffect } from "react";
import "./styles.css";
// import Button from "./Component/Button";
import CustomHooks from "./Component/Hooks";
import GithubSearchHooks from "./Component/GithubSearchHooks";
import axios from "axios";

export default function App() {
  // const getUsers = () => {
  //   const config = {
  //     url: `https://country-by-name-server.herokuapp.com/country-by-alphabet`,
  //     method: "get"
  //   };
  //   return axios(config);
  // };

  // useEffect(() => {
  //   getUsers().then((res) => {
  //     console.log(res.data[0].D.countries.map((item) => item.country));
  //   });
  // }, []);

  return (
    <div className="App">
      <h1>useContext Hooks</h1>
      <br />
      <GithubSearchHooks />
    </div>
  );
}

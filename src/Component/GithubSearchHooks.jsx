import React, { useState, useEffect } from "react";
import { useFetch } from "../Hooks/CustomHooks";

export default function () {
  const [query, setQuery] = useState("");
  const { loading, data, error } = useFetch(
    `https://country-by-name-server.herokuapp.com/country-by-alphabet`
  );
  console.log(loading, data, error);
  console.log(query);
  return (
    <div>
      <h3> Search Country By Alphabet </h3>
      <input onChange={(e) => setQuery(e.target.value)} />
      <br />
      {loading && "LOADING"}
      {!loading &&
        data &&
        query &&
        data.A.countries.map((item) => (
          <div>
            <div
              style={{
                border: "1px solid gray",
                padding: "5px",
                margin: "auto",
                height: "20px",
                width: "20%",
                marginBottom: "5px",
                background: "whitesmoke"
              }}
            >
              {item.country}
            </div>
          </div>
        ))}
    </div>
  );
}

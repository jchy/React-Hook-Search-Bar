import axios from "axios";
import React, { useState, useEffect } from "react";

export function useTimeout(delay) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setReady(true), delay);

    return () => clearTimeout(timer);
  }, []);

  return ready;
}

export function useFetch(url) {
  // loading
  // data
  // error
  // let [q, setQ] = useState("A");
  // setQ(query);
  // console.log(query, "hiiiii");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data[0]);
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, [url]);

  return {
    loading,
    data,
    error
  };
}

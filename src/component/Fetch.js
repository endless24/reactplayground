import React from "react";

import { useState, useEffect } from "react";

export default function Fetch() {
  const [photo, setPhoto] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(function () {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok)
          throw new Error("Something went wrong with fetching product");
        const data = await res.json();
        setPhoto(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      {!isLoading &&
        !error &&
        photo.map((d) => (
          <div
            key={d.id}
            style={{
              display: "inline-grid",
              width: "20%",
            }}
          >
            <img key={d.id} src={d.image} alt={d.title} width={150} />
            <p>Title: {d.title}</p>
            <p>Price: {d.price}</p>
            <p>Description: {d.description}</p>
            <p>Rating: {d.rating.rate}</p>
          </div>
        ))}
      {error && <ErrorMessage message={error} />}
      {/* {isLoading ? (
        <Loading />
      ) : (
        photo.map((d) => (
          <div
            key={d.id}
            style={{
              display: "inline-grid",
              width: "20%",
            }}
          >
            <img key={d.id} src={d.image} alt={d.title} width={150} />
            <p>Title: {d.title}</p>
            <p>Price: {d.price}</p>
            <p>Description: {d.description}</p>
            <p>Rating: {d.rating.rate}</p>
          </div>
        ))
      )} */}
    </div>
  );
}

const Loading = () => {
  return (
    <p style={{ textAlign: "center", font: "bold", fontSize: "30px" }}>
      Loading...
    </p>
  );
};
const ErrorMessage = ({ message }) => {
  return (
    <p style={{ textAlign: "center", font: "bold", fontSize: "30px" }}>
      <span>🚫</span>
      {message}
    </p>
  );
};

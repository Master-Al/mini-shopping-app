import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/ViewProduct";

const Item = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="max-h-[80vh] space-x-5 space-y-10  max-w-6xl mx-auto p-2">
        {data && <Product key={data?.id} item={data} />}
      </div>
    </>
  );
};

export default Item;

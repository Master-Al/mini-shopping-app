import React from "react";
import Product from "../components/Product";
import { useState, useEffect } from "react";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${currentPage}`
    )
      .then((response) => response.json())
      .then((json) => setData(json.products))
      .catch((error) => console.error(error));
  }, [currentPage, itemsPerPage]);

  // This function changes the pagination for shopping app
  const changePager = (buttonType) => {
    switch (buttonType) {
      case "next":
        setCurrentPage(currentPage + 10);
        setLimit(limit + 10);
        break;
      case "prev":
        setCurrentPage(currentPage - 10);
        setLimit(limit - 10);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {data &&
          data.map((item) => {
            return <Product key={item.id} item={item} />;
          })}
        <div class="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
          <div class="absolute top-[100vh] right-25 h-16 w-16grid">
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3 mr-4 disabled:cursor-not-allowed"
              disabled={currentPage === 0 ? true : false}
              onClick={() => changePager("prev")}
            >
              Previuos
            </button>
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3 disabled:cursor-not-allowed"
              disabled={limit === 100 ? true : false}
              onClick={() => changePager("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

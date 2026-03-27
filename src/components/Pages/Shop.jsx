import React from "react";
import ProductData from "../../Data.json";
import { Link } from "react-router-dom";

const Shop = () => {
  const products = ProductData.Products;

  return (
    <>
      {/* Page Title */}
      <div className="w-full bg-yellow-100 py-4 px-[5%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-700 font-semibold">Shop</span>
        </div>
      </div>

      {/* Products */}
      <div className="product-wrapper px-[8%] md:px-[6%] py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Product Cards */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.slice(0, 16).map((product) => (
              <div
                key={product.Id}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer"
              >
                <p className="text-xs text-white font-bold mb-1 bg-red-600 px-3 py-2 rounded">
                  {product.Category}
                </p>

                <img
                  src={product.ProductsImage}
                  alt={product.Name}
                  className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/product/${product.Id}`)}
                />

                <h4
                  onClick={() => navigate(`/product/${product.Id}`)}
                  className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2"
                >
                  {product.Name}
                </h4>

                <div className="flex mt-5 flex-row items-center justify-between w-full">
                  {product.OldPrice ? (
                    <div className="mt-1 text-md">
                      <span className="line-through text-gray-400">
                        ${product.OldPrice}
                      </span>{" "}
                      <span className="text-red-600 font-bold">
                        ${product.Price}
                      </span>
                    </div>
                  ) : (
                    <div className="text-lg font-semibold mt-1">
                      ${product.Price}
                    </div>
                  )}

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-yellow-400 text-white rounded-full w-[45px] h-[45px] hover:bg-red-500"
                  >
                    <i className="bi bi-cart"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <div className="flex flex-col">
            <h2 className="border-b top-product pb-2 mb-4 border-yellow-200">
              Filters
            </h2>

            <h1 className="font-bold">Brands</h1>

            <ul className="mt-4 space-y-3">
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Adidas (56)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  New Balance (54)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Nike (52)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Fred Perry (45)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  The North face (35)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition=">
                <label className="flex items-center gap-2 cursor-pointer">
                  + Show More
                </label>
              </li>
            </ul>

            <h1 className="font-bold">Colors</h1>

            <ul className="mt-4 space-y-3">
              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Black (56)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Black Leather (12)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Black with red (25)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Gold (35)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition hover:translate-x-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" />
                  Spacegray (40)
                </label>
              </li>

              <li className="hover:text-yellow-500 transition=">
                <label className="flex items-center gap-2 cursor-pointer">
                  + Show More
                </label>
              </li>
            </ul>

            <h2 className="border-b top-product pb-2 mb-4 border-yellow-200 mt-10">
              Latest Products
            </h2>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 new-small-project">
              {products.slice(1, 5).map((product) => (
                <div
                  key={product.Id}
                  className="bg-white shadow-md rounded-xl p-4 flex flex-col md:flex-row items-start hover:shadow-xl transition duration-300 group border border-gray-100 cursor-pointer gap-4"
                >
                  <img
                    src={product.ProductsImage}
                    alt={product.Name}
                    className="w-4/5 h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    onClick={() => navigate(`/product/${product.Id}`)}
                  />

                  <div className="flex flex-col">
                    <h4
                      onClick={() => navigate(`/product/${product.Id}`)}
                      className="text-lg font-medium mt-3 text-yellow-800 hover:underline line-clamp-2"
                    >
                      {product.Name}
                    </h4>

                    <div className="flex mt-5 items-center justify-between w-full">
                      <div className="text-lg font-semibold mt-1">
                        {product.OldPrice ? (
                          <div className="mt-1 text-md">
                            <span className="line-through text-gray-400">
                              ${product.OldPrice}
                            </span>{" "}
                            <span className="text-red-600 font-bold">
                              ${product.Price}
                            </span>
                          </div>
                        ) : (
                          <div className="text-lg font-semibold mt-1">
                            ${product.Price}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

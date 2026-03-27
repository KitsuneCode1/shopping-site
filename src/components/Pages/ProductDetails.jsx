import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import brand1 from "../../assets/dell.png";
import brand2 from "../../assets/samsung.png";
import brand3 from "../../assets/sanyo.png";
import brand4 from "../../assets/lenovo.png";
import brand5 from "../../assets/oppo.png";
import brand6 from "../../assets/panasonic.png";
import brand7 from "../../assets/asus.png";

import ProductData from "../../Data.json";

const ProductDetails = () => {
  const { id } = useParams();
  const products = ProductData.Products;
  const navigate = useNavigate();
  const product = products.find((p) => p.Id === parseInt(id));

  if (!product)
    return (
      <div className="p-10 text-center text-xl alert alert-danger">
        Product Not Found
      </div>
    );

  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product?.Id);
    setIsWishlisted(exists);
  }, [product?.Id]);

  const handleWishlistIcon = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = wishlist.some((item) => item.Id === product.Id);

    let updatedList;
    if (exists) {
      updatedList = wishlist.filter((item) => item.Id !== product.Id);
      toast.info("Item removed from wishlist");
    } else {
      updatedList = [...wishlist, product];
      toast.success("Item added to wishlist");
    }

    localStorage.setItem("wishlistItems", JSON.stringify(updatedList));
    setIsWishlisted(!exists);
  };

  const handleAddToWishlist = (product) => {
    const cart = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = cart.some((item) => item.Id === product.Id);

    if (!exists) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("wishlistItems", JSON.stringify(updatedCart));
    }

    toast.success("✅ Item added to cart");

    setTimeout(() => {
      navigate("/wishlist");
    }, 1000);
  };

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exists = cart.some((item) => item.Id === product.Id);

    if (!exists) {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      toast.success("✅ Item added to cart");
    } else {
      toast.warning("⚠️ Item already in cart");
    }
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  if (!product) {
    return (
      <div className="p-10 text-center text-xl text-red-600">
        Product Not Found
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      {/* Page Section */}
      <div className="w-full bg-yellow-100 py-4 px-[7%] lg:px-[5%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-red-900 font-semibold">Product Details</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row item-center gap-10 px-[8%] md:px-[6%] py-20">
        <div className="w-full md:w-1/2 flex gap-6 justify-between px-[80px] py-[50px] border rounded-xl shadow-md relative">
          {/* Main Image */}
          <div
            className="relative w-[250px] h-[250px] overflow-hidden rounded-xl shadow-md border cursor-pointer"
            onMouseEnter={() => setShowZoom(true)}
            onMouseLeave={() => setShowZoom(false)}
            onMouseMove={handleMouseMove}
          >
            <img
              src={product.ProductsImage}
              alt={product.Name}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Zoomed Img Show */}
          {showZoom && (
            <div className="w-[250px] h-[250px] border overflow-hidden hidden rounded-xl shadow-md md:block relative z-20">
              <img
                src={product.ProductsImage}
                alt="Zoom"
                className="absolute w-[500px] h-[500px] object-contain pointer-event-none"
                style={{
                  left: `-${mousePosition.x * 1.2}px`,
                  top: `-${mousePosition.y * 1.2}px`,
                }}
              />
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-sm font-semibold bg-red-500 inline-block px-3 py-1 rounded text-white mb-4">
            {product.Category}
          </p>

          <h2 className="text-3xl font-bold font-bricolage text-black mb-3">
            {product.Name}
          </h2>

          <div className="text-2xl font-bold text-red-500 mb-2">
            ${product.Price}
            {product.OldPrice && (
              <span className="text-gray-400 text-lg line-through ml-3">
                ${product.OldPrice}
              </span>
            )}
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            mollitia dignissimos modi non doloribus aliquam sit explicabo autem
            ipsa, doloremque cumque nisi vel inventore quam quod debitis nemo id
            harum?
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 px-6 py-2 rounded bg-red-500 text-white hover:bg-yellow-500 transition"
            >
              Add To Cart
            </button>

            <button
              onClick={() => handleAddToWishlist(product)}
              className="mt-4 px-6 py-2 rounded bg-yellow-500 text-white hover:bg-red-500 transition"
            >
              Add To WishList
            </button>
          </div>

          <div className="my-3 bg-red-100 p-3">
            <p className="text-semibold">
              - Estimated delivery time is 14-30 days
            </p>
            <p className="text-semibold">
              - 18 months warranty at Genuine Warranty Center
            </p>
            <p className="text-semibold">
              - Use coupon to get extra $23 off (only this product)
            </p>
          </div>
        </div>
      </div>

      {/* Policies */}
      <div className="px-[8%] md:px-[6%]">
        <h2 className="font-bricolage font-bold text-3xl mb-5">
          Shipping Policy
        </h2>
        <p className="mb-3 text-md">
          At our Company, we understand the importance of timely delivery. We
          offer a variety of shipping options to suit your needs, including
          standard, expedited and express shipping. Our dedicated team works
          diligently to process and dispatch your orders promptly aiming to
          deliver them to your doorstep within the estimated timeframe.
        </p>
        <p className="mb-3 text-md">
          We strive to provide fast and reliable shipping to our customers.
          Here's everything you need to know abour our shipping process:
        </p>
        <p className="mb-1">Dispatch: Within 24 Hours.</p>
        <p className="mb-1">
          Free shipping across all products on a minimum purchase of $895.
        </p>
        <p className="mb-1">
          International delivery time 5 to 7 business days.
        </p>
        <p className="mb-1">Cash on delivery might be available</p>
        <p className="mb-1">Easy 30 days returns and exchanges</p>
        <p className="mb-1">
          Please note that delivery times are estimates and may vary depending
          on factors such as product availability, destination, and carrier
          delay
        </p>

        <h2 className="font-bricolage font-bold text-3xl mb-5 mt-10">
          Returns Policy
        </h2>
        <p className="text-md mb-5">
          We want you to be completely satisfied with your purchase from our
          website. If for anny reason
        </p>
        <p className="mb-1">
          Returned Items must be unused, undamaged, and in the same condition as
          received.
        </p>
        <p className="mb-1">
          Original tags, labels, and packaging must be intact and included with
          the returned item.
        </p>
        <p className="mb-1">
          Proof of purchase such as your order confirmation or receipt is
          required for all returns.
        </p>
      </div>

      {/* Add Review */}
      <div className="px-[8%] md:px-[6%] py-[50px]">
        <div className="px-[5%] md:px-[3%] py-[5%] md:py-[3%] border rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 font-bricolage">
            Add Review
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Rating
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                defaultValue={""}
              >
                <option value="" disabled>
                  Select rating
                </option>
                <option value="5">⭐⭐⭐⭐⭐ (5)</option>
                <option value="4">⭐⭐⭐⭐ (4)</option>
                <option value="3">⭐⭐⭐ (3)</option>
                <option value="2">⭐⭐ (2)</option>
                <option value="1">⭐ (1)</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700">
                Your Review
              </label>
              <textarea
                rows="4"
                placeholder="Enter Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-400 hover:bg-red-500 text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* Brands */}
      <div className="px-[8%] md:px-[6%] py-10">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            1399: { slidesPerView: 5 },
            1199: { slidesPerView: 5 },
            991: { slidesPerView: 4 },
            575: { slidesPerView: 3 },
            0: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand1}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand2}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand3}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand4}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand5}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand6}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-center h-20">
              <img
                src={brand7}
                className="object-contain invert-[0.3] hover:invert-[0] cursor-pointer transition"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductDetails;

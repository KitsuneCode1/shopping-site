import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="w-full bg-yellow-100 py-4 px-[5%]">
        <div className="text-lg text-gray-600 flex justify-center items-center space-x-2">
          <Link to="/" className="hover:underline text-gray-700 font-medium">
            Home
          </Link>
          <span className="text-gray-500">&nbsp; / &nbsp;</span>
          <span className="text-yellow-700 font-semibold">Contact</span>
        </div>
      </div>

      <div className="w-full bg-white text-gray-900 px-[8%] md:px-[6%] pt-20 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 item-start gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-2 text-gray-800 font-bricolage">
              Leave Us a Message
            </h2>
            <div className="w-20 h-[3px] bg-yellow-400 mb-6"></div>
            <p className="mb-8 text-base text-gray-600 leading-relaxed">
              Got a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:ouline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
                />

                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:ouline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:ouline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="border border-gray-300 rounded-xl px-5 py-3 w-full focus:ouline-none focus:ring-2 focus:ring-yellow-400 shadow-sm transition"
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">
              Our Store
            </h3>

            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

            <p className="text-sm text-gray-700 mb-6 flex items-center">
              <i className="ri-map-pin-line text-lg mr-2"></i>
              GF-5 Silver Coin Complex, <br />
              Vadodara, Gujarat 390005, India
            </p>

            <h4 className="font-semibold text-base mb-2 text-gray-800">
              Hours of Operation
            </h4>

            <ul className="text-sm text-gray-600 mb-6 space-y-1">
              <li>
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Monday - Friday: 12-6 PM
              </li>

              <li>
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Saturday: 12-3 PM
              </li>

              <li>
                <i className="ri-time-line text-yellow-500 mr-2"></i>
                Sunday - Closed
              </li>
            </ul>

            <h4 className="font-semibold text-base mb-2 text-gray-800">
              Careers
            </h4>

            <p className="text-sm text-gray-600">
              Interested in joining our team?
              <i className="ri-mail-line text-yellow-500 mr-2"></i>
              <a href="#" className="text-yellow-500 hover:underline">
                contact@yourstore.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-[5%] pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 font-bricolage">
            Our Location
          </h2>
          <div className="w-20 h-[3px] bg-yellow-400 mx-auto mt-2"></div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg h-[600px] w-full border-gray-200">
          <iframe
            title="Lagos Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310731795!2d3.1191424086628525!3d6.5483693716861335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1773356569746!5m2!1sen!2sng"
            width="100%"
            height="100%"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;

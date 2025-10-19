import React from "react";
// importing from hooks
import useScrollToTop from "../Hooks/useScrollToTop";
const AboutUs = () => {
  // Scroll on top when page load
  useScrollToTop();
  return (
    <div className="flex w-full p-[20px] flex-col text-justify gap-20 lg:gap-0 items-center">
      <div className=" flex flex-col-reverse lg:flex-row items-center ">
        <div className="md:w-[40vw] lg:w-50vw] flex flex-col justify-center items-center gap-3 ">
          <h1 className="mt-[20px] mb-[20px] text-4xl font-bold lg:text-6xl text-blue-500  ">
            About SigmaMart
          </h1>
          <p>
            <strong>SigmaMart</strong> is a modern e-commerce platform created
            using React.js, Tailwind-CSS, Firebase etc.. It is designed to give
            users a simple, smooth, and user-friendly shopping experience.
          </p>
          {/* <div className="mt-5 font-bold">With SigmaMart, users can do</div>
          1. Browse a wide range of products Users can explore various
          categories of products displayed on the website.
          <br />
          <br />
          2. Search for products Users can easily search for products based on
          their interests or needs using the search feature.
          <br />
          <br />
          3. Shopping Cart Users can add products to their shopping cart. The
          cart data is saved on localStorage, so their selections remain
          available even if they close the website.
          <br />
          <br />
          4. Place Orders After adding items to the cart, users can place an
          order.
          <br />
          <br /> */}
          <h1 className="mt-[20px] mb-[20px] text-5xl font-bold lg:text-6x text-blue-500">
            Tech Stack
          </h1>
          <div>
            <li>
              {" "}
              <strong>Frontend:</strong> React.js, Framer motion, Firebase.{" "}
            </li>
            <li>
              <strong>API: </strong>Dummy JSON API for product data.
            </li>
            <li>
              <strong>Other: </strong>Tailwind-CSS, React icon, Sonner.
            </li>
          </div>
          <h1 className="mt-[20px] mb-[20px] text-5xl font-bold lg:text-6x text-blue-500">
            Key Features
          </h1>
          <div>
            <li>Browse and search products</li>
            <li>View products by Categories</li>
            <li>View product details</li>
            <li>Add products to the cart</li>
            <li>Add products to the wishlist</li>
            <li>Order Products</li>
            <li>Dynamic UI with smooth user interactions</li>
            <li>Responsive design for all devices</li>
          </div>
          <br />
          <strong className="text-red-600">Important Note:</strong>
          SigmaMart is created only for learning purposes. All the products
          shown on the website are fake and are fetched from the DummyJSON API
          for practice and demonstration.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="flex w-full p-[20px] flex-col text-justify gap-20 lg:gap-0 items-center">
      <div className=" flex flex-col-reverse lg:flex-row items-center ">
        <div className="md:w-[40vw] lg:w-50vw] flex flex-col justify-center items-center gap-3 ">
          <h1 className="mt-[20px] mb-[20px] text-4xl font-bold lg:text-6xl text-[#ff9550]  ">
            {/* Header */}
            About SigmaMart
          </h1>
          <p className="mb-[16px] text-xl ">
            <strong>SigmaMart</strong> is a modern e-commerce platform created
            using React.js. It is designed to give users a simple, smooth, and
            user-friendly shopping experience.
          </p>
          <div className="font-bold">WithSigmaMart, users can:</div>
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
          <br />
          <h1 className="mt-[20px] mb-[20px] text-5xl font-bold lg:text-6x text-[#ff9550]">
            Tech Stack
          </h1>
          <div>
            <li>
              {" "}
              <strong>Frontend:</strong> React.js,Tailwind-CSS,GSAP.{" "}
            </li>
            <li>
              <strong>API: </strong>Dummy JSON API for product data.
            </li>
            <li>
              <strong>Other: </strong>font awesome icon.
            </li>
          </div>
          <br />
          <br />
          <h1 className="mt-[20px] mb-[20px] text-5xl font-bold lg:text-6x text-[#ff9550]">
            Key Features
          </h1>
          <div>
            <li>Browse and search products</li>
            <li>View products by Categories</li>
            <li>View product details</li>
            <li>Add products to the cart</li>
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

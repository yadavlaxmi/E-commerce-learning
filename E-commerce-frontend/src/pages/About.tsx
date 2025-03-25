import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">About Us</h1>
        <p className="text-xl text-gray-600 mb-4">
          Welcome to our online store! We are passionate about bringing you the
          best products at affordable prices. Our mission is to provide you with
          an excellent shopping experience that is both convenient and enjoyable.
        </p>
        <p className="text-lg text-gray-600 mb-4">
          We carefully curate our product selection, ensuring top quality and
          customer satisfaction. Whether you're looking for the latest fashion,
          gadgets, home goods, or more, we have something for everyone.
        </p>
        <p className="text-lg text-gray-600">
          Thank you for choosing us, and we look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default About;

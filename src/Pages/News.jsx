import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const News = () => {
  return (
    <div>
      <Header />
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Latest News</h1>

        <div className="space-y-8">
          {/* Example News Item 1 */}
          <div>
            <h2 className="text-2xl font-semibold">New Product Launch!</h2>
            <p className="text-lg mb-4">
              We are excited to announce the launch of our new product, which promises to revolutionize the industry. Stay tuned for more details!
            </p>
            <p className="text-sm text-gray-500">Published on: October 20, 2024</p>
          </div>

          {/* Example News Item 2 */}
          <div>
            <h2 className="text-2xl font-semibold">SAGE Attends Global Conference</h2>
            <p className="text-lg mb-4">
              Our team of experts recently participated in a global conference where we discussed the future of wireless communication technology.
            </p>
            <p className="text-sm text-gray-500">Published on: October 15, 2024</p>
          </div>

          {/* Example News Item 3 */}
          <div>
            <h2 className="text-2xl font-semibold">New Collaboration with XYZ Corp</h2>
            <p className="text-lg mb-4">
              We are pleased to announce our new collaboration with XYZ Corp, a leader in the tech industry. Together, we aim to push the boundaries of innovation.
            </p>
            <p className="text-sm text-gray-500">Published on: October 10, 2024</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;

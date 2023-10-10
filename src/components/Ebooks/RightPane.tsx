"use client";

import React from "react";

const RightPane = () => {
  return (
    <section className="w-full md:w-[30%] flex flex-col px-5 mt-10">
      <div className="categories">
        <h2 className="text-2xl">Categories</h2>
        <ul>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
          <li>Category 5</li>
          <li>Category 6</li>
          <li>Category 7</li>
          <li>Category 8</li>
          <li>Category 9</li>
          <li>Category 10</li>
          <li>Category 11</li>
          <li>Category 12</li>
          <li>Category 13</li>
          <li>Category 14</li>
          <li>Category 15</li>
          <li>Category 16</li>
          <li>Category 17</li>
          <li>Category 18</li>
          <li>Category 19</li>
          <li>Category 20</li>
        </ul>
      </div>

      <div className="Latest Ebooks mt-7">
        <h2 className="text-2xl">Latest Ebooks</h2>
        <div className="Latest Ebooks">
          <ul className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <li className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Ebook Title 1</h2>
                <p className="text-gray-600">Author: John Doe</p>
                <p className="text-gray-600">Published: September 2023</p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read Now
                </a>
              </div>
            </li>

            <li className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Ebook Title 2</h2>
                <p className="text-gray-600">Author: Jane Smith</p>
                <p className="text-gray-600">Published: October 2023</p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read Now
                </a>
              </div>
            </li>

            <li className="bg-white rounded-lg shadow-md">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">Ebook Title 3</h2>
                <p className="text-gray-600">Author: Alan Johnson</p>
                <p className="text-gray-600">Published: August 2023</p>
                <a href="#" className="text-blue-600 hover:underline">
                  Read Now
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RightPane;

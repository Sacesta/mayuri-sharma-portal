"use client";

import { current } from "@reduxjs/toolkit";
import Link from "next/link";
import React from "react";

const Pagination = ({ currentPage }: { currentPage: number }) => {
  return (
    <>
      <nav aria-label="Page navigation example" className="shadow-none mt-5">
        <ul className="list-style-none flex justify-center">
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
              href={`/ebooks/${currentPage - 1}`}
            >
              Previous
            </Link>
          </li>
          {currentPage > 1 && (
            <li aria-current="page">
              <Link
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
                href={`/ebooks/${currentPage - 1}`}
              >
                {currentPage - 1}
              </Link>
            </li>
          )}

          <li>
            <Link
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-[#EB334A] transition-all duration-300 bg-neutral-100 `}
              href={`/ebooks/${currentPage}`}
            >
              {currentPage}
            </Link>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
              href={`/ebooks/${currentPage + 1}`}
            >
              {currentPage + 1}
            </Link>
          </li>
          <li>
            <Link
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
              href={`/ebooks/${currentPage + 1}`}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;

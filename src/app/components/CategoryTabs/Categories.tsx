"use client";

import { Category, getCategories } from "@/services/Category.services";
import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchProgramsData = async () => {
      try {
        const res: any = await getCategories();
        setCategories(res?.data || []);
      } catch (error) {
        console.log("Error fetching the programs");
      }
    };
    fetchProgramsData();
  }, []);
  return (
    <ul className="home_story_tab">
      {categories?.map((category: Category, index) => {
        return (
          <li key={index} className={index === 0 ? "story_tab_active" : ""}>
            {category?.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;

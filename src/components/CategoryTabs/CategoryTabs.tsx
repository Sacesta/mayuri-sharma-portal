"use client";

import { Category, getCategories } from "@/services/Category.services";
import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import { Podcast, getPodcasts } from "@/services/PodcastService";

const CategoryTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const res: any = await getCategories();
        setCategories(res?.data || []);
      } catch (error) {
        console.log("Error fetching the categories");
      }
    };

    const fetchPodcastsData = async () => {
      try {
        const res: any = await getPodcasts();
        setPodcasts(res?.data || []);
      } catch (error) {
        console.log("Error in fetching podcasts");
      }
    };

    fetchCategoriesData();
    fetchPodcastsData();
  }, []);

  function groupPodcastsByCategory(podcasts: Podcast[]) {
    const groupedPodcasts: Record<string, Podcast[]> = {};

    podcasts.forEach((podcast) => {
      const { category } = podcast;
      if (!groupedPodcasts[category]) {
        groupedPodcasts[category] = [];
      }
      groupedPodcasts[category].push(podcast);
    });

    return groupedPodcasts;
  }

  categories.sort((category1, category2) =>
    category1.rank.localeCompare(category2.rank)
  );

  const grpPod = groupPodcastsByCategory(podcasts);

  return (
    <>
      <div className="relative mb-8 md:hidden">
        <select
          name=""
          id=""
          className="w-full h-full py-4 px-6 border border-[#B5B5B5] rounded-lg appearance-none text-[#090617]"
          onClick={(e) => setTabIndex(+(e.target as HTMLInputElement).value)}
        >
          <option value={0}>All Episodes</option>
          {categories?.map((category: Category, index) => {
            return (
              <option key={index} value={index + 1}>
                {category.name}
              </option>
            );
          })}
        </select>
        <div className="absolute top-7 right-6 pointer-events-none">
          <svg
            width="18"
            height="10"
            viewBox="0 0 10.6148C218 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="#252525"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className=""></div>
      <div className="">
        <Categories
          categories={categories}
          podcasts={podcasts}
          grpPod={grpPod}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
        />
      </div>
    </>
  );
};

export default CategoryTabs;

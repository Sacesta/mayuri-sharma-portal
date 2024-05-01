"use client";
import { Category, getCategories } from "@/services/Category.services";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tabs.css";
import { Podcast, getPodcasts } from "@/services/PodcastService";
import Transformations from "../Carousel/Transformations";
const CategoriesHome = () => {
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
      <Tabs>
        <TabList>
          {categories?.map((category: Category, index) => {
            return <Tab key={`${category.name}${index}`}>{category?.name}</Tab>;
          })}
        </TabList>

        {categories?.map((category: Category, index) => {
          return (
            <TabPanel
              key={category._id}
              style={{ minHeight: "464px", pointerEvents: "none" }} //remove pointer events when coming soon is removed
            >
              <Transformations grpPod={grpPod} category={category} />
            </TabPanel>
          );
        })}
      </Tabs>
    </>
  );
};

export default CategoriesHome;

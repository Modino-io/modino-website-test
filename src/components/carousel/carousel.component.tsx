import React, { useState } from "react";
import ArticleTileComponent from "../article-tile/article-tile.component";
import { Button } from "@rmwc/button";

import * as styles from "./carousel.component.module.scss";
import { ImageDataLike } from "gatsby-plugin-image";

const CarouselComponent: React.FC<{
  articles: Array<{
    title: string;
    date: string;
    summary: string;
    thumbnailPhotoUrl: ImageDataLike;
    slug: string;
    categories: Array<string>;
  }>;
}> = ({ articles }) => {
  const [currentCarouselItemIndex, setCurrentCarouselItemIndex] = useState(0);
  const displayNthCarouselItem = (itemIndex = 0) => {
    setCurrentCarouselItemIndex(itemIndex);
  };

  const displayPreviousCarouselItem = () => {
    const newIndex =
      currentCarouselItemIndex - 1 < 0
        ? (currentCarouselItemIndex - 1 + articles.length) % articles.length
        : (currentCarouselItemIndex - 1) % articles.length;
    setCurrentCarouselItemIndex(newIndex);
  };

  const displayNextCarouselItem = () => {
    setCurrentCarouselItemIndex(
      (currentCarouselItemIndex + 1) % articles.length
    );
  };

  return (
    <div className={styles.carousel}>
      <div
        className={`${styles.carouselContent} ${
          styles["carouselContentScrolledTo" + currentCarouselItemIndex]
        }`}
      >
        {articles.map((article, index) => {
          return <ArticleTileComponent {...article} key={index} />;
        })}
      </div>
      <div className={styles.carouselControls}>
        <Button
          dense
          className={styles.carouselButtonPrev}
          onClick={() => displayPreviousCarouselItem()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z" />
          </svg>
        </Button>
        {articles.map((article, index) => (
          <button
            className={`${styles.carouselPageButton} ${
              index === currentCarouselItemIndex
                ? styles.carouselPageButtonActive
                : ""
            }`}
            onClick={() => displayNthCarouselItem(index)}
            key={index}
          ></button>
        ))}
        <Button
          dense
          className={styles.carouselButtonNext}
          onClick={() => displayNextCarouselItem()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default CarouselComponent;

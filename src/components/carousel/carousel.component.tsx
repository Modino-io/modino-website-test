import React, { useEffect, useState } from "react";
import "./carousel.component.scss";
import ArticleTileComponent from "../article-tile/article-tile.component";
import { Link } from "gatsby";
import { Button } from "@rmwc/button";

const CarouselComponent: React.FC<{
  articles: Array<{
    title: string;
    date: string;
    summary: string;
    thumbnailPhotoUrl: string;
    slug: string;
    categories: Array<string>;
  }>;
}> = ({ articles }) => {
  let carouselItems: NodeListOf<HTMLElement>;
  let carouselItemsContainer: HTMLElement;
  let carouselPageButtons: NodeListOf<HTMLElement>;
  const [currentCarouselItemIndex, setCurrentCarouselItemIndex] = useState(0);
  let prevButton;
  let nextButton;

  useEffect(() => {
    carouselItems = document.querySelectorAll(
      ".m-article-tile"
    ) as NodeListOf<HTMLElement>;
    carouselItemsContainer = document.querySelectorAll(
      ".m-articles-teaser__carousel-content"
    )[0] as HTMLElement;
    carouselPageButtons = document.querySelectorAll(
      ".m-articles-teaser__carousel-page-button"
    );
    prevButton = document.querySelector(
      ".m-articles-teaser__carousel-button-prev"
    );
    nextButton = document.querySelector(
      ".m-articles-teaser__carousel-button-next"
    );
  }, []);

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
    <div className="m-articles-teaser">
      <div className="m-section__content m-articles-teaser__content">
        <Link to="/articles" className="m-articles-teaser__see-all">
          See all articles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M646-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h446L532-634q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T589-691l183 183q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L589-269q-12 12-28.5 11.5T532-270q-11-12-11.5-28t11.5-28l114-114Z" />
          </svg>
        </Link>
        <div className="m-articles-teaser__carousel">
          <div
            className={`m-articles-teaser__carousel-content m-articles-teaser__carousel-content--scrolled-to-${currentCarouselItemIndex}`}
          >
            {articles.map((article, index) => {
              return <ArticleTileComponent {...article} key={index} />;
            })}
          </div>
          <div className="m-articles-teaser__carousel-controls">
            <Button
              dense
              className="m-articles-teaser__carousel-button-prev"
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
                className={`m-articles-teaser__carousel-page-button ${
                  index === currentCarouselItemIndex
                    ? "m-articles-teaser__carousel-page-button--active"
                    : ""
                }`}
                onClick={() => displayNthCarouselItem(index)}
                key={index}
              ></button>
            ))}
            <Button
              dense
              className="m-articles-teaser__carousel-button-next"
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
      </div>
    </div>
  );
};

export default CarouselComponent;

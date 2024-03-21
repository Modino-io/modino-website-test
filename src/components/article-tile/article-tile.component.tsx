import { Link } from "gatsby";
import React from "react";

import * as styles from "./article-tile.component.module.scss";
import ArticleChipComponent from "../article-chip/article-chip.component";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

const ArticleTileComponent: React.FC<any> = ({
  title,
  date,
  summary,
  thumbnailPhotoUrl,
  slug,
  categories,
}: {
  title: string;
  date: string;
  summary: string;
  thumbnailPhotoUrl: ImageDataLike;
  slug: string;
  categories: Array<string>;
}) => {
  const image = getImage(thumbnailPhotoUrl);
  return (
    <Link to={`/articles/${slug}`} className={styles.mArticleTile}>
      <GatsbyImage
        image={image}
        className={styles.mArticleTileImage}
        alt="article thumbnail photo"
      />
      <div className={styles.mArticleTileContent}>
        <div className={styles.mArticleTileChips}>
          {categories.map((element, index) => (
            <ArticleChipComponent type="red" key={`${element}-index`}>
              {element}
            </ArticleChipComponent>
          ))}
        </div>
        <h3 className={styles.mArticleTileTitle}>{title}</h3>
        <i className={styles.mArticleTileDate}> {date} </i>
        <p className={styles.mArticleTileDescription}>{summary}</p>
      </div>
    </Link>
  );
};

export default ArticleTileComponent;

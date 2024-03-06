import { Link } from "gatsby";
import React from "react";

import * as styles from "./article-tile.component.module.scss";
import ArticleChipComponent from "../article-chip/article-chip.component";

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
  thumbnailPhotoUrl: string;
  slug: string;
  categories: Array<string>;
}) => {
  return (
    <React.Fragment>
      <Link to={`/articles/${slug}`} className={styles.mArticleTile}>
        <img src={thumbnailPhotoUrl} className={styles.mArticleTileImage} />
        <div className={styles.mArticleTileContent}>
          <div className={styles.mArticleTileChips}>
            {categories.map((element, index) => (
              <ArticleChipComponent type="red" key={index}>
                {element}
              </ArticleChipComponent>
            ))}
          </div>
          <h3 className={styles.mArticleTileTitle}>{title}</h3>
          <i className={styles.mArticleTileDate}> {date} </i>
          <p className={styles.mArticleTileDescription}>{summary}</p>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ArticleTileComponent;

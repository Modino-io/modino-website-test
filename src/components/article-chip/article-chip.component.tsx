import React, { PropsWithChildren, ReactNode } from "react";
import * as styles from "./article-chip.component.module.scss";

const ArticleChipComponent: React.FC<
  PropsWithChildren<{ type: "red" | "blue" | "green" }>
> = ({
  type,
  children,
}: PropsWithChildren<{ type: "red" | "blue" | "green" }>) => {
  const capitalizeFirstLetter = (text: string) => {
    return `${text[0].toUpperCase()}${text.slice(1, text.length)}`;
  };

  return (
    <div
      className={`${styles.mArticleChip} ${
        styles[`mArticleChip${capitalizeFirstLetter(type)}`]
      }`}
    >
      {capitalizeFirstLetter(children?.toString() ?? "")}
    </div>
  );
};

export default ArticleChipComponent;

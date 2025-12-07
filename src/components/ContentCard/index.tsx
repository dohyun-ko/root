import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Link } from "@tanstack/react-router";
import * as styles from "./style.css";
import { formatDate } from "@/utils/date";

export interface ContentCardProps {
  imageSrc: string;
  title: string | string[];
  titlePosition?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  date?: string;
  tags?: string[];
  linkTo?: string;
  size?: "small" | "medium" | "large";
}

const sizeMap = {
  small: "18px",
  medium: "24px",
  large: "36px",
};

const ContentCard = ({
  imageSrc,
  title,
  date,
  tags = [],
  linkTo,
  size = "medium",
}: ContentCardProps) => {
  const parsedTitle = Array.isArray(title) ? title.join(" ") : title;

  const content = (
    <>
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={parsedTitle} className={styles.image} />
      </div>
      
      <div className={styles.metaContainer}>
        {date && <span>{formatDate(date)}</span>}
        {tags.length > 0 && date && <span>|</span>}
        {tags.length > 0 && <span>{tags.join(", ")}</span>}
      </div>

      <h3
        className={styles.title}
        style={assignInlineVars({ [styles.titleSize]: sizeMap[size] })}
      >
        {parsedTitle}
      </h3>
    </>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={styles.container}>
        {content}
      </Link>
    );
  }

  return <div className={styles.container}>{content}</div>;
};

export default ContentCard;

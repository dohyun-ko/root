import { Link } from "@tanstack/react-router";
import * as styles from "./style.css";
import { formatDate } from "@/utils/date";

export interface ContentCardProps {
  imageSrc: string;
  title: string | string[];
  description?: string;
  date?: string;
  tags?: string[];
  linkTo?: string;
}

const ContentCard = ({
  imageSrc,
  title,
  description,
  date,
  tags = [],
  linkTo,
}: ContentCardProps) => {
  const parsedTitle = Array.isArray(title) ? title.join(" ") : title;

  const content = (
    <>
      {imageSrc && (
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={parsedTitle} className={styles.image} />
        </div>
      )}
      <div className={styles.body}>
        <div className={styles.metaContainer}>
          {date && <span>{formatDate(date)}</span>}
          {tags.length > 0 && date && <span>&middot;</span>}
          {tags.length > 0 && <span>{tags.join(", ")}</span>}
        </div>
        <h3 className={styles.title}>{parsedTitle}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
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

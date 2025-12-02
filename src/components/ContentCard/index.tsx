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

const positionMap = {
  "top-right": styles.topRight,
  "bottom-right": styles.bottomRight,
  "top-left": styles.topLeft,
  "bottom-left": styles.bottomLeft,
};

const sizeMap = {
  small: "16px",
  medium: "24px",
  large: "32px",
};

const ContentCard = ({
  imageSrc,
  title,
  titlePosition = "bottom-right",
  date,
  tags = [],
  linkTo,
  size = "medium",
}: ContentCardProps) => {
  const parsedTitle = Array.isArray(title) ? title : [title];
  const tagsPosition = titlePosition === "top-left" ? "top-right" : "top-left";

  const content = (
    <>
      <div className={`${styles.titleContainer} ${positionMap[titlePosition]}`}>
        {parsedTitle.map((t, i) => (
          <div key={i} className={styles.titleBubble}>
            <span
              className={styles.title}
              style={assignInlineVars({ [styles.titleSize]: sizeMap[size] })}
            >
              {t}
            </span>
          </div>
        ))}
      </div>

      <div
        className={`${styles.tagsContainer} ${positionMap[tagsPosition]}`}
        style={{ gap: "8px" }}
      >
        <div className={styles.filledTag}>
          <span>{date ? formatDate(date) : ""}</span>
        </div>

        <div className={styles.outlinedTag}>
          <span>{tags.join(", ")}</span>
        </div>
      </div>
    </>
  );

  const styleVars = assignInlineVars({
    [styles.backgroundImageVar]: `url(${imageSrc})`,
  });

  if (linkTo) {
    return (
      <Link to={linkTo} className={styles.container} style={styleVars}>
        {content}
      </Link>
    );
  }

  return (
    <div className={styles.container} style={styleVars}>
      {content}
    </div>
  );
};

export default ContentCard;

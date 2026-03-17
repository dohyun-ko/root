import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useLoaderData } from "@tanstack/react-router";
import * as styles from "./style.css";
import type { Post } from "@/utils/posts";
import { formatDate } from "@/utils/date";

export const Article = () => {
  const post = useLoaderData({ from: "/posts/$slug" }) as Post | undefined;

  if (!post) {
    return (
      <div className={styles.gridRow}>
        <div className={styles.outerLeft} />
        <div className={styles.gutterLeft} />
        <div className={styles.container}>
          <h1>Post not found</h1>
        </div>
        <div className={styles.gutterRight} />
        <div className={styles.outerRight} />
      </div>
    );
  }

  return (
    <div className={styles.gridRow}>
      <div className={styles.outerLeft} />
      <div className={styles.gutterLeft} />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <span>{formatDate(post.date)}</span>
            {post.tags && post.tags.length > 0 && (
              <span> &middot; {post.tags.join(", ")}</span>
            )}
          </div>
        </header>

        <div className={styles.content}>
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
      <div className={styles.gutterRight} />
      <div className={styles.outerRight} />
    </div>
  );
};

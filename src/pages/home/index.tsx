import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { getPosts } from "@/utils/posts";
import type { Post } from "@/utils/posts";
import { formatDate } from "@/utils/date";
import * as styles from "./style.css";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
      {/* Hero */}
      <div className={styles.gridRow}>
        <div className={styles.outerLeft} />
        <div className={styles.gutterLeft} />
        <div className={styles.heroCell}>
          <pre className={styles.ornament}>
            {"~  *  ~  *  ~  *  ~  *  ~  *  ~"}
          </pre>
          <h1 className={styles.headline}>
            Pixels,
            <br />
            Pragmatism,
            <br />
            Product.
          </h1>
          <p className={styles.subtitle}>Dohyun Ko's Journal</p>
          <pre className={styles.ornament}>
            {"~  *  ~  *  ~  *  ~  *  ~  *  ~"}
          </pre>
        </div>
        <div className={styles.gutterRight} />
        <div className={styles.outerRight} />
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={"/posts/$slug" as const}
          params={{ slug: post.slug }}
          className={styles.gridRow}
        >
          <div className={styles.outerLeft} />
          <div className={styles.gutterLeft} />
          <div className={styles.postContent}>
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className={styles.postImage}
              />
            )}
            <div className={styles.postBody}>
              <div className={styles.postMeta}>
                {formatDate(post.date)}
                {post.tags && post.tags.length > 0 && (
                  <> &middot; {post.tags.join(", ")}</>
                )}
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              {post.description && (
                <p className={styles.postDescription}>{post.description}</p>
              )}
            </div>
          </div>
          <div className={styles.gutterRight} />
          <div className={styles.outerRight} />
        </Link>
      ))}

      {/* Footer */}
      <div className={styles.gridRow}>
        <div className={styles.outerLeft} />
        <div className={styles.gutterLeft} />
        <div className={styles.cellCompact}>
          <span className={styles.footer}>
            &copy; {new Date().getFullYear()} Dohyun Ko
          </span>
        </div>
        <div className={styles.gutterRight} />
        <div className={styles.outerRight} />
      </div>
    </>
  );
};

export default Home;

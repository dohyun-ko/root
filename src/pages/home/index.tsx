import { useState, useEffect } from "react";
import { page } from "@/styles/page.css";
import { vStack } from "@/styles/stack.css";
import { headline } from "./style.css";
import ContentCard from "@/components/ContentCard";
import { getPosts } from "@/utils/posts";
import type { Post } from "@/utils/posts";

const CHANNELCON_IMAGE =
  "https://dohyun-images.s3.ap-northeast-2.amazonaws.com/profile-cropped.jpg";

const PROFILE_IMAGE =
  "https://dohyun-images.s3.ap-northeast-2.amazonaws.com/IMG_5772.webp";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div className={page} style={{ paddingTop: "70px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: "30px",
          width: "100%",
        }}
      >
        <div className={vStack} style={{ gridColumn: "span 8", gap: "30px" }}>
          <h1 className={headline}>Pixels / Pragmatism / Product</h1>
          {posts.map((post) => (
            <div key={post.slug} style={{ width: "100%", aspectRatio: "16/9" }}>
              <ContentCard
                imageSrc={post.thumbnail || CHANNELCON_IMAGE}
                title={post.title}
                titlePosition="top-right"
                date={post.date}
                tags={post.tags}
                size="large"
                linkTo={`/posts/${post.slug}`}
              />
            </div>
          ))}
          {posts.length === 0 && (
            <div
              style={{ padding: "20px", textAlign: "center", color: "#666" }}
            >
              Loading posts...
            </div>
          )}
        </div>
        <div className={vStack} style={{ gridColumn: "span 4", gap: "30px" }}>
          <div style={{ height: "24px" }} />
          <div style={{ width: "100%", aspectRatio: "16/9" }}>
            <ContentCard
              imageSrc={PROFILE_IMAGE}
              title={["About", "Dohyun Ko"]}
              titlePosition="top-right"
              date="2025-01-01"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

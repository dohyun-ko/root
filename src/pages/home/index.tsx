import { useState, useEffect } from "react";
import { page } from "@/styles/page.css";
import { vStack } from "@/styles/stack.css";
import { headline, sectionHeader, divider } from "./style.css";
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
    <div className={page} style={{ paddingTop: "40px" }}>
      {/* <h1 className={headline}>Pixels / Pragmatism / Product</h1> */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "8fr 1px 4fr",
          gap: "0",
          width: "100%",
          alignItems: "start",
        }}
      >
        {/* Main Content Column */}
        <div className={vStack} style={{ paddingRight: "30px", gap: "40px" }}>
          {posts.map((post) => (
            <ContentCard
              key={post.slug}
              imageSrc={post.thumbnail || CHANNELCON_IMAGE}
              title={post.title}
              date={post.date}
              tags={post.tags}
              size="large"
              linkTo={`/posts/${post.slug}`}
            />
          ))}
          {posts.length === 0 && (
            <div
              style={{
                padding: "20px",
                textAlign: "center",
                color: "#666",
                fontStyle: "italic",
              }}
            >
              Loading latest stories...
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className={divider} />

        {/* Sidebar Column */}
        <div className={vStack} style={{ paddingLeft: "30px", gap: "30px" }}>
          <div>
            <h2 className={sectionHeader}>About the Author</h2>
            <ContentCard
              imageSrc={PROFILE_IMAGE}
              title="Dohyun Ko"
              date="2025-01-01"
              size="medium"
            />
            <p
              style={{
                fontFamily: '"Lora", serif',
                fontSize: "16px",
                lineHeight: "1.6",
                marginTop: "16px",
              }}
            >
              Senior frontend developer specializing in React, design systems,
              and user experience.
            </p>
          </div>

          {/* Placeholder for more sidebar content */}
          <div>
            <h2 className={sectionHeader}>Trending</h2>
            <div
              style={{
                fontFamily: '"Lora", serif',
                fontStyle: "italic",
                color: "#666",
              }}
            >
              No trending topics at the moment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

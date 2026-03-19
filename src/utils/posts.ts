import matter from "gray-matter";

export interface Post {
  slug: string;
  title: string;
  date: string;
  thumbnail?: string;
  description?: string;
  tags?: string[];
  draft?: boolean;
  content: string;
}

export const getPosts = async (): Promise<Post[]> => {
  const modules = import.meta.glob("/src/content/*.md", {
    query: "?raw",
    import: "default",
  });
  const posts: Post[] = [];

  for (const path in modules) {
    const raw = (await modules[path]()) as string;
    const { data, content } = matter(raw);
    const slug = path.split("/").pop()?.replace(".md", "") || "";

    if (data.draft) continue;

    posts.push({
      slug,
      title: data.title || "Untitled",
      date: data.date || "",
      thumbnail: data.thumbnail,
      description: data.description,
      tags: data.tags || [],
      content,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getPostBySlug = async (
  slug: string
): Promise<Post | undefined> => {
  const modules = import.meta.glob("/src/content/*.md", {
    query: "?raw",
    import: "default",
  });
  const path = `/src/content/${slug}.md`;

  if (!modules[path]) {
    return undefined;
  }

  const raw = (await modules[path]()) as string;
  const { data, content } = matter(raw);

  if (data.draft) return undefined;

  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || "",
    thumbnail: data.thumbnail,
    description: data.description,
    tags: data.tags || [],
    content,
  };
};

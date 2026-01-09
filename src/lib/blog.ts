import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  image?: string;
}

export interface BlogPostMeta extends BlogFrontmatter {
  readingTimeMinutes: number;
  readingTimeText: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function readPostFileNames() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

function parseFile(filePath: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const frontmatter = data as BlogFrontmatter;

  const stats = readingTime(content);

  return {
    ...frontmatter,
    content,
    readingTimeMinutes: Math.ceil(stats.minutes),
    readingTimeText: stats.text,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  const files = readPostFileNames();

  const posts = files
    .map((file) => {
      const parsed = parseFile(path.join(BLOG_DIR, file));
      return parsed;
    })
    .filter((post) => Boolean(post.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ content, ...rest }) => rest);

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const files = readPostFileNames();
  for (const file of files) {
    const parsed = parseFile(path.join(BLOG_DIR, file));
    if (parsed.slug === slug) {
      return parsed;
    }
  }
  return null;
}

export function extractToc(content: string) {
  const lines = content.split("\n");
  const toc: { id: string; title: string; level: number }[] = [];
  let inCode = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    const match = trimmed.match(/^(#{2,3})\s+(.*)/);
    if (match) {
      const level = match[1].length;
      const title = match[2].replace(/#/g, "").trim();
      const id = slugify(title);
      toc.push({ id, title, level });
    }
  }

  return toc;
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3) {
  const posts = getAllPosts().filter((post) => post.slug !== currentSlug);
  const scored = posts
    .map((post) => {
      const overlap = post.tags.filter((tag) => tags.includes(tag)).length;
      return { post, score: overlap };
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime());

  return scored.slice(0, limit).map((item) => item.post);
}

export { BLOG_DIR };

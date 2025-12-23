import "server-only";
import yaml from "js-yaml";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import { getYear, parseISO } from "date-fns";
import path from "path";
import fs from "fs/promises";

interface PostFrontMatter {
  slug: string;
  title: string;
  date: string;
  metadesc: string;
}

interface PostMetadata {
  slug: string;
  title: string;
  metadesc: string;
  date: string;
  year: number;
}

async function getMarkdownFiles(): Promise<string[]> {
  const postsDir = path.join(process.cwd(), "_posts");
  const files = await fs.readdir(postsDir);
  return files.filter((file) => file.endsWith(".md"));
}

async function parseMarkdownFile(
  filePath: string
): Promise<{ data: PostFrontMatter; content: string }> {
  const fileContent = await fs.readFile(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // gray-matter auto-converts dates to Date objects, we need to convert back to ISO string
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().split("T")[0];
  }

  return { data: data as PostFrontMatter, content };
}

async function renderMarkdownToHtml(markdown: string): Promise<string> {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode as any, {
      theme: "github-light",
      keepBackground: true,
      onVisitLine(node: any) {
        if (node.children.length === 0) {
          node.children = [{ type: "text", value: " " }];
        }
      },
      onVisitHighlightedLine(node: any) {
        node.properties.className.push("highlighted");
      },
      onVisitHighlightedWord(node: any) {
        node.properties.className = ["word"];
      },
    } as any)
    .use(rehypeStringify);

  const html = await processor.process(markdown);
  return String(html.value);
}

export async function getAllPosts(): Promise<PostMetadata[]> {
  const files = await getMarkdownFiles();

  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(process.cwd(), "_posts", file);
      const { data } = await parseMarkdownFile(filePath);

      // Ensure date is a string and parse it
      const dateString = typeof data.date === 'string' ? data.date : String(data.date);
      const date = parseISO(dateString);

      // Validate the parsed date
      if (isNaN(date.getTime())) {
        console.error(`Invalid date for ${file}: ${dateString}`);
        throw new Error(`Invalid date format in ${file}: ${dateString}`);
      }

      const year = getYear(date);
      const shortDate = date.toLocaleDateString("en-AT", {
        day: "2-digit",
        month: "short",
      });

      return {
        slug: data.slug,
        title: data.title,
        metadesc: data.metadesc,
        date: shortDate,
        year: year,
      };
    })
  );

  return posts;
}

export async function getPostBySlug(
  slug: string
): Promise<{ title: string; metadesc: string; content: string; slug: string }> {
  const files = await getMarkdownFiles();

  for (const file of files) {
    const filePath = path.join(process.cwd(), "_posts", file);
    const { data, content } = await parseMarkdownFile(filePath);

    if (data.slug === slug) {
      const html = await renderMarkdownToHtml(content);
      return {
        title: data.title,
        metadesc: data.metadesc,
        content: html,
        slug: data.slug,
      };
    }
  }

  return {
    title: "",
    metadesc: "",
    content: "",
    slug: "",
  };
}

export async function getConfig(): Promise<any> {
  const configPath = path.join(process.cwd(), "config.yml");
  const configContent = await fs.readFile(configPath, "utf-8");
  return yaml.load(configContent);
}

export async function getPostsByYear(): Promise<any> {
  const posts = await getAllPosts();
  const years = getYears(posts);

  const postsByYear = [];

  for (const year of years) {
    const thisYearsPosts = posts.filter((post) => post.year === year);
    postsByYear.push({
      year: year,
      posts: thisYearsPosts.reverse(),
    });
  }

  return postsByYear;
}

function getYears(posts: PostMetadata[]): Array<number> {
  const years: Set<number> = new Set();

  posts.forEach((post) => {
    years.add(post.year);
  });

  return Array.from(years).reverse();
}

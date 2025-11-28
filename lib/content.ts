import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Base directory for content (e.g., Markdown files)
const CONTENT_DIR = path.join(process.cwd(), 'content');

// Common interface for frontmatter data
interface CommonMatter {
  date: string;
  title: string;
  [key: string]: any; // Allow other properties
}

// Specific interface for News frontmatter
export interface NewsMatter extends CommonMatter {
  category: string;
  author: string;
  heroImage?: string;
  altText?: string;
}

// Specific interface for Project frontmatter
export interface ProjectMatter extends CommonMatter {
  status: string;
  period: string;
  strategicPillar: string;
  heroImage?: string;
  altText?: string;
  impactMetrics: Array<{ value: string; label: string }>;
  beneficiaries: string;
  fundingSources: Array<{ name: string; logo?: string }>;
  partners: Array<{ name: string; logo?: string }>;
  auditLinks: Array<{ title: string; url: string }>;
}

// Function overloads for getSortedPostsData
export function getSortedPostsData(type: 'news'): (NewsMatter & { slug: string })[];
export function getSortedPostsData(type: 'projects'): (ProjectMatter & { slug: string })[];
export function getSortedPostsData(type: 'news' | 'projects') {
  const postsDirectory = path.join(CONTENT_DIR, type);
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as (NewsMatter | ProjectMatter)),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs(type: 'news' | 'projects') {
  const postsDirectory = path.join(CONTENT_DIR, type);
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
  return slugs;
}

// Function overloads for getPostData
export function getPostData(type: 'news', slug: string): (NewsMatter & { slug: string; content: string });
export function getPostData(type: 'projects', slug: string): (ProjectMatter & { slug: string; content: string });
export function getPostData(type: 'news' | 'projects', slug: string) {
  const fullPath = path.join(CONTENT_DIR, type, `${slug}.md`);
  console.log(`Attempting to read file: ${fullPath}`); // Debug log
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as (NewsMatter | ProjectMatter)),
  };
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const contentDirectory = path.join(process.cwd(), 'content');

export interface GuideMetadata {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
  keywords?: string[];
}

export interface GuideFrontmatter extends GuideMetadata {
  // Table of Contents items (optional, will be auto-generated if not provided)
  toc?: Array<{ id: string; text: string; level: number }>;
  // Related guides
  relatedGuides?: Array<{ title: string; url: string; description: string }>;
  // FAQ items
  faqs?: Array<{ question: string; answer: string }>;
}

export interface GuideData {
  slug: string;
  metadata: GuideFrontmatter;
  content: string;
}

export interface BuildMetadata {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  playstyle: string;
  author: string;
  datePublished: string;
  dateModified: string;
  image: string;
}

export interface BuildFrontmatter extends BuildMetadata {
  stats: {
    damage: number;
    defense: number;
    mobility: number;
    difficulty: number;
  };
  weapons: string[];
  skills: string[];
  attributes: Array<{
    name: string;
    value: string;
    priority: 'High' | 'Medium' | 'Low';
  }>;
  gameplay: string;
  strengths: string[];
  weaknesses: string[];
  steps: Array<{
    name: string;
    text: string;
  }>;
  relatedBuilds?: Array<{ title: string; url: string; description: string }>;
}

export interface BuildData {
  slug: string;
  metadata: BuildFrontmatter;
  content: string;
}

/**
 * Get all guides from the content/guides directory
 */
export function getAllGuides(): GuideData[] {
  const guidesDirectory = path.join(contentDirectory, 'guides');

  // Check if directory exists
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(guidesDirectory);
  const guides = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getGuideBySlug(slug);
    })
    .filter((guide): guide is GuideData => guide !== null);

  return guides;
}

/**
 * Get a specific guide by slug
 */
export function getGuideBySlug(slug: string): GuideData | null {
  const guidesDirectory = path.join(contentDirectory, 'guides');
  const fullPath = path.join(guidesDirectory, `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as GuideFrontmatter,
    content,
  };
}

/**
 * Get all builds from the content/builds directory
 */
export function getAllBuilds(): BuildData[] {
  const buildsDirectory = path.join(contentDirectory, 'builds');

  // Check if directory exists
  if (!fs.existsSync(buildsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(buildsDirectory);
  const builds = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getBuildBySlug(slug);
    })
    .filter((build): build is BuildData => build !== null);

  return builds;
}

/**
 * Get a specific build by slug
 */
export function getBuildBySlug(slug: string): BuildData | null {
  const buildsDirectory = path.join(contentDirectory, 'builds');
  const fullPath = path.join(buildsDirectory, `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    metadata: data as BuildFrontmatter,
    content,
  };
}

/**
 * Auto-generate Table of Contents from markdown headings
 */
export function generateTOC(markdown: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: Array<{ id: string; text: string; level: number }> = [];

  let match;
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length; // Number of # symbols
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    toc.push({ id, text, level });
  }

  return toc;
}

/**
 * Convert markdown to HTML-safe format for rendering
 */
export function markdownToHtml(markdown: string): string {
  const html = marked.parse(markdown) as string;
  return html;
}

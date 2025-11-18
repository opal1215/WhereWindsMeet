import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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
 * Convert markdown to HTML
 * Handles bold, italic, headings, lists, links, code, and paragraphs
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Code blocks (must be done before inline code)
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
    const language = lang ? ` class="language-${lang}"` : '';
    return `<pre><code${language}>${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headers (must be on their own line)
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

  // Bold (before italic to handle ***)
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Unordered lists
  html = html.replace(/^\* (.+)$/gm, '<li>$1</li>');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  // Group consecutive <li> into <ol> (avoiding already wrapped ones)
  const lines = html.split('\n');
  let inOl = false;
  const result: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('<li>') && !line.includes('<ul>')) {
      if (!inOl) {
        result.push('<ol>');
        inOl = true;
      }
      result.push(line);
    } else {
      if (inOl) {
        result.push('</ol>');
        inOl = false;
      }
      result.push(line);
    }
  }
  if (inOl) result.push('</ol>');
  html = result.join('\n');

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr />');
  html = html.replace(/^\*\*\*$/gm, '<hr />');

  // Line breaks - preserve double newlines as paragraph breaks
  html = html.replace(/\n\n+/g, '</p><p>');
  html = html.replace(/\n/g, '<br/>');

  // Wrap in paragraph if not already wrapped
  if (!html.startsWith('<')) {
    html = '<p>' + html + '</p>';
  }

  return html;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

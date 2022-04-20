import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import { find, whereEq, map, prop } from 'ramda';

const articulosDirectory = path.join(process.cwd(), 'content/articulos');

let articulosCache: Articulo[];

async function fetchArticulos(): Promise<Articulo[]> {
  if (articulosCache) {
    return articulosCache;
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(articulosDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((it) => it.endsWith('.md'))
      .map(async (fileName) => {
        // Read markdown file as string
        const fullPath = path.join(articulosDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const matterData = matterResult.data as Articulo;

        matterData.id = fileName.replace(/\.md$/, '');

        const content = await remark()
          .use(html)
          .process(matterData.descripcion);
        matterData.descripcion = content.toString();

        return matterData;
      })
  );

  articulosCache = allPostsData;
  return articulosCache;
}

export interface Articulo {
  id: string;
  titulo: string;
  cantidad: number;
  descripcion: string;
  categoria: string;
  foto1: string;
  foto2: string;
  foto3: string;
}

export async function all(): Promise<Articulo[]> {
  return fetchArticulos();
}

export async function ids(): Promise<string[]> {
  return fetchArticulos().then(map(prop('id')));
}

export async function getById(id: string): Promise<Articulo> {
  return fetchArticulos().then(find(whereEq({ id }))) as Promise<Articulo>;
}
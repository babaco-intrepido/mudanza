import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const articulosDirectory = path.join(process.cwd(), 'content/articulos');

let articulosCache: Articulo[];

export async function fetchArticulos(): Promise<Articulo[]> {
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

        // const content = await remark()
        //   .use(html)
        //   .process(matterData.descripcion);
        // matterData.descripcion = content.toString();

        return matterData;
      })
  );

  articulosCache = allPostsData;
  return articulosCache;
}

export interface Articulo {
  titulo: string;
  cantidad: number;
  descripcion: string;
  categoria: string;
  foto1: string;
  foto2: string;
  foto3: string;
}

export default async function all(): Promise<Articulo[]> {
  return fetchArticulos();
}

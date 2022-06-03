import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
// @ts-ignore
import plainText from "remark-mdx-to-plain-text";

import { find, whereEq, map, prop, compose, uniq, isNil, filter } from "ramda";

const articulosDirectory = path.join(process.cwd(), "content/articulos");

async function remarkProcessWith(plugin: any, content: string) {
  const result = await remark().use(plugin).process(content);
  return result.toString();
}

async function hydrate(articulo: Articulo, fileName: string) {
  articulo.id = fileName.replace(/\.md$/, "");
  articulo.descripcionPlain = await remarkProcessWith(
    plainText,
    articulo.descripcion
  );
  articulo.descripcion = await remarkProcessWith(html, articulo.descripcion);

  return articulo;
}

let articulosCache: Articulo[];

function estaCompleto(articulo: Articulo) {
  return !isNil(articulo.categoria) && !isNil(articulo.precio);
}

async function fetchArticulos(): Promise<Articulo[]> {
  if (articulosCache) {
    return articulosCache;
  }

  const fileNames = fs.readdirSync(articulosDirectory);
  const articulos = await Promise.all(
    fileNames
      .filter((it) => it.endsWith(".md"))
      .map(async (fileName) => {
        // Read markdown file as string
        const fullPath = path.join(articulosDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        return hydrate(matterResult.data as Articulo, fileName);
      })
  );

  articulosCache = articulos.filter(estaCompleto);
  return articulosCache;
}

type Destino = "Vender" | "Regalar";
export interface Articulo {
  id: string;
  titulo: string;
  cantidad: number;
  descripcion: string;
  descripcionPlain: string;
  destino: Destino;
  categoria: string;
  precio: number;
  precioAnterior?: number;
  entrega?: string;
  reservado: boolean;
  foto1: string;
  foto2: string;
  foto3: string;
}

export async function todos(destino: Destino): Promise<Articulo[]> {
  return fetchArticulos().then(filter(whereEq({ destino })));
}

export async function ids(): Promise<string[]> {
  return fetchArticulos().then(map(prop("id")));
}

export async function getById(id: string): Promise<Articulo> {
  return fetchArticulos().then(find(whereEq({ id }))) as Promise<Articulo>;
}

export async function categorias(destino: Destino): Promise<string[]> {
  const articulos = await todos(destino);
  return compose(
    uniq,
    map((it: Articulo) => it.categoria)
  )(articulos);
}

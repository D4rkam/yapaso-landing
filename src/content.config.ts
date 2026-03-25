// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // <-- NUEVO

const novedadesCollection = defineCollection({
  // Reemplazamos 'type' por el nuevo 'loader'
  loader: glob({ pattern: "**/*.md", base: "./src/content/novedades" }), 
  schema: z.object({
    title: z.string(),
    date: z.date(),
    version: z.string(),
  })
});

export const collections = {
  novedades: novedadesCollection,
};
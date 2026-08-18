import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const servicios = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/servicios" }),
	schema: z.object({
		titulo: z.string(),
		h1: z.string(),
		seoTitle: z.string(),
		seoDescription: z.string(),
		resumen: z.string(),
		imagen: z.string(),
		orden: z.number(),
		faq: z
			.array(
				z.object({
					pregunta: z.string(),
					respuesta: z.string(),
				}),
			)
			.default([]),
	}),
});

export const collections = { servicios };

import { relations } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

import { GenreSong } from '@/db/schema/genreSong';

export const Genre = pgTable('genre', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
})

export const GenreRelations = relations(Genre, ({ many }) => ({
  songs: many(GenreSong),
}));

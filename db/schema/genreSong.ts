import { relations } from 'drizzle-orm';
import { pgTable, primaryKey, timestamp, uuid } from 'drizzle-orm/pg-core';

import { Genre } from '@/db/schema/genre';
import { Song } from '@/db/schema/song';

export const GenreSong = pgTable(
  'genre_song',
  {
    genreId: uuid('genre_id')
      .references(() => Genre.id, { onDelete: 'cascade' })
      .notNull(),
    songId: uuid('song_id')
      .references(() => Song.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.genreId, table.songId] }),
  }),
);

export const GenreSongRelations = relations(GenreSong, ({ one }) => ({
  song: one(Song, {
    fields: [GenreSong.songId],
    references: [Song.id],
  }),
  genre: one(Genre, {
    fields: [GenreSong.genreId],
    references: [Genre.id],
  }),
}));

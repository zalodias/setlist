import { relations } from 'drizzle-orm';
import { integer, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { Artist } from '@/db/schema/artist';
import { GenreSong } from '@/db/schema/genreSong';
import { SetSong } from '@/db/schema/setSong';

export const Song = pgTable('song', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  key: text('key'),
  tempo: integer('tempo'),
  duration: integer('duration'),
  artistId: uuid('artist_id').references(() => Artist.id, {
    onDelete: 'cascade',
  }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const SongRelations = relations(Song, ({ one, many }) => ({
  genres: many(GenreSong),
  artist: one(Artist, {
    fields: [Song.artistId],
    references: [Artist.id],
  }),
  sets: many(SetSong),
}));

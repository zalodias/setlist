import { relations } from 'drizzle-orm';
import { pgTable, primaryKey, timestamp, uuid } from 'drizzle-orm/pg-core';

import { Set } from '@/db/schema/set';
import { Song } from '@/db/schema/song';

export const SetSong = pgTable(
  'set_song',
  {
    setId: uuid('set_id')
      .references(() => Set.id, { onDelete: 'cascade' })
      .notNull(),
    songId: uuid('song_id')
      .references(() => Song.id, { onDelete: 'cascade' })
      .notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.setId, table.songId] }),
  }),
);

export const SetSongRelations = relations(SetSong, ({ one }) => ({
  song: one(Song, {
    fields: [SetSong.songId],
    references: [Song.id],
  }),
  set: one(Set, {
    fields: [SetSong.setId],
    references: [Set.id],
  }),
}));

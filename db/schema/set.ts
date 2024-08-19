import { relations } from 'drizzle-orm';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

import { SetSong } from '@/db/schema/setSong';
import { User } from '@/db/schema/user';

export const Set = pgTable('set', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  userId: uuid('user_id')
    .notNull()
    .references(() => User.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const SetRelations = relations(Set, ({ one, many }) => ({
  songs: many(SetSong),
  user: one(User, {
    fields: [Set.userId],
    references: [User.id],
  }),
}));

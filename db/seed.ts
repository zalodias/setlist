import 'dotenv/config';
import { db } from './index';
import * as schema from './schema';
import * as seeds from './seeds';

for (const table of [
  schema.Artist,
  schema.Genre,
  schema.Song,
  schema.User,
  schema.Set,
  schema.Genre,
  schema.SetSong,
]) {
  await db.delete(table);
}

await seeds.Artist(db);
await seeds.Genre(db);
await seeds.Song(db);
await seeds.User(db);
await seeds.Set(db);
await seeds.GenreSong(db);
await seeds.SetSong(db);

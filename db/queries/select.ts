import { db } from '@/db/index';
import { Set, Song } from '@/db/schema';

export async function getSongs() {
  const songs = await db
    .select({
      id: Song.id,
      name: Song.name,
      key: Song.key,
      duration: Song.duration,
    })
    .from(Song);

  return songs;
}

export async function getSets() {
  const sets = await db
    .select({
      id: Set.id,
      name: Set.name,
    })
    .from(Set);

  return sets;
}

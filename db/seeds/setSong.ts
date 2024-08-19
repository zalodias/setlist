import { db } from '../index';
import { Set, SetSong, Song } from '../schema';

export async function seed(db: db) {
  const sets = await db.select().from(Set);
  const songs = await db.select().from(Song);

  const setSongs = [
    { setId: sets[0].id, songId: songs[0].id },
    { setId: sets[0].id, songId: songs[1].id },
    { setId: sets[0].id, songId: songs[2].id },
    { setId: sets[1].id, songId: songs[3].id },
    { setId: sets[1].id, songId: songs[4].id },
    { setId: sets[2].id, songId: songs[5].id },
    { setId: sets[2].id, songId: songs[6].id },
    { setId: sets[3].id, songId: songs[7].id },
    { setId: sets[3].id, songId: songs[8].id },
    { setId: sets[4].id, songId: songs[9].id },
  ];

  for (const setSong of setSongs) {
    await db.insert(SetSong).values(setSong);
  }
}

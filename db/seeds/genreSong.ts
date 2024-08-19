import { db } from '../index';
import { Genre, GenreSong, Song } from '../schema';

export async function seed(db: db) {
  const genres = await db.select().from(Genre);
  const songs = await db.select().from(Song);

  const genreSongs = [
    { genreId: genres[0].id, songId: songs[0].id },
    { genreId: genres[0].id, songId: songs[1].id },
    { genreId: genres[5].id, songId: songs[1].id },
    { genreId: genres[1].id, songId: songs[3].id },
    { genreId: genres[2].id, songId: songs[4].id },
    { genreId: genres[1].id, songId: songs[5].id },
    { genreId: genres[1].id, songId: songs[6].id },
    { genreId: genres[0].id, songId: songs[7].id },
    { genreId: genres[6].id, songId: songs[8].id },
    { genreId: genres[1].id, songId: songs[9].id },
    { genreId: genres[3].id, songId: songs[9].id },
  ];

  for (const genreSong of genreSongs) {
    await db.insert(GenreSong).values(genreSong);
  }
}

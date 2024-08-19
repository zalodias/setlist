import { db } from '../index';
import { Artist, Song } from '../schema';

export async function seed(db: db) {
  const artists = await db.select().from(Artist);

  const songs = [
    {
      name: 'Hey Jude',
      tonality: 'F',
      tempo: 74,
      duration: 431,
      artistId: artists[0].id,
    },
    {
      name: 'Bohemian Rhapsody',
      tonality: 'Bb',
      tempo: 72,
      duration: 354,
      artistId: artists[1].id,
    },
    {
      name: 'Enter Sandman',
      tonality: 'E',
      tempo: 120,
      duration: 302,
      artistId: artists[2].id,
    },
    {
      name: 'Shake It Off',
      tonality: 'G',
      tempo: 160,
      duration: 219,
      artistId: artists[3].id,
    },
    {
      name: 'Humble',
      tonality: 'A',
      tempo: 150,
      duration: 178,
      artistId: artists[4].id,
    },
    {
      name: 'Hello',
      tonality: 'F',
      tempo: 77,
      duration: 295,
      artistId: artists[5].id,
    },
    {
      name: 'Shape of You',
      tonality: 'G',
      tempo: 96,
      duration: 233,
      artistId: artists[6].id,
    },
    {
      name: 'Viva La Vida',
      tonality: 'C',
      tempo: 138,
      duration: 242,
      artistId: artists[7].id,
    },
    {
      name: 'Radioactive',
      tonality: 'D',
      tempo: 110,
      duration: 187,
      artistId: artists[8].id,
    },
    {
      name: 'Uptown Funk',
      tonality: 'G',
      tempo: 115,
      duration: 270,
      artistId: artists[9].id,
    },
  ];

  for (const song of songs) {
    await db.insert(Song).values(song);
  }
}

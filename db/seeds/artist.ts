import { db } from '../index';
import { Artist } from '../schema';

export async function seed(db: db) {
  const artists = [
    { name: 'The Beatles' },
    { name: 'Queen' },
    { name: 'Metallica' },
    { name: 'Taylor Swift' },
    { name: 'Kendrick Lamar' },
    { name: 'Adele' },
    { name: 'Ed Sheeran' },
    { name: 'Coldplay' },
    { name: 'Imagine Dragons' },
    { name: 'Bruno Mars' },
  ];

  for (const artist of artists) {
    await db.insert(Artist).values(artist);
  }
}

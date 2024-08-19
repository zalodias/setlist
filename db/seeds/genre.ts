import { db } from '../index';
import { Genre } from '../schema';

export async function seed(db: db) {
  const genres = [
    { name: 'Rock' },
    { name: 'Pop' },
    { name: 'Hip Hop' },
    { name: 'R&B' },
    { name: 'Country' },
    { name: 'Metal' },
    { name: 'Electronic' },
    { name: 'Folk' },
    { name: 'Classical' },
    { name: 'Jazz' },
  ];

  for (const genre of genres) {
    await db.insert(Genre).values(genre);
  }
}

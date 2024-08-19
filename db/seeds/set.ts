import { db } from '../index';
import { Set, User } from '../schema';

export async function seed(db: db) {
  const users = await db.select().from(User);

  const sets = [
    { name: 'Summer Festival 2024', userId: users[0].id },
    { name: 'Acoustic Night', userId: users[1].id },
    { name: 'Rock Classics', userId: users[0].id },
    { name: 'Jazz Club Set', userId: users[2].id },
    { name: 'Wedding Reception Playlist', userId: users[1].id },
  ];

  for (const set of sets) {
    await db.insert(Set).values(set);
  }
}

import { db } from '../index';
import { User } from '../schema';

export async function seed(db: db) {
  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'securepass',
    },
    {
      name: 'Bob Johnson',
      email: 'bob@example.com',
      password: 'bobspassword',
    },
  ];

  for (const user of users) {
    await db.insert(User).values(user);
  }
}

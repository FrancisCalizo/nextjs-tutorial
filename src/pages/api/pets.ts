import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllPets(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow GET Requests
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get ONLY!' });
  }

  const db = await sqlite.open('./mydb.sqlite');
  const pets = await db.all('SELECT * FROM pet');

  res.json(pets);
}

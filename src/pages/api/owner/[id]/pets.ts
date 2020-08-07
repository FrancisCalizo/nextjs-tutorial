import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

const getAllPetsByPerson = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // Only allow GET Requests
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get ONLY!' });
  }

  const db = await sqlite.open('./mydb.sqlite');
  const pets = await db.all('SELECT * FROM pet where ownerId = ?', [
    req.query.id,
  ]);

  res.json(pets);
};

export default getAllPetsByPerson;

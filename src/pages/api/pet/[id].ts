import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

const getPetByOwner = async (req: NextApiRequest, res: NextApiResponse) => {
  // Only allow GET Requests
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get ONLY!' });
  }

  const db = await sqlite.open('./mydb.sqlite');
  const pet = await db.get('SELECT * FROM pet where id = ?', [req.query.id]);

  res.json(pet);
};

export default getPetByOwner;

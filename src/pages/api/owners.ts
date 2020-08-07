import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getOwners(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open('./mydb.sqlite');
  const owners = await db.all('SELECT * FROM owner');

  res.json(owners);
}

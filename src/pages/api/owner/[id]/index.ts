import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

const getOwnerById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open('./mydb.sqlite');

  if (req.method === 'PUT') {
    const statement = await db.prepare(
      'UPDATE owner SET name = ?, email = ? where id = ?'
    );
    const result = await statement.run(
      req.body.name,
      req.body.email,
      req.query.id
    );

    result.finalize();
  }

  const owner = await db.get('SELECT * FROM owner where id = ?', [
    req.query.id,
  ]);

  res.json(owner);
};

export default getOwnerById;

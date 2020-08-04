import { NextApiRequest, NextApiResponse } from 'next';

export default function getOwners(req: NextApiRequest, res: NextApiResponse) {
  res.json({ owners: 'Billy Bob' });
}

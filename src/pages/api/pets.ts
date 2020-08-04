import { NextApiRequest, NextApiResponse } from 'next';

export default function getAllPets(req: NextApiRequest, res: NextApiResponse) {
  // Only allow GET Requests
  if (req.method !== 'GET') {
    res.status(500).json({ message: 'get ONLY!' });
  }

  res.json({ hello: 'world', method: req.method });
}

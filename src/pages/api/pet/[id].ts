import { NextApiRequest, NextApiResponse } from 'next';

const getPetByOwner = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id });
};

export default getPetByOwner;

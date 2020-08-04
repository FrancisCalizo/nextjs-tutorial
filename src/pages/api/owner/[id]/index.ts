import { NextApiRequest, NextApiResponse } from 'next';

const getOwnerById = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id });
};

export default getOwnerById;

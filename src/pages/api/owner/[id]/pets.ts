import { NextApiRequest, NextApiResponse } from 'next';
import getAllPets from '../../pets';

const getAllPetsByPerson = (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ byId: req.query.id });
};

export default getAllPetsByPerson;

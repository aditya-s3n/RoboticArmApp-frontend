import type { NextApiRequest, NextApiResponse } from 'next'
import { nameObject, presetObject } from '@/utils/makeRequest';

type Data = {
  name: string,
  preset: string
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: nameObject, preset: presetObject });
}

export default handler;
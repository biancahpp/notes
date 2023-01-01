import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc()
    .get((req: NextApiRequest, res: NextApiResponse) => {
        res.json({message: "get"})
    })
    .post((req: NextApiRequest, res: NextApiResponse) => {
        res.json({message: "post"})
    })

export default handler;
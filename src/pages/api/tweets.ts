// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Tweet } from "./../tweet/index";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Tweet[]>
) {
  res
    .status(200)
    .json([
      { content: "Abracadabra 1!" },
      { content: "Abracadabra 2!" },
      { content: "Abracadabra 3!" },
      { content: "Abracadabra 4!" },
    ]);
}

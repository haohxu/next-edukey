// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function testHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const testResult = prisma.course.findFirst({});
  res.status(200).json(testResult);
}
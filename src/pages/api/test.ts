// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma'
import { findAllOccupationDescriptions } from '@/lib/read_database'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function testHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const testResult = await findAllOccupationDescriptions();
  res.status(200).json(testResult);
}
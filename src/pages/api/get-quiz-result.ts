// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function getQuizResult(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    console.log(req.body);
  }

  // TODO: add error handling


  
  // res.status(200).json({ name: 'John Doe' })

  const occupationResult = await prisma.division.findMany({
    where: { anzsic_division: {in: ['Accommodation and Food Services']} },
    include: {
      division_course: {
        include : { 
          course: {
            include : { 
              course_occupation: {
                include: { 
                  occupation: true }} }} }}},
    
  });

  let occupationList = occupationResult
    .flatMap((item) => item.division_course)
    .map((item) => item.course)
    .flatMap((item) => item.course_occupation)
    .map((item) => item.occupation)
    .filter((value, index, self) => index === self.findIndex( (t) => (t.anzsco === value.anzsco)  ));

  let occupationANZList = occupationList.map((item) => item.anzsco);

  const courseResult = await prisma.occupation.findMany({
    where: { anzsco: {in : occupationANZList} },
    include: {
      course_occupation: {
        include: {
          course: {
            include: {
              course_provider: {
                include: {
                  provider: {
                    include: {
                      geo_location: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })

  let newOccupationList = courseResult
    .map((item) => {
      {
        item.course_occupation.map((t) => t.course);
        return item;
      }
    });
  
  console.log(JSON.stringify(courseResult));

  res
    .status(200)
    .json(newOccupationList);
}
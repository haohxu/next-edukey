export interface StatisticArticleType {
  id: number
  title: string,
  description: string,
  content: string[],
  dateTime: string,
  author: string,
  timeToRead: string,
  image: string,
}

const articles: StatisticArticleType[] = [
  {
    id: 0,
    title: 'Non-conventional education pathways in Australia',
    description: "If you're a parent or guardian looking for suitable courses and study options for your pupil, search no further you're at right place! Conventional pathway to... ",
    content: [
      "If you're a parent or guardian looking for suitable courses and study options for your pupil, search no further you're at right place!",
      "Conventional pathway to pursue a University degree could be quite daunting at times! If you think it's overwhelming to take it in while you're in Highschool or know someone who's facing this challenge, ask them to take it easy, and not worry! Because there's ocean of opportunities ahead them apart from stereotypical educational degree, more suitable to their skills and interests.",
      "Once you've identified your passion, there are multiple Enabling courses offered at many reputed Universities. There are some Outreach programs which let you acquire the hands-on skills to support your communities. If you'd like to take small step at a time, you can consider taking Bridging courses which cover a lot of pre-requisites for advanced studies and gives you gist of the domain at the same time. Among numerous entry points to higher education, TAFE and VET are most successful yet. In terms of earning more at the comfort of choosing your own time and efforts, laborious skilled jobs are on the top! ANZSCO has a list of jobs that are in demand for next few years, and you may consider it as starting point to explore through the courses offered in your nearest technical institute.",
      "You may also consider career expos and networking events to understand different avenues that you'd like to spend your time upon.", 
      "Excited to start on your adventurous journey?", 
      "Explore different pathways suitable to your interests using our Getting to know your interests. Or you can get in touch with your local TAFE, VET institute, talk to your School course counsellor, or contact a professional career guide, who can help you identify specific pathway for you."

    ],
    dateTime: 'April 5, 2023',
    author: '',
    timeToRead: '3 min',
    image: '/static/article-0.png'
  },
  {
    id: 1,
    title: 'Salary earnings for TAFE/VET grads',
    description: "Considering the high cost of university costs, you would think those students who go to the university end up earning more than anyone else, but that is not the case.",
    content: ["Considering the high cost of university costs, you would think those students who go to the university end up earning more than anyone else, but that is not the case. The average annual starting salary of VET/TAFE graduates is $2,000 higher than that of average university students. For example, a qualified electrician can start out on $62,000, which is more than accountants and teachers. Those who have six months experience after completing a Certificate IV can earn an average of $63,000 with a full-time job. In comparison, under 25 (year olds) graduates with bachelor’s degrees earn a median starting salary about $52,350."],
    dateTime: 'April 2, 2023',
    author: '',
    timeToRead: '2 min', 
    image: '/static/article-1.png', 
  },
  {
    id: 2,
    title: 'Success stories for TAFE/VET grads',
    description: "An apprentice of the Australian school Apprenticeship program at St Patrick's Technical College in Adelaide started their apprenticeship while they were still at school", 
    content: [
      "An apprentice of the Australian school Apprenticeship program at St Patrick's Technical College in Adelaide started their apprenticeship while they were still at school; it enabled them to complete their Year 12 and start the career early.", 
      "After they completed Year 10, they began on-site work with elec   tricians in residential, commercial and industrial construction. Therefore when they finished their Year 12, they had two years of work experience over their peers, which made them more competitive in the job market. 'I knew the industry I wanted to be in, but I had no idea that there were so many careers and opportunities available in the field of electrotechnology.' they said.",
      "Finally, they found out what they liked and now they've decided that “electrician” is the type of job they like. Now they're studying for a Certificate III in Electrotechnology. They enjoyed their study since they're earning money to train themself for a career that they know will love.", 
      "Another example is Caitlin, who won the Australian Training Award 2014. She started a two-year VET course in allied health during Year 10, and then she found the health industry was suitable for her.", 
      "She interviewed and became an Australian School Apprentice at Blue Cross Willowmeade Aged Care Home. She balanced her remainder study and a Certificate III in Aged Care.", 
      "'An Australian School-based Apprenticeship prepared me to become a nurse', Caitlin says.", 
      "She learned what is required in a health-related job and therefore grew the passion for caring elderly. She was supported at TAFE and at work, she is also encouraged to develop the ability to solve problems herself.", 
      "Caitlin used her vocational pathway as a stepping stone to university, she is now undertaking a Bachelor of Nursing, and she believes that her experience in industry can be an advantage.", 
      "In this case, Australian School-based Apprenticeship allows Caitlin to experience new job opportunities and helps to choose a career path. She plans to work as a paediatric nurse at a hospital in Melbourne after study in university.", 
      "That's the great thing about Australian School-based Apprenticeships, even after TAFE, you still have a chance to access university if you want to explore your career."
    ],
    dateTime: 'April 1, 2023',
    author: '',
    timeToRead: '6 min',
    image: '/static/article-2.png'
  },
  {
    id: 3,
    title: 'TAFE/VET vs University:',
    description: "TAFE/VET is considered on the same level as University. It is alright for your children to attend TAFE/VET instead of attending the university.", 
    content: [
      "TAFE/VET is considered on the same level as University. It is alright for your children to attend TAFE/VET instead of attending the university. Here are the reasons:", 
      "1. TAFE/VET is an education institute emphasising skill-based learning, while the university will focus on the theoretical aspects. If your children know they are suitable for this learning approach, it is a good idea for them to try it on VET. Also, you can go back to university in the future, if your child wants to enroll.",
      "2. TAFE/VET requires around 6 months to 2 years to finish the course. On the other hand, the university requires 3 to 4 years to graduate. Regarding the following, the costs for these two education institutes are entirely different. The university costs more than TAFE/VET fee. Also, some TAFE/VET are government subsidised so some qualifications in these institutes are free. For university, to get a free tuition fee, the children need to get a scholarship. Considering the information above, TAFE/VET is considered one of the great options for your children if they do not prefer conventional education.",
      "3. TAFE/VET is suitable for your children who want to do job that requires a skill-based approach only such as plumbers, electricians, and many more. They can do the same job as university students as well such as business administration, accountant, nursing, and many more careers.",
      "According to all the provided information, it is a good idea to allow the children to enroll in TAFE/VET."
    ],
    dateTime: 'April 1, 2023',
    author: '',
    timeToRead: '6 min',
    image: '/static/article-3.png'
  },
]

const all_statistic_articles = () => {
  return articles;
}

export const top_three_articles = () => {
  return articles.slice(0, 3);
}

export default all_statistic_articles


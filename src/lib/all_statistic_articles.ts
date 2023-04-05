export interface StatisticArticleType {
  id: number
  title: string,
  description: string,
  content: string[],
  dateTime: string,
  author: string,
  timeToRead: string,
}

const articles: StatisticArticleType[] = [
  {
    id: 0,
    title: 'Non-conventional education pathways in Australia',
    description: "If you're a parent or guardian looking for suitable courses and study options for your pupil, search no further you're at right place!",
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
    timeToRead: '3 min'
  },
  {
    id: 1,
    title: 'Salary earnings for TAFE/VET grads',
    description: "Considering high cost of university costs, you would think those students who go to the university would earn more than TAFE, but that is not in the case.",
    content: ["Considering high cost of university costs, you would think those students who go to the university would earn more than TAFE, but that is not in the case. The average annual starting salary of VET/TAFE graduates is $2,000 higher than that of ordinary university students. For example, a qualified electricians can start out on $62,000, which is more than accountants and teachers. Those who has six months experience after completing a Certificate IV can earn an average of $63,000 with a full-time job. Although the average salary of Certificate III and Certificate II is about $48,400 and $44,200, which is much lower than Certificate IV. In comparison, under 25 graduates with bachelor\'s degrees earns a median starting salary about $52,350."],
    dateTime: 'April 2, 2023',
    author: '',
    timeToRead: '2 min'
  },
  {
    id: 2,
    title: 'Success stories for TAFE/VET grads',
    description: "Alex Nikielski is an apprentice of an Australian school in electrotechnology. He started his apprenticeship while he was still at school; it enabled him to complete his Year 12 Certificate and start the career early.", 
    content: [
      "Alex Nikielski is an apprentice of an Australian school in electrotechnology. He started his apprenticeship while he was still at school; it enabled him to complete his Year 12 Certificate and start the career early.", 
      "After he completed Year 10, he began on-site work with electricians in residential, commercial and industrial construction. Therefore when he finishes his Year 12, he has two years more work experience than his peers, which makes him more competitive in the job market.",
      '"I knew the industry I wanted to be in, but I had no idea that there were so many careers and opportunities available in the field of electrotechnology." He said.',
      "Finally, Alex found out he liked the industrial side, and now he realizes electrician is the type of job he likes.",
      "Alex started his Australian School-based Apprenticeship at St Patrick's Technical College in Adelaide, and now he is studying for a Certificate III in Electrotechnology. He enjoyed his study since he is earning money to train for a career that he knows he will love. The best thing for him is that he knows he will have a high paying career and doing something he loves.",
      "Another example is Caitlin Maher, who won the Australian Training Award 2014. She started a two-year VET course in allied health during Year 10, and then she found the health industry was suitable for her.", 
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
  },
]

const all_statistic_articles = () => {
  return articles;
}

export const top_three_articles = () => {
  return articles.slice(0, 3);
}

export default all_statistic_articles


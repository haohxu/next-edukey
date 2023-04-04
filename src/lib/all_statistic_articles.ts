export interface StatisticArticleType {
  id: number
  title: string,
  description: string,
  content: string,
  dateTime: string,
  author: string,
}

const articles: StatisticArticleType[] = [
  {
    id: 0,
    title: 'Title 1',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done
    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
    tortor, mattis nec lacus non, placerat congue elit.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
    tortor, mattis nec lacus non, placerat congue elit.`,
    dateTime: '2023-04-04',
    author: 'Me',
  },
  {
    id: 1,
    title: 'Title 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done
    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
    tortor, mattis nec lacus non, placerat congue elit.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
    tortor, mattis nec lacus non, placerat congue elit.`,
    dateTime: '2023-04-04',
    author: 'Me',
  },
  {
    id: 2,
    title: 'Title 3',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Done
    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
    tortor, mattis nec lacus non, placerat congue elit.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
    pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
    imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
    sapien. Suspendisse placerat vulputate posuere. Curabitur neque
    tortor, mattis nec lacus non, placerat congue elit.`,
    dateTime: '2023-04-04',
    author: 'Me',
  },
]

const all_statistic_articles = () => {
  return articles;
}

export const top_three_articles = () => {
  return articles.slice(0, 3);
}

export default all_statistic_articles


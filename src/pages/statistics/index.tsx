import ArticlePreview from "@/components/statistics/articlePreview";
import BasicStatistics from "@/components/statistics/statisticsWithIcons";
import { top_three_articles } from "@/lib/all_statistic_articles";
import { Container, Divider } from "@chakra-ui/react";


export default function StatisticsPage() {
  const statisticArticleList = top_three_articles();
  
  return (
    <Container maxWidth={'1600px'}>
      {/* Three Key Points */}
      <BasicStatistics></BasicStatistics>
      <Divider marginY={20}></Divider>
      <ArticlePreview articlePreview={statisticArticleList}></ArticlePreview>
    </Container>
  )
}
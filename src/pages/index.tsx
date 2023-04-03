import Head from "next/head"
import CallToAction from "@/components/indexpage/cta"

export default function IndexPage() {
  return (
    <>
    <Head >
      <title>EduKey</title>
      {/* <title>EduKey</title>
      <meta name="description" content="Find alternative education pathways for high school students in Australia" /> */}
    </Head>
    <CallToAction ></CallToAction>
    </>
  )
}

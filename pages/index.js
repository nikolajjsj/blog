import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import BlogCard from '../components/blogCard'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      {allPostsData.map(({ id, date, title, description, readTime }, index) => (
        <BlogCard
          key={index}
          id={id}
          date={date}
          title={title}
          description={description}
          readTime={readTime}
        />
      ))}
    </Layout>
  )
}

import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import styles from './post.module.css'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return { props: { postData } }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <div className={styles.post}>
        <h1 className={styles.post__title}>{postData.title}</h1>
        <p>{postData.date} - {postData.readTime}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  )
}

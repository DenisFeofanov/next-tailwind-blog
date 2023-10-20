import Layout from "@/components/Layout";
import MorePosts from "@/components/MorePosts";
import PreviewPost from "@/components/PreviewPost";
import { Post } from "@/interfaces/Post";
import { getAllPostsForHome } from "@/lib/api";

export default function Home({ allPosts }: { allPosts: Post[] }) {
  return (
    <Layout home>
      <PreviewPost post={allPosts[0]} />

      <MorePosts />
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  return {
    props: { allPosts },
  };
}

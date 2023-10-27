import Layout from "@/components/Layout";
import MorePosts from "@/components/MorePosts";
import PreviewPost from "@/components/PreviewPost";
import { Post } from "@/interfaces/Post";
import { getAllPostsForHome } from "@/lib/api";

export default function Home({ allPosts }: { allPosts: Post[] }) {
  const previewPost = allPosts[0];
  const morePosts = allPosts.slice(1, 3);
  return (
    <Layout home>
      {allPosts.length > 0 ? (
        <>
          <PreviewPost post={previewPost} />

          <MorePosts posts={morePosts} />
        </>
      ) : (
        <p>No content</p>
      )}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];

  return {
    props: { allPosts },
  };
}

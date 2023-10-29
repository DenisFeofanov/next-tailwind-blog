import Layout from "@/components/Layout";
import MorePosts from "@/components/MorePosts";
import PreviewPost from "@/components/PreviewPost";
import { Post } from "@/interfaces/Post";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";

export default function Home({ allPosts }: { allPosts: Post[] }) {
  const previewPost = allPosts[0];
  const morePosts = allPosts.slice(1, 3);
  return (
    <Layout home>
      <Head>
        <title>Cat&apos;s life</title>
      </Head>
      {allPosts.length > 0 ? (
        <>
          <PreviewPost post={previewPost} />

          <MorePosts posts={morePosts} />
        </>
      ) : (
        <h2 className="text-black text-4xl tracking-tight font-bold">
          No posts found
        </h2>
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

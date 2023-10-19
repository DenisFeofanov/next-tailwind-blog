import Layout from "@/components/Layout";
import MorePosts from "@/components/MorePosts";
import PreviewPost from "@/components/PreviewPost";

export default function Home() {
  return (
    <Layout home>
      <PreviewPost />

      <MorePosts />
    </Layout>
  );
}

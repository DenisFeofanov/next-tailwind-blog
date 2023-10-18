import Layout from "@/components/Layout";
import PreviewPost from "@/components/PreviewPost";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <PreviewPost />
    </Layout>
  );
}

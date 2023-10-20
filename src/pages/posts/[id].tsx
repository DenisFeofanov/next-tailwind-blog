import Author from "@/components/Author";
import Date from "@/components/Date";
import Layout from "@/components/Layout";
import Text from "@/components/Text";
import { posts } from "@/data/posts";
import { Post } from "@/interfaces/Post";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  post: Post;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const slugs: string[] = ["path1", "path2"];
  const paths = slugs.map(id => {
    return {
      params: {
        id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  return { props: { post: posts[0] } };
};

export default function Post({
  post: { coverImage, title, excerpt, author, date },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout>
        <h1 className="text-black text-8xl font-bold leading-tight tracking-[-0.25rem]">
          {title}
        </h1>

        <Author className="mt-3" author={author} />

        <Image
          className="mt-12"
          src={coverImage}
          width={1496}
          height={748}
          alt="Preview post cover"
        />

        <article className="w-[45%] mx-auto">
          <Date className="mt-16">{date}</Date>
          <Text className="mt-6">{excerpt}</Text>
        </article>
      </Layout>
    </>
  );
}

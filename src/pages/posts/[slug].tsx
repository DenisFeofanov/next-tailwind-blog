import Author from "@/components/Author";
import CoverImage from "@/components/CoverImage";
import Date from "@/components/Date";
import Layout from "@/components/Layout";
import Text from "@/components/Text";
import { Post } from "@/interfaces/Post";
import { getPostBySlug, getPostsSlugs } from "@/lib/api";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface Props {
  post: Post;
}

export default function Post({
  post: { coverImage, title, excerpt, author, date },
}: Props) {
  return (
    <>
      <Layout>
        <h1 className="text-black text-8xl font-bold leading-tight tracking-[-0.25rem]">
          {title}
        </h1>

        <Author className="mt-3" author={author} />

        <CoverImage
          className="mt-12"
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />

        <article className="w-[45%] mx-auto">
          <Date className="mt-16">{date}</Date>
          <Text className="mt-6">{excerpt}</Text>
        </article>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await getPostsSlugs();
  const paths = posts.map(post => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const post = await getPostBySlug(params!.slug);
  return { props: { post } };
};

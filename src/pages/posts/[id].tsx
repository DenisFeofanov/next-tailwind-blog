import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

interface Props {
  content: string;
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
  // we use dynamic paths here, so no undefined for sure
  const { id } = context.params!;
  return { props: { content: `It's page ${id}` } };
};

export default function Post({
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <>{content}</>;
}

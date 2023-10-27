import { Post } from "@/interfaces/Post";
import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import Date from "./Date";
import Text from "./Text";

interface Props {
  posts: Post[];
}

function MorePosts({ posts }: Props) {
  // take second and third posts
  return (
    <section className="mt-28">
      <h2 className="text-black text-7xl/tight font-bold tracking-tighter">
        More Stories
      </h2>

      <div className="mt-8 flex items-start gap-32">
        {posts.map(({ title, coverImage, date, excerpt, author, slug }) => (
          <Link href={`/posts/${slug}`} key={title}>
            <CoverImage
              title={title}
              responsiveImage={coverImage.responsiveImage}
            />

            <h3 className="mt-5 text-black text-3xl leading-10">{title}</h3>

            <Date className="mt-3">{date}</Date>

            <Text className="mt-4">{excerpt}</Text>

            <Author className="mt-4" author={author} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default MorePosts;

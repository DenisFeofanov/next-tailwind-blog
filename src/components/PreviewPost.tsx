import { Post } from "@/interfaces/Post";
import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import Date from "./Date";
import Text from "./Text";

interface Props {
  post: Post;
}

function PreviewPost({ post }: Props) {
  const { coverImage, title, excerpt, author, date, slug } = post;

  return (
    <section>
      <Link href={`/posts/${slug}`}>
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />

        <div className="mt-16 flex justify-between items-start gap-20">
          <div className="flex-[2_1_40%]">
            <h3 className="text-black text-5xl/tight break-word">{title}</h3>

            <Date className="mt-4">{date}</Date>
          </div>

          <div className="flex-[3_1_60%]">
            <Text>{excerpt}</Text>
            <Author className="mt-4" author={author} />
          </div>
        </div>
      </Link>
    </section>
  );
}

export default PreviewPost;

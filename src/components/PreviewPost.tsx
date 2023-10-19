import { posts } from "@/data/posts";
import Image from "next/image";
import Author from "./Author";
import Date from "./Date";
import Text from "./Text";

function PreviewPost() {
  const { cover, heading, text, author_avatar, author_name, date } = posts[0];
  return (
    <section>
      <Image src={cover} width={1496} height={748} alt="Preview post cover" />

      <div className="mt-16 flex justify-between items-start gap-20">
        <div className="flex-[2_1_40%]">
          <h3 className="text-black text-5xl/tight break-word">{heading}</h3>

          <Date className="mt-4">{date}</Date>
        </div>

        <div className="flex-[3_1_60%]">
          <Text>{text}</Text>
          <Author
            className="mt-4"
            author_avatar={author_avatar}
            author_name={author_name}
          />
        </div>
      </div>
    </section>
  );
}

export default PreviewPost;

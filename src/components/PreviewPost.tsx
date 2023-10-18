import Image from "next/image";
import Date from "./Date";
import { posts } from "@/data/posts";

function PreviewPost() {
  const { cover, heading, text, author_avatar, author_name, date } = posts[0];
  return (
    <section className="mt-12">
      <Image src={cover} width={1496} height={748} alt="Preview post cover" />

      <div className="mt-16 flex justify-between items-start gap-20">
        <div className="flex-[2_1_40%]">
          <h3 className="text-black text-5xl/tight break-word">{heading}</h3>

          <Date date={date} className="mt-4" />
        </div>

        <div className="flex-[3_1_60%]">
          <p className="text-black text-lg break-word">{text}</p>
          <div className="flex items-center gap-4 mt-4">
            <Image
              src={author_avatar}
              width={48}
              height={48}
              alt="Author's avatar"
            />

            <p className="text-black text-xl font-bold">{author_name}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewPost;

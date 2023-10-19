import { posts } from "@/data/posts";
import Image from "next/image";
import Author from "./Author";
import Date from "./Date";

function MorePosts() {
  // take second and third posts
  const morePosts = posts.slice(1, 3);
  return (
    <section className="mt-28">
      <h2 className="text-black text-7xl/tight font-bold tracking-tighter">
        More Stories
      </h2>

      <div className="mt-8 flex items-start gap-32">
        {morePosts.map(post => (
          <div key={post.heading}>
            <Image src={post.cover} width={681} height={340} alt="Post cover" />

            <h3 className="mt-5 text-black text-3xl leading-10">
              {post.heading}
            </h3>

            <Date className="mt-3">{post.date}</Date>

            <p className="text-black text-lg mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Praesent elementum facilisis leo vel fringilla est ullamcorper
              eget. At imperdiet dui accumsan sit amet nulla facilities morbi
              tempus.
            </p>

            <Author
              className="mt-4"
              author_avatar={post.author_avatar}
              author_name={post.author_name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MorePosts;

interface Post {
  cover: string;
  heading: string;
  text: string;
  author_avatar: string;
  author_name: string;
}

export const posts: Post[] = [
  {
    cover: "/post-image.png",
    heading: "Dynamic Routing and Static Generation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est    ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus",
    author_avatar: "/user-logo.png",
    author_name: "JJ Kasper",
  },
];

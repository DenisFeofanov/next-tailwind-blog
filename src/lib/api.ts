import { Post, PostSlug } from "@/interfaces/Post";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(
  query: string,
  { variables = {}, preview = false } = {}
) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPostsSlugs(): Promise<PostSlug[]> {
  const data = await fetchAPI(
    `
    {
      allPosts {
        slug
      }
    }
    `
  );
  return data.allPosts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        title
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000}) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          avatar {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
          }
        }
      }
    }
    ${responsiveImageFragment}
    `,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data.post;
}

export async function getAllPostsForHome(preview: boolean): Promise<Post[]> {
  const data = await fetchAPI(
    `
    {
      allPosts(orderBy: date_ASC, first: 3) {
        title
        slug
        excerpt
        date
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        author {
          name
          avatar {
            url(imgixParams: {fm: jpg, fit: crop, w: 100, h: 100})
          }
        }
      }
    }

    ${responsiveImageFragment}
  `,
    { preview }
  );
  return data.allPosts;
}

import { MetadataRoute } from "next";
import { getClient, NewsQuery } from "../graphql/graphql.ts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getClient().query(NewsQuery, {});

  const blogEntries: MetadataRoute.Sitemap =
    data?.allNews.news.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/article?slug=${blog.slug}`,
      lastModified: blog?.date ? new Date(blog.date as string) : undefined,

      priority: 0.9,
    })) ?? [];

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date("2024-09-01"),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date("2024-08-31"),
    },
    ...blogEntries,
  ];
}

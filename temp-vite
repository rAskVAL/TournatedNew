import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { request, gql } from "graphql-request";
import sitemap from "vite-plugin-sitemap";

const fetchAllNewsSlugs = async () => {
  const query = gql`
    query {
      allNews(sortBy: "date", filter: { isDisplayLanding: true }) {
        news {
          slug
        }
      }
    }
  `;

  try {
    const data = await request("https://api.tournated.com/graphql", query);
    const slugs = data.allNews.news.map(
      (newsItem: { slug: string }) => `/blog/article?slug=${newsItem.slug}`,
    );
    console.log(slugs);
    return slugs;
  } catch (error) {
    console.error("Error fetching news slugs:", error);
    return [];
  }
};

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const dynamicRoutes = await fetchAllNewsSlugs();

  return {
    plugins: [
      react(),
      svgr(),
      sitemap({
        hostname: "https://tournated.com",
        dynamicRoutes: ["/", "/about", "/news", ...dynamicRoutes],
        readable: true, // Optional: makes the sitemap.xml readable
      }),
    ],
  };
});

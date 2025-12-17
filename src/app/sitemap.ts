import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://daya-arsana.com", // Ganti dengan domain aktual
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // {
    //   url: "https://daya-arsana.com/dashboard", // Jika ada halaman dashboard
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.8,
    // },
    // Tambahkan URL lain jika ada
  ];
}

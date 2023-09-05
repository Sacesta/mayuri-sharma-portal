import { Program, getPrograms } from "@/services/Program.services";

export default async function sitemap() {
  const baseUrl = "https://mayuri-sharma-portal.vercel.app";

  const res: any = await getPrograms();
  const programs: Program[] = res.data;
  const programUrls = programs.map((program) => ({
    url: `${baseUrl}/program/${program._id}`,
    lastModified: program.updatedAt,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/podcast`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/programs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
    },
    ...programUrls,
  ];
}

import ProgramDetails from "@/components/programdetails/ProgramDetails";
import { getProgram } from "@/services/Program.services";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const programId = params.id;
    const res: any = await getProgram(programId);
    const program = res.data;
    if (!program)
      return {
        title: "Not found",
        description: "The Program not found",
      };

    return {
      title: program.title,
      description: program.description,
      alternates: {
        canonical: `https://mayuri-sharma-portal.vercel.app/program/${programId}`,
      },
      openGraph: {
        title: program.title + " | Mayuri",
        description: program.description,
        url: `https://mayuri-sharma-portal.vercel.app/program/${programId}`,
        images: [{ url: program.image, alt: "Program Image" }],
        siteName: "Mayuri-Sharma-Portal",
        type: "website",
      },
      twitter: {
        card: "summary",
        title: program.title,
        description: program.description,
        creator: "Mayuri sharma",
        images: [program.image],
      },
    };
  } catch (error) {}
  return {
    title: "Not found",
    description: "The Program not found",
  };
}

const page = ({ params }: { params: { id: string } }) => {
  const programId = params.id;
  return (
    <>
      <ProgramDetails programId={programId} />
    </>
  );
};

export default page;

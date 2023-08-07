import ProgramDetails from "@/components/programdetails/ProgramDetails";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <ProgramDetails programId={params.id} />
    </>
  );
};

export default page;

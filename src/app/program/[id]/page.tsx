import ProgramDetails from "@/components/programdetails/ProgramDetails";

const page = ({ params }: { params: { id: string } }) => {
  console.log(params);
  return (
    <>
      <ProgramDetails programId={params.id} />
    </>
  );
};

export default page;

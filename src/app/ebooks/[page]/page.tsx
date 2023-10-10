import Ebooks from "@/components/Ebooks/Ebooks";

const page = ({ params }: { params: { page: string } }) => {
  const pageNumber = parseInt(params.page);
  return (
    <>
      <Ebooks pageNumber={pageNumber} />
    </>
  );
};

export default page;

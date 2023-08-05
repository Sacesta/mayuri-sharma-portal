"use client";
const page = ({ params }: { params: { id: string } }) => {
  console.log(params);

  return <div>My Post: {params.id}</div>;
};

export default page;

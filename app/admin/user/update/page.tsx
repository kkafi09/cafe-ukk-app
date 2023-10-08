import RootLayout from "@/layouts/RootLayout";
import UpdateForm from "./fragments/UpdateForm";

const UpdateMenu = ({ searchParams }: { searchParams: any }) => {
  return (
    <RootLayout>
      <h1>Update User</h1>
      <UpdateForm userId={searchParams?.userId} />
    </RootLayout>
  );
};

export default UpdateMenu;

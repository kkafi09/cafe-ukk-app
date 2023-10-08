import RootLayout from "@/layouts/RootLayout";
import UpdateForm from "./fragments/UpdateForm";

const UpdateMenu = ({ searchParams }: { searchParams: any }) => {
  return (
    <RootLayout>
      <h1>Update Menu</h1>
      <UpdateForm mejaId={searchParams?.mejaId} />
    </RootLayout>
  );
};

export default UpdateMenu;

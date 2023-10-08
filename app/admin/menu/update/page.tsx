import RootLayout from "@/layouts/RootLayout";
import UpdateForm from "./fragments/UpdateForm";

const UpdateMenu = ({ searchParams }: { searchParams: any }) => {
  return (
    <RootLayout>
      <h1>Update Menu</h1>
      <UpdateForm menuId={searchParams?.menuId} />
    </RootLayout>
  );
};

export default UpdateMenu;

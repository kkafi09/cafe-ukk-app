import RootLayout from "@/layouts/RootLayout";
import UpdateForm from "./fragments/UpdateForm";

const UpdateMenu = ({ searchParams }: { searchParams: any }) => {
  return (
    <RootLayout>
      <h1 className="w-full italic text-center py-4 text-primary font-semibold text-2xl">
        Update Menu
      </h1>
      <UpdateForm menuId={searchParams?.menuId} />
    </RootLayout>
  );
};

export default UpdateMenu;

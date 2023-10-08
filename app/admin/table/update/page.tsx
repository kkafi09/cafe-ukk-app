import RootLayout from "@/layouts/RootLayout";
import UpdateForm from "./fragments/UpdateForm";

const UpdateMenu = ({ searchParams }: { searchParams: any }) => {
  return (
    <RootLayout>
      <h1 className="w-full italic text-center py-4 text-primary font-semibold text-2xl">
        Update Meja
      </h1>
      <UpdateForm mejaId={searchParams?.mejaId} />
    </RootLayout>
  );
};

export default UpdateMenu;

import RootLayout from "@/layouts/RootLayout";
import AddForm from "./fragments/AddForm";

const AddMenu = () => {
  return (
    <RootLayout>
     <h1 className="w-full italic text-center py-4 text-primary font-semibold text-2xl">
        Tambah menu
      </h1>
      <AddForm />
    </RootLayout>
  );
};

export default AddMenu;

import RootLayout from "@/layouts/RootLayout";
import AddForm from "./fragments/AddForm";

const AddMenu = () => {
  return (
    <RootLayout>
      <h1>Add User</h1>
      <AddForm />
    </RootLayout>
  );
};

export default AddMenu;
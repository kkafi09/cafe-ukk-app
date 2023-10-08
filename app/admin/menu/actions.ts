import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getMenu = async () => {
  const token = cookies().get("jwtToken")?.value;
  if (!token) return redirect("/login");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const result = await response.json();

  return result.data;
};

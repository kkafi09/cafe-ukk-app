"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { Label } from "@radix-ui/react-label";
import { hasCookie, setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import * as React from "react";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (hasCookie("jwtToken")) {
      redirect("/");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    api
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        const token = res.data.data.token;
        if (token) {
          setCookie("jwtToken", token, { maxAge: 2.5 * 60 * 60 * 1000 });
          window.location.replace("/");
        }
      })
      .catch((err) => {
        toast.error("username or password incorrect");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="h-full px-8 py-14 bg-white rounded">
        <div className="text-center flex mb-12 flex-col gap-y-1">
          <h3 className="font-bold text-2xl  text-zinc-800">
            Login With Your Acoount
          </h3>
          <p className="font-normal text-xs text-zinc-600">
            Enter your username and password correctly
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col w-full mt-6 gap-y-2">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={data.username}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <Button className="w-full mt-6">
            {isLoading ? (
              <ScaleLoader className="text-white w-5 h-5" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </div>
      <p>
        Develop on <span className="text-red-500">2 DAY</span>
      </p>
    </main>
  );
};

export default Login;

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/utils/api";
import { Label } from "@radix-ui/react-label";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

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
        const token = res.data.data[0].token;
        if (token) {
          setCookie("jwtToken", token);
          window.location.replace("/");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="h-full px-8 py-14 bg-white rounded">
        <div className="text-center flex flex-col gap-y-1">
          <h3 className="font-bold text-2xl text-zinc-800">
            Login With Your Acoount
          </h3>
          <p className="font-normal text-base text-zinc-600">
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
              />
            </div>
          </div>
          <Button className="w-full mt-6">
            Login {isLoading ? <ScaleLoader /> : ""}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Login;

"use client";
import React, { use, useState } from "react";
import Link from "next/link";
import CustomForm from "./customForm";
import { formSchema } from "@/lib/utils";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Email: "",
      Password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="MetaBanking logo"
          />
          <h1 className="text-26 font-bold text-black-2">MetaBanking</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign-In" : "Sign-Up"}
            <p className="text-16 text-gray-600">
              {user
                ? "Link your account to MetaBanking"
                : "Enter your details to continue with MetaBanking"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div>{/* Plaid Link */}</div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CustomForm
              control={form.control}
              name="Email"
              label="Email"
              placeholder="Enter your email"
            />
            <CustomForm
              control={form.control}
              name="Password"
              label="Password"
              placeholder="Enter your Password"
            />
            <div className="flex flex-col gap-4">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  &nbsp; Loading...
                </>
              ) : type === "sign-in" ? (
                "Sign In"
              ) : (
                "Sign Up"
              )}
            </Button>
            </div>
          </form>
        </Form>
      )}
      <footer className="flex justify-center gap-1">
        <p className="text-14 font-normal text-gray-600">
          {type === "sign-in"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          href={type === "sign-in" ? "/signup" : "/signin"}
          className="form-link"
        >
          {type === "sign-in" ? "Sign Up" : "Sign In"}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;

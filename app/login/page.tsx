"use client";

import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import { useActionState } from "react";
import Link from "next/link";
import { handleForm } from "./action";

export default function Login() {
  const [state, dispatch] = useActionState(handleForm, null);

  return (
    <div>
      <h1 className="flex items-center justify-center text-4xl font-bold text-teal-500">e-Cards</h1>
      <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex items-center justify-center text-2xl font-bold">
          <h2 className="text-xl">Log Into e-cards</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
          <FormInput
            name="email"
            type="email"
            placeholder="Email"
            required={true}
            errors={state?.errors || []}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            required={true}
            errors={state?.errors || []}
          />

          <FormButton text="Log In" />
        </form>
        <div className="flex items-center justify-center">
          <Link href="/sign-up" className="text-teal-500 font-medium hover:underline">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

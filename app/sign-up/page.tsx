"use client";

import Button from "@/components/form-button";
import FormInput from "@/components/form-input";
import { useActionState } from "react";
import { createAccount } from "./action";

export default function SignUp() {
  const [state, dispatch] = useActionState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">Hello,</h1>
        <h2 className="text-xl">fill in the form below to join!</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput
          name="name"
          type="text"
          placeholder="Username"
          required
          errors={state?.fieldErrors?.name}
          minLength={5}
          maxLength={10}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors?.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          minLength={8}
          required
          errors={state?.fieldErrors?.password}
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          required
          minLength={8}
          errors={state?.fieldErrors?.confirm_password}
        />
        <Button text="Create account" />
      </form>
    </div>
  );
}

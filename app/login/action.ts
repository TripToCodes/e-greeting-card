"use server";

import { redirect } from "next/navigation";

export async function handleForm(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      errors: ["Email and password are required"],
    };
  }

  const response = await fetch(" https://potato-j8w7.onrender.com/users/login ", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response) {
    redirect("/my-account");
  } else {
    return {
      fieldErrors: {
        email: ["Invalid email"],
        password: ["Invalid password"],
      },
    };
  }
}

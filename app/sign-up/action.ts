"use server";

import bcrypt from "bcrypt";
import { PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR } from "@/lib/constants";
import { z } from "zod";
import { redirect } from "next/navigation";
import getSession from "@/lib/session";

const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Username is required!",
      })
      .toLowerCase()
      .trim(),
    email: z.string().email().toLowerCase(),
    password: z.string().min(PASSWORD_MIN_LENGTH).regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine((data) => checkPasswords(data), {
    message: "Passwords do not match!",
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };

  const result = await formSchema.spa(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  }

  const hashedPassword = await bcrypt.hash(result.data.password, 12);

  const response = await fetch("https://potato-j8w7.onrender.com/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: result.data.name,
      email: result.data.email,
      password: hashedPassword,
    }),
  });

  if (!response.ok) {
    console.error("Failed to register user:", await response.text());
    return { error: "Registration failed. Please try again." };
  }

  const user = await response.json();
  if (!user.id) {
    console.error("No user ID found in response:", user);
    return { error: "Unexpected response from server." };
  }
  if (response.ok) {
    const session = await getSession();
    session.id = user.id;
    await session.save();
    redirect("/my-account");
  } else {
    return {
      fieldErrors: {
        name: ["Invalid name"],
        email: ["Invalid email"],
        password: ["Invalid password"],
        confirm_password: ["Passwords do not match"],
      },
    };
  }
}

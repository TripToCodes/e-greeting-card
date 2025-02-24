"use server";

import { z } from "zod";
// import { redirect } from "next/navigation";
// import getSession from "@/lib/session";

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
    password: z.string().min(8),
    confirm_password: z.string().min(8),
  })
  .refine((data) => checkPasswords(data), {
    message: "Passwords do not match!",
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirm_password: formData.get("confirm_password") as string,
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  } else {
    const registerResponse = await fetch("https://potato-j8w7.onrender.com/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
      }),
    });

    console.log("registerResponse:", registerResponse);
  }
}

//     const userData = await registerResponse.json(); //! 여기부터 에러
//     console.log("userData        ", userData);
//     if (!userData.id) {
//       return { error: "Unexpected response from server." };
//     }

//     const session = await getSession();
//     console.log("session ID", session.id);
//     session.id = userData.id;
//     await session.save();
//     redirect("/my-account");
//   }
// }

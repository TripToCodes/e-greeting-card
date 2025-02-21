"use server";

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

  console.log("response:::", response);
  //* 여기서 response에 success 관련해서 뭘 확인할지 모르겠어요! 코파일럿은 아래와 같이 작성했는데, 저희는 이게 없는 듯해요! body로 확인해야할까요?
  if (response.ok) {
    return {
      errors: [],
    };
  }

  return {
    errors: ["Invalid email or password"],
  };
}

"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "@components/Form";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  let [isLoading, setIsLoading] = useState(false);
  let [post, setPost] = useState({ prompt: "", tag: "" });
  let { data: session } = useSession();
  const createPrompt = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("api/create-prompt", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      alert(res.message);
      if (res.success) router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Form
      type="Create"
      isLoading={isLoading}
      post={post}
      handleSubmit={createPrompt}
      setPost={setPost}
    />
  );
};

export default page;

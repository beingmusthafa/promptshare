"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
import Image from "next/image";
import loadingGif from "@assets/images/Ellipsis-1.9s-200px.gif";
const Feed = () => {
  let [posts, setPosts] = useState([]);
  let [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async function fetchPosts() {
      setIsLoading(true);
      try {
        const res = await fetch("api/posts").then((res) => res.json());
        console.log(res);
        if (!res.success) return setError("Unable to fetch posts :(");
        setPosts(res.posts);
      } catch (error) {
        console.log(error);
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);
  return (
    <div className="w-full flex justify-evenly gp-2 mt-10">
      {isLoading && <Image src={loadingGif} height={80} width={80} />}
      {error ? (
        <div>{error}</div>
      ) : (
        posts.map((post) => <PromptCard post={post} />)
      )}
    </div>
  );
};

export default Feed;

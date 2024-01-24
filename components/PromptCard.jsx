import Image from "next/image";

const PromptCard = ({ post }) => {
  console.log(post);
  return (
    <div className=" h-fit flex flex-col w-44 gap-3 border-orange-500 border p-4 rounded-2xl">
      <p className="font-medium">{post.prompt}</p>
      <div className="flex gap-1">
        <Image
          src={post.author.image}
          height={20}
          width={24}
          className="rounded-full"
        />
        <span>{post.author.username}</span>
      </div>
    </div>
  );
};

export default PromptCard;

import Link from "next/link";

const Form = ({ type, isLoading, post, handleSubmit, setPost }) => {
  return (
    <div>
      <h1 className="text-lg font-extrabold">{type} prompt</h1>
      <p className="text-gray-700 ">
        Show your expertise in AI prompts and help people get their tasks done
        quick and easy
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col gap-2 items-start max-w-lg"
      >
        <label className="font-semibold" htmlFor="">
          Prompt
        </label>
        <textarea
          className="w-full"
          name=""
          id=""
          cols="10"
          rows="7"
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        <label className="font-semibold" htmlFor="">
          Tag
        </label>
        <input
          className="w-full"
          type="text"
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
        />
        <div className="flex flex-end gap-2">
          <Link href="/" className="text-gray-600 font-semibold">
            Cancel
          </Link>
          <button
            className="bg-primary-orange font-semibold rounded-full text-white p-2"
            disabled={isLoading}
            type="submit"
          >
            {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

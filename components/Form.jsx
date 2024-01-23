import Link from "next/link";
import { useRouter } from "next/router";

const Form = ({ type, isLoading, post, handleSubmit, setPost }) => {
  return (
    <div>
      <h1>{type} prompt</h1>
      <p>
        Show your expertise in AI prompts and help people get their tasks done
        quick and easy
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Prompt</label>
        <textarea
          name=""
          id=""
          cols="10"
          rows="10"
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        />
        <label htmlFor="">Tag</label>
        <input
          type="text"
          value={post.tag}
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
        />
        <div className="flex flex-end gap-2">
          <Link href="/" className="text-gray-600 font-semibold">
            Cancel
          </Link>
          <button disabled={isLoading} type="submit">
            {type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

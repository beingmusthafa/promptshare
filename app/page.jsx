import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          awesome AI prompts to ease your tasks
        </span>
      </h1>
      <p className="desc text-center">
        Promptshare is an open-source AI prompt sharing platform where users can
        find and share great prompts to use in AI powered chatbots
      </p>
      <Feed />
    </section>
  );
};

export default page;

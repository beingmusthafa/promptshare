import Prompt from "@models/Prompt";
import { connectDb } from "@utils/database";

export const POST = async (req, res) => {
  const { userId, prompt, tag } = await req.json();
  try {
    await connectDb();
    await new Prompt({
      authorId: userId,
      prompt,
      tag,
    }).save();
    return new Response(
      JSON.stringify(
        { success: true, message: "Created post successfully" },
        { status: 201 }
      )
    );
  } catch (error) {
    return new Response(
      JSON.stringify(
        { success: false, message: error.message },
        { status: 500 }
      )
    );
  }
};

import Prompt from "@models/Prompt";
import { connectDb } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectDb();
    const posts = await Prompt.find({}).populate("author");
    return new Response(
      JSON.stringify({
        success: true,
        posts,
        message: "Fetched posts successflly",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
};

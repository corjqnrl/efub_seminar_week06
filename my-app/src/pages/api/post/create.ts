import type { NextApiHandler } from "next";
import { postCollection } from "@/utils/database";
const handler: NextApiHandler = async (req, res) => {
const result = await postCollection.insertOne(req.body);
return res.redirect(302, "/list");
};
export default handler;


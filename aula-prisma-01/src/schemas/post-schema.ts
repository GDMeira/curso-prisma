import JoiBase, { Root } from "joi";
import JoiDate from "@joi/date"
import { CreatePost } from "../repositories/post-repository";

const Joi: Root = JoiBase.extend(JoiDate);

export const postSchema = Joi.object<CreatePost>({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  createdAt: Joi.date().format('YYYY-MM-DD')
})
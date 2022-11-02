import mongoose, { Schema } from "mongoose";
import { ITEM_TYPES } from "../../utils/constants";
import { IItem } from "./item.types";

const itemSchema = new mongoose.Schema<IItem>(
  {
    title: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: Object.values(ITEM_TYPES),
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Item = mongoose.model("item", itemSchema);
export default Item;

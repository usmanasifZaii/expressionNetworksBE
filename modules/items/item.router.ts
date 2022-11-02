import { Router } from "express";
import { createValidator, validate } from "../../middlewares/item.validator";

import {
  createItem,
  getAllItems,
  getItemTypes,
  getItem,
  deleteItem,
  updateItem,
} from "./item.controller";

const router = Router();

router
  .route("/")
  .post(createValidator(), validate, createItem)
  .get(getAllItems);

router.route("/types").get(getItemTypes);

router.route("/:id").get(getItem).delete(deleteItem).put(updateItem);

export default router;

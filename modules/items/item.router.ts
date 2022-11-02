import { Router } from "express";
import * as Controller from "./item.controller";
const router = Router();

// /api/record
router.route("/").post(Controller.createItem).get(Controller.getAllItems);

// /api/record/:id

router.route("/types").get(Controller.getItemTypes);

router
  .route("/:id")
  .get(Controller.getItem)
  .delete(Controller.deleteItem)
  .put(Controller.updateItem);
// .put(Controller.)

export default router;

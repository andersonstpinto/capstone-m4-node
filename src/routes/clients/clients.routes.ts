import { Router } from "express";
import ClientController from "../../controllers/client.controller";

const clientRouter = Router();

export default () => {
  clientRouter.post("/", ClientController.store);
  clientRouter.get("/", ClientController.index);
  clientRouter.get("/:client_id", ClientController.show);
  clientRouter.delete("/:client_id", ClientController.delete);

  return clientRouter;
};

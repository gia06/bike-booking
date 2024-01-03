import { Response, NextFunction } from "express";
import { Context, ExtendedRequest, RouterFactory } from "../interfaces/general";

export const makeBikesRouter: RouterFactory = (context: Context) => {
  const {
    router,
    services: { bikeService },
  } = context;

  router.get(
    "/",
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      try {
        const bikes = await bikeService.findAll();
        return res.status(200).json(bikes);
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    "/:id",
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      try {
        const bike = await bikeService.findOneById(req.params.id);
        res.status(200).json(bike);
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    "/",
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      try {
        const bike = await bikeService.save(req.body);
        console.log({ id: req.id, status: "new bike added" });
        res.status(201).json(bike);
      } catch (err) {
        console.error(err);
        next(err);
      }
    }
  );

  // router.put(
  //   "/:id",
  //   async (req: ExtendedRequest, res: Response, next: NextFunction) => {
  //     try {
  //     } catch (err) {
  //       next(err);
  //     }
  //   }
  // );

  router.delete(
    "/:id",
    async (req: ExtendedRequest, res: Response, next: NextFunction) => {
      try {
        await bikeService.delete(req.params.id);
        res.sendStatus(204);
      } catch (err) {
        next(err);
      }
    }
  );

  return router;
};

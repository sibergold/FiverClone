import express, { Router } from "express";
import {
  createGig,
  deleteGig,
  getAllGigs,
  getGig,
} from "../controllers/gig.controller.ts";
import protect from "../middleware/protect.ts";
import upload from "../utils/multer.ts";


const router: Router = express.Router();


router
  .route("/")
  .get(getAllGigs)
  .post(
    protect,
    upload.fields([
      { name: "coverImage", maxCount: 1 },
      { name: "images", maxCount: 6 },
    ]),
    createGig
  );

router.route("/:id").get(getGig).delete(protect, deleteGig);


export default router;

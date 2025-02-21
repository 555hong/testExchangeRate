import express, { Router } from "express";
import { asyncHandler } from '../middlewares'
import * as controller from '../controllers/exchange.controller'

const router: Router = express.Router();

router.get(
    "/",
    asyncHandler(controller.fetchRate)
)

router.get(
    "/amount",
    asyncHandler(controller.fetchRateWithAmount)
)

export default router;
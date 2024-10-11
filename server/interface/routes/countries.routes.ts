import express from "express";
import { authenticate } from "../middleware/auth";
import { countryController } from "../controllers/countryController";

const router = express.Router();

router.get(
  "/all",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  (req, res) => countryController.getAllCountries(req, res)
);

router.get(
  "/country/:countryCode",
  (req, res, next) => {
    authenticate(req, res, next);
  },
  (req, res) => countryController.getCountryInfo(req, res)
);

export { router as countriesRoutes };

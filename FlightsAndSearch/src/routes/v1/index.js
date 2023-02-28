const express = require("express");
const cityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const AirportController = require("../../controllers/airport-controller");
const router = express.Router();

router.post("/city", cityController.create);
router.delete("/city/:id", cityController.destroy);
router.get("/city/:id", cityController.get);
router.patch("/city/:id", cityController.update);
router.get("/city", cityController.getAll);
router.post("/airports", AirportController.create);

router.post("/flights", FlightController.create);
router.get("/flights", FlightController.getAll);
module.exports = router;

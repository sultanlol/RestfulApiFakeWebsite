const express = require("express");
const {
  getAkhirPenelitians,
  getAkhirPenelitianById,
  createAkhirPenelitian,
  updateAkhirPenelitian,
  deleteAkhirPenelitian
} = require("../controllers/akhirPenelitian");
const router = express.Router();

router.get("/", getAkhirPenelitians);
router.post("/", createAkhirPenelitian);
router.get("/:id", getAkhirPenelitianById);
router.put("/:kode", updateAkhirPenelitian);
router.delete("/:kode", deleteAkhirPenelitian);

module.exports = router;

const express = require("express");
const {
  getAkhirPengabdian,
  getAkhirPengabdianById,
  createAkhirPengabdian,
  updateAkhirPengabdian,
  deleteAkhirPengabdian
} = require("../controllers/akhirPengabdian");
const router = express.Router();

router.get("/", getAkhirPengabdian);
router.post("/", createAkhirPengabdian);
router.get("/:id", getAkhirPengabdianById);
router.put("/:kode", updateAkhirPengabdian);
router.delete("/:kode", deleteAkhirPengabdian);

module.exports = router;

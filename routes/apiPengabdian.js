const express = require("express");
const {
  getPengabdian,
  getPengabdianById,
  createPengabdian,
  updatePengabdian,
  deletePengabdian
} = require('../controllers/Pengabdian');

const router = express.Router();

router.get('/', getPengabdian);
router.post('/', createPengabdian);
router.get('/:id', getPengabdianById);
router.put('/:id', updatePengabdian);
router.delete('/:id', deletePengabdian);

module.exports = router;

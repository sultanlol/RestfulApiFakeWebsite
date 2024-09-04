const express = require("express");
const {
  getPenelitians,
  getPenelitianById,
  createPenelitian,
  updatePenelitian,
  deletePenelitian
} = require('../controllers/Penelitian');

const router = express.Router();

router.get('/', getPenelitians);
router.post('/', createPenelitian);
router.get('/:id', getPenelitianById);
router.put('/:id', updatePenelitian);
router.delete('/:id', deletePenelitian);

module.exports = router;

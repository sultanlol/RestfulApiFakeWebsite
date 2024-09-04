const express = require("express");
const {
  getDosens,
  getDosenById,
  createDosen,
  updateDosen,
  deleteDosen
} = require("../controllers/dosen");

const router = express.Router();

router.get('/', getDosens);
router.post('/', createDosen);
router.get('/:id', getDosenById);
router.put('/:id', updateDosen);
router.delete('/:id', deleteDosen);

module.exports = router;

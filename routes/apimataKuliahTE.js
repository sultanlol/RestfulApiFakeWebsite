const express = require("express");
const {
  getmataKuliahTE,
  getmataKuliahTEById,
  createmataKuliahTE,
  updatemataKuliahTE,
  deletemataKuliahTE
} = require("../controllers/mataKuliahTE");

const router = express.Router();

router.get('/', getmataKuliahTE);
router.post('/', createmataKuliahTE);
router.get('/:id', getmataKuliahTEById);
router.put('/:id', updatemataKuliahTE);
router.delete('/:id', deletemataKuliahTE);

module.exports = router;

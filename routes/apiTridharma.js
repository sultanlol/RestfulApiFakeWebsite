const express = require("express");
const {
  gettridharma,
  gettridharmaById,
  createtridharma,
  updatetridharma,
  deletetridharma
} = require("../controllers/Tridharma");

const router = express.Router();

router.get('/', gettridharma);
router.post('/', createtridharma);
router.get('/:kode', gettridharmaById);
router.put('/:kode', updatetridharma);
router.delete('/:kode', deletetridharma);

module.exports = router;

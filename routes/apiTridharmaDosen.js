const express = require("express");
const {
  gettridharmaDosen,
  gettridharmaDosenById,
  createtridharmaDosen,
  updatetridharmaDosen,
  deletetridharmaDosen
} = require("../controllers/TridharmaDosen");

const router = express.Router();

router.get('/', gettridharmaDosen);
router.post('/', createtridharmaDosen);
router.get('/:id', gettridharmaDosenById);
router.put('/:id', updatetridharmaDosen);
router.delete('/:id', deletetridharmaDosen);

module.exports = router;

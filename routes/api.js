const express = require("express");
const akhirPenelitianRoutes = require('./apiAkhirPenelitian');
const penelitianRoutes = require('./apiPenelitian');
const akhirPengabdianRoutes = require('./apiAkhirPengabdian');
const pengabdianRoutes = require('./apiPengabdian');
const tridharmaRoutes = require('./apiTridharma');
const tridharmaDosenRoutes = require('./apiTridharmaDosen');
const dosenRoutes = require('./apiDosen');   
const mataKuliahTERoutes = require('./apimataKuliahTE');   


const router = express.Router();

router.use('/apiAkhirPenelitian', akhirPenelitianRoutes);
router.use('/apiPenelitian', penelitianRoutes);
router.use('/apiAkhirPengabdian', akhirPengabdianRoutes);
router.use('/apiPengabdian', pengabdianRoutes);
router.use('/apiTridharma', tridharmaRoutes);
router.use('/apiTridharmaDosen', tridharmaDosenRoutes);
router.use('/apiDosen', dosenRoutes );
router.use('/apimataKuliahTE', mataKuliahTERoutes);


module.exports = router;

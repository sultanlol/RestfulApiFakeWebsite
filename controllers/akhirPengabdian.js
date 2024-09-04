const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



//pengabdian Controllers
const getAkhirPengabdian = async (req, res) => {
  try {
    // Hitung jumlah total catatan di tabel akhirpengabdian
    const totalCount = await prisma.akhirpengabdian.count();

    // Tentukan titik tengah dan hitung offset
    const middleIndex = Math.floor(totalCount / 2);
    const skipCount = middleIndex - 5; // Karena kita ingin 10 data di tengah, kita skip 5 data sebelum titik tengah

    // Ambil 10 data dari tengah
    const records = await prisma.akhirpengabdian.findMany({
      skip: Math.max(skipCount, 0),  // Pastikan offset tidak negatif
      take: 10,
    });

    res.json(records);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const getAkhirPengabdianById = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await prisma.akhirpengabdian.findUnique({
      where: { kode: id },
    });
    if (record) {
      res.json(record);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createAkhirPengabdian = async (req, res) => {
  const {
    kode,
    id,
    image,
    jumlahbukti,
    namabukti1,
    namabukti2,
    namabukti3,
    namabukti4,
    namabukti5,
    namabukti6,
    namabukti7,
    namabukti8,
    namabukti9,
    gambarbukti1,
    gambarbukti2,
    gambarbukti3,
    gambarbukti4,
    gambarbukti5,
    gambarbukti6,
    gambarbukti7,
    gambarbukti8,
    gambarbukti9
  } = req.body;

  try {
    const newAkhirPengabdian = await prisma.akhirpengabdian.create({
      data: {
        kode,
        id,
        image,
        jumlahbukti,
        namabukti1,
        namabukti2,
        namabukti3,
        namabukti4,
        namabukti5,
        namabukti6,
        namabukti7,
        namabukti8,
        namabukti9,
        gambarbukti1,
        gambarbukti2,
        gambarbukti3,
        gambarbukti4,
        gambarbukti5,
        gambarbukti6,
        gambarbukti7,
        gambarbukti8,
        gambarbukti9
      },
    });
    res.status(201).json(newAkhirPengabdian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const updateAkhirPengabdian = async (req, res) => {
  const { kode } = req.params; // Ambil kode dari parameter URL
  const data = req.body; // Ambil data dari body request

  try {
    // Pastikan kode yang diterima tidak undefined dan cocok dengan field di database
    if (!kode) {
      return res.status(400).json({ error: 'Kode is required in the URL parameters.' });
    }

    const updatedAkhirPengabdian = await prisma.akhirpengabdian.update({
      where: { kode }, // Cari berdasarkan kode
      data, // Data untuk update
    });

    res.json(updatedAkhirPengabdian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const deleteAkhirPengabdian = async (req, res) => {
  const { kode } = req.params; // Ambil kode dari parameter URL

  try {
    // Validasi kode dari URL
    if (!kode) {
      return res.status(400).json({ error: 'Kode is required in the URL parameters.' });
    }

    // Hapus data berdasarkan kode
    const deletedAkhirPengabdian = await prisma.akhirpengabdian.delete({
      where: { kode },
    });

    res.json(deletedAkhirPengabdian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





module.exports = {
  getAkhirPengabdian,
  getAkhirPengabdianById,
  createAkhirPengabdian,
  updateAkhirPengabdian,
  deleteAkhirPengabdian,
 
};

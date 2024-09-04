const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User Controllers

const getDosens = async (req, res) => {
  try {
    const dosens = await prisma.dosen.findMany(
    //   {
    //   take: 10  // Menampilkan hanya 10 data
    
    // }
  );
    res.json(dosens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDosenById = async (req, res) => {
  const { id } = req.params;
  try {
    const dosens = await prisma.dosen.findUnique({
      where: { nip: id },
    });
    if (dosens) {
      res.json(dosens);
    } else {
      res.status(404).json({ error: "Dosen not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createDosen = async (req, res) => {
  const { nip, username, jurusan, kelamin, prodi } = req.body;

  // Validasi input
  if (!nip) {
      return res.status(400).json({ error: 'NIP is required' });
  }

  try {
      // Cek apakah NIP sudah ada di database
      const existingDosen = await prisma.dosen.findUnique({
          where: { nip }
      });

      if (existingDosen) {
          return res.status(400).json({ error: 'NIP already exists' });
      }

      // Membuat record dosen baru
      const newRecord = await prisma.dosen.create({
          data: {
              nip,
              username,
              jurusan,
              kelamin,
              prodi,
          },
      });

      // Mengembalikan respons dengan data yang baru dibuat
      res.status(201).json(newRecord);
  } catch (error) {
      // Menangani kesalahan lainnya
      res.status(500).json({ error: error.message });
  }
};


const updateDosen = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedDosen = await prisma.dosen.update({
      where: { nip: id },
      data,
    });
    res.json(updatedDosen);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteDosen = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.dosen.delete({
      where: { nip: id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDosens,
  getDosenById,
  createDosen,
  updateDosen,
  deleteDosen,
};

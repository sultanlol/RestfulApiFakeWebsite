const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const getDosens = async (req, res) => {
  try {
    // Mengambil data dosens dari database
    const dosens = await prisma.dosen.findMany();
    
    // Format JSON dengan indentasi
    const formattedDosens = JSON.stringify(dosens, null, 2);

    // Set header Content-Type untuk JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Kirimkan JSON yang terformat
    res.send(formattedDosens);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getDosenById = async (req, res) => {
  const { id } = req.params;
  try {
    // Mengambil data dosen berdasarkan ID dari database
    const dosen = await prisma.dosen.findUnique({
      where: { nip: id },
    });
    
    if (dosen) {
      // Format JSON dengan indentasi
      const formattedDosen = JSON.stringify(dosen, null, 2);

      // Set header Content-Type untuk JSON
      res.setHeader('Content-Type', 'application/json');
      
      // Kirimkan JSON yang terformat
      res.send(formattedDosen);
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

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User Controllers

const getmataKuliahTE = async (req, res) => {
  try {
    const matakuliah = await prisma.mata_kuliahte.findMany();
    res.json(matakuliah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getmataKuliahTEById = async (req, res) => {
  const { id } = req.params;
  try {
    const matakuliah = await prisma.mata_kuliahte.findUnique({
      where: {
        id: parseInt(id), // Menggunakan id yang dikonversi ke integer
      },
    });
    res.json(matakuliah);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


    const createmataKuliahTE= async (req, res) => {
    const { nip } = req.body;
    try {
        const newRecord = await prisma.mata_kuliahte.create({
        data: { nip },
        });
        res.json(newRecord);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    };

const updatemataKuliahTE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const updatedmk = await prisma.mata_kuliahte.update({
      where: { nip: id },
      data,
    });
    res.json(updatedmk);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletemataKuliahTE = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.mata_kuliahte.delete({
      where: { nip: id },
    });
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getmataKuliahTE,
  getmataKuliahTEById,
  createmataKuliahTE,
  updatemataKuliahTE,
  deletemataKuliahTE,
};

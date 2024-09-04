const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User Controllers

const gettridharma = async (req, res) => {
    try {
        const tridharma = await prisma.tridharma.findMany();
        res.json(tridharma);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
};

const gettridharmaById = async (req, res) => {
    const { kode } = req.params;
    try {
      const tridharma = await prisma.tridharma.findUnique({
        where: { kode },
      });
      if (tridharma) {
        res.json(tridharma);
      } else {
        res.status(404).json({ error: 'Tridharma not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
};

const createtridharma = async (req, res) => {
    const { kode, nama } = req.body;
    try {
      const newTridharma = await prisma.tridharma.create({
        data: { kode, nama },
      });
      res.status(201).json(newTridharma);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating data.' });
    }
};

const updatetridharma = async (req, res) => {
  const { kode } = req.params; // Mengambil 'kode' dari URL parameter
  const { nama } = req.body;   // Mengambil 'nama' dari body request

  try {

    if (!kode) {
      return res.status(400).json({ error: 'Kode is required.' });
    }

    const updatedTridharma = await prisma.tridharma.update({
      where: { kode },
      data: { nama },
    });

    res.json(updatedTridharma);
  } catch (error) {
    console.error('Error updating tridharma:', error);
    res.status(500).json({
      error: 'An error occurred while updating data.',
      details: error.message,
    });
  }
};

const deletetridharma = async (req, res) => {
    const { kode } = req.params;
    try {
      await prisma.tridharma.delete({
        where: { kode },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting data.' });
    }
};

module.exports = {
    gettridharma,
    gettridharmaById,
    createtridharma,
    updatetridharma,
    deletetridharma,
};

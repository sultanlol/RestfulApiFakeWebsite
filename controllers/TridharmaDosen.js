const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



const gettridharmaDosen = async (req, res) => {
  try {
    // Ambil semua data dari tabel tridharmdosen
    const tridharmdosen = await prisma.tridharmdosen.findMany();

    // Format JSON dengan indentasi
    const formattedTridharmdosen = JSON.stringify(tridharmdosen, null, 2);

    // Set header Content-Type untuk JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Kirimkan JSON yang terformat
    res.send(formattedTridharmdosen);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
};

const gettridharmaDosenById = async (req, res) => {
  const { id } = req.params;
  try {
    // Ambil data tridharmdosen berdasarkan id
    const tridharmdosen = await prisma.tridharmdosen.findUnique({
      where: { id },
    });

    if (tridharmdosen) {
      // Format JSON dengan indentasi
      const formattedTridharmdosen = JSON.stringify(tridharmdosen, null, 2);

      // Set header Content-Type untuk JSON
      res.setHeader('Content-Type', 'application/json');
      
      // Kirimkan JSON yang terformat
      res.send(formattedTridharmdosen);
    } else {
      res.status(404).json({ error: 'Tridharmdosen not found.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
};

const createtridharmaDosen = async (req, res) => {
    const data = req.body;
    try {
      const newTridharmdosen = await prisma.tridharmdosen.create({
        data,
      });
      res.status(201).json(newTridharmdosen);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating data.' });
    }
};

const updatetridharmaDosen = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedTridharmdosen = await prisma.tridharmdosen.update({
        where: { id },
        data,
      });
      res.json(updatedTridharmdosen);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating data.' });
    }
};

const deletetridharmaDosen = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.tridharmdosen.delete({
        where: { id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting data.' });
    }
};

module.exports = {
    gettridharmaDosen,
    gettridharmaDosenById,
    createtridharmaDosen,
    updatetridharmaDosen,
    deletetridharmaDosen,
};

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// User Controllers

const gettridharmaDosen = async (req, res) => {
    try {
        const tridharmdosen = await prisma.tridharmdosen.findMany();
        res.json(tridharmdosen);
      } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching data.' });
      }
};

const gettridharmaDosenById = async (req, res) => {
    const { id } = req.params;
    try {
      const tridharmdosen = await prisma.tridharmdosen.findUnique({
        where: { id },
      });
      if (tridharmdosen) {
        res.json(tridharmdosen);
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


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



// Penelitian Controllers
const getAkhirPenelitians = async (req, res) => {
  try {
    const records = await prisma.akhirpenelitian.findMany();

    // Format JSON dengan indentasi
    const formattedRecords = JSON.stringify(records, null, 2);

    // Set header Content-Type untuk JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Kirimkan JSON yang terformat
    res.send(formattedRecords);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const getAkhirPenelitianById = async (req, res) => {
  const { id } = req.params;
  try {
    const record = await prisma.akhirpenelitian.findUnique({
      where: { kode: id },
    });
    if (record) {
      // Format JSON dengan indentasi
      const formattedRecord = JSON.stringify(record, null, 2);

      // Set header Content-Type untuk JSON
      res.setHeader('Content-Type', 'application/json');
      
      // Kirimkan JSON yang terformat
      res.send(formattedRecord);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createAkhirPenelitian = async (req, res) => {
  const { kode, id, image, jumlahbukti, namabukti1, namabukti2, namabukti3, namabukti4, namabukti5, namabukti6, gambarbukti1, gambarbukti2, gambarbukti3, gambarbukti4, gambarbukti5, gambarbukti6 } = req.body;

  try {
    const newAkhirPenelitian = await prisma.akhirpenelitian.create({
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
        gambarbukti1,
        gambarbukti2,
        gambarbukti3,
        gambarbukti4,
        gambarbukti5,
        gambarbukti6
      }
    });

    // Format JSON dengan indentasi
    const formattedNewAkhirPenelitian = JSON.stringify(newAkhirPenelitian, null, 2);

    // Set header Content-Type untuk JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Kirimkan JSON yang terformat
    res.status(201).send(formattedNewAkhirPenelitian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const updateAkhirPenelitian = async (req, res) => {
  const { kode } = req.params;
  const data = req.body;

  try {
    const updatedAkhirPenelitian = await prisma.akhirpenelitian.update({
      where: { kode },
      data
    });
    res.json(updatedAkhirPenelitian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deleteAkhirPenelitian = async (req, res) => {
  const { kode } = req.params;

  try {
    const deletedAkhirPenelitian = await prisma.akhirpenelitian.delete({
      where: { kode }
    });
    res.json(deletedAkhirPenelitian);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};





module.exports = {
  getAkhirPenelitians,
  getAkhirPenelitianById,
  createAkhirPenelitian,
  updateAkhirPenelitian,
  deleteAkhirPenelitian,
 
};

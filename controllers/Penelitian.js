
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();





const getPenelitians = async (req, res) => {
  try {
    // Hitung jumlah total catatan di tabel penelitian
    const totalCount = await prisma.penelitian.count();

    // Tentukan titik tengah dan hitung offset
    const middleIndex = Math.floor(totalCount / 2);
    const skipCount = Math.max(middleIndex - 5, 0); // Karena kita ingin 10 data di tengah, kita skip 5 data sebelum titik tengah

    // Ambil 10 data dari tengah
    const records = await prisma.penelitian.findMany({
      skip: skipCount,
      take: 10,
    });

    // Format JSON dengan indentasi
    const formattedRecords = JSON.stringify(records, null, 2);

    // Set header Content-Type untuk JSON
    res.setHeader('Content-Type', 'application/json');
    
    // Kirimkan JSON yang terformat
    res.send(formattedRecords);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  };



  const getPenelitianById = async (req, res) => {
    const { id } = req.params;
  try {
    const record = await prisma.penelitian.findUnique({
      where: { id: id },
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

  const createPenelitian = async (req, res) => {
    const {
      id, judul, skema, abstrak, nipKetua, image, tkt, jumlahMember, durasi, jumlahLW,
      jumlahLT, periode, nipMember1, nipMember2, nipMember3, lw1, lw2, lt1, lt2,
      lws1, lws2, lts1, anggaran, jurusan, tanggalSubmit, namaKetua, status, revisi,
      verifikasi, kinerja, komkapus, plagiat
    } = req.body;
  
    try {
      const newPenelitian = await prisma.penelitian.create({
        data: {
          id,
          judul,
          skema,
          abstrak,
          nipKetua,
          image,
          tkt,
          jumlahMember,
          durasi,
          jumlahLW,
          jumlahLT,
          periode,
          nipMember1,
          nipMember2,
          nipMember3,
          lw1,
          lw2,
          lt1,
          lt2,
          lws1,
          lws2,
          lts1,
          anggaran,
          jurusan,
          tanggalSubmit,
          namaKetua,
          status,
          revisi,
          verifikasi,
          kinerja,
          komkapus,
          plagiat
        },
      });
      res.status(201).json(newPenelitian);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
   
 
  const updatePenelitian = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedRecord = await prisma.penelitian.update({
        where: { id: id },
        data,
      });
      res.json(updatedRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const deletePenelitian = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.penelitian.delete({
        where: { id: id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  module.exports = {
    getPenelitians,
    getPenelitianById,
    createPenelitian,
    updatePenelitian,
    deletePenelitian,
  };

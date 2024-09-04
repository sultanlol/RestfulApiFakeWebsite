
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();





const getPengabdian= async (req, res) => {
  try {
    // Hitung jumlah total catatan di tabel pengabdian
    const totalCount = await prisma.pengabdian.count();

    // Tentukan titik tengah dan hitung offset
    const middleIndex = Math.floor(totalCount / 2);
    const skipCount = Math.max(middleIndex - 5, 0); // Karena kita ingin 10 data di tengah, kita skip 5 data sebelum titik tengah

    // Ambil 10 data dari tengah
    const records = await prisma.pengabdian.findMany({
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



  const getPengabdianById = async (req, res) => {
    const { id } = req.params;
  try {
    const record = await prisma.pengabdian.findUnique({
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

  const createPengabdian = async (req, res) => {
    const {     id,
      judul,
      skema,
      abstrak,
      nipKetua,
      image,
      jumlahMember,
      durasi,
      periode,
      jumlahLW,
      jumlahLT,
      nipMember1,
      nipMember2,
      nipMember3,
      nipMember4,
      lw1,
      lw2,
      lws1,
      lws2,
      lws3,
      lt1,
      lts1,
      anggaran,
      jurusan,
      status,
      jumlahmitra,
      namamitra1,
      namamitra2,
      alamatmitra1,
      alamatmitra2,
      revisi,
      tanggalSubmit,
      verifikasi,
      kinerja,
      komkapus} = req.body;

    try {
      // Buat atau temukan entri di tabel `penelitian`
      let pengabdian = await prisma.pengabdian.findUnique({
        where: { id },
      });
  
      if (!pengabdian) {
        pengabdian = await prisma.pengabdian.create({
          data: {
            id,
          judul,
          skema,
          abstrak,
          nipKetua,
          image,
          jumlahMember,
          durasi,
          periode,
          jumlahLW,
          jumlahLT,
          nipMember1,
          nipMember2,
          nipMember3,
          nipMember4,
          lw1,
          lw2,
          lws1,
          lws2,
          lws3,
          lt1,
          lts1,
          anggaran,
          jurusan,
          status,
          jumlahmitra,
          namamitra1,
          namamitra2,
          alamatmitra1,
          alamatmitra2,
          revisi,
          tanggalSubmit,
          verifikasi,
          kinerja,
          komkapus
          },
        });
      }
    
      res.status(201).json(pengabdian);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
   
 
  const updatePengabdian = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      const updatedRecord = await prisma.pengabdian.update({
        where: { id: id },
        data,
      });
      res.json(updatedRecord);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  const deletePengabdian = async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.pengabdian.delete({
        where: { id: id },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


  module.exports = {
    getPengabdian,
    getPengabdianById,
    createPengabdian,
    updatePengabdian,
    deletePengabdian,
  };

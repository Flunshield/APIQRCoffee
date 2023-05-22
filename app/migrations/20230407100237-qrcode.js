module.exports = {
  async up(db, client) {
    await db.collection('QrCode').insertMany([
      {
        idKeycloak: 1,
        nom: "QR Code 1",
        backgroundColor: "#FFFFFF",
        foregroundColor: "#000000",
        errorLevel: "L",
        value: "https://example.com",
        size: 200,
        includeMargin: true,
        dateCreation: new Date(),
      },
      {
        idKeycloak: 2,
        nom: "QR Code 2",
        backgroundColor: "#000000",
        foregroundColor: "#FFFFFF",
        errorLevel: "H",
        value: "https://example.org",
        size: 300,
        includeMargin: false,
        dateCreation: new Date(),
      },
    ]);
  },

  async down(db, client) {
    await db.dropCollection('QrCode');
  }
};

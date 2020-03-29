
const input = {
  businessLicenseNumber: '23',
  informationOfBusiness: {
    idNumber: {
      id: 22,
      issuanceDate: '2222-02-02',
      issuancePlace: '22',
      pictureIdNumber: 'http://localhost:3032/uploads/1548662953953.png',
    },
    passport: {
      expiryDate: '2222-02-02',
      issuanceDate: '2222-02-02',
      issuancePlace: '222',
      passportNumber: 222,
      pictureOfBuyerHoldingPassport: 'http://localhost:3032/uploads/2314231253123.png',
      picturePassport: 'http://localhost:3032/uploads/231eqe42.png',
      address: {
        pictureAddress: 'http://localhost:3032/uploads/content-js.pdf',
      }
    },
  },
  street: {
    id: 22,
    issuanceDate: '2222-02-02',
    issuancePlace: 'tpcm',
    pictureStreet: 'http://localhost:3032/uploads/street.pdf',
  },
  proofOfTemporaryAddress: 'http://localhost:3032/uploads/1678345437.png',
}

// output
const output = {
  businessLicenseNumber: '23',
  id: 22,
  issuanceDate: '2222-02-02',
  issuancePlace: 'tpcm',
  pictureIdNumber: 'http://localhost:3032/uploads/1548662953953.png',
  expiryDate: '2222-02-02',
  passportNumber: 222,
  pictureOfBuyerHoldingPassport: 'http://localhost:3032/uploads/2314231253123.png',
  picturePassport: 'http://localhost:3032/uploads/231eqe42.png',
  pictureAddress: 'http://localhost:3032/uploads/content-js.pdf',
  pictureStreet: 'http://localhost:3032/uploads/street.pdf',
  proofOfTemporaryAddress: 'http://localhost:3032/uploads/1678345437.png'
}
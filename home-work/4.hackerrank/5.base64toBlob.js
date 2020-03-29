
// input
const input = {
  expiryDate: "2019-01-07",
  id: 12,
  issuanceDate: "2019-01-04",
  issuancePlace: "12",
  passportNumber: 12,
  pic: {
    pictureIdNumber:
      "data:application/pdf;name=[Smart Contract] A-Survey-of-Attack-on-Ethereum-Smart-Contracts.pdf;base64,JVBERi0xLjMKJcTl8uXrp/Og0MTGCjUgMCBvY",
    pictureOfBuyerHoldingPassport:
      "data:image/png;name=Screenshot from 2018-09-10 13-24-45.png;base64,iVBORw0KGgoAAAANSUhEUgAAAbkAAAFpCAI"
  },
  number: {
    picturePassport:
      "data:image/png;name=Screenshot from 2018-10-29 13-16-53.png;base64,iVBORw0KGgoAAAANSUhEUgAAAX",
    proofOfTemporaryAddress:
      "data:image/png;name=one-way.png;base64,iVBORw0KGgoAAAANSUhEUgAABIUA"
  }
};


// output
const output = {
  pictureIdNumber: '[Smart Contract] A-Survey-of-Attack-on-Ethereum-Smart-Contracts.pdf',
  pictureOfBuyerHoldingPassport: 'Screenshot from 2018-09-10 13-24-45.png',
  picturePassport: 'Screenshot from 2018-10-29 13-16-53.png',
  proofOfTemporaryAddress: 'one-way.png'
}
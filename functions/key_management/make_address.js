const bitcoin = require("bitcoinjs-lib");
const bip32 = require("bip32");

const xpub =
  "xpub6CzDCPbtLrrn4VpVbyyQLHbdSMpZoHN4iuW64VswCyEpfjM2mJGdaHJ2DyuZwtst96E16VvcERb8BBeJdHSCVmAq9RhtRQg6eAZFrTKCNqf";

makeAddress = () => {
  const { address } = bitcoin.payments.p2pkh({
    pubkey: bip32.fromBase58(xpub).derive(0).derive(2).publicKey,
  });
  return address;
};

module.exports = makeAddress;

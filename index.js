const bitcoin = require('bitcoinjs-lib');
const ecpair = require('ecpair');
const TINYSECP = require('tiny-secp256k1');
const ECPair = ecpair.ECPairFactory(TINYSECP);
const NETWORK_OBJ = bitcoin.networks.testnet;
const ECPAIR = ECPair.fromWIF("cVNxGqP2D9gwmWx7VTBxCsMrD95dShf7KTkVNQWvzLvSwoHze98a", NETWORK_OBJ);

// Function to get P2TR address from private key
function getP2TRAddressFromPrivateKey(privateKeyHex) {
    // Network definition for Testnet or Mainnet
    const network = bitcoin.networks.bitcoin; // use bitcoin.networks.testnet for Testnet
    console.log("network", bitcoin);

    // Create an ECPair (public/private key pair) from the private key
    //   bitcoin.ECPAIR.fromPrivateKey
    const srcWallet = bitcoin.payments.p2wpkh({
        pubkey: ECPAIR.publicKey,
        network: NETWORK_OBJ
    });
    console.log("srcWallet", srcWallet.address);
}

// Example usage with a hex private key (this should be replaced by your actual private key)
// const privateKeyHex = 'cVNxGqP2D9gwmWx7VTBxCsMrD95dShf7KTkVNQWvzLvSwoHze98a';
const privateKeyHex = 'e8a7d7ec22e15476c4368fc7abf16be71781e09803b02c3f4c115649a78930a4';
//e8a7d7ec22e15476c4368fc7abf16be71781e09803b02c3f4c115649a78930a4

try {
    const p2trAddress = getP2TRAddressFromPrivateKey(privateKeyHex);
    console.log('P2TR Address:', p2trAddress);
} catch (error) {
    console.error('Error generating P2TR address:', error.message);
}
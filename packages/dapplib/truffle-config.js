require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen food cheap royal pitch social goddess light army gas'; 
let testAccounts = [
"0xd36762d92a1cf81f7aeeb63761b972d4a0f8f044c395f23781e9ee28384082dd",
"0xdf1d55245605423515b37758d5932a5713e7dd0e7758fe805a211ffa3398cb09",
"0xf5fe04d7d368fc9cff34b96affe2b3989e90a8a5fee0ed90b021ae3e462f2fb2",
"0x205b10e6f9d54b604c10b4ad0fe05600edb8f0f3bdb1bb8ab4e8180f7a45e929",
"0x72afc7cb8d605ec66613dfaf17f7da0dcd36ebdb0b273b7750a30f2824bf7a21",
"0xf252c7e98ca8e163267ff4dbe179d1ce0ef10c9e16e714c84d08565e594784ed",
"0x273b105cfbb6e5cdd43438a7666208f20ebccedae8eeec40b5b5b9044810acf0",
"0xcdb378cd18b9869958c1f3902c1ae43d9b354bccb3b494ddc1a2db2d60c2cc28",
"0x38872545ebfdc473b35351a6f734a51c38c8e7c718784022b7f3cd920daaff4e",
"0xa4420ace871088e20e04372cee149aa8f1fd4598eac6c35fab098162e5267dae"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


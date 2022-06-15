require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remind attitude idea glide flip turn'; 
let testAccounts = [
"0x0d0722de7d18349220eaa156b75a68949c03263798a99a4fdb6affac7fc1334a",
"0xb2768b017710e308b04d3f62ed4abf035c5b0611470a0b6b061c0ccfe95c1bef",
"0x5738cf8df2080673941e52292ce3d36331d5e907f30dfd4ecef47f61c6ce61f1",
"0xb00f0b6aa7c9c026158d3c47a0ebe33c523be4bdd72ccf84486d9c98fe45cbaa",
"0xdf86acd6398b8abaec7c55f8c0507110482c5734e7df140b4d84efecbbb0c203",
"0xa929f5946b08aa1bb3b297ebd2e49d42611a16ab404bcaeaabdceddf2c4f2f0f",
"0xc4b56c6cf57193da6a2155699767b38d487b293848d4b3430d63a080c4be0dc7",
"0x5f4474bd1cb8a107728a0d1051b736dce293f2849ceee2c9d6409aad882951b1",
"0xecacfc3fc728bcc381d7fe4ed134206ed8fac933b7ee0e140d878ce58a099573",
"0x5bf3ab9149e668410da8c9985486162e5c232f3e38008f8308eca1d298994207"
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


// > truffle console
// > truffle(development)> exec ./external.js

const artifacts = require('./build/contracts/PayMe.json');
const contract = require('truffle-contract');
const PayMe = contract(artifacts);
PayMe.setProvider(web3.currentProvider);

module.exports = callback => {
    PayMe.deployed().then(instance => {
        console.log(`Contract address = ${instance.address}`);
        callback();
    });
};

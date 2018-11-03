const PayMe = artifacts.require('PayMe');

module.exports = function(deployer, network, accounts) {
    deployer.deploy(PayMe).then((instance) => {
        console.log(`PayMe has been deployed. It's address is: ${instance.address}`)
    });
};

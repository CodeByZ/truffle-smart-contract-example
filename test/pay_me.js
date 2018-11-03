const PayMe = artifacts.require('PayMe');
const sendAmount = web3.toWei(0.001, "ether");

contract('PayMe', accounts => {

    it("should receive 0.01 ether", () => {
        return PayMe.deployed().then(instance => {
            return instance.send(sendAmount).then(result => {
                return web3.eth.getBalance(instance.address);
            })
        }).then(balance => {
            assert.equal(balance.valueOf(), sendAmount, "contract balance doesn't equal 0.01 ether");
        });
    });

    it("should raise a FundingEvent", () => {
        return PayMe.deployed().then(instance => {
            return instance.send(sendAmount);
        }).then(result => {
            const {args, event} = result.logs[0];
            assert.equal(event, 'FundingEvent', "FundingEvent has not been fired");
            assert.ok(args.from, "event has 'from' field");
            assert.ok(args.value, "event has 'value' field");
        });
    });
});
const cocoCoin = artifacts.require('./cocoCoin.sol')

module.exports = (deployer) => {
  deployer.deploy(cocoCoin)
}

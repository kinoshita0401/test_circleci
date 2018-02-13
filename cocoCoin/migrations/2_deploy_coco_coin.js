const cocoCoin = artifacts.require('./CocoCoin.sol')

module.exports = (deployer) => {
  deployer.deploy(cocoCoin)
}

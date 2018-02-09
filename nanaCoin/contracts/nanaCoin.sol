pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract nanaCoin is StandardToken {
    string public name = "nanaCoin";
    string public symbol = "MNTK";
    uint public decimals = 2;
    uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

    function nanaCoin() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }
}
pragma solidity ^0.4.8;

import "./OraclizeRegistrar.sol";

contract TwitterRegistrarComputation is RegistrarI, OraclizeRegistrar {

  event OracleQuerySent(string _ipfsComputation, string _proof, bytes32 _id);

  string ipfsComputation = "QmcYvdBheacKACM55qQbsEDh55SrJ15DZQu7RbSJzrf8k1";

  uint oraclizeGasLimit = 280000;

  function TwitterRegistrarComputation(address _registry)
  OraclizeRegistrar(_registry) {

  }

  function getCost() onlyRegistry public constant returns(uint cost) {
    return oraclize_getPrice("computation", oraclizeGasLimit);
  }

  function register(string _proof, address _addr) payable onlyRegistry returns(bytes32 oracleId) {

    oracleId = oraclize_query("computation", [ipfsComputation, _proof, addressToString(_addr)], oraclizeGasLimit);
    OracleQuerySent(ipfsComputation, _proof, oracleId);
    _register(oracleId, _addr, _proof);
    return oracleId;

  }

  function addressToString(address x) returns (string) {
    bytes memory b = new bytes(20);
    for (uint i = 0; i < 20; i++)
      b[i] = byte(uint8(uint(x) / (2**(8*(19 - i)))));
    return string(b);
  }

}

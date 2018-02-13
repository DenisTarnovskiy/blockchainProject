pragma solidity ^0.4.0;

interface ERC20 {
  function transferFrom(address _from, address _to, uint _value) public returns (bool);
  function approve(address _spender, uint _value) public returns (bool);
  function allowence(address _owner, address _spender) public view returns (uint);
  event Approval(address indexed _owner, address indexed _spender, uint _value);
}

import { getContract } from 'viem'
import { abi } from './abi'
import { myClient, account } from './client'
const address = account.address;
console.log(address)
const contract = getContract({ address, abi, client: myClient })
 
// The below will send a single request to the RPC Provider.
const [name, totalSupply, symbol, balance] = await Promise.all([
  contract.read.name(),
  contract.read.totalSupply(),
  contract.read.symbol(),
  contract.read.balanceOf([address]),
])

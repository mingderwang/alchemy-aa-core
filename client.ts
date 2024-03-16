import { generatePrivateKey, privateKeyToAccount, signMessage } from "viem/accounts"
import { writeFileSync } from "fs-extra"
import { createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'
import { getBalance } from 'viem'
import { abi } from './abi'

  const privateKey =
        (process.env.PRIVATE_KEY as Hex) ??
        (() => {
                const pk = generatePrivateKey()
                writeFileSync(".envrc", `export PRIVATE_KEY=${pk}`)
                return pk
        })()
  console.log(`🍔 run direnv allow, if .envrc file is newly generated` + '\n');
export const account = privateKeyToAccount(privateKey)

export const myClient = () => {
  const client = createWalletClient({
    account,
    chain: mainnet,
    transport: http()
  })
 
  return client
}

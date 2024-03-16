import { generatePrivateKey, privateKeyToAccount, signMessage } from "viem/accounts"
import { writeFileSync } from "fs-extra"
import { createWalletClient, http } from 'viem'

import { createModularAccountAlchemyClient } from "@alchemy/aa-alchemy";
import { sepolia } from "@alchemy/aa-core";


const main = async () => {
  const privateKey =
        (process.env.PRIVATE_KEY as Hex) ??
        (() => {
                const pk = generatePrivateKey()
                writeFileSync(".envrc", `export PRIVATE_KEY=${pk}`)
                return pk
        })()

  console.log(privateKey)
  const signer = privateKeyToAccount(privateKey)
  console.log(signer)

  const smartAccountClient = await createModularAccountAlchemyClient({
  apiKey: "TglMAqEMJJmA6CgLQs2dUhsZwzVBT_e-",
  chain: sepolia,
  signer,
});


}
  
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

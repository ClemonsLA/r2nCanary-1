import {
    LightSmartContractAccount,
    getDefaultLightAccountFactoryAddress,
  } from "@alchemy/aa-accounts";
  import { AlchemyProvider } from "@alchemy/aa-alchemy";
  import { LocalAccountSigner, type Hex } from "@alchemy/aa-core";
  import { polygonMumbai } from "viem/chains";
  
  const chain = polygonMumbai;
  const PRIVATE_KEY = "0xd02b0da36749011a8bfed61bcc6954023c955e7c4c05b0f458949e84467da2e6" as Hex;
  const owner = LocalAccountSigner.privateKeyToAccountSigner(PRIVATE_KEY);
  
  export const provider = new AlchemyProvider({
    // get your Alchemy API key at https://dashboard.alchemy.com
    apiKey: "BcqJ525gHABLb-0w-5FrPao5ehIWnVP2",
    chain,
  }).connect(
    (rpcClient) =>
      new LightSmartContractAccount({
        rpcClient,
        owner,
        chain,
        factoryAddress: getDefaultLightAccountFactoryAddress(chain),
      })
  );
  (async () => {
    // Fund your account address with ETH to send for the user operations
    // (e.g. Get Sepolia ETH at https://sepoliafaucet.com)
    console.log("Smart Account Address: ", await provider.getAddress()); // Log the smart account address
  })();
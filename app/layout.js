import { Inter } from 'next/font/google'
import './globals.css'

import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWagmiConnector,
} from "../lib/dynamic";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CV 2 NFT',
  description: 'Your experience in Art',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: '84c57abb-c987-46b7-899f-063530499541',
          walletConnectors: [
            EthereumWalletConnectors,
          ],
        }}
      >
          <body className={inter.className}>
            {children}
          </body>
      </DynamicContextProvider>
    </html>
  )
}

import { createContext } from "react";


const CryptoContext = createContext({
  coins: {},
  setCoins: () => {}
})

export default CryptoContext;
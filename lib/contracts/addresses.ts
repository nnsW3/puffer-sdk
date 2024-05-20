import { Chain } from '../chains/constants';

// Source of truth: https://github.com/PufferFinance/Deployments-and-ACL/tree/main/docs/deployments
export const CHAIN_ADDRESSES = {
  [Chain.Mainnet]: {
    PufferVault: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
  },
  [Chain.Holesky]: {
    PufferVault: '0x98408eadD0C7cC9AebbFB2AD2787c7473Db7A1fa',
  },
  [Chain.Anvil]: {
    PufferVault: '0xf770bF9384c5aaD8b8a6EFAb5951CF089656A371',
  },
};

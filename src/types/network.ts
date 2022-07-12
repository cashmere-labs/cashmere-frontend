export interface Network {
  chainId: string;
  name: string;
  rpcUrls: string[];
  nativeCurrency: {
    name?: string;
    decimals?: number;
    symbol?: string;
  };
  imageUrl?: string;
}

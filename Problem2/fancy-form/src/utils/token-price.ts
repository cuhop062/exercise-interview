export type Display = {
  value: string;
};

export enum DisplayType {
  CONFIRM = "CONFIRM SWAP",
  ENTER_INPUT = "ENTER AMOUNT SEND",
}

export type DataTokens = {
  currency: string;
  date: string;
  price: number;
  icon: string;
};

export const TOKENS_PRICE: DataTokens[] = [
  {
    currency: "BLUR",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.20811525423728813,
    icon: "/tokens/BLUR.svg",
  },
  {
    currency: "bNEO",
    date: "2023-08-29T07:10:50.000Z",
    price: 7.1282679,
    icon: "/tokens/bNEO.svg",
  },
  {
    currency: "BUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.999183113,
    icon: "/tokens/BUSD.svg",
  },
  {
    currency: "USD",
    date: "2023-08-29T07:10:30.000Z",
    price: 1,
    icon: "/tokens/USD.svg",
  },
  {
    currency: "ETH",
    date: "2023-08-29T07:10:52.000Z",
    price: 1645.9337373737374,
    icon: "/tokens/ETH.svg",
  },
  {
    currency: "GMX",
    date: "2023-08-29T07:10:40.000Z",
    price: 36.345114372881355,
    icon: "/tokens/GMX.svg",
  },
  {
    currency: "STEVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.07276706779661017,
    icon: "/tokens/STEVMOS.svg",
  },
  {
    currency: "LUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.40955638983050846,
    icon: "/tokens/LUNA.svg",
  },
  {
    currency: "RATOM",
    date: "2023-08-29T07:10:40.000Z",
    price: 10.250918915254237,
    icon: "/tokens/RATOM.svg",
  },
  {
    currency: "STRD",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.7386553389830508,
    icon: "/tokens/STRD.svg",
  },
  {
    currency: "EVMOS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.06246181355932203,
    icon: "/tokens/EVMOS.svg",
  },
  {
    currency: "IBCX",
    date: "2023-08-29T07:10:40.000Z",
    price: 41.26811355932203,
    icon: "/tokens/IBCX.svg",
  },
  {
    currency: "IRIS",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.0177095593220339,
    icon: "/tokens/IRIS.svg",
  },
  {
    currency: "ampLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.49548589830508477,
    icon: "/tokens/ampLUNA.svg",
  },
  {
    currency: "KUJI",
    date: "2023-08-29T07:10:45.000Z",
    price: 0.675,
    icon: "/tokens/KUJI.svg",
  },
  {
    currency: "STOSMO",
    date: "2023-08-29T07:10:45.000Z",
    price: 0.431318,
    icon: "/tokens/STOSMO.svg",
  },
  {
    currency: "USDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.989832,
    icon: "/tokens/USDC.svg",
  },
  {
    currency: "axlUSDC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.989832,
    icon: "/tokens/axlUSDC.svg",
  },
  {
    currency: "ATOM",
    date: "2023-08-29T07:10:50.000Z",
    price: 7.186657333333334,
    icon: "/tokens/ATOM.svg",
  },
  {
    currency: "STATOM",
    date: "2023-08-29T07:10:45.000Z",
    price: 8.512162050847458,
    icon: "/tokens/STATOM.svg",
  },
  {
    currency: "OSMO",
    date: "2023-08-29T07:10:50.000Z",
    price: 0.3772974333333333,
    icon: "/tokens/OSMO.svg",
  },
  {
    currency: "rSWTH",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.00408771,
    icon: "/tokens/rSWTH.svg",
  },
  {
    currency: "STLUNA",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.44232210169491526,
    icon: "/tokens/STLUNA.svg",
  },
  {
    currency: "LSI",
    date: "2023-08-29T07:10:50.000Z",
    price: 67.69661525423729,
    icon: "/tokens/LSI.svg",
  },
  {
    currency: "OKB",
    date: "2023-08-29T07:10:40.000Z",
    price: 42.97562059322034,
    icon: "/tokens/OKB.svg",
  },
  {
    currency: "OKT",
    date: "2023-08-29T07:10:40.000Z",
    price: 13.561577966101694,
    icon: "/tokens/OKT.svg",
  },
  {
    currency: "SWTH",
    date: "2023-08-29T07:10:45.000Z",
    price: 0.004039850455012084,
    icon: "/tokens/SWTH.svg",
  },
  {
    currency: "USC",
    date: "2023-08-29T07:10:40.000Z",
    price: 0.994,
    icon: "/tokens/USC.svg",
  },
  {
    currency: "WBTC",
    date: "2023-08-29T07:10:52.000Z",
    price: 26002.82202020202,
    icon: "/tokens/WBTC.svg",
  },
  {
    currency: "wstETH",
    date: "2023-08-29T07:10:40.000Z",
    price: 1872.2579742372882,
    icon: "/tokens/wstETH.svg",
  },
  {
    currency: "YieldUSD",
    date: "2023-08-29T07:10:40.000Z",
    price: 1.0290847966101695,
    icon: "/tokens/YieldUSD.svg",
  },
  {
    currency: "ZIL",
    date: "2023-08-29T07:10:50.000Z",
    price: 0.01651813559322034,
    icon: "/tokens/ZIL.svg",
  },
];

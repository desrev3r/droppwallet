import { CoinbaseProductId } from '@modules/coinbase';

export class ExchangeRequestDto {
  tokenA: ExchangeToken;
  tokenB: ExchangeToken;
  from: string;
  to: string;
  value: number;
  walletId?: number;
}

export type ExchangeToken = 'BTC' | 'ETH' | 'USDT';

export class ExchangeCoinbaseAccountRequestDto {
  token: ExchangeToken;
}
export const Currency = {
  KRW: 'KRW',
  USD: 'USD',
} as const;
export type Currency = typeof Currency[keyof typeof Currency];

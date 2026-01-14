export const walletsKeys = {
  all: ['wallets'] as const,
  myWallets: () => [...walletsKeys.all, 'my-wallets'] as const,
};

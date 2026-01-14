export const exchangeKeys = {
  all: ['exchange'] as const,
  rates: () => [...exchangeKeys.all, 'rates'] as const,
};

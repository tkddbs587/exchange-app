type ErrorCode =
  | 'BAD_REQUEST'
  | 'NOT_FOUND'
  | 'UNAUTHORIZED'
  | 'VALIDATION_ERROR'
  | 'MISSING_PARAMETER'
  | 'WALLET_INSUFFICIENT_BALANCE'
  | 'INVALID_DEPOSIT_AMOUNT'
  | 'INVALID_WITHDRAW_AMOUNT'
  | 'CURRENCY_MISMATCH'
  | 'INVALID_AMOUNT_SCALE'
  | 'EXCHANGE_RATE_CURRENCY_MISMATCH'
  | 'UNSUPPORTED_FOREX_CONVERSION_CURRENCY'
  | 'INVALID_EXCHANGE_RATE_CURRENCY'
  | 'UNSUPPORTED_CURRENCY_FOR_KRW_CONVERSION';

export interface SuccessResponseData<T> {
  code: 'OK';
  message: string;
  data: T;
}

export interface ErrorResponseData<T = unknown> {
  code: ErrorCode;
  message: string;
  data: T;
}

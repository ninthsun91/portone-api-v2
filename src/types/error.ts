export interface PortOneError {
  type: string;
  message?: string;
}

export interface InvalidRequestError extends PortOneError {
  type: 'INVALID_REQUEST';
}

export interface UnauthorizedError extends PortOneError {
  type: 'UNAUTHORIZED';
}

export interface ForbiddenError extends PortOneError {
  type: 'FORBIDDEN';
}

export interface BillingKeyNotFoundError extends PortOneError {
  type: 'BILLING_KEY_NOT_FOUND';
}

export interface BillingKeyNotIssuedError extends PortOneError {
  type: 'BILLING_KEY_NOT_ISSUED';
}

export interface BillingKeyAlreadyDeletedError extends PortOneError {
  type: 'BILLING_KEY_ALREADY_DELETED';
}

export interface ChannelNotFoundError extends PortOneError {
  type: 'CHANNEL_NOT_FOUND';
}

export interface PaymentScheduleAlreadyExistsError extends PortOneError {
  type: 'PAYMENT_SCHEDULE_ALREADY_EXISTS';
}

export interface PgProviderError extends PortOneError {
  pgCode: string;
  pgMessage: string;
}

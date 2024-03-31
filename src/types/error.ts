export interface PortOneError {
  type: string;
  message?: string;
}

/*******/
/* 400 */
/*******/

export interface InvalidRequestError extends PortOneError {
  type: 'INVALID_REQUEST';
}

/*******/
/* 401 */
/*******/

export interface UnauthorizedError extends PortOneError {
  type: 'UNAUTHORIZED';
}

/*******/
/* 403 */
/*******/

export interface ForbiddenError extends PortOneError {
  type: 'FORBIDDEN';
}

/*******/
/* 404 */
/*******/

export interface BillingKeyNotFoundError extends PortOneError {
  type: 'BILLING_KEY_NOT_FOUND';
}

export interface BillingKeyNotIssuedError extends PortOneError {
  type: 'BILLING_KEY_NOT_ISSUED';
}

export interface ChannelNotFoundError extends PortOneError {
  type: 'CHANNEL_NOT_FOUND';
}

/*******/
/* 409 */
/*******/

export interface AlreadyPaidError extends PortOneError {
  type: 'ALREADY_PAID';
}

export interface BillingKeyAlreadyDeletedError extends PortOneError {
  type: 'BILLING_KEY_ALREADY_DELETED';
}

export interface CancelAmountExceedsCancellableAmountError extends PortOneError {
  type: 'CANCEL_AMOUNT_EXCEEDS_CANCELLABLE_AMOUNT';
}

export interface CancellableAmountConsistencyBrokenError extends PortOneError {
  type: 'CANCELLABLE_AMOUNT_CONSISTENCY_BROKEN';
}

export interface CancelTaxAmountExceedsCancellableTaxAmountError extends PortOneError {
  type: 'CANCEL_TAX_AMOUNT_EXCEEDS_CANCELLABLE_TAX_AMOUNT';
}

export interface CancelTaxFreeAmountExceedsCancellableTaxFreeAmountError extends PortOneError {
  type: 'CANCEL_TAX_FREE_AMOUNT_EXCEEDS_CANCELLABLE_TAX_FREE_AMOUNT';
}

export interface PaymentAlreadyCancelledError extends PortOneError {
  type: 'PAYMENT_ALREADY_CANCELLED';
}

export interface PaymentNotPaidError extends PortOneError {
  type: 'PAYMENT_NOT_PAID';
}

export interface PaymentScheduleAlreadyExistsError extends PortOneError {
  type: 'PAYMENT_SCHEDULE_ALREADY_EXISTS';
}

export interface SumOfPartsExceedsCancelAmountError extends PortOneError {
  type: 'SUM_OF_PARTS_EXCEEDS_CANCEL_AMOUNT';
}

export interface SumOfPartsExceedsTotalAmountError extends PortOneError {
  type: 'SUM_OF_PARTS_EXCEEDS_TOTAL_AMOUNT';
}

/*******/
/* 502 */
/*******/

export interface PgProviderError extends PortOneError {
  pgCode: string;
  pgMessage: string;
}

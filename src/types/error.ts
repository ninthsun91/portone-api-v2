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

export interface CashReceiptNotFoundError extends PortOneError {
  type: 'CASH_RECEIPT_NOT_FOUND';
}

export interface CashReceiptNotIssuedError extends PortOneError {
  type: 'CASH_RECEIPT_NOT_ISSUED';
}

export interface IdentityVerificationNotFoundError extends PortOneError {
  type: 'IDENTITY_VERIFICATION_NOT_FOUND';
}

export interface IdentityVerificationNotSentError extends PortOneError {
  type: 'IDENTITY_VERIFICATION_NOT_SENT';
}

export interface PaymentScheduleNotFoundError extends PortOneError {
  type: 'PAYMENT_SCHEDULE_NOT_FOUND';
}

export interface WebhookNotFoundError extends PortOneError {
  type: 'WEBHOOK_NOT_FOUND';
}

/*******/
/* 409 */
/*******/

export interface AlreadyPaidError extends PortOneError {
  type: 'ALREADY_PAID';
}

export interface AlreadyPaidOrWaitingError extends PortOneError {
  type: 'ALREADY_PAID_OR_WAITING';
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

export interface CashReceiptAlreadyIssuedError extends PortOneError {
  type: 'CASH_RECEIPT_ALREADY_ISSUED';
}

export interface IdentityVerificationAlreadyVerifiedError extends PortOneError {
  type: 'IDENTITY_VERIFICATION_ALREADY_VERIFIED';
}

export interface IdentityVerificationAlreadySendError extends PortOneError {
  type: 'IDENTITY_VERIFICATION_ALREADY_SEND';
}

export interface PaymentAlreadyCancelledError extends PortOneError {
  type: 'PAYMENT_ALREADY_CANCELLED';
}

export interface PastPaymentScheduleError extends PortOneError {
  type: 'PAST_PAYMENT_SCHEDULE';
}

export interface PaymentNotPaidError extends PortOneError {
  type: 'PAYMENT_NOT_PAID';
}

export interface PaymentNotWaitingForDepositError extends PortOneError {
  type: 'PAYMENT_NOT_WAITING_FOR_DEPOSIT';
}

export interface PaymentScheduleAlreadyExistsError extends PortOneError {
  type: 'PAYMENT_SCHEDULE_ALREADY_EXISTS';
}

export interface PaymentScheduleAlreadyProcessedError extends PortOneError {
  type: 'PAYMENT_SCHEDULE_ALREADY_PROCESSED';
}

export interface PaymentScheduleAlreadyRevokedError extends PortOneError {
  type: 'PAYMENT_SCHEDULE_ALREADY_REVOKED';
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

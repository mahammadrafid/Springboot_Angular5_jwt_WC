export const dev_prefix = 'http://localhost:8080';
export const loginUrl = '/api/auth';
export const operations = '/operations'
export const listTransactionsUrl = operations + '/transactions';
export const balanceUrl = operations + '/balance';
export const withdrawUrl = operations + '/withdraw';
export const devLoginUrl = dev_prefix + loginUrl;
export const devListTransactionsUrl = dev_prefix + listTransactionsUrl;
export const devBalanceUrl = dev_prefix + balanceUrl;
export const devWithdrawUrl = dev_prefix + withdrawUrl;

export const Routes = {
  START: "START",
  ERROR_NOT_FOUND: "ERROR_NOT_FOUND",

  ACCOUNT_START: "ACCOUNT_START",
  ACCOUNT_INFO: "ACCOUNT_INFO",
  ACCOUNT_SETTINGS_START: "ACCOUNT_SETTINGS_START",
  ACCOUNT_SETTINGS_LANGUAGE: "ACCOUNT_SETTINGS_LANGUAGE",

  WALLET_START: "WALLET_START",

  WITHDRAW_START: "WITHDRAW_START",
  WITHDRAW_AMOUNT: "WITHDRAW_AMOUNT",
  WITHDRAW_ADDRESS: "WITHDRAW_ADDRESS",
  WITHDRAW_WALLET: "WITHDRAW_WALLET",
  WITHDRAW__WALLET_SELECT: (s?: string) => `WITHDRAW_WALLET__${s || ""}`,
  WITHDRAW_CONFIRM: "WITHDRAW_CONFIRM",
  WITHDRAW_TRANSACTION: "WITHDRAW_TRANSACTION",
  WITHDRAW_FAILED: "WITHDRAW_FAILED",
  WITHDRAW__CONFIRM: "WITHDRAW__CONFIRM",
  WITHDRAW__CANCEL: "WITHDRAW__CANCEL",

  DEPOSIT_START: "DEPOSIT_START",
  DEPOSIT_WALLET: "DEPOSIT_WALLET",
  DEPOSIT_WALLET__SELECT: (s?: string) => `DEPOSIT_WALLET__${s || ""}`,
  DEPOSIT_ADDRESS: "DEPOSIT_ADDRESS",

  EXCHANGE: "EXCHANGE",
  EXCHANGE_WALLET_FROM: "EXCHANGE_WALLET_FROM",
  EXCHANGE_WALLET_FROM__SELECT: (s?: string) =>
    `EXCHANGE_WALLET_FROM__${s || ""}`,
  EXCHANGE_WALLET_TO: "EXCHANGE_WALLET_TO",
  EXCHANGE_WALLET_TO__SELECT: (s?: string) => `EXCHANGE_WALLET_TO__${s || ""}`,
  EXCHANGE_AMOUNT: "EXCHANGE_AMOUNT",
  EXCHANGE_CONFIRM: "EXCHANGE_CONFIRM",
  EXCHANGE__CONFIRM: "EXCHANGE__CONFIRM",
  EXCHANGE__CANCEL: "EXCHANGE__CANCEL",

  DASHBOARD_START: "DASHBOARD_START",
  DASHBOARD_STATS_START: "DASHBOARD_STATS_START",

  SETTINGS_START: "SETTINGS_START",
  SETTINGS_BOT_START: "SETTINGS_BOT_START",
  SETTINGS_FEE_START: "SETTINGS_FEE_START",

  SETTINGS_TOKEN__SELECT: (s?: string) => `SETTINGS_TOKEN__${s || ""}`,
  SETTINGS_TOKEN_START: "SETTINGS_TOKEN_START",
  SETTINGS_TOKEN_FEE_ADDRESS: "SETTINGS_TOKEN_FEE_ADDRESS",
  SETTINGS_TOKEN_FEE_DEPOSIT: "SETTINGS_TOKEN_FEE_DEPOSIT",
  SETTINGS_TOKEN_FEE_WITHDRAW: "SETTINGS_TOKEN_FEE_WITHDRAW",
  SETTINGS_TOKEN_FEE_RAINDROP: "SETTINGS_TOKEN_FEE_RAINDROP",
};

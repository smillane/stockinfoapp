function insiderTrading(symbolInput, lastUpdatedInput, fullNameInput, reportedTitleInput, transactionDateInput, transactionCodeInput, is10b51Input, transactionSharesInput, postSharesInput) {
  CREATE OR REPLACE PROCEDURE insiderTrading(
    symbolInput VARCHAR (10) UNIQUE NOT null,
    lastUpdatedInput TIMESTAMP NOT null,
    fullNameInput VARCHAR,
    reportedTitleInput VARCHAR,
    transactionDateInput VARCHAR,
    transactionCodeInput VARCHAR,
    is10b51Input VARCHAR,
    transactionSharesInput VARCHAR,
    postSharesInput VARCHAR,
  )
  LANGUAGE plpgsql
  as $$
  declare
    
  begin
    if 
  
  commit;
  end;$$
}
function insiderTradingCheck (symbolInput, lastUpdatedInput, fullNameInput, reportedTitleInput, transactionDateInput, transactionCodeInput, is10b51Input, transactionSharesInput, postSharesInput) {
  CREATE OR REPLACE PROCEDURE insiderTradingCheck (
    symbolInput             VARCHAR   (10) UNIQUE NOT null,
    lastUpdatedInput        TIMESTAMP NOT null,
    fullNameInput           VARCHAR,
    reportedTitleInput      VARCHAR,
    transactionDateInput    VARCHAR,
    transactionCodeInput    VARCHAR,
    is10b51Input            VARCHAR,
    transactionSharesInput  VARCHAR,
    postSharesInput         VARCHAR,
  )
  LANGUAGE plpgsql
  as $$
  declare
    
  begin
    SELECT DISTINCT ON (filingDate) filingDate FROM insiderTrading ORDER BY filingDate DESC;  
  commit;
  end;$$
}

function insiderTradingUpdate (symbolInput, lastUpdatedInput, fullNameInput, reportedTitleInput, transactionDateInput, transactionCodeInput, is10b51Input, transactionSharesInput, postSharesInput) {
  CREATE OR REPLACE PROCEDURE insiderTradingUpdate (
    symbolInput             VARCHAR   (10) UNIQUE NOT null,
    lastUpdatedInput        TIMESTAMP NOT null,
    fullNameInput           VARCHAR,
    reportedTitleInput      VARCHAR,
    transactionDateInput    VARCHAR,
    transactionCodeInput    VARCHAR,
    is10b51Input            VARCHAR,
    transactionSharesInput  VARCHAR,
    postSharesInput         VARCHAR,
  )
  LANGUAGE plpgsql
  AS $$
  declare
    
  BEGIN
    INSERT INTO insiderTrading (symbol, lastUpdated, fullName, reportedTitle, filingDate, transactionCode, is10b51, transactionShares, postShares)
    VALUES
    SELECT FROM insiderTrading ORDER BY filingDate DESC LIMIT 
    RETURNING *;
  COMMIT;
  END;$$
}
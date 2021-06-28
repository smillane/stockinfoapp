function insiderTrading (stock, lastUpdated, fullName, reportedTitle, transactionDate, transactionCode, is10b51, transactionShares, postShares) {
  CREATE OR REPLACE PROCEDURE insiderTrading (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    fullName VARCHAR,
    reportedTitle VARCHAR,
    transactionDate VARCHAR,
    transactionCode VARCHAR,
    is10b51 VARCHAR,
    transactionShares VARCHAR,
    postShares VARCHAR,
  )
  LANGUAGE plpgsql
  as $$
  begin
    if 
  
  commit;
  end;$$
}
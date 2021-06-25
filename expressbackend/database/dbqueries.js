function insiderTradingQuery() {
  CREATE TABLE IF NOT EXISTS insiderTrading (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    fullName VARCHAR,
    reportedTitle VARCHAR,
    transactionDate VARCHAR,
    transactionCode VARCHAR,
    is10b51 VARCHAR,
    transactionShares VARCHAR,
    postShares VARCHAR,
  );
}

function stockNews() {
  CREATE TABLE IF NOT EXISTS stockNews (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    headline VARCHAR,
    summary VARCHAR,
  );
}

function stockData() {
  CREATE TABLE IF NOT EXISTS stockData (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    latestPrice VARCHAR,
    change VARCHAR,
    changePercent VARCHAR,
    latestVolume VARCHAR,
    avgTotalVolume VARCHAR,
  );
}

function stockDividend() {
  CREATE TABLE IF NOT EXISTS stockDividend (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
     VARCHAR,
     VARCHAR,
  );
}
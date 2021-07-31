function insiderTrading() {
  CREATE TABLE IF NOT EXISTS insiderTrading (
    symbol            VARCHAR (10) UNIQUE NOT null,
    lastUpdated       TIMESTAMP NOT null,
    fullName          VARCHAR (50),
    reportedTitle     VARCHAR (50),
    filingDate        VARCHAR (50),
    transactionCode   VARCHAR (50),
    is10b51           VARCHAR (20),
    transactionShares VARCHAR (20),
    postShares        VARCHAR (20),
  );
}

function stockNews() {
  CREATE TABLE IF NOT EXISTS stockNews (
    symbol      VARCHAR (10) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    headline    VARCHAR,
    summary     VARCHAR,
  );
}

function stockData() {
  CREATE TABLE IF NOT EXISTS stockData (
    symbol         VARCHAR (10) UNIQUE NOT null,
    lastUpdated    TIMESTAMP NOT null,
    latestPrice    VARCHAR (50),
    change         VARCHAR (50),
    changePercent  VARCHAR (50),
    latestVolume   VARCHAR (50),
    avgTotalVolume VARCHAR (50),
    paymentDate    VARCHAR (50),
  );
}

function stockDividend() {
  CREATE TABLE IF NOT EXISTS stockDividend (
    symbol      VARCHAR (10) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    amount      VARCHAR,
    recordDate  VARCHAR,
    flag        VARCHAR,
  );
}

function stocklists() {
  CREATE TABLE IF NOT EXISTS stockData (
    stock           VARCHAR (50) UNIQUE NOT null,
    lastUpdated     TIMESTAMP NOT null,
    latestPrice     VARCHAR,
    change          VARCHAR,
    changePercent   VARCHAR,
    latestVolume    VARCHAR,
    avgTotalVolume  VARCHAR,
  );
}
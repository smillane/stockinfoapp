function insiderTradingQuery(stockInput, lastUpdatedInput, fullNameInput, reportedTitleInput, transactionDateInput, transactionCodeInput, is10b51Input, transactionSharesInput, postSharesInput) {
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
  )  
  INSERT INTO insiderTrading (stock, lastUpdated, fullName, reportedTitle, transactionDate, transactionCode, is10b51, transactionShares, postShares) 
  VALUES (
    stockInput,
    lastUpdatedInput,
    fullNameInput,
    reportedTitleInput,
    transactionDateInput,
    transactionCodeInput,
    is10b51Input,
    transactionSharesInput,
    postSharesInput,
  )
  ON CONFLICT (stock)
  DO UPDATE SET 
  stock = stockInput,
  lastUpdated = lastUpdatedInput,
  fullName = fullNameInput,
  reportedTitle = reportedTitleInput,
  transactionDate = transactionDateInput,
  transactionCode = transactionCodeInput,
  is10b51 = is10b51Input,
  transactionShares = transactionSharesInput,
  postShares = postSharesInput;
}

function stockNews(stockInput, lastUpdatedInput, headlineInput, summaryInput) {
  CREATE TABLE IF NOT EXISTS stockNews (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    headline VARCHAR,
    summary VARCHAR,
  )
  INSERT INTO stockNews (stock, lastUpdated, headline, summary)
  VALUES (
    stockInput,
    lastUpdatedInput,
    headlineInput,
    summaryInput,
  )
  ON CONFLICT (stock)
  DO UPDATE SET 
  stock = stockInput,
  lastUpdated = lastUpdatedInput,
  headline = headlineInput,
  summary = summaryInput;
}

function stockData(stockInput, lastUpdatedInput, latestPriceInput, changeInput, changePercentInput, latestVolumeInput, avgTotalVolumeInput) {
  CREATE TABLE IF NOT EXISTS stockData (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
    latestPrice VARCHAR,
    change VARCHAR,
    changePercent VARCHAR,
    latestVolume VARCHAR,
    avgTotalVolume VARCHAR,
  )
  INSERT INTO stockData (stock, lastUpdated, latestPrice, change, changePercent, latestVolume, avgTotalVolume)
  VALUES (
    stockInput, 
    lastUpdatedInput, 
    latestPriceInput, 
    changeInput, 
    changePercentInput, 
    latestVolumeInput, 
    avgTotalVolumeInput
  )
  ON CONFLICT (stock)
  DO UPDATE SET
  stock = stockInput,
  lastUpdated = lastUpdatedInput,
  latestPrice = latestPriceInput,
  change = changeInput,
  changePercent changePercentInput,
  latestVolume latestVolumeInput,
  avgTotalVolume = avgTotalVolumeInput
}

function stockDividend(stockInput, lastUpdatedInput) {
  CREATE TABLE IF NOT EXISTS stockDividend (
    stock VARCHAR (50) UNIQUE NOT null,
    lastUpdated TIMESTAMP NOT null,
  )
  INSERT INTO stockDividend (stock, lastUpdated)
  VALUES (
    stock, 
    lastUpdated
  ON CONFLICT (stock)
  DO UPDATE SET
  stock = stockInput,
  lastUpdated = lastUpdatedInput;
}
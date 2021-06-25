function insiderTradingQuery(stock, lastUpdated, fullName, reportedTitle, transactionDate, transactionCode, is10b51, transactionShares, postShares) {
  INSERT INTO insiderTrading (stock, lastUpdated, fullName, reportedTitle, transactionDate, transactionCode, is10b51, transactionShares, postShares) 
  VALUES (
    stock,
    lastUpdated,
    fullName,
    reportedTitle,
    transactionDate,
    transactionCode,
    is10b51,
    transactionShares,
    postShares,
  );
}

function stockNews(stock, lastUpdated, headline, summary) {
  INSERT INTO stockNews (stock, lastUpdated, headline, summary)
  VALUES (
    stock,
    lastUpdated,
    headline,
    summary
  );
}

function stockData(stock, lastUpdated, latestPrice, change, changePercent, latestVolume, avgTotalVolume) {
  INSERT INTO stockData (stock, lastUpdated, latestPrice, change, changePercent, latestVolume, avgTotalVolume)
  VALUES (
    stock, 
    lastUpdated, 
    latestPrice, 
    change, 
    changePercent, 
    latestVolume, 
    avgTotalVolume
  );
}

function stockDividend(stock, lastUpdated) {
  INSERT INTO stockDividend (stock, lastUpdated)
  VALUES (
    stock, 
    lastUpdated
  );
}
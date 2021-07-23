company info (populate table for symbol if not there) https://iexcloud.io/docs/api/#company

misc info (update once daily only 5:30am if queried, or if not updated previous day of query) https://iexcloud.io/docs/api/#key-stats

advanced financials/stats (update quartly after earnings) 

look through and use either: https://iexcloud.io/docs/api/#advanced-stats

or a combination of : 
https://iexcloud.io/docs/api/#cash-flow
https://iexcloud.io/docs/api/#income-statement
https://iexcloud.io/docs/api/#balance-sheet


upcoming ipo's (query db and write algorithm for when to update and how) https://iexcloud.io/docs/api/#ipo-calendar-v2-beta



create IEX Only intraday minute bar
Free This will only return IEX data with keys minute, high, low, average, volume, notional, and numberOfTrades
Use the chartIEXOnly param

from https://iexcloud.io/docs/api/#intraday-prices


use historical prices to create chart?
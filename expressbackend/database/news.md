## Have news be a future feature down the line, since the queries/logic for when/how to update using api seems tricky and time consuming, and not an important feature



if news table is empty for {stock} then run api, populate table
`https://sandbox.iexapis.com/stable/stock/{stock}/news/last/20subattribute=langen?token=${IEX_PUBLIC_TOKEN}`

else check most recently added values date, if t

if not same, update table with returned values

`https://sandbox.iexapis.com/stable/stock/{stock}/news/last/1subattribute=langen?token=${IEX_PUBLIC_TOKEN}`



POTENTIALLY CHOOSE WHICH NEWS SOURCES USING 

subattribute	string	Optional.
Allows you to query time series by fields in the result set. All time series data is stored by ID, then key, then subkey. If you want to query by any other field in the data, you can use subattribute.
For example, news may be stored as /news/{symbol}/{newsId}, and the result data returns the keys id, symbol, date, sector, hasPaywall, lang
By default you can only query by symbol or id. Maybe you want to query all news where the language is English.

Your query would be: /time-series/news?subattribute=lang|en
The syntax is subattribute={keyName1}|{value1},{keyName2}|{value2}

Both the key name and the value are case sensitive. A pipe symbol (|) is used to represent “equal to”, and a tilde symbol (~) is used to represent “not equal to”.
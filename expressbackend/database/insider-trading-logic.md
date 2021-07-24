if insiderTrading table is empty for {stock} then run api, populate table
`https://sandbox.iexapis.com/stable/time-series/INSIDER_TRANSACTIONS/${stock}/last=20?token=${IEX_PUBLIC_TOKEN}`


else run api for last transaction, check if most recent update to table is same transaction as api return value, if it is, do nothing

if not same, run api using last-date of transaction, and update/insert into table

`https://sandbox.iexapis.com/stable/time-series/INSIDER_TRANSACTIONS/${stock}/from=${last-date}?token=${IEX_PUBLIC_TOKEN}`


add logic for tracking insider join date, and add that date for each persons transactions

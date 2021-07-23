if insiderTrading table is empty for {stock} then run api, populate table
`https://sandbox.iexapis.com/stable/time-series/INSIDER_TRANSACTIONS/nvda/last=20?token=${IEX_PUBLIC_TOKEN}`


else run api, check if most recent update to table is same transaction as api return value, if it is, do nothing

if not same, add returned values to table

`https://sandbox.iexapis.com/stable/time-series/INSIDER_TRANSACTIONS/nvda/from=${last-date}?token=${IEX_PUBLIC_TOKEN}`

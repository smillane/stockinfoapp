import { useState, useEffect } from 'react';
import { SearchRounded } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

const Search = (props) => {
  const [input, setInput] = useState('');
  const [stockInfo, setStockInfo] = useState([]);
  const [insiderTrading, setInsiderTrading] = useState([]);

  const fetchDatastockInfo = async () => {
    return await fetch(`/stocks/${input}`)
    .then(response => response.json())
    .then(data => { 
      setStockInfo(data)
    }).catch(err => {
      console.log("Error Reading data " + err)
    })}

    const fetchDataInsiderTrading = async () => {
      return await fetch(`/InsiderTrading/${input}`)
      .then(response => response.json())
      .then(data => { 
        setInsiderTrading(data)
      }).catch(err => {
        console.log("Error Reading data " + err)
      })}

  useEffect(() => {fetchDatastockInfo()},[])
  useEffect(() => {fetchDataInsiderTrading()},[])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchDatastockInfo();
    fetchDataInsiderTrading();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Search"
          id="input-with-icon-adornment"          
          startAdornment={
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          }
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
      {(() => {if (stockInfo.length !== 0) {
        return (
          <div>
            <h3>{stockInfo.companyName}</h3>
            <h3>Price: {stockInfo.latestPrice}</h3>
            <h5>Change: {stockInfo.change}, {(stockInfo.changePercent * 100).toFixed(2)}%</h5>
            <h5>Volume: {stockInfo.latestVolume}</h5>
            <h5>Avg Volume: {stockInfo.avgTotalVolume}</h5>
            <h3>Dividend yield: </h3>
            
            <List>
              <h3>Insider Trades</h3>
              {insiderTrading.slice(0, 6).map((trade) => (
              <ListItem key={trade.date}>
                <ListItemText>
                  <p>Insider Name: {trade.fullName}</p>
                  <p>Insider Title: {trade.reportedTitle}</p>
                  <p>Transaction Date: {trade.transactionDate}</p>
                  <p>Transaction Type: {trade.transactionCode}</p>
                  <p>Predetermined Trade: {trade.is10b51}</p>                  
                  <p>Transaction Size: {trade.transactionShares} Shares</p>
                  <p>Shares Remaining: {trade.postShares}</p>
                </ListItemText>
                <Divider /> 
              </ListItem>
              ))}
            </List>
          </div>
          )
        }
      })()}
    </div>
  );
}

export default Search
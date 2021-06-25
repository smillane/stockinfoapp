import { useState, useEffect } from 'react';
import { SearchRounded } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import '../Styles/Search.css';
import Button from '@material-ui/core/Button';
import Truncate from 'react-truncate';

const Search = (props) => {
  const [input, setInput] = useState('');
  const [stockInfo, setStockInfo] = useState([]);
  const [insiderTrading, setInsiderTrading] = useState([]);
  const [insiderTradingCount, setInsiderTradingCount] = useState(3);
  const [stockNews, setStockNews] = useState([]);
  const [stockNewsCount, setStockNewsCount] = useState(3);

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

    const fetchDataStockNews= async () => {
      return await fetch(`/stocknews/${input}`)
      .then(response => response.json())
      .then(data => { 
        setStockNews(data)
      }).catch(err => {
        console.log("Error Reading data " + err)
    })}

  useEffect(() => {fetchDatastockInfo()},[])
  useEffect(() => {fetchDataInsiderTrading()},[])
  useEffect(() => {fetchDataStockNews()},[])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchDatastockInfo();
    fetchDataInsiderTrading();
    fetchDataStockNews();
    setInsiderTradingCount(3);
    setStockNewsCount(3);
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
            <TableContainer className='stock-info'>
              <Table className='Table' aria-label="customized table">
                <TableRow>
                  <h1>{stockInfo.companyName}</h1>
                </TableRow>
                <TableRow>
                  <h2>Price: {stockInfo.latestPrice}</h2>
                </TableRow>
                <TableRow>
                  Change: {stockInfo.change}, {(stockInfo.changePercent * 100).toFixed(2)}%
                </TableRow>
                <TableRow>
                  Volume: {stockInfo.latestVolume}
                </TableRow>
                <TableRow>
                  Avg Volume: {stockInfo.avgTotalVolume}
                </TableRow>
                <TableRow>
                  Dividend: 
                </TableRow>
                <TableRow>
                  Dividend Payment Date: 
                </TableRow>
                <TableRow>
                  Dividend Record Date: 
                </TableRow>
              </Table>
            </TableContainer>
            
            <TableContainer className='stock-info'>
              <h2>News</h2>
              <Table aria-label="customized table">
              {stockNews.slice(0, stockNewsCount).map((news) => (
                  <TableRow key={news.date} className='stocknews'>
                    <h3>{news.headline}</h3>
                    <Truncate lines={3} width={500}>                      
                      <span>{news.summary}</span>
                    </Truncate>
                  </TableRow>
              ))}
              </Table>
            </TableContainer>
            <br />
            <Button variant="contained" onClick={() => setStockNewsCount(stockNewsCount + 3)}>Show More Articles</Button>
            
            <TableContainer className='stock-info'>
              <h2>Insider Trades</h2>
              {insiderTrading.slice(0, insiderTradingCount).map((trade) => (
              <Table className="insider-trades-table" aria-label="customized table" key={trade.date}>
                  <TableRow>Insider Name: {trade.fullName}</TableRow>
                  <TableRow>Insider Title: {trade.reportedTitle}</TableRow>
                  <TableRow>Transaction Date: {trade.transactionDate}</TableRow>
                  <TableRow>Transaction Type: {trade.transactionCode}</TableRow>
                  <TableRow>Predetermined Trade: {trade.is10b51}</TableRow>                  
                  <TableRow>Transaction Size: {trade.transactionShares} Shares</TableRow>
                  <TableRow>Shares Remaining: {trade.postShares}</TableRow>                
              </Table>
              ))}
            </TableContainer>
            <br />
            <Button variant="contained" onClick={() => setInsiderTradingCount(insiderTradingCount + 3)}>Show More Transactions</Button>
          </div>
          )
        }
      })()}
    </div>
  );
}

export default Search
import React, { useEffect, useState } from 'react';
import './style/style.css';
import axios from 'axios';

function App() {

  const [allCurrency, setAllCureency] = useState([])
  const [result, setResult] = useState(undefined)
  const [to, setTo] = useState("AZN")
  const [from, setFrom] = useState("USD")
  const [amount, setAmount] = useState(100)


  useEffect(() => {
    axios.get(`https://api.apilayer.com/exchangerates_data/latest?symbols=EUR,RUB,TRY,GBP,JPY,USD&base=${to}`, {
      headers: {
        "apikey": "1pq7dHdHGvOULT0hIbYcEL2AcpWI3gMl"
      }
    }).then(res => {
      setAllCureency(res.data.rates)
    })
  }, [to])

  useEffect(() => {
    setResult(undefined)
    if (allCurrency) {
      const result = allCurrency[from] * amount
      setResult(result)
    }
  }, [allCurrency, to, from, amount])


  const handleExchange = (value) => {
    setAmount(value) 
  }



  return (
    <>
      <section className="converter mt-5">
        <div className="container">
          <div className="dropdown-group d-flex justify-content-between align-items-center gap-3">
            <div className="dropdown">
              <a className="btn dropdown-toggle w-100" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {to}
              </a>
              <ul className="dropdown-menu w-75" aria-labelledby="dropdownMenuLink">
                {
                  Object.keys(allCurrency)?.map((currency, index) => (
                    <li><span className="dropdown-item" key={index} onClick={() => setTo(currency)} >{currency}</span></li>
                  ))
                }
              </ul>
            </div>
            <div className="icon-box-drowdown-group">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div className="dropdown">
              <a className="btn dropdown-toggle w-100" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {from}
              </a>
              <ul className="dropdown-menu w-75" aria-labelledby="dropdownMenuLink">

                {
                  Object.keys(allCurrency)?.map((currency, index) => (
                    <li><span className="dropdown-item" key={index} onClick={() => setFrom(currency)} >{currency}</span></li>
                  ))
                }

              </ul>
            </div>
          </div>
          <div className="amount px-3 pt-2 mt-4">
            <div className="amount-heading mt-4">
              <h3>Amount</h3>
            </div>
            <form>
              <div className="input-box">
                <input type="text" className="w-100" placeholder="Qiymət daxil edin..." onChange={(e) => handleExchange(e.target.value)} defaultValue={amount} />
                <div className="spinner-box">
                  <i className="fa-solid fa-arrows-spin" onClick={handleExchange}></i>
                </div>
              </div>
              {
                result ? <h6 className="mt-3">{`${result} ${from}`}</h6> : "Loading..."
              }

            </form>
          </div>
          <div className="lists-boxes mt-4">
            {
              Object.keys(allCurrency).map(name => (
                <div className="list-box py-3 mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3">
                      <div className="icon-box">
                        {/* <i className="fa-solid fa-dollar-sign"></i> */}
                      </div>
                      <div className="converter-name">
                        {name}
                      </div>
                    </div>
                    <div className="price-box">{allCurrency[name]}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

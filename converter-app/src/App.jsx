import './style/style.css';

function App() {
  return (
    <>
      <section className="converter mt-5">
        <div className="container">
          <div className="amount px-3 pt-2">
            <div className="amount-heading mt-4">
              <h3>Amount</h3>
            </div>
            <form>
              <div className="input-box">
                <input type="text" className="w-100" placeholder="Qiymət daxil edin..." />
                <div className="spinner-box">
                <i className="fa-solid fa-arrows-spin"></i>
                </div>
              </div>
              <h6 className="mt-3">164.8 Lari</h6>
            </form>
          </div>
          <div className="lists-boxes mt-4">
            <div className="list-box py-3 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="converter-name">
                    Dollar
                  </div>
                </div>
                <div className="price-box">23</div>
              </div>
            </div>
            <div className="list-box py-3 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="converter-name">
                    Dollar
                  </div>
                </div>
                <div className="price-box">23</div>
              </div>
            </div>
            <div className="list-box py-3 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="converter-name">
                    Dollar
                  </div>
                </div>
                <div className="price-box">23</div>
              </div>
            </div>
            <div className="list-box py-3 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <div className="icon-box">
                    <i className="fa-solid fa-dollar-sign"></i>
                  </div>
                  <div className="converter-name">
                    Dollar
                  </div>
                </div>
                <div className="price-box">23</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

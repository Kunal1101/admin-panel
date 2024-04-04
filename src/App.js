import './App.css';
import Analytics from './Components/Analytics';
import Barchart from './Components/Barchart';
import Header from './Components/Header';
import Piechart from './Components/Piechart';
import ProductList from './Components/ProductList';
import Sidebar from './Components/Sidebar';
import "../src/common"
import { AiOutlineArrowRight } from "react-icons/ai";
function App() {
  return (
    <>
      <div className='main-grid'>
        <div className="row">
          <div className="col-5 col-lg-3 col-xl-2 pe-0 position-relative" id='sidebar_container-col'>
            <Sidebar />
            <AiOutlineArrowRight className='arrow' style={{
              position: "absolute",
              right: "-15px",
              top: "50%",
              width: "40px",
              height: "40px",
              color: "#fff",
              backgroundColor: "black",
              padding: "10px",
              borderRadius: "50%"
            }}
            onClick={() => document.getElementById("sidebar_container-col").classList.toggle("opened")}  />

          </div>
          <div className="col-7 col-lg-9 col-xl-10" id='main-container-col' style={{ overflow: "hidden auto", height: "100vh"}}>
            <Header />
            <Analytics />
            <div className='row mt-4 mb-4'>
              <div className='col-md-8'>
                <Barchart />
              </div>
              <div className='col-md-4 mt-4 mt-md-0'>
                <Piechart />
              </div>
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

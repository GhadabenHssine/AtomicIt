

import Home from './Home/Home';
import Chart from './chart/Chart';
import Footer from './footer/Footer';
import PieChart from './pieChart/PieChart';
import WidghtLg from './widghtLg/WidghtLg';

import TopBar from './Topbar/TopBar';
import Porcentage from './porcentage/Porcentage';
import WidghtSm from './widghtSm/WidghtSm';
import ReplacePie from './replacePie/ReplacePie';

function App() {
  return (
    <div className="App">
      <Home />

      <Chart />

      <Porcentage />
      <WidghtLg />

      <WidghtSm />
      <ReplacePie />
      <Footer />


      <TopBar />



    </div>
  );
}

export default App;

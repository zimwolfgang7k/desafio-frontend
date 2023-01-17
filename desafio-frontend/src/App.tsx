import './style/global.css';
import UserSide from './components/userSide';
import ApiSide from './components/apiSide';

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <div className="container-app_inside">
          <UserSide />
          <ApiSide />
        </div>
      </div>
    </div>
  );
}

export default App;

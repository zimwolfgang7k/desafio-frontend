import './style/global.css';
import UserSide from './components/userSide';
import ApiSide from './components/apiSide';
import Provider from './context/mainContext';

function App() {
  return (
    <div className="App">
      <div className="container-app">
        <div className="container-app_inside">
          <Provider>
            <UserSide />
            <ApiSide />
          </Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

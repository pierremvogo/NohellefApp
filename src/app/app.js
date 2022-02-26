import '../assets/css/app.css';
import MainRoute from '../app/routes/routes';
import axios from 'axios';

function App() {
  (async () => {
    console.log('OKKKKK');
    try {
      const res = await axios.post(
        'http://38.242.220.206:6051/api/v1/auth/login',
        { login: 'string', password: 'stringsht' }
      );
      console.log('res: ', res);

    } catch(err) {
      console.log(err.response);
    }
  
  })();
  return <MainRoute />
}
export default App;

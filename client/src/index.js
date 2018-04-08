import dva from 'dva';
import './index.css';

global.BASE_URL = 'http://112.74.40.94:5173';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/layout'));
app.model(require('./models/home'));
app.model(require('./models/record'));
app.model(require('./models/log'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');

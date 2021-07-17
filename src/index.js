import ReactDOM from 'react-dom';
import App from './components/App/App';
import { AppProvider } from './components/App/context';

ReactDOM.render(
    <AppProvider>
        <App />
    </AppProvider>,
    document.getElementById('root')
);

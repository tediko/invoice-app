import { Route, Switch } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import Header from '../Header/Header';
import Invoices from '../Invoices/Invoices';
import FormController from '../FormController/FormController';
import InvoiceView from '../InvoiceView/InvoiceView';
import Modal from '../Modal/Modal';

const App = () => {
    return (
        <Wrapper>
            <FormController />
            <Modal />
            <Header />
            <Switch>
                <Route exact path="/">
                    <Invoices />
                </Route>
                <Route path="/invoice/:id" children={<InvoiceView />} />
            </Switch>
        </Wrapper>
    );
};

export default App;

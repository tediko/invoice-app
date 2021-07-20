import { useGlobalContext } from '../App/context';
import Filter from './Filter/Filter';
import {
    Container,
    Header,
    Info,
    Title,
    Text,
    NewInvoice,
} from './InvoicesStyles';

const Invoices = () => {
    const { windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <Container>
            <Header>
                <Info>
                    <Title>Invoices</Title>
                    <Text>7 invoices</Text>
                </Info>
                <Filter isDesktop={isDesktop} />
                <NewInvoice>New {isDesktop && 'Invoice'}</NewInvoice>
            </Header>
        </Container>
    );
};

export default Invoices;

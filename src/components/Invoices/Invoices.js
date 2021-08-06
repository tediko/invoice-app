import { useGlobalContext } from '../App/context';
import Filter from './Filter/Filter';
import List from './List/List';
import Button from '../shared/Button/Button';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import { invoicesLengthMessage } from '../../utilities/invoicesLengthMessage';
import { Container, Header, Info, Title, Text } from './InvoicesStyles';

const Invoices = () => {
    const { windowWidth, openForm, filteredInvoices, filterType } =
        useGlobalContext();
    const isDesktop = windowWidth >= 768;
    const isEmpty = filteredInvoices.length === 0;

    return (
        <Container>
            <Header>
                <Info>
                    <Title>Invoices</Title>
                    <Text>
                        {invoicesLengthMessage(
                            filteredInvoices,
                            filterType,
                            windowWidth
                        )}
                    </Text>
                </Info>
                <Filter isDesktop={isDesktop} />
                <Button type="button" $newInvoice onClick={openForm}>
                    New {isDesktop && 'Invoice'}
                </Button>
            </Header>
            {isEmpty ? <ErrorMessage /> : <List />}
        </Container>
    );
};

export default Invoices;

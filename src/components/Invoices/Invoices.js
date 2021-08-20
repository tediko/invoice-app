import { useGlobalContext } from '../App/context';
import Filter from './Filter/Filter';
import List from './List/List';
import Button from '../shared/Button/Button';
import invoicesLengthMessage from '../../utilities/invoicesLengthMessage';
import { invoicesHeaderVariants } from '../../utilities/framerVariants';
import { Container, Header, Info, Title, Text } from './InvoicesStyles';

const Invoices = () => {
    const { windowWidth, createInvoice, filteredInvoices, filterType } =
        useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <Container>
            <Header
                variants={invoicesHeaderVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
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
                <Button type="button" $newInvoice onClick={createInvoice}>
                    New {isDesktop && 'Invoice'}
                </Button>
            </Header>
            <List />
        </Container>
    );
};

export default Invoices;

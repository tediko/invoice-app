import { useGlobalContext } from '../App/context';
import Filter from './Filter/Filter';
import List from './List/List';
import Button from '../shared/Button/Button';
import { Container, Header, Info, Title, Text } from './InvoicesStyles';

const Invoices = () => {
    const { windowWidth, openForm } = useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <Container>
            <Header>
                <Info>
                    <Title>Invoices</Title>
                    <Text>7 invoices</Text>
                </Info>
                <Filter isDesktop={isDesktop} />
                <Button type="button" $newInvoice onClick={openForm}>
                    New {isDesktop && 'Invoice'}
                </Button>
            </Header>
            <List />
        </Container>
    );
};

export default Invoices;

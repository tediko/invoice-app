import Icon from '../shared/Icon/Icon';
import Status from '../shared/Status/Status';
import Button from '../shared/Button/Button';
import InvoiceInfo from '../InvoiceInfo/InvoiceInfo';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../App/context';
import {
    StyledInvoiceView,
    Container,
    Link,
    Controller,
    Text,
    ButtonWrapper,
} from './InvoiceViewStyles';

const InvoiceView = () => {
    const { colors } = useTheme();
    const { windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <StyledInvoiceView>
            <Container>
                <Link>
                    <Icon name={'arrow-left'} size={10} color={colors.purple} />
                    Go back
                </Link>
                <Controller>
                    <Text>Status</Text>
                    <Status currStatus="pending" />
                </Controller>
                <InvoiceInfo />
            </Container>
            {!isDesktop && (
                <ButtonWrapper>
                    <Button $secondary>Edit</Button>
                    <Button $delete>Delete</Button>
                    <Button $primary>Mark as Paid</Button>
                </ButtonWrapper>
            )}
        </StyledInvoiceView>
    );
};

export default InvoiceView;

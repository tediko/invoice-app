import { useReducedMotion } from 'framer-motion';
import Summary from './Summary/Summary';
import dateToString from '../../utilities/dateToString';
import languageSensitiveNum from '../../utilities/languageSensitiveNum';
import { invoiceInfoVariants } from '../../utilities/framerVariants';
import {
    StyledInvoiceInfo,
    Container,
    Key,
    Uid,
    Hashtag,
    CreatedDate,
    PaymentDue,
    ClientInfo,
    Email,
    Heading,
    Text,
    SenderAddress,
    ClientAddress,
    Total,
    TotalHeading,
    TotalText,
} from '../InvoiceInfo/InvoiceInfoStyles';

const InvoiceInfo = ({ invoice }) => {
    const shouldReduceMotion = useReducedMotion();
    const variant = (element) => {
        return shouldReduceMotion
            ? invoiceInfoVariants.reduced
            : invoiceInfoVariants[element];
    };

    return (
        <StyledInvoiceInfo
            variants={variant('info')}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <Key>
                    <Uid>
                        <Hashtag>#</Hashtag>
                        {invoice.id}
                    </Uid>
                    <Heading>{invoice.description}</Heading>
                </Key>
                <SenderAddress>
                    <span>{invoice.senderAddress.street}</span>
                    <span>{invoice.senderAddress.city}</span>
                    <span>{invoice.senderAddress.postCode}</span>
                    <span>{invoice.senderAddress.country}</span>
                </SenderAddress>
                <CreatedDate>
                    <Heading>Invoice Date</Heading>
                    <Text>{dateToString(invoice.createdAt)}</Text>
                </CreatedDate>
                <ClientInfo>
                    <Heading>Bill to</Heading>
                    <Text>{invoice.clientName}</Text>
                    <ClientAddress>
                        <span>{invoice.clientAddress.street}</span>
                        <span>{invoice.clientAddress.city}</span>
                        <span>{invoice.clientAddress.postCode}</span>
                        <span>{invoice.clientAddress.country}</span>
                    </ClientAddress>
                </ClientInfo>
                <Email>
                    <Heading>Sent to</Heading>
                    <Text>{invoice.clientEmail}</Text>
                </Email>
                <PaymentDue>
                    <Heading>Payment Due</Heading>
                    <Text>{dateToString(invoice.paymentDue)}</Text>
                </PaymentDue>
            </Container>
            <Summary invoice={invoice} />
            <Total>
                <TotalHeading>Amount Due</TotalHeading>
                <TotalText>£ {languageSensitiveNum(invoice.total)}</TotalText>
            </Total>
        </StyledInvoiceInfo>
    );
};

export default InvoiceInfo;

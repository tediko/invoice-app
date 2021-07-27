import Summary from './Summary/Summary';
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

const InvoiceInfo = () => {
    return (
        <StyledInvoiceInfo>
            <Container>
                <Key>
                    <Uid>
                        <Hashtag>#</Hashtag>XM9141
                    </Uid>
                    <Heading>Graphic Design</Heading>
                </Key>
                <SenderAddress>
                    <span>19 Union Terrace</span>
                    <span>London</span>
                    <span>E1 3EZ</span>
                    <span>United Kingdom</span>
                </SenderAddress>
                <CreatedDate>
                    <Heading>Invoice Date</Heading>
                    <Text>21 Aug 2021</Text>
                </CreatedDate>
                <ClientInfo>
                    <Heading>Bill to</Heading>
                    <Text>Alex Grim</Text>
                    <ClientAddress>
                        <span>84 Church Way</span>
                        <span>Bradford</span>
                        <span>BD1 9PB</span>
                        <span>United Kingdom</span>
                    </ClientAddress>
                </ClientInfo>
                <Email>
                    <Heading>Sent to</Heading>
                    <Text>alexgrim@mail.com</Text>
                </Email>
                <PaymentDue>
                    <Heading>Payment Due</Heading>
                    <Text>20 Sep 2021</Text>
                </PaymentDue>
            </Container>
            <Summary />
            <Total>
                <TotalHeading>Amount Due</TotalHeading>
                <TotalText>£ 556.00</TotalText>
            </Total>
        </StyledInvoiceInfo>
    );
};

export default InvoiceInfo;

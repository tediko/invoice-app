import { useGlobalContext } from '../App/context';
import {
    Info,
    InfoContainer,
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
    Summary,
    SummaryContainer,
    SummaryHead,
    SummaryItem,
    SummaryHeading,
    ItemName,
    ItemQty,
    ItemPrice,
    ItemTotal,
    Total,
    TotalHeading,
    TotalText,
} from '../InvoiceInfo/InvoiceInfoStyles';

const InvoiceInfo = () => {
    const { windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;
    return (
        <Info>
            <InfoContainer>
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
            </InfoContainer>
            <Summary>
                <SummaryContainer>
                    {isDesktop && (
                        <SummaryHead>
                            <SummaryHeading>Item Name</SummaryHeading>
                            <SummaryHeading $jsCenter>QTY.</SummaryHeading>
                            <SummaryHeading $jsEnd>Price</SummaryHeading>
                            <SummaryHeading $jsEnd>Total</SummaryHeading>
                        </SummaryHead>
                    )}
                    <SummaryItem>
                        <ItemName>Banner Design</ItemName>
                        <ItemQty>1 {!isDesktop && ' x £ 156.00'}</ItemQty>
                        {isDesktop && <ItemPrice>£ 156.00</ItemPrice>}
                        <ItemTotal>£ 156.00</ItemTotal>
                    </SummaryItem>
                    <SummaryItem>
                        <ItemName>Email Design</ItemName>
                        <ItemQty>2 {!isDesktop && ' x £ 200.00'}</ItemQty>
                        {isDesktop && <ItemPrice>£ 200.00</ItemPrice>}
                        <ItemTotal>£ 400.00</ItemTotal>
                    </SummaryItem>
                </SummaryContainer>
            </Summary>
            <Total>
                <TotalHeading>Amount Due</TotalHeading>
                <TotalText>£ 556.00</TotalText>
            </Total>
        </Info>
    );
};

export default InvoiceInfo;

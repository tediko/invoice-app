import { useGlobalContext } from '../../App/context';
import {
    StyledSummary,
    Container,
    Head,
    Heading,
    Item,
    ItemName,
    ItemQty,
    ItemPrice,
    ItemTotal,
} from './SummaryStyles';

const Summary = () => {
    const { windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <StyledSummary>
            <Container>
                {isDesktop && (
                    <Head>
                        <Heading>Item Name</Heading>
                        <Heading $jsCenter>QTY.</Heading>
                        <Heading $jsEnd>Price</Heading>
                        <Heading $jsEnd>Total</Heading>
                    </Head>
                )}
                <Item>
                    <ItemName>Banner Design</ItemName>
                    <ItemQty>1 {!isDesktop && ' x £ 156.00'}</ItemQty>
                    {isDesktop && <ItemPrice>£ 156.00</ItemPrice>}
                    <ItemTotal>£ 156.00</ItemTotal>
                </Item>
                <Item>
                    <ItemName>Email Design</ItemName>
                    <ItemQty>2 {!isDesktop && ' x £ 200.00'}</ItemQty>
                    {isDesktop && <ItemPrice>£ 200.00</ItemPrice>}
                    <ItemTotal>£ 400.00</ItemTotal>
                </Item>
            </Container>
        </StyledSummary>
    );
};

export default Summary;

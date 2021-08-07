import { useGlobalContext } from '../../App/context';
import languageSensitiveNum from '../../../utilities/languageSensitiveNum';
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

const Summary = ({ invoice }) => {
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
                {invoice.items.map((item, index) => (
                    <Item key={index}>
                        <ItemName>{item.name}</ItemName>
                        <ItemQty>
                            {item.quantity}{' '}
                            {!isDesktop &&
                                ` x £ ${languageSensitiveNum(item.price)}`}
                        </ItemQty>
                        {isDesktop && (
                            <ItemPrice>
                                {`£ ${languageSensitiveNum(item.price)}`}
                            </ItemPrice>
                        )}
                        <ItemTotal>
                            {`£ ${languageSensitiveNum(item.total)}`}
                        </ItemTotal>
                    </Item>
                ))}
            </Container>
        </StyledSummary>
    );
};

export default Summary;

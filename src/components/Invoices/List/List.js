import { useTheme } from 'styled-components';
import Icon from '../../shared/Icon/Icon';
import Status from '../../shared/Status/Status';
import languageSensitiveNum from '../../../utilities/languageSensitiveNum';
import dateToString from '../../../utilities/dateToString';
import { useGlobalContext } from '../../App/context';
import {
    StyledList,
    Item,
    Link,
    Uid,
    Hashtag,
    PaymentDue,
    ClientName,
    TotalPrice,
} from './ListStyles';

const List = () => {
    const { colors } = useTheme();
    const { state, windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <StyledList>
            {state.invoices.map(
                ({ id, paymentDue, clientName, status, total }) => (
                    <Item key={id}>
                        <Link>
                            <Uid>
                                <Hashtag>#</Hashtag>
                                {id}
                            </Uid>
                            <PaymentDue>
                                Due {dateToString(paymentDue)}
                            </PaymentDue>
                            <ClientName>{clientName}</ClientName>
                            <TotalPrice>
                                £&nbsp;{languageSensitiveNum(total)}
                            </TotalPrice>
                            <Status currStatus={status} $grid />
                            {isDesktop && (
                                <Icon
                                    name={'arrow-right'}
                                    size={10}
                                    color={colors.purple}
                                />
                            )}
                        </Link>
                    </Item>
                )
            )}
        </StyledList>
    );
};

export default List;

import { useTheme } from 'styled-components';
import data from './data.json';
import Icon from '../../shared/Icon/Icon';
import {
    languageSensitiveNum,
    capitalizeFirstLetter,
} from '../../shared/utilities';
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
    Status,
    StatusCircle,
} from './ListStyles';

const List = () => {
    const { colors } = useTheme();
    const { windowWidth } = useGlobalContext();
    const isDesktop = windowWidth >= 768;

    return (
        <StyledList>
            {data.map(({ id, paymentDue, clientName, status, total }) => (
                <Item key={id}>
                    <Link>
                        <Uid>
                            <Hashtag>#</Hashtag>
                            {id}
                        </Uid>
                        <PaymentDue>Due {paymentDue}</PaymentDue>
                        <ClientName>{clientName}</ClientName>
                        <TotalPrice>
                            £&nbsp;{languageSensitiveNum(total)}
                        </TotalPrice>
                        <Status $statusType={status}>
                            <StatusCircle $statusType={status} />
                            {capitalizeFirstLetter(status)}
                        </Status>
                        {isDesktop && (
                            <Icon
                                name={'arrow-right'}
                                size={10}
                                color={colors.purple}
                            />
                        )}
                    </Link>
                </Item>
            ))}
        </StyledList>
    );
};

export default List;

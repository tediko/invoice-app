import Icon from '../../shared/Icon/Icon';
import { useTheme } from 'styled-components';
import { StyledFilter, Button, List, Item, StatusFilter } from './FilterStyles';

const Filter = ({ isDesktop }) => {
    const { colors } = useTheme();

    return (
        <StyledFilter>
            <Button>
                Filter {isDesktop && 'by status'}
                <Icon
                    name="arrow-down"
                    size={11}
                    color={colors.purple}
                    customStyle={{
                        transition: 'color 350ms ease-in-out',
                    }}
                />
            </Button>
            <List>
                <Item>
                    <StatusFilter>Draft</StatusFilter>
                </Item>
                <Item>
                    <StatusFilter>Pending</StatusFilter>
                </Item>
                <Item>
                    <StatusFilter>Paid</StatusFilter>
                </Item>
            </List>
        </StyledFilter>
    );
};

export default Filter;

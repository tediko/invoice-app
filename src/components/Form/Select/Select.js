import Icon from '../../shared/Icon/Icon';
import { useState } from 'react';
import { useTheme } from 'styled-components';
import { StyledSelect, Cta, List, Item, Option } from './SelectStyles';

const Select = () => {
    const { colors } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);

    const expandSelect = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <StyledSelect>
            <Cta
                type="button"
                aria-label="Select payment terms"
                aria-expanded={isExpanded}
                aria-controls="select-list"
                onClick={expandSelect}
                $isExpanded={isExpanded}
            >
                Net 30 Days
                <Icon name={'arrow-down'} size={12} color={colors.purple} />
            </Cta>
            {isExpanded && (
                <List id="select-list">
                    <Item>
                        <Option type="button" value="1">
                            Net 1 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option type="button" value="7">
                            Net 7 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option type="button" value="14">
                            Net 14 Days
                        </Option>
                    </Item>
                    <Item>
                        <Option type="button" value="30">
                            Net 30 Days
                        </Option>
                    </Item>
                </List>
            )}
        </StyledSelect>
    );
};

export default Select;

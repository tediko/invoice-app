import { useState, useEffect, useRef } from 'react';
import Icon from '../../shared/Icon/Icon';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../../App/context';
import { StyledFilter, Button, List, Item, StatusFilter } from './FilterStyles';

const Filter = ({ isDesktop }) => {
    const { colors } = useTheme();
    const { filterType, changeFilterType } = useGlobalContext();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const ref = useRef();

    /* Running an effect whenever isFilterOpen changes and we are binding a click event to the document 
    so that whenever the user clicks on the document, we can check if it is inside or outside the list 
    and hide the list accordingly. */
    useEffect(() => {
        const checkIfClickedOutside = (event) => {
            const target = event.target.nodeName;
            if (target !== 'BUTTON' && target !== 'UL') {
                setIsFilterOpen(false);
            }
        };

        isFilterOpen &&
            document.addEventListener('click', checkIfClickedOutside);

        return () => {
            document.removeEventListener('click', checkIfClickedOutside);
        };
    }, [isFilterOpen]);

    /* Function that toggle filter list.  */
    const toggleFilterList = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return (
        <StyledFilter>
            <Button onClick={toggleFilterList}>
                Filter {isDesktop && 'by status'}
                <Icon
                    name="arrow-down"
                    size={11}
                    color={colors.purple}
                    customStyle={{
                        transition: 'transform 350ms ease-in-out',
                    }}
                />
            </Button>
            {isFilterOpen && (
                <List ref={ref}>
                    <Item>
                        <StatusFilter
                            onClick={(event) => changeFilterType(event)}
                            value="draft"
                            $isActive={filterType === 'draft'}
                        >
                            Draft
                        </StatusFilter>
                    </Item>
                    <Item>
                        <StatusFilter
                            onClick={(event) => changeFilterType(event)}
                            value="pending"
                            $isActive={filterType === 'pending'}
                        >
                            Pending
                        </StatusFilter>
                    </Item>
                    <Item>
                        <StatusFilter
                            onClick={(event) => changeFilterType(event)}
                            value="paid"
                            $isActive={filterType === 'paid'}
                        >
                            Paid
                        </StatusFilter>
                    </Item>
                </List>
            )}
        </StyledFilter>
    );
};

export default Filter;

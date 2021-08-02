import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import { useTheme } from 'styled-components';
import {
    Fieldset,
    Legend,
    InputsGroup,
    InputWrapper,
    Label,
    Input,
    TotalValue,
    Delete,
} from './ListStyles';

const List = () => {
    const { colors } = useTheme();

    return (
        <Fieldset>
            <Legend $lg>Item List</Legend>
            <InputsGroup>
                <InputWrapper>
                    <Label>Item Name</Label>
                    <Input type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Label>Qty.</Label>
                    <Input type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Label>Price</Label>
                    <Input type="text" />
                </InputWrapper>
                <InputWrapper>
                    <Label>Total</Label>
                    <TotalValue>173.00</TotalValue>
                </InputWrapper>
                <Delete type="button">
                    <Icon name="delete" size={16} color={colors.btnTheme} />
                </Delete>
            </InputsGroup>
            <Button type="button" $secondary>
                + Add New Item
            </Button>
        </Fieldset>
    );
};

export default List;

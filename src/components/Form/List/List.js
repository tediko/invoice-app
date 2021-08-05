import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../../App/context';
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
    const { items, handleItemsChange, handleItemsAdd, handleItemsRemove } =
        useGlobalContext();

    return (
        <Fieldset>
            <Legend $lg>Item List</Legend>
            {items.map((item, index) => (
                <InputsGroup key={index}>
                    <InputWrapper>
                        <Label htmlFor="name">Item Name</Label>
                        <Input
                            type="text"
                            name="name"
                            value={item.name}
                            onChange={(event) =>
                                handleItemsChange(index, event)
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="quantity">Qty.</Label>
                        <Input
                            type="text"
                            name="quantity"
                            value={item.quantity}
                            onChange={(event) =>
                                handleItemsChange(index, event)
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="price">Price</Label>
                        <Input
                            type="text"
                            name="price"
                            value={item.price}
                            onChange={(event) =>
                                handleItemsChange(index, event)
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Total</Label>
                        <TotalValue>{item.total}</TotalValue>
                    </InputWrapper>
                    <Delete
                        type="button"
                        onClick={() => handleItemsRemove(index)}
                    >
                        <Icon name="delete" size={16} color={colors.btnTheme} />
                    </Delete>
                </InputsGroup>
            ))}
            <Button type="button" $secondary onClick={handleItemsAdd}>
                + Add New Item
            </Button>
        </Fieldset>
    );
};

export default List;

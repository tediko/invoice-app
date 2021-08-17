import Icon from '../../shared/Icon/Icon';
import Button from '../../shared/Button/Button';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../../App/context';
import {
    Fieldset,
    Legend,
    Wrapper,
    InputsGroup,
    InputWrapper,
    Label,
    Error,
    Input,
    TotalValue,
    Delete,
} from './ListStyles';

const List = () => {
    const { colors } = useTheme();
    const {
        state,
        windowWidth,
        items,
        handleInvoiceChange,
        handleItemsAdd,
        handleItemsRemove,
    } = useGlobalContext();
    const errors =
        state.errors.err?.items === undefined ? false : state.errors.err?.items;
    const isDesktop = windowWidth >= 768;

    return (
        <Fieldset>
            <Legend $lg>Item List</Legend>
            <Wrapper>
                {items.map((item, index) => (
                    <InputsGroup key={index}>
                        <InputWrapper>
                            <Label
                                htmlFor="name"
                                $srOnly={index > 0 && isDesktop}
                                $error={errors[index]?.name}
                            >
                                Item Name
                                {errors[index]?.name && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                value={item.name}
                                $error={errors[index]?.name}
                                onChange={(event) =>
                                    handleInvoiceChange(
                                        event,
                                        'items',
                                        null,
                                        index
                                    )
                                }
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label
                                htmlFor="quantity"
                                $srOnly={index > 0 && isDesktop}
                                $error={errors[index]?.quantity}
                            >
                                Qty.
                            </Label>
                            <Input
                                type="text"
                                name="quantity"
                                value={item.quantity}
                                $error={errors[index]?.quantity}
                                onChange={(event) =>
                                    handleInvoiceChange(
                                        event,
                                        'items',
                                        null,
                                        index
                                    )
                                }
                                $qty
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label
                                htmlFor="price"
                                $srOnly={index > 0 && isDesktop}
                                $error={errors[index]?.price}
                            >
                                Price
                            </Label>
                            <Input
                                type="text"
                                name="price"
                                value={item.price}
                                $error={errors[index]?.price}
                                onChange={(event) =>
                                    handleInvoiceChange(
                                        event,
                                        'items',
                                        null,
                                        index
                                    )
                                }
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label $srOnly={index > 0 && isDesktop}>
                                Total
                            </Label>
                            <TotalValue>{item.total}</TotalValue>
                        </InputWrapper>
                        <Delete
                            type="button"
                            onClick={() => handleItemsRemove(index)}
                        >
                            <Icon
                                name="delete"
                                size={16}
                                color={colors.btnTheme}
                            />
                        </Delete>
                    </InputsGroup>
                ))}
                <Button type="button" $secondary onClick={handleItemsAdd}>
                    + Add New Item
                </Button>
            </Wrapper>
        </Fieldset>
    );
};

export default List;

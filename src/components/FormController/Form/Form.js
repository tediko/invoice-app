import { useGlobalContext } from '../../App/context';
import Select from '../Select/Select';
import DatePicker from '../DatePicker/DatePicker';
import List from '../List/List';
import {
    Title,
    Hashtag,
    StyledForm,
    Fieldset,
    Legend,
    InputWrapper,
    Label,
    ErrorsWrapper,
    Error,
    Input,
    InputsGroup,
} from './FormStyles';

const Form = ({ isEdited }) => {
    const { state, invoice, handleInvoiceChange } = useGlobalContext();
    const errors = state.errors.err;
    const messages = state.errors.msg;
    const invoiceId = state.currInvoiceIndex;

    return (
        <>
            {!isEdited && <Title>New Invoice</Title>}
            {isEdited && (
                <Title>
                    Edit <Hashtag>#</Hashtag>
                    {invoiceId}
                </Title>
            )}
            <StyledForm id="invoice-form">
                <Fieldset>
                    <Legend>Bill from</Legend>
                    <InputWrapper>
                        <Label
                            htmlFor="street"
                            $error={errors.senderAddress?.street}
                        >
                            Street Address
                            {errors.senderAddress?.street && (
                                <Error>can't be empty</Error>
                            )}
                        </Label>
                        <Input
                            type="text"
                            name="street"
                            value={invoice.senderAddress.street}
                            $error={errors.senderAddress?.street}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'senderAddress')
                            }
                        />
                    </InputWrapper>
                    <InputsGroup>
                        <InputWrapper>
                            <Label
                                htmlFor="city"
                                $error={errors.senderAddress?.city}
                            >
                                City
                                {errors.senderAddress?.city && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="city"
                                value={invoice.senderAddress.city}
                                $error={errors.senderAddress?.city}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'senderAddress')
                                }
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label
                                htmlFor="postCode"
                                $error={errors.senderAddress?.postCode}
                            >
                                Post Code
                                {errors.senderAddress?.postCode && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="postCode"
                                value={invoice.senderAddress.postCode}
                                $error={errors.senderAddress?.postCode}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'senderAddress')
                                }
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label
                                htmlFor="country"
                                $error={errors.senderAddress?.country}
                            >
                                Country
                                {errors.senderAddress?.country && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="country"
                                value={invoice.senderAddress.country}
                                $error={errors.senderAddress?.country}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'senderAddress')
                                }
                            />
                        </InputWrapper>
                    </InputsGroup>
                </Fieldset>
                <Fieldset>
                    <Legend>Bill to</Legend>
                    <InputWrapper>
                        <Label htmlFor="clientName" $error={errors?.clientName}>
                            Client's Name
                            {errors?.clientName && (
                                <Error>can't be empty</Error>
                            )}
                        </Label>
                        <Input
                            type="text"
                            name="clientName"
                            value={invoice.clientName}
                            $error={errors?.clientName}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'invoice')
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label
                            htmlFor="clientEmail"
                            $error={errors?.clientEmail}
                        >
                            Client's Email
                            {errors?.clientEmail && (
                                <Error>invalid email</Error>
                            )}
                        </Label>
                        <Input
                            type="email"
                            placeholder="e.g. email@example.com"
                            name="clientEmail"
                            value={invoice.clientEmail}
                            $error={errors?.clientEmail}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'invoice')
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label
                            htmlFor="street"
                            $error={errors.clientAddress?.street}
                        >
                            Street Address
                            {errors.clientAddress?.street && (
                                <Error>can't be empty</Error>
                            )}
                        </Label>
                        <Input
                            type="text"
                            name="street"
                            value={invoice.clientAddress.street}
                            $error={errors.clientAddress?.street}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'clientAddress')
                            }
                        />
                    </InputWrapper>
                    <InputsGroup>
                        <InputWrapper>
                            <Label
                                htmlFor="city"
                                $error={errors.clientAddress?.city}
                            >
                                City
                                {errors.clientAddress?.city && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="city"
                                value={invoice.clientAddress.city}
                                $error={errors.clientAddress?.city}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'clientAddress')
                                }
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label
                                htmlFor="postCode"
                                $error={errors.clientAddress?.postCode}
                            >
                                Post Code
                                {errors.clientAddress?.postCode && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="postCode"
                                value={invoice.clientAddress.postCode}
                                $error={errors.clientAddress?.postCode}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'clientAddress')
                                }
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label
                                htmlFor="country"
                                $error={errors.clientAddress?.country}
                            >
                                Country
                                {errors.clientAddress?.country && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                name="country"
                                value={invoice.clientAddress.country}
                                $error={errors.clientAddress?.country}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'clientAddress')
                                }
                            />
                        </InputWrapper>
                    </InputsGroup>
                </Fieldset>
                <Fieldset>
                    <InputsGroup $fullWidthMobile>
                        <InputWrapper>
                            <Label>Invoice Date</Label>
                            <DatePicker />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Payment Terms</Label>
                            <Select />
                        </InputWrapper>
                        <InputWrapper $fullWidth>
                            <Label
                                htmlFor="description"
                                $error={errors?.description}
                            >
                                Project Description
                                {errors?.description && (
                                    <Error>can't be empty</Error>
                                )}
                            </Label>
                            <Input
                                type="text"
                                placeholder="e.g. Graphic Design Service"
                                name="description"
                                value={invoice.description}
                                $error={errors?.description}
                                onChange={(event) =>
                                    handleInvoiceChange(event, 'invoice')
                                }
                            />
                        </InputWrapper>
                    </InputsGroup>
                </Fieldset>
                <List />
                {messages.length > 0 && (
                    <ErrorsWrapper>
                        {messages.map((item, index) => (
                            <Error key={index}>{item}</Error>
                        ))}
                    </ErrorsWrapper>
                )}
            </StyledForm>
        </>
    );
};

export default Form;

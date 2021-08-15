import { useGlobalContext } from '../../App/context';
import Select from '../Select/Select';
import DatePicker from '../DatePicker/DatePicker';
import List from '../List/List';
import {
    StyledForm,
    Fieldset,
    Legend,
    InputWrapper,
    Label,
    Input,
    InputsGroup,
} from './FormStyles';

const Form = () => {
    const { invoice, handleInvoiceChange, handleSubmit } = useGlobalContext();

    return (
        <StyledForm id="invoice-form" onSubmit={(event) => handleSubmit(event)}>
            <Fieldset>
                <Legend>Bill from</Legend>
                <InputWrapper>
                    <Label htmlFor="street">Street Address</Label>
                    <Input
                        type="text"
                        name="street"
                        value={invoice.senderAddress.street}
                        onChange={(event) =>
                            handleInvoiceChange(event, 'senderAddress')
                        }
                    />
                </InputWrapper>
                <InputsGroup>
                    <InputWrapper>
                        <Label htmlFor="city">City</Label>
                        <Input
                            type="text"
                            name="city"
                            value={invoice.senderAddress.city}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'senderAddress')
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="postCode">Post Code</Label>
                        <Input
                            type="text"
                            name="postCode"
                            value={invoice.senderAddress.postCode}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'senderAddress')
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="country">Country</Label>
                        <Input
                            type="text"
                            name="country"
                            value={invoice.senderAddress.country}
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
                    <Label htmlFor="clientName">Client's Name</Label>
                    <Input
                        type="text"
                        name="clientName"
                        value={invoice.clientName}
                        onChange={(event) =>
                            handleInvoiceChange(event, 'invoice')
                        }
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="clientEmail">Client's Email</Label>
                    <Input
                        type="email"
                        placeholder="e.g. email@example.com"
                        name="clientEmail"
                        value={invoice.clientEmail}
                        onChange={(event) =>
                            handleInvoiceChange(event, 'invoice')
                        }
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="street">Street Address</Label>
                    <Input
                        type="text"
                        name="street"
                        value={invoice.clientAddress.street}
                        onChange={(event) =>
                            handleInvoiceChange(event, 'clientAddress')
                        }
                    />
                </InputWrapper>
                <InputsGroup>
                    <InputWrapper>
                        <Label htmlFor="city">City</Label>
                        <Input
                            type="text"
                            name="city"
                            value={invoice.clientAddress.city}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'clientAddress')
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="postCode">Post Code</Label>
                        <Input
                            type="text"
                            name="postCode"
                            value={invoice.clientAddress.postCode}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'clientAddress')
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="country">Country</Label>
                        <Input
                            type="text"
                            name="country"
                            value={invoice.clientAddress.country}
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
                        <Label htmlFor="description">Project Description</Label>
                        <Input
                            type="text"
                            placeholder="e.g. Graphic Design Service"
                            name="description"
                            value={invoice.description}
                            onChange={(event) =>
                                handleInvoiceChange(event, 'invoice')
                            }
                        />
                    </InputWrapper>
                </InputsGroup>
            </Fieldset>
            <List />
        </StyledForm>
    );
};

export default Form;

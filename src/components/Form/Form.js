import { useMemo } from 'react';
import Icon from '../shared/Icon/Icon';
import Select from './Select/Select';
import DatePicker from './DatePicker/DatePicker';
import List from './List/List';
import SubmitController from './SubmitController/SubmitController';
import { useTheme } from 'styled-components';
import { useGlobalContext } from '../App/context';
import {
    StyledForm,
    Container,
    Link,
    Title,
    InvoiceForm,
    Fieldset,
    Legend,
    InputWrapper,
    Label,
    Input,
    InputsGroup,
} from './FormStyles';

const Form = () => {
    const { colors } = useTheme();
    const { windowWidth } = useGlobalContext();
    const isTablet = windowWidth >= 768;
    const datePicker = useMemo(() => <DatePicker />, []);

    return (
        <StyledForm>
            <Container>
                {!isTablet && (
                    <Link>
                        <Icon
                            name={'arrow-left'}
                            size={10}
                            color={colors.purple}
                        />
                        Go back
                    </Link>
                )}
                <Title>New Invoice</Title>
                <InvoiceForm>
                    <Fieldset>
                        <Legend>Bill from</Legend>
                        <InputWrapper>
                            <Label>Street Address</Label>
                            <Input type="text" />
                        </InputWrapper>
                        <InputsGroup>
                            <InputWrapper>
                                <Label>City</Label>
                                <Input type="text" />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Post Code</Label>
                                <Input type="text" />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Country</Label>
                                <Input type="text" />
                            </InputWrapper>
                        </InputsGroup>
                    </Fieldset>
                    <Fieldset>
                        <Legend>Bill to</Legend>
                        <InputWrapper>
                            <Label>Client's Name</Label>
                            <Input type="text" />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Client's Email</Label>
                            <Input
                                type="email"
                                placeholder="e.g. email@example.com"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Street Address</Label>
                            <Input type="text" />
                        </InputWrapper>
                        <InputsGroup>
                            <InputWrapper>
                                <Label>City</Label>
                                <Input type="text" />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Post Code</Label>
                                <Input type="text" />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Country</Label>
                                <Input type="text" />
                            </InputWrapper>
                        </InputsGroup>
                    </Fieldset>
                    <Fieldset>
                        <InputsGroup $fullWidthMobile>
                            <InputWrapper>
                                <Label>Invoice Date</Label>
                                {datePicker}
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Payment Terms</Label>
                                <Select />
                            </InputWrapper>
                            <InputWrapper $fullWidth>
                                <Label>Project Description</Label>
                                <Input
                                    type="text"
                                    placeholder="e.g. Graphic Design Service"
                                />
                            </InputWrapper>
                        </InputsGroup>
                    </Fieldset>
                    <List />
                </InvoiceForm>
                <SubmitController />
            </Container>
        </StyledForm>
    );
};

export default Form;

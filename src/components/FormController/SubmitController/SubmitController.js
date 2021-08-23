import { useState } from 'react';
import Button from '../../shared/Button/Button';
import { useGlobalContext } from '../../App/context';
import { StyledSubmitController } from './SubmitControllerStyles';

const SubmitController = () => {
    const { state, handleSubmit, discard } = useGlobalContext();
    const [isInvoiceEdited] = useState(state.isInvoiceEdited);

    return (
        <StyledSubmitController $isEdited={isInvoiceEdited}>
            <Button $small type="button" $secondary onClick={discard}>
                Discard
            </Button>
            {!isInvoiceEdited && (
                <Button
                    type="submit"
                    $small
                    $save
                    onClick={(event) => handleSubmit(event, 'save')}
                >
                    Save as Draft
                </Button>
            )}
            <Button
                form="invoice-form"
                type="submit"
                $small
                $primary
                onClick={(event) =>
                    handleSubmit(
                        event,
                        `${!isInvoiceEdited ? 'add' : 'change'}`
                    )
                }
            >
                Save {!isInvoiceEdited ? '& Send' : 'Changes'}
            </Button>
        </StyledSubmitController>
    );
};

export default SubmitController;

import Button from '../../shared/Button/Button';
import { useGlobalContext } from '../../App/context';
import { StyledSubmitController } from './SubmitControllerStyles';

const SubmitController = () => {
    const { state, handleSubmit, discardForm } = useGlobalContext();
    const isInvoiceEdited = state.isInvoiceEdited;

    return (
        <StyledSubmitController $isEdited={isInvoiceEdited}>
            <Button $small type="button" $secondary onClick={discardForm}>
                Discard
            </Button>
            {!isInvoiceEdited && (
                <Button
                    $small
                    type="submit"
                    $save
                    onClick={(event) => handleSubmit(event, 'save')}
                >
                    Save as Draft
                </Button>
            )}
            <Button
                $small
                type="submit"
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

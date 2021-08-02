import Button from '../../shared/Button/Button';
import { StyledSubmitController } from './SubmitControllerStyles';

const SubmitController = () => {
    return (
        <StyledSubmitController>
            <Button $small type="button" $secondary>
                Discard
            </Button>
            <Button $small type="submit" $save>
                Save as Draft
            </Button>
            <Button $small type="submit" $primary>
                Save & Send
            </Button>
        </StyledSubmitController>
    );
};

export default SubmitController;

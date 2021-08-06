import Button from '../../shared/Button/Button';
import { useGlobalContext } from '../../App/context';
import { StyledSubmitController } from './SubmitControllerStyles';

const SubmitController = () => {
    const { handleSubmit } = useGlobalContext();

    return (
        <StyledSubmitController>
            <Button
                $small
                type="submit"
                $secondary
                onClick={(event) => handleSubmit(event, 'discard')}
            >
                Discard
            </Button>
            <Button
                $small
                type="submit"
                $save
                onClick={(event) => handleSubmit(event, 'save')}
            >
                Save as Draft
            </Button>
            <Button
                $small
                type="submit"
                $primary
                onClick={(event) => handleSubmit(event, 'add')}
            >
                Save & Send
            </Button>
        </StyledSubmitController>
    );
};

export default SubmitController;

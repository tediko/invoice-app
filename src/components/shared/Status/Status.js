import { capitalizeFirstLetter } from '../../shared/utilities';
import { StyledStatus, Circle } from './StatusStyles';

const Status = ({ currStatus }) => {
    return (
        <StyledStatus $statusType={currStatus}>
            <Circle $statusType={currStatus} />
            {capitalizeFirstLetter(currStatus)}
        </StyledStatus>
    );
};

export default Status;

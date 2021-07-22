import { capitalizeFirstLetter } from '../../shared/utilities';
import { StyledStatus, Circle } from './StatusStyles';

const Status = ({ currStatus, ...props }) => {
    return (
        <StyledStatus $statusType={currStatus} {...props}>
            <Circle $statusType={currStatus} />
            {capitalizeFirstLetter(currStatus)}
        </StyledStatus>
    );
};

export default Status;

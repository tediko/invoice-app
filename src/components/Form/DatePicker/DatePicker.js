import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToString from '../../../utilities/dateToString';
import { useGlobalContext } from '../../App/context';
import Icon from '../../shared/Icon/Icon';
import { CustomPicker } from './DatePickerStyles';

const DatePicker = () => {
    const { invoice, handleDatePickerChange } = useGlobalContext();

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <CustomPicker type="button" onClick={onClick} value={value} ref={ref}>
            {dateToString(value)}
            <Icon name={'calendar'} size={12} color="hsl(252, 94%, 67%)" />
        </CustomPicker>
    ));
    return (
        <ReactDatePicker
            selected={invoice.createdAt}
            onChange={(date) => handleDatePickerChange(date)}
            minDate={invoice.createdAt}
            customInput={<CustomInput />}
        />
    );
};

export default DatePicker;

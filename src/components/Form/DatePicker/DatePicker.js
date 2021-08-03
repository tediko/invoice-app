import { forwardRef, useState } from 'react';
import { useTheme } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToString from '../../../utilities/dateToString';
import Icon from '../../shared/Icon/Icon';
import { CustomPicker } from './DatePickerStyles';

const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <CustomPicker type="button" onClick={onClick} value={value} ref={ref}>
            {dateToString(value)}
            <Icon name={'calendar'} size={12} color="hsl(252, 94%, 67%)" />
        </CustomPicker>
    ));
    return (
        <ReactDatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            minDate={new Date()}
            customInput={<CustomInput />}
        />
    );
};

export default DatePicker;

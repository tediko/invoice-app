import { forwardRef, useState } from 'react';
import { useTheme } from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateToString from '../../../utilities/dateToString';
import Icon from '../../shared/Icon/Icon';
import { CustomPicker } from './DatePickerStyles';

const DatePicker = () => {
    const { colors } = useTheme();
    const [startDate, setStartDate] = useState(new Date());

    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <CustomPicker type="button" onClick={onClick} value={value} ref={ref}>
            {dateToString(value)}
            <Icon name={'calendar'} size={12} color={colors.blueGrayish} />
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

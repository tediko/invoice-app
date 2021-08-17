import * as ACTION_TYPES from '../actions/action_type';
import generateUniqueId from '../../utilities/generateUniqueID';
import generatePaymentDueDate from '../../utilities/generatePaymentDueDate';

export const add = (invoice, state, type) => {
    return {
        type: ACTION_TYPES.ADD_INVOICE,
        payload: {
            invoice: invoice,
            id: generateUniqueId(state.invoices),
            paymentDue: generatePaymentDueDate(
                invoice.createdAt,
                invoice.paymentTerms
            ),
            status: type === 'new' ? 'pending' : 'draft',
        },
    };
};

export const change = (invoice) => {
    return {
        type: ACTION_TYPES.SAVE_CHANGES,
        payload: {
            invoice: invoice,
            paymentDue: generatePaymentDueDate(
                invoice.createdAt,
                invoice.paymentTerms
            ),
            status: 'pending',
        },
    };
};

export const edit = (index) => {
    return {
        type: ACTION_TYPES.EDIT,
        payload: { id: index },
    };
};

export const remove = () => {
    return {
        type: ACTION_TYPES.DELETE,
    };
};

export const paid = (index) => {
    return {
        type: ACTION_TYPES.PAID,
        payload: { id: index },
    };
};

export const create = () => {
    return {
        type: ACTION_TYPES.CREATE,
    };
};

export const discard = () => {
    return {
        type: ACTION_TYPES.DISCARD,
    };
};

export const modal = (index, name) => {
    return {
        type: ACTION_TYPES.TOGGLE_MODAL,
        payload: { name: name ? name : '', id: index ? index : '' },
    };
};

export const errors = (err, msg) => {
    return {
        type: ACTION_TYPES.SET_ERRORS,
        payload: { err, msg },
    };
};

import * as ACTION_TYPES from '../actions/action_type';
import generateUniqueId from '../../utilities/generateUniqueID';
import generatePaymentDueDate from '../../utilities/generatePaymentDueDate';

// REDUCER ACTIONS
/**
 * Function to add invoice to state. In payload we're passing new invoice, new unique ID, paymentDue and status.
 * If passed type is equal to 'new' return 'pending' status otherwise 'draft'.
 * @param    {object} invoice    Object of created invoice
 * @param    {string} state    Object of state
 * @param    {string} type    String with type of invoice. (available: 'new' or 'draft')
 */
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

/**
 * Function to save changes on editing invoice. In payload we're passing new invoice, paymentDue and status 'pending'
 * @param    {object} invoice    Object of edited invoice
 */
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

/**
 * Function to toggle form to edit existing invoice. In payload we're passing id of edited invoivce.
 * @param    {string} index    String with invoice index
 */
export const edit = (index) => {
    return {
        type: ACTION_TYPES.EDIT,
        payload: { id: index },
    };
};

/**
 * Function to delete invoice.
 */
export const remove = () => {
    return {
        type: ACTION_TYPES.DELETE,
    };
};

/**
 * Function to change status of invoice to 'paid'.
 */
export const paid = () => {
    return {
        type: ACTION_TYPES.PAID,
    };
};

/**
 * Function to toggle form to create new invoice.
 */
export const create = () => {
    return {
        type: ACTION_TYPES.CREATE,
    };
};

/**
 * Function to discard/hide form.
 */
export const discard = () => {
    return {
        type: ACTION_TYPES.DISCARD,
    };
};

/**
 * Function to toggle modal. In payload we're passing name of modal to display aswell as id of index
 * for which the modal is to be displayed.
 * @param    {string} index    String with invoice index
 * @param    {string} name    String with name of modal (available: 'delete' or 'status')
 */
export const modal = (index, name) => {
    return {
        type: ACTION_TYPES.TOGGLE_MODAL,
        payload: { name: name ? name : '', id: index ? index : '' },
    };
};

/**
 * Function to set errors state. In payload we're passing object with errors and array with errors messages.
 * @param    {object} err    Object with errors
 * @param    {object} msg    Array with error messages
 */
export const errors = (err, msg) => {
    return {
        type: ACTION_TYPES.SET_ERRORS,
        payload: { err, msg },
    };
};

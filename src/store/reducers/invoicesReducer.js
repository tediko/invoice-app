import * as ACTION_TYPES from '../actions/action_type';

export const invoicesReducer = (state, action) => {
    if (action.type === ACTION_TYPES.ADD_INVOICE) {
        const newList = [
            {
                ...action.payload.invoice,
                id: action.payload.id,
                paymentDue: action.payload.paymentDue,
                status: action.payload.status,
                total: action.payload.invoice.items.reduce((curr, acc) => {
                    return (curr += acc.total);
                }, 0),
            },
            ...state.invoices,
        ];

        return { ...state, isFormOpen: false, invoices: newList };
    }

    if (action.type === ACTION_TYPES.SAVE_CHANGES) {
        const newList = state.invoices.map((item) => {
            if (item.id === state.currInvoiceIndex) {
                return { ...action.payload.invoice, status: 'pending' };
            }
            return item;
        });
        return {
            ...state,
            invoices: newList,
            isFormOpen: false,
            isInvoiceEdited: false,
        };
    }

    if (action.type === ACTION_TYPES.EDIT) {
        return {
            ...state,
            isFormOpen: true,
            isInvoiceEdited: true,
            currInvoiceIndex: action.payload.id,
        };
    }

    if (action.type === ACTION_TYPES.DELETE) {
        const newList = state.invoices.filter(
            (item) => item.id !== state.currInvoiceIndex
        );
        return {
            ...state,
            invoices: newList,
            isModalOpen: {
                status: false,
                name: '',
            },
        };
    }

    if (action.type === ACTION_TYPES.PAID) {
        const newList = state.invoices.map((item) => {
            if (item.id === state.currInvoiceIndex) {
                item.status = 'paid';
            }
            return item;
        });

        return {
            ...state,
            invoices: newList,
            isModalOpen: {
                status: false,
                name: '',
            },
        };
    }

    if (action.type === ACTION_TYPES.CREATE) {
        return { ...state, isFormOpen: true };
    }

    if (action.type === ACTION_TYPES.DISCARD) {
        return {
            ...state,
            isFormOpen: false,
            isInvoiceEdited: false,
        };
    }

    if (action.type === ACTION_TYPES.TOGGLE_MODAL) {
        return {
            ...state,
            isModalOpen: {
                status: !state.isModalOpen.status,
                name: action.payload.name,
            },
            currInvoiceIndex: action.payload.id,
        };
    }

    if (action.type === ACTION_TYPES.SET_ERRORS) {
        return {
            ...state,
            errors: {
                err: action.payload.err,
                msg: action.payload.msg,
            },
        };
    }

    throw new Error('no matching action type');
};

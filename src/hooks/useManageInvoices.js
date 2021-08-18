import { useState, useEffect, useReducer } from 'react';
import { invoicesReducer } from '../store/reducers/invoicesReducer';
import * as ACTIONS from '../store/actions/invoicesActions';
import allowOnlyNumbers from '../utilities/allowOnlyNumbers';
import formValidation from '../utilities/formValidation';
import data from '../data/data.json';

/**
 * Function to get invoices array from localStorage.
 * @return   {object}    Array containing invoices
 */
const getInvoicesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('invoices'));
};

/**
 * Function to post invoices array to localStorage.
 * @param   {object} invoices Array with invoices
 */
const postInvoicesToLocalStorage = (invoices) => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
};

// Initial state values
const initialAddress = {
    street: '',
    city: '',
    postCode: '',
    country: '',
};

const initialItems = {
    name: '',
    quantity: 0,
    price: 0,
    total: 0,
};

const initialInvoice = {
    createdAt: new Date(),
    paymentDue: ``,
    description: '',
    paymentTerms: '30',
    clientName: '',
    clientEmail: '',
    senderAddress: initialAddress,
    clientAddress: initialAddress,
    items: [],
    total: 0,
};

const initialState = {
    invoices: getInvoicesFromLocalStorage() || data,
    isFormOpen: false,
    isModalOpen: { status: false, name: '' },
    isInvoiceEdited: false,
    currInvoiceIndex: null,
    errors: { err: {}, msg: [] },
};

/**
 * Custom hook to handle managing invoices and forms.
 */
const useManageInvoices = () => {
    const [state, dispatch] = useReducer(invoicesReducer, initialState);
    const [invoice, setInvoice] = useState(initialInvoice);
    const [senderAddress, setSenderAddress] = useState(initialAddress);
    const [clientAddress, setClientAddress] = useState(initialAddress);
    const [items, setItems] = useState([]);

    // Update invoice state everytime dependency array has changed.
    useEffect(() => {
        setInvoice((oldState) => {
            return { ...oldState, senderAddress, clientAddress, items };
        });
    }, [senderAddress, clientAddress, items]);

    // Call postInvoicesToLocalStorage fn every time dependency array has changed.
    useEffect(() => {
        postInvoicesToLocalStorage(state.invoices);
    }, [state.invoices]);

    // HANDLERS
    /**
     * Function to handle user input. Update appropriate state based on type prop given.
     * @param    {object} event    Event (pass false if type === 'date')
     * @param    {string} type    String with state to edit (available: invoice, senderAddress, clientAddress, date or items)
     * @param    {object} date    Date istance. (Pass false if type !== 'date')
     * @param    {number} index    Index of item. (Required only for type 'items')
     */
    const handleInvoiceChange = (event, type, date, index) => {
        let name = event ? event.target.name : null;
        let value = event ? event.target.value : null;

        switch (type) {
            case 'invoice':
                setInvoice({ ...invoice, [name]: value });
                break;
            case 'senderAddress':
                setSenderAddress({ ...senderAddress, [name]: value });
                break;
            case 'clientAddress':
                setClientAddress({ ...clientAddress, [name]: value });
                break;
            case 'date':
                setInvoice((oldState) => {
                    return { ...oldState, ['createdAt']: date };
                });
                break;
            case 'items':
                const newItems = [...items];
                if (name === 'quantity' || name === 'price') {
                    newItems[index][name] = allowOnlyNumbers(value);
                } else {
                    newItems[index][name] = value;
                }
                newItems[index]['total'] =
                    newItems[index].price * newItems[index].quantity;
                setItems(newItems);
                break;
            default:
                throw new Error('no matching type');
        }
    };

    /**
     * Function to add another object with inintialItems values to Items state
     * to render another item with inputs in form Item List.
     */
    const handleItemsAdd = () => {
        setItems([...items, { ...initialItems }]);
    };

    /**
     * Function to remove item from Items state.
     * @param    {number} index    Index of deleted item
     */
    const handleItemsRemove = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    /**
     * Function to submit form. Based on type prop we either add new invoice with validation,
     * change current invoice with validation or save form as draft without validation.
     * @param    {object} event    Event
     * @param    {string} type    String with type of preffered action. (available: 'new', 'save', 'change')
     */
    const handleSubmit = (event, type) => {
        event.preventDefault();

        if (type === 'add' && formValidation(invoice, setErrors)) {
            addInvoice(invoice, state, 'new');
            restoreToInitial();
        } else if (type === 'save') {
            addInvoice(invoice, state, 'draft');
            restoreToInitial();
        } else if (type === 'change' && formValidation(invoice, setErrors)) {
            changeInvoice(invoice);
            restoreToInitial();
        }
    };

    // HELPERS
    /**
     * Function to set all states responsible for displaying data to inputs with current edited invoice data.
     * @param    {string} index    String with id of edited invoice.
     */
    const setEditedInvoice = (index) => {
        const invoice = state.invoices.find((item) => item.id === index);
        setInvoice(invoice);
        setClientAddress(invoice.clientAddress);
        setSenderAddress(invoice.senderAddress);
        setItems(invoice.items);
    };

    /**
     * Function to restore all states to initial state.
     */
    const restoreToInitial = () => {
        setInvoice(initialInvoice);
        setClientAddress(initialAddress);
        setSenderAddress(initialAddress);
        setItems([]);
        setErrors({}, []);
    };

    // DISPATCHERS
    /**
     * Function to add invoice to state.
     * @param    {object} invoice    Object of created invoice
     * @param    {string} state    Object of state
     * @param    {string} type    String with type of invoice. (available: 'new' or 'draft')
     */
    const addInvoice = (invoice, state, type) => {
        dispatch(ACTIONS.add(invoice, state, type));
    };

    /**
     * Function to save changes on editing invoice.
     * @param    {object} invoice    Object of edited invoice
     */
    const changeInvoice = (invoice) => {
        dispatch(ACTIONS.change(invoice));
    };

    /**
     * Function to toggle form to edit existing invoice.
     * @param    {string} index    String with invoice index
     */
    const editInvoice = (index) => {
        dispatch(ACTIONS.edit(index));
        setEditedInvoice(index);
    };

    /**
     * Function to delete invoice.
     */
    const deleteInvoice = () => {
        dispatch(ACTIONS.remove());
    };

    /**
     * Function to change status of invoice to 'paid'.
     */
    const markInvoiceAsPaid = () => {
        dispatch(ACTIONS.paid());
    };

    /**
     * Function to toggle form to create new invoice.
     */
    const createInvoice = () => {
        dispatch(ACTIONS.create());
    };

    /**
     * Function to discard/hide form.
     */
    const discard = () => {
        dispatch(ACTIONS.discard());
        restoreToInitial();
    };

    /**
     * Function to toggle modal.
     * @param    {string} index    String with invoice index
     * @param    {string} name    String with name of modal (available: 'delete' or 'status')
     */
    const toggleModal = (index, name) => {
        dispatch(ACTIONS.modal(index, name));
    };

    /**
     * Function to set errors state.
     * @param    {object} err    Object with errors
     * @param    {object} msg    Array with error messages
     */
    const setErrors = (err, msg) => {
        dispatch(ACTIONS.errors(err, msg));
    };

    return {
        state,
        invoice,
        senderAddress,
        clientAddress,
        items,
        handleInvoiceChange,
        handleItemsAdd,
        handleItemsRemove,
        handleSubmit,
        editInvoice,
        deleteInvoice,
        markInvoiceAsPaid,
        createInvoice,
        discard,
        toggleModal,
    };
};

export default useManageInvoices;

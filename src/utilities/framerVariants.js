//FormController variants
export const backdropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

export const formVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: { type: 'spring', duration: 1, bounce: 0.2 },
    },
    exit: {
        x: '-100vw',
        transition: { duration: 1 },
    },
};

//Modal variants
export const modalVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 },
    },
    exit: {
        opacity: 0,
    },
};

export const modalContainerVariants = {
    hidden: {
        scale: 0,
    },
    visible: {
        scale: [0, 1.1, 1],
        transition: { duration: 0.5, delay: 0.1 },
    },
};

//Invoices variants
export const invoicesHeaderVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
    },
};

export const invoicesListVariants = (index) => {
    return {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                delay: 0.1 * index,
            },
        },
        exit: {
            y: 10,
            opacity: 0,
            transition: {
                type: 'spring',
                delay: 0.05 * index,
                duration: 0.45,
            },
        },
    };
};

export const invoicesErrorMessageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: 'spring' },
    },
    exit: { opacity: 0 },
};

//InvoiceView variants
export const invoiceViewLinkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', duration: 1 } },
    exit: {
        x: -20,
        opacity: 0,
    },
};

export const invoiceViewControllerVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', duration: 1 } },
    exit: { opacity: 0, duration: 1 },
};

//InvoiceInfo variants
export const invoiceInfoVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: 'spring', duration: 1 },
    },
    exit: { opacity: 0 },
};

// Motion reduced variants
export const motionReducedVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, delay: 0.1 },
    },
    exit: {
        opacity: 0,
    },
};

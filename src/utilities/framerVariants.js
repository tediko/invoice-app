// FormController variants
export const FormControllerVariants = {
    backdrop: {
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
    },
    form: {
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
    },
    reduced: {
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
    },
};

// Modal variants
export const modalVariants = {
    modal: {
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
    },
    container: {
        hidden: {
            scale: 0,
        },
        visible: {
            scale: [0, 1.1, 1],
            transition: { duration: 0.5, delay: 0.1 },
        },
    },
    reduced: {
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
    },
};

// Invoices variants
export const invoicesVariants = {
    header: {
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
    },
    list: (index) => {
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
    },
    errorMessage: {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring' },
        },
        exit: { opacity: 0 },
    },
    reduced: {
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
    },
};

// InvoiceView variants
export const invoiceViewVariants = {
    link: {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: 'spring', duration: 1 },
        },
        exit: {
            x: -20,
            opacity: 0,
        },
    },
    controller: {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', duration: 1 },
        },
        exit: { opacity: 0, duration: 1 },
    },
    reduced: {
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
    },
};

// InvoiceInfo variants
export const invoiceInfoVariants = {
    info: {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', duration: 1 },
        },
        exit: { opacity: 0 },
    },
    reduced: {
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
    },
};

// RouteError
export const routeErrorVariants = {
    routeError: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
        exit: { opacity: 0 },
    },
    illustration: {
        hidden: { scale: 0.9 },
        visible: { scale: 1, transition: { duration: 1 } },
        exit: { scale: 0.8 },
    },
    title: {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.8,
                delay: 0.3,
                duration: 1,
            },
        },
        exit: { scale: 0.8 },
    },
    reduced: {
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
    },
};

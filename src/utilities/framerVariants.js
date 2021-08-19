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

# Invoice app

![Design preview for the Invoice app coding challenge](./src/assets/preview.jpg)

## Table of contents

-   [Overview](#overview)
    -   [Intro](#intro)
    -   [Usage](#usage)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [Features](#features)
-   [Setup](#setup)
-   [Useful resources](#useful-resources)

## Overview

### Intro

Hello! This is an **invoicing application** build with **_React JS_** and **_styled-components_**. The application is used to manage invoices and allows the user to _create, read, update, filter by status_ and _delete_ invoices. There is an option in the app to switch between a _dark_ and a _light_ **theme**. All transitions are smoothly displayed by using **Framer Motion** library to create animations.

### Usage

-   Invoices can be created either as drafts or as pending. Clicking _"Save as Draft"_ allow the user to leave any form field blank and set the status to _"draft"_. Clicking _"Save & Send"_ require all forms fields to be filled in, and set the status to _"pending"_. The created invoice receives a unique ID. Each ID consists of the 2 random uppercased letters followed by 4 random numbers.
-   When saving changes to an invoice, all fields are required when the _"Save Changes"_ button is clicked. If the user clicks _"Cancel"_, any unsaved changes reset.
-   If the invoice being edited is a _"draft"_ and the _"Save Changes"_ button is clicked the status update to _"pending"_. All fields are required at this stage.
-   Clicking the _"Mark as Paid"_ button change the invoice's status to _"paid"_. This option is displayed only when the invoice status is _"pending"_.
-   Users receive a confirmation modal when trying to _delete_ or _change_ status of invoice because both of those actions are irreversible.
-   Clicking the _sun/moon_ button toggle _light_ and _dark_ mode.
-   The `Tab` and `Shift+Tab` keys will cycle through the **focus trap's** tabbable elements _but will not leave the focus trap_ when _modal_ or _form_ is open.
-   Invoices list can be **filtered** by status (_draft/pending/paid_) by using _"Filter by status"_ button.
-   Keep track of any changes with `localStorage`.

### Links

-   [Live site URL](https://invoice-tediko.netlify.app/) to see live version.
-   [Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

## My process

The first time I used `useReducer` hook to manage application state. I noticed that my state logic getting more complex as the few elements of my state relies on the value of another element of my state. Together with _useReducer_, the `useContext` hook turned out to be handy. It allowed me to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level which in turn allowed me to avoid **Prop drilling** _(also called "threading")_ that is the process you have to go through to get data to parts of the React Component tree.

In order to create a _theme switcher_ and _provide colors_ for components I used **styled-components** `<ThemeProvider>` wrapper component. By leveraging the theme provider I only need to write my styles in one single object and invoke them in any component that is a descendant of that provider.

When creating the form I learned what **Controlled Component** is. In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`. Then the React component that renders a form also controls what happens in that form on subsequent user input.

To make application more `ADA compliant` (_which means the website should be entirely accessible using just keyboard)_ I prevent focus go outside the modal once the modal is opened. In this case, the **focus trap** turns on when the _form_ or modal with _invoice deletion_/_status change_ is opened. I did this by using a simple function that is invoking on the _keydown event_. Function saves to the variable all focusable elements in modal container and check if the `event.key` is `Tab`. If so and it encounters the last focusable element, select the first element. The same logic corresponds to `Shift + Tab` but with a reverse action. `Esc` key closes the modal. In order to create an accessible modal I followed [this great](https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal) tutorial that follow the [WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices/#dialog_modal).

It was **by far** the largest and most comprehensive project I have done so far. It showed me how important it is to _plan_ so that you don't have to change things that previously worked well in the middle of the project. A valuable lesson!

### Built with

-   ReactJS
-   Styled-components
-   Framer Motion API
-   react-datepicker
-   Webpack
-   Mobile first
-   Semantic HTML5 markup

### Features

-   I used **_ReactJS_** library to create an app. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
-   To style my app I used **_styled-components_** library. Styled Components are one of the new ways to use CSS in modern JavaScript. It is the meant to be a successor of CSS Modules, a way to write CSS that's scoped to a single component, and not leak to any other element in the page. Also allows you to write plain CSS in your components without worrying about class name collisions.
-   To animate the pages transitions and modals I used **_Framer Motion API_**. Framer Motion is an open source, production-ready library that's designed for creating creative animations. In order to support users who have enabled their device’s Reduced Motion setting and make **accessible animations** I used `useReducedMotion` hook. Based on whether `useReducedMotion` returns `true` or not we're passing different values to `animate`. That replace _position transitions_ with _opacity_.
-   Added **prefers-color-scheme** CSS media feature which is used to detect if the user has requested a _light_ or _dark_ color theme and save it to **_Local Storage_**. I made it with window interface `matchMedia()` method. It returns a new `MediaQueryList object` that can then be used to determine if the document matches the media query string. In this case _prefers-color-scheme_.
-   Implemented **focus trap** inside modal to make it _ADA compliant_. Focus trap in short prevent our focus go outside the modal once the modal is opened.
-   Learned about the **optional chaining** operator (**`?.`**) that enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is nullish (`null` or `undefined`).
-   Handle _404 routes_ in **React Router** and provide a fallback component for displaying an imfamous `404 Page Not Found` error to the user. Try to enter a page that doesn't exist - like '_[invoice-tediko.netlify.app/gotcha](https://invoice-tediko.netlify.app/gotcha)_'
-   For _Invoice Date_ picker I used **React Date Picker** package. This is a simple and reusable Datepicker component for React.
-   `:focus-visible` pseudo class. This selector only indicate focus when it is helpful to the user - such as in cases where the user interacts with the page via a keyboard or some other non-pointing device. It isn't supported by Safari yet, but there is simple [workaround](https://stackoverflow.com/questions/31402576/enable-focus-only-on-keyboard-use-or-tab-press).
-   To create this project I used webpack. More specifically i used `laravel mix` which is a wrapper for webpack and targets the 80% usecase.

## Setup

To run this project, clone it and install it locally using npm:

```
$ git clone git@github.com:tediko/invoice-app.git
$ cd invoice-app
$ npm install
```

Use npm to build and compile assets in a local environment:

```
$ npm run build
```

Watch assets for changes and rebuild your bundle each time you update a file with:

```
$ npm run mix-watch
or
$ npx mix watch
```

## Useful resources

-   [DOCS - ReactJS](https://reactjs.org/)
-   [VIDEO - ReactJS tutorial by The Net Ninja](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
-   [DOCS- Styled-components](https://styled-components.com/)
-   [LINK - useReducer hook](https://blog.logrocket.com/guide-to-react-usereducer-hook/)
-   [LINK - useContext hook](https://medium.com/technofunnel/usecontext-in-react-hooks-aa9a60b8a461)
-   [LINK - Prop Drilling "threading"](https://kentcdodds.com/blog/prop-drilling)
-   [LINK - ThemeProvider](https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/)
-   [DOCS - Forms/Controlled Component](https://reactjs.org/docs/forms.html)
-   [LINK - Accessible modal](https://nainacodes.com/blog/create-an-accessible-and-reusable-react-modal)
-   [DOCS - Optional chaining operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
-   [LINK - React Date Picker](https://www.npmjs.com/package/react-datepicker)
-   [LINK - Prettier](https://prettier.io/)
-   [DOCS - Framer Motion API](https://www.framer.com/api/motion/)
-   [DOCS - Framer Motion - useReducedMotion hook](https://www.framer.com/docs/guide-accessibility/)
-   [DOCS - prefer-color-sheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
-   [LINK - webpack](https://laravel-mix.com/docs/6.0/what-is-mix)

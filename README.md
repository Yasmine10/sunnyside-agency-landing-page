# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page

### Screenshot

![Solution screenshot](https://github.com/Yasmine10/sunnyside-agency-landing-page/blob/master/public/sunnyside-agency-landing-page-solution.png?raw=true)

### Links

-   Solution URL: [https://github.com/Yasmine10/sunnyside-agency-landing-page](https://github.com/Yasmine10/sunnyside-agency-landing-page)
-   Live Site URL: [https://sunnyside-challenge.herokuapp.com/](https://sunnyside-challenge.herokuapp.com/)

**Note: It might take a minute to load the live site.**

## My process

### Built with

-   [React](https://reactjs.org/) - JS library
-   Sass - custom variables + nesting
-   Flexbox
-   Mobile-first workflow

### What I learned

-   I learned that the easiest way to import svg's into your project is by turning them into React Components. It makes it possible to style them, which is not possible if you put them in an `<img>`-element.

    ```js
    import { ReactComponent as FacebookIcon } from "../assets/images/icon-facebook.svg";
    ```

-   The stripe under the learn more buttons was also new for me and took me a little bit to figure out but I got there in the end.

    ```css
    .yellow-learn-more-btn,
    .orange-learn-more-btn {
        text-decoration: none;
        font-family: $font-family-accent;
        font-weight: $extra-bold;
        color: $neutral_very-dark-desaturated-blue;
        font-size: smaller;
        letter-spacing: 0.1em;

        position: relative;
        padding: 0.2em 0.5em;
    }

    .yellow-learn-more-btn:after,
    .orange-learn-more-btn:after {
        content: "";
        display: inline-block;
        width: 100%;
        height: 0.6em;
        border-radius: 6px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -100;
        opacity: 25%;
    }

    .yellow-learn-more-btn:after {
        background: $primary_yellow;
    }

    .orange-learn-more-btn:after {
        background: $primary_soft-red;
    }

    .yellow-learn-more-btn:hover:after,
    .orange-learn-more-btn:hover:after {
        opacity: 100%;
    }
    ```

## Author

-   Website - [yasminedewolf.be](https://yasminedewolf.be)
-   Frontend Mentor - [@Yasmine10](https://www.frontendmentor.io/profile/Yasmine10)

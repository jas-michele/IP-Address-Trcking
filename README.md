# Frontend Mentor - IP address tracker solution

 This project helped me practice working with APIs, handling asynchronous JavaScript, and intergrating a map using Leaflet.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)



**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location



### Links

- Live Site URL: (https://jas-michele.github.io/IP-Address-Trcking/)

## My process

I started by building a simple HTML structure for the page, including the header, search input, results section, and map container.

Next, I moved into the JavaScript setup. I initialized the Leaflet map first so I could visually confirm the map was working before adding other features.

After that, I created the API fetch function to retrieve IP data. Once the data was available, I built a handleSearch function connected to the form submission to allow users to search for an IP address.

I then created an updateUI function to display the returned data in the results section.

After getting the core functionality working, I went back to the HTML and reorganized the results layout to match the design more closely. I connected the JavaScript data to the correct elements in the HTML so the UI updated properly.

Once everything was functional, I focused on styling the application. I adjusted layout, spacing, and positioning using CSS.

Finally, I worked on mobile responsiveness. I ran into issues with the marker not being visible on smaller screens, so I adjusted the layout and map behavior to improve visibility.

I committed changes throughout each stage of development to track progress and keep my workflow organized.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This project helped me understand how different parts of an application connect together, especially how API data flows into the UI.

I learned how to work with asynchronous JavaScript using async/await and how to update the DOM dynamically based on user input.

I also gained experience integrating a third-party library (Leaflet) and managing map behavior, including setting the view and updating markers.

One of the biggest takeaways was debugging layout and positioning issues. I learned that problems I initially thought were related to z-index were actually caused by sizing and layout structure. This helped me better understand how CSS positioning and responsiveness work together.

Overall, I improved my ability to troubleshoot issues step-by-step and think more logically through problems instead of guessing.

### Continued development

In future projects, I want to continue improving my approach to responsive design, especially structuring layouts so they adapt more smoothly across screen sizes.

I also want to get more comfortable working with APIs and handling edge cases, such as better error handling and loading states.

Additionally, I’d like to improve how I debug UI issues by being more systematic instead of relying on trial and error.

### Useful resources

- https://leafletjs.com/ — Helped me understand how to initialize the map and update markers correctly  
- https://developer.mozilla.org/ — Used as a reference for async/await, fetch, and DOM manipulation  

### AI Collaboration

I used ChatGPT throughout this project to support my development process.

I primarily used it for:
- Debugging layout and positioning issues (especially with the results card and map)






# Front-End React Assessment

## Overview

This project is a small React application with minimal depenencies. Use this project as a baseline. You may modify the existing application structure as needed, including adding components, hooks, utilities, tests, and styles. Keep the implementation maintainable and avoid adding dependencies unless they provide clear value.
The assessment is designed to take approximately **1-2 hours total**. You are not required to complete all tasks. Tasks can be combined, for example `Task 3` can utilize `Task 2` to display results.

You do not need to complete every task if you run out of time. Prioritize correctness, usability, and code quality.

## General Expectations

We are interested in how you approach the work, not just whether the final UI works.
Please make reasonable assumptions when requirements are ambiguous rather than trying to account for every possible scenario.

### AI / Development Tools

You may use any development, documentation, search engines, and AI development tools at your disposal, utilize these tools the same way you would on the job.

---

## Task 1 — Application Layout & Navigation

Create a basic application shell with:

- A header/navigation area
- A main content area
- Navigation between at least three pages
- A way to indicate the current page

Use the existing React Router dependency.
You may decide what the pages contain and how the navigation should be presented.

---

## Task 2 — Data Table

Create a page that displays a collection of records in a table.

The table should:
- Display multiple fields
- Allow the user to sort by at least two columns
- Allow the user to filter the displayed records using select options and/or a search input field
- Handle an empty result gracefully

You may choose the record type and determine which fields are most useful.

---

## Task 3 — API Data & Loading States 

Create a page that retrieves and displays data from the following public API:`https://jsonplaceholder.typicode.com/users`

Use the existing `react-query` dependency.
The page should account for the lifecycle of a request, including loading, success, and failure states.
You should decide how the returned data is presented.

---

## Task 4 — Date & Time

Add a feature that displays and works with dates/times using Luxon.
For example, the application might display upcoming events, activity, appointments, or another time-based collection.

The feature should handle:
- Relative or formatted dates in the users local time

You may choose the data model and presentation.

---

## Optional Task — Design/Architecture Decision

Add one small feature of your choice that you believe would improve the application in some way.
Before implementing it, consider:

- How it fits into the existing application
- Where state should live
- How components should be organized
- How the feature could evolve

Document your feature and the reason for the addition.

---

### Submission

When finished:
1. Ensure the application can be installed and started.
2. Include any notes that may help us review the work.
4. run `npm run clean` to remove node_modules before archiving.
5. Return the completed project in a compressed zip file.

Good luck!

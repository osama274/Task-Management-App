# Website Task Management App

Create an app that reads a JSON file of site tasks, displays them in a table, and allows the user to add a task

## Instructions

- import the file `siteTasks.json`
- create a state variable for this data
- display this data in a table showing the following fields:
    - `category`
    - `title`
- create an additional row with two input boxes for both category and title, and a button **Add Task**
    - create state variables for both category and title input fields
    - create event handlers to handle the change in these two boxes (onChange)
    - create an event handler for the button which adds the data in these two fields to the array of siteTasks
- style appropriately

## Bonus: automatic focus 🥇

- on page render, set the cursor focus in the `category` input box
- after adding each new site task, reset the cursor focus in the `category` input box

## Challenge #1: Validate Form 💪

- if either field is empty:
    - do not add the task
    - display a message to the user that empty fields are not allowed

## Challenge #2: Category Dropdown 💪

- convert the `category` input box into a dropdown with key/values such as these:

| key              | value               |
| ---------------- | ------------------- |
| newCreatePage    | New Create Page     |
| refactoring      | Refactoring         |
| newDataType      | New Data Type       |

- `value` is what the user sees in the dropdown box
- `key` is what is saved to the JavaScript object
- for the general syntax of this, see [this implementation of a dropdown](https://github.com/Entwickler-Club/dpodreact/blob/dev/src/system/components/PageDeletePage.tsx) on the Delete page of Datapod



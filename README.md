# Search App

## Description

This project is a simple single page web application designed to allow users to search for information on our website.

Assumptions: assume that login and access control have already been handled.

## Features

### Task 1: As a user, I want to see results displayed when i search in the search bar

```
1a)     Perform Search and Display Results
        -------------------------------------
        Given user is focused on search bar
        When user click on search button OR press enter
        Then search results should be fetched
        AND results should be displayed in correct format
        AND matching terms in results content should be highlighted
```

### Task 2: As a user, I want to see suggestions in the search bar

Refer to screenshots provided to style your application UI accordingly.

```
2a)     Typeahead Suggestion Dropdown
        -------------------------------------
        Given user is focused on search bar
        When user types > 2 character in search bar
        Then suggestion dropdown should appear showing top 6 results
```

```
2b)     Select Suggestion
        -------------------------------------
        Given user is focused on search bar,
        When up or down keyboard button is pressed to select any suggestion and enter is pressed
        OR any suggestion is clicked
        Then suggestion dropdown should disappear
        AND selected suggestion search term should appear in search bar
        AND search results should be updated according to selected term
```

```
2c)     'X' Button in SearchBar
        -------------------------------------
        Given user is focused on search bar,
        When >= 1 character is typed in search bar
        Then 'X' button should appear
```

```
2d)     Click 'X' Button in SearchBar
        -------------------------------------
        Given user is focused on search bar,
        When 'X' is clicked
        Then suggestion dropdown should disappear
        AND searchbar textfield should be cleared but retain focused
        AND 'X' option should disappear
```

### Setup

Instructions on how to get a development environment running:

1. **Clone the repository**

```bash
git clone https://github.com/bryanleejh/search-app.git
cd search-app
```

2. **Install the packages**

```bash
npm install
```

3. **Run the dev environment**

```bash
npm run dev
```

3. **Run the tests**

```bash
npm run test
```

3. **Run the test coverage**

```bash
npm run coverage
```

## Motivation and Choices

### Motivation

The project was developed to create a responsive, high-performance web application that closely adheres to a specific Figma design within an 8-10 hour timeframe, targeting users who appreciate an efficient UI across various devices.

### Technology Choices and Trade-offs

- **React with TypeScript** was chosen for its modular architecture and robust typing, enhancing code quality and testability.
- **Vite** was selected over Webpack for its simplicity and rapid setup, optimizing development time.
- **TailwindCSS** was used for its utility-first approach, facilitating quick custom design implementations and responsive adjustments.
- **Vitest** was favored for its compatibility with Vite and efficient unit testing capabilities, suitable for the project's tight timeline.

### Focus on Test Coverage

Testing was approached pragmatically; tests were added retroactively to expedite prototyping and ensure UI components met design specifications before behavior formalization. This strategy allowed for effective testing of component functionality and reliability post-development, optimizing the process under time constraints. More focus on unit tests over integration tests were chosen by design.

### Design and User Experience

The UI design focused on fidelity to Figma mockups and intuitive user interactions, with performance optimizations to ensure smooth operation across different devices. Simple accessibility quality of life improvements were also included.

### Error Handling

The application includes simple error handling, particularly for network issues where api calls fail.

## Future Improvements

### Lazy Loading

Implement `React.lazy` for component-based lazy loading and introduce data lazy loading to improve initial load times and performance for users on varied network conditions.

### Debouncing for Search

Integrate a debounce function for the search input to reduce server load and enhance user experience by minimizing unnecessary API calls during typing.

### Enhanced Accessibility

Further refine accessibility by enhancing keyboard navigation, extending the use of ARIA attributes, and improving color contrasts to ensure compliance with WCAG guidelines.

### Expanded Test Coverage

Increase the test coverage by incorporating integration and end-to-end tests using tools like React Testing Library and Cypress. This will help ensure application reliability and robustness across different user interactions.

These improvements aim to enhance user experience, performance, and application robustness, setting a foundation for scalable and maintainable growth.

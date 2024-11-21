# Dynamic Form Generator

A dynamic form generator that takes a JSON schema and generates a styled, functional form in real-time. The application allows users to edit the JSON schema on the left side, and the form updates instantly on the right side. Users can copy the JSON schema to the clipboard and toggle between light and dark modes.

## Features

- Real-time generation of a form based on the JSON schema.
- Ability to edit JSON in a real-time JSON editor.
- Responsive layout for mobile compatibility.
- Dark mode toggle.
- "Copy JSON" button to copy the JSON schema to the clipboard.
- Validations for form fields based on the JSON schema.
- Tailwind CSS for styling.

## Technologies Used

- *React 18+*: For building the user interface.
- *TypeScript*: For type safety and better code organization.
- *Tailwind CSS*: For responsive and modern styling.
- *React Hook Form*: For managing form state and validation.
- *localStorage*: To persist dark mode preference across sessions.
- *Clipboard API*: To copy the JSON schema to the clipboard.
- *Playwright & Jest*: For end-to-end and unit testing.

## Installation

Follow the steps below to get the development environment set up:

1. Clone the repository:

   ```bash
   git clone 
   cd dynamic-form-generator

2. Install Dependencies

  ```bash
  # Install React, React-DOM, and TypeScript
  npm install react react-dom typescript

  # Install Tailwind CSS, PostCSS, and Autoprefixer
  npm install tailwindcss postcss autoprefixer

  # Install React Hook Form
  npm install react-hook-form

  # Install Jest and Playwright for testing
  npm install --save-dev jest playwright

  # Install testing libraries (optional)
  npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event


## JSON Schema Example

```bash
{
"formTitle": "Project Requirements Survey",
"formDescription": "Please fill out this survey about your project needs",
"fields": [
{
"id": "name",
"type": "text",
"label": "Full Name",
"required": true,
"placeholder": "Enter your full name"
},
{
"id": "email",
"type": "email",
"label": "Email Address",
"required": true,
"placeholder": "you@example.com",
"validation": {
"pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
"message": "Please enter a valid email address"
}
},
{
"id": "companySize",
"type": "select",
"label": "Company Size",
"required": true,
"options": [
{ "value": "1-50", "label": "1-50 employees" },
{ "value": "51-200", "label": "51-200 employees" },
{ "value": "201-1000", "label": "201-1000 employees" },
{ "value": "1000+", "label": "1000+ employees" }
]
},
{
"id": "industry",
"type": "radio",
"label": "Industry",
"required": true,
"options": [
{ "value": "tech", "label": "Technology" },
{ "value": "healthcare", "label": "Healthcare" },
{ "value": "finance", "label": "Finance" },
{ "value": "retail", "label": "Retail" },
{ "value": "other", "label": "Other" }
]
},
{
"id": "timeline",
"type": "select",
"label": "Project Timeline",
"required": true,
"options": [
{ "value": "immediate", "label": "Immediate (within 1 month)" },
{ "value": "short", "label": "Short-term (1-3 months)" },
{ "value": "medium", "label": "Medium-term (3-6 months)" },
{ "value": "long", "label": "Long-term (6+ months)" }
]
},
{
"id": "comments",
"type": "textarea",
"label": "Additional Comments",
"required": false,
"placeholder": "Any other details you'd like to share..."
}
]
}

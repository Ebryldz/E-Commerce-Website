# E-Commerce Website

**E-Commerce Website** is a React-based web application designed as a practice project to build a functional e-commerce platform. The project allows users to view and filter products, switch between light and dark themes, add items to the shopping cart, and view the total cart value. It integrates several modern web development tools and libraries to simulate a real-world e-commerce experience.

---

## Features

### Product Management
- Fetches products from a fake API ([JSONPlaceholder](https://jsonplaceholder.typicode.com/)).
- Displays products in a visually appealing list.
- Includes filtering functionality to help users find specific products.

### Cart Functionality
- Users can add products to the shopping cart.
- The cart dynamically calculates and displays the total price of selected items.

### Theming
- Light and dark theme toggle for user convenience and better accessibility.

### Enhanced User Experience
- Displays a loading screen while fetching products from the API.
- Responsive design ensures compatibility across different devices.

---

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **React Router**: For managing navigation between pages.
- **Redux**: For state management.
- **CSS**: For styling the application.

### API Integration
- **JSONPlaceholder**: For simulating a product database.

---

## Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Ebryldz/e-commerce-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd e-commerce-website
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Project Highlights

### State Management with Redux
- The application uses Redux slices to manage different parts of the state, including:
  - **appSlice**: Manages global application state, such as theme settings.
  - **basketSlice**: Handles cart functionality, including adding/removing products and calculating the total price.
  - **productSlice**: Manages product data fetched from the API.

### Routing
- **React Router** enables seamless navigation between pages, such as the product list and product details.

### Modular Design
- The project is structured to separate concerns, making it scalable and easy to maintain.
- Dedicated components for reusable UI elements (e.g., `Header`, `Product`, `Loading`).

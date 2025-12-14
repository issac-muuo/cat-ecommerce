# Cat E-Commerce Project

## Description
A JavaScript e-commerce application that allows users to browse cats,
add them to a cart, and view a checkout summary.

## Features
- Product listing
- Add to cart functionality
- Checkout page with order summary
- Normalized data design (no duplication)

## Technologies
- HTML
- CSS
- JavaScript (ES Modules)

## Project Structure
- data/ – product and cart data
- scripts/ – application logic
- checkout.html – checkout page

## Data Design
The application follows a normalized data pattern:
- `cats` stores full product information
- `cart` stores only product IDs and quantities
- UI data is derived at render time

## How to Run
Open `index.html` in a modern browser.


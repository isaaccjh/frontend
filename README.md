## Project Overview

Zerek is an online store dedicated to selling fishing lures and related products. The store aims to provide fishing enthusiasts with a convenient and user-friendly shopping experience for all their lure needs. Whether customers are beginners or experienced anglers, the Ecommerce Lure Store offers a wide range of high-quality lures from various brands to cater to their preferences and fishing styles.

![Zerek's Home Page](mockup.png)

## Test Accounts

### Customers

A live demo for customers can be accessed [here](https://www.example.com/customer-demo).

**Test Account:**

- Email: dog@dog.com
- Password: dog

### Admin/Shop Owners

A live demo for admin/shop owners can be accessed [here](https://www.example.com/admin-demo).

**Test Account:**

- Email: kitty@kittyman.com
- Password: Kitty@123

## Features

The Ecommerce Shop includes the following key features:

1. **Product Catalog**: The shop offers a wide range of products that customers can browse and search for.

2. **User Accounts**: Customers can create accounts, log in, and manage their profiles, including order history and shipping addresses.

3. **Shopping Cart**: Customers can add products to their shopping cart, update quantities, and proceed to checkout.

4. **Checkout Process**: The shop provides a secure checkout process, allowing customers to enter shipping and payment information.

5. **Order Management**: Administrators have access to an order management system to process orders, update order status, and manage inventory.

![SQL Database](sqldb.png)

## Tech Stack

The Ecommerce Shop is built using the following technologies:

- **Front-end**: HTML, CSS, JavaScript, React, Tailwind, Framer Motion

- **Back-end**: Node.js with express, JSON Web Token, CORS (Cross-Origin Resource Sharing), Bookshelf (ORM Library), Knex (SQL Query Builder), Cloudinary, Caolan Forms, Moment, Handlebars

- **Database**: MySQL for testing, PostgreSQL for deployment

- **Payment Gateway**: Integrated Stripe for secure online transactions.

- **Hosting**: [Render](www.render.com) for backend, [Netlify](www.netlify.com) for frontend.

## Test Cases

| **Expected Result** | User registration is successful, and the user's information is stored accurately. |

| Test Case       | Product Search                                                                   |
| --------------- | -------------------------------------------------------------------------------- |
| **Description** | Validate the search functionality to ensure users can find products effectively. |
| **Test Steps**  | ```javascript                                                                    |

1. // Enter a specific product name or keyword in the search bar.
2. // Click the search button or press Enter.
3. // Verify that the search results page is displayed.
4. // Check if the displayed results are relevant to the entered search query.
5. // Repeat the search using different keywords and verify the results each time.

````|
| **Expected Result** | The search functionality returns relevant products based on the entered keywords. |

| Test Case | Add to Cart |
| --- | --- |
| **Description** | Ensure that users can add products to their shopping cart. |
| **Test Steps** | ```javascript
1. // Navigate to a product page.
2. // Select the desired product variation (if applicable).
3. // Click the "Add to Cart" button.
4. // Verify that a success message appears, indicating that the item has been added to the cart.
5. // Access the shopping cart page and check if the added product is listed.
``` |
| **Expected Result** | The selected product is successfully added to the shopping cart. |

| Test Case | Checkout Process |
| --- | --- |
| **Description** | Verify that users can complete the checkout process successfully. |
| **Test Steps** | ```javascript
1. // Open the shopping cart page.
2. // Review the listed products and quantities.
3. // Click the "Checkout" button.
4. // Fill in the required fields with valid customer information (e.g., shipping address, payment details).
5. // Click the "Place Order" button.
6. // Verify that the user is redirected to an order confirmation page.
7. // Check if the order details match the entered information.
``` |
| **Expected Result** | The user can complete the checkout process, and an order confirmation page is displayed with accurate order details. |

| Test Case | User Account Management |
| --- | --- |
| **Description** | Validate the user account management functionality. |
| **Test Steps** | ```javascript
1. // Log in to the user account using valid credentials.
2. // Access the account settings or profile page.
3. // Verify that the user's information (e.g., name, email, shipping address) is displayed correctly.
4. // Update one or more fields (e.g., change the shipping address).
5. // Save the changes.
6. // Verify that the changes are reflected in the user's account.
``` |
| **Expected Result** | Users can access and update their account information successfully. |

Please note that the code snippets provided are commented using JavaScript comments (`//`) to indicate the test steps.
| **Expected Result** | User registration is successful, and the user's information is stored accurately. |

| Test Case | Product Search |
| --- | --- |
| **Description** | Validate the search functionality to ensure users can find products effectively. |
| **Test Steps** | ```javascript
1. // Enter a specific product name or keyword in the search bar.
2. // Click the search button or press Enter.
3. // Verify that the search results page is displayed.
4. // Check if the displayed results are relevant to the entered search query.
5. // Repeat the search using different keywords and verify the results each time.
``` |
| **Expected Result** | The search functionality returns relevant products based on the entered keywords. |

| Test Case | Add to Cart |
| --- | --- |
| **Description** | Ensure that users can add products to their shopping cart. |
| **Test Steps** | ```javascript
1. // Navigate to a product page.
2. // Select the desired product variation (if applicable).
3. // Click the "Add to Cart" button.
4. // Verify that a success message appears, indicating that the item has been added to the cart.
5. // Access the shopping cart page and check if the added product is listed.
``` |
| **Expected Result** | The selected product is successfully added to the shopping cart. |

| Test Case | Checkout Process |
| --- | --- |
| **Description** | Verify that users can complete the checkout process successfully. |
| **Test Steps** | ```javascript
1. // Open the shopping cart page.
2. // Review the listed products and quantities.
3. // Click the "Checkout" button.
4. // Fill in the required fields with valid customer information (e.g., shipping address, payment details).
5. // Click the "Place Order" button.
6. // Verify that the user is redirected to an order confirmation page.
7. // Check if the order details match the entered information.
``` |
| **Expected Result** | The user can complete the checkout process, and an order confirmation page is displayed with accurate order details. |

| Test Case | User Account Management |
| --- | --- |
| **Description** | Validate the user account management functionality. |
| **Test Steps** | ```javascript
1. // Log in to the user account using valid credentials.
2. // Access the account settings or profile page.
3. // Verify that the user's information (e.g., name, email, shipping address) is displayed correctly.
4. // Update one or more fields (e.g., change the shipping address).
5. // Save the changes.
6. // Verify that the changes are reflected in the user's account.
``` |
| **Expected Result** | Users can access and update their account information successfully. |

Please note that the code snippets provided are commented using JavaScript comments (`//`) to indicate the test steps.
````

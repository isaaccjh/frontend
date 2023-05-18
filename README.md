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

| Test Case: User Login                                                                                               |
| ------------------------------------------------------------------------------------------------------------------- |
| **Description:** Verify that users can successfully login on the website.                                           |
| **Test Steps:**                                                                                                     |
| 1. Open the website's login page.                                                                                   |
| 2. Fill in the required fields with valid information (email: dog@dog.com, password: dog).                          |
| 3. Click the "Login" button.                                                                                        |
| 4. Verify that the user is redirected to a product page.                                                            |
| **Expected Result:** User login is successful, and the user's information is stored accurately in the profile page. |

| Test Case: Product Search                                                                              |
| ------------------------------------------------------------------------------------------------------ |
| **Description:** Validate the search functionality to ensure users can find products effectively.      |
| **Test Steps:**                                                                                        |
| 1. Enter a specific product name or keyword in the search bar.                                         |
| 2. Click the search button.                                                                            |
| 3. Verify that the search results page is displayed.                                                   |
| 4. Check if the displayed results are relevant to the entered search query.                            |
| 5. Repeat the search using different keywords and verify the results each time.                        |
| **Expected Result:** The search functionality returns relevant products based on the entered keywords. |

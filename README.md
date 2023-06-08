## Project Overview

Zerek is an online store dedicated to selling fishing lures and related products. The store aims to provide fishing enthusiasts with a convenient and user-friendly shopping experience for all their lure needs. Whether customers are beginners or experienced anglers, the Ecommerce Lure Store offers a wide range of high-quality lures from various brands to cater to their preferences and fishing styles.

![Zerek's Home Page](mockup.png)

## Test Accounts

### Customers

A live demo for customers can be accessed [here](https://animated-bombolone-f50579.netlify.app/).

**Test Account:**

- Email: dog@dog.com
- Password: dog

### Admin/Shop Owners

A live demo for admin/shop owners can be accessed [here](https://tgc-project3-express.onrender.com/).

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


## Target Audience

Our e-commerce platform primarily targets two groups of fishing enthusiasts who have a specific interest in lures:

### 1. Recreational Anglers

This audience group includes both novice and seasoned hobbyists who enjoy fishing in their leisure time.

**Pain Points:**
- Difficulty in finding a wide variety of fishing lures in one place.
- Lack of detailed information about each lure, such as what species they are best suited for and in what conditions.
- Inexperience or uncertainty in selecting the right lure based on their needs and local fishing conditions.

**How our platform caters to them:**
- We provide an extensive range of lures, from classics to the latest in fishing lure technology.
- Detailed product descriptions are provided for each lure.


### 2. Competitive Anglers

These are individuals who participate in fishing tournaments and competitions or are dedicated enthusiasts aiming to improve their catch rate.

**Pain Points:**
- Seeking high-performance lures to gain competitive edge.
- Finding specific lures that align with their refined fishing techniques and preferences.
- Staying updated with the latest lure trends and technology.

**How our platform caters to them:**
- Our shop features a selection of premium and professional-grade lures, designed to improve success rate.
- We provide filters and categories for lures based on lure type, and other variables like price points and number of variants to help professionals find what they need quickly.
- New and trending lures are highlighted on our site, keeping competitive anglers updated with the latest developments in the lure industry.

## User Stories
### Product Catalog
- As a user, I want to be able to view a list of fishing lures available for purchase.
- As a user, I want to be able to search for specific fishing lures by name
- As a user, I want to be able to filter the fishing lures based on different attributes such as price and number of variants
- As a user, I want to see detailed information about each fishing lure, including its product descriptions and colour choices

### User Account
- As a user, I want to be able to create a new account using my email address and password.
- As a user, I want to be able to log in to my account and view my order history.

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

| Test Case: Add to Cart                                                                         |
| ---------------------------------------------------------------------------------------------- |
| **Description:** Ensure that users can add products to their shopping cart.                    |
| **Test Steps:**                                                                                |
| 1. Navigate to the product page.                                                               |
| 2. Select the desired product variation (if applicable).                                       |
| 3. Click the "Add to Cart" button.                                                             |
| 4. Verify that a success message appears, indicating that the item has been added to the cart. |
| 5. Access the shopping cart page and check if the added product is listed.                     |
| **Expected Result:** The selected product is successfully added to the shopping cart.          |

| Test Case: Checkout Process                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Description:** Verify that users can complete the checkout process successfully.                                                        |
| **Test Steps:**                                                                                                                           |
| 1. Open the shopping cart page.                                                                                                           |
| 2. Review the listed products and quantities.                                                                                             |
| 3. Click the "Checkout" button.                                                                                                           |
| 4. Fill in the required fields with valid customer information (e.g., shipping address, payment details).                                 |
| 5. Click the "Checkout" button.                                                                                                           |
| 7. Check if the order details match the entered information.                                                                              |
| **Expected Result:** The user can complete the checkout process, and an order confirmation page is displayed with accurate order details. |

## Acknowledgements

- [HyperUI](https://www.hyperui.dev/)
  - Used code here for most of the components
- [BadAngling](https://badangling.com/tackle-advice/a-guide-to-fishing-hook-sizes-and-types/)
  - Used for Hooks and type of lures information
- [stack overflow](https://stackoverflow.com/questions/72550231/incorrect-date-value-2022-06-11t000000-000z-for-column-date-at-row-1)
  - Used for debugging and some code help
- [Stripe Documentation](https://stripe.com/docs/libraries/stripejs-esmodule)
  - Used for all stripe related stuff
- [Bootstrap Icons](https://icons.getbootstrap.com/)
  - Icons
- [ChatGPT](https://chat.openai.com/)
  - Debugging
  - Some code help
  - Readme
- [Midjourney](https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F)
  - Image Generation

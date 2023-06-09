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

## Design Choices

### Colors:
- Secondary Color: White (`#FFFFFF`)
  - Rationale: White is used as the secondary color to provide a clean and modern aesthetic to the website. It enhances readability and allows the fishing lure product images and descriptions to stand out prominently, making it easy for users to browse and make informed purchase decisions.

- Primary Color: Tailwind's Yellow-400 (`#FACC15`)
  - Rationale: The choice of yellow as the primary color brings a vibrant and energetic feel to the website, which resonates well with the target audience of fishing enthusiasts. Yellow is also often associated with sunshine and positivity, creating a welcoming and engaging atmosphere for users.



### Fonts:
- Font Family: Nunito
  - Rationale: Nunito is a clean, versatile, and easy-to-read font that offers excellent legibility across different screen sizes. Its rounded edges and balanced letterforms add a friendly and approachable touch to the overall design. Nunito's modern yet timeless appeal aligns well with the fishing lure ecommerce website, ensuring a pleasant reading experience for users.

### Images:
- Style of Images: High-quality product images with white background
  - Rationale: To showcase the fishing lures effectively, high-quality product images are used. The images feature the lures against a white background. This approach helps the target audience visualize the lures in real fishing scenarios, enhancing their appeal and increasing the chances of conversion.

### Layout:
- Clean and Intuitive Design:
  - Rationale: The layout of the website is designed to be clean, simple, and intuitive. The emphasis is on providing a seamless browsing experience for users, enabling them to find and explore fishing lures effortlessly. The use of ample whitespace and clear typography ensures that the content is easy to read and navigate. The intuitive design facilitates a smooth user journey, leading to increased engagement and conversions.

- Mobile Responsiveness:
  - Rationale: With the increasing use of mobile devices, ensuring a responsive design is crucial. The layout is optimized to adapt to different screen sizes and resolutions, providing a consistent and user-friendly experience across desktop, tablet, and mobile devices. This approach allows fishing enthusiasts to access the website and make purchases conveniently, regardless of the device they are using.


## Frontend Organization
In the frontend organization, the application is structured using the following components:

- **Home**: The main page that users will enter upon entering the website. Has buttons to bring user to product listings, and certain hot products. 
- **Product**: The page that users will be redirected to upon login, register, checkout success.
- **Product Page**: Displays the list of available colour variants for as well as allowing for users to add to cart. Users can get here by clicking on the product in the product page.
- **Profile Page**: Displays the list of orders a user have, along with the user's ID and email address.
- **Cart**: Renders the user's cart with a list of products, allowing for quantity adjustments and removal of items. Also has a checkout button. Users can get to here by clicking on the shopping bag logo in the navbar.
- **Checkout**: Provides a form for users to enter their shipping information and payment details to complete the purchase, redirects the user to product page upon success. Users can get here by clicking the checkout button

These components are organized and structured in a modular way to enhance maintainability, reusability, and readability of the codebase.


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

## Mockup
![Wireframe](wireframe.png)

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

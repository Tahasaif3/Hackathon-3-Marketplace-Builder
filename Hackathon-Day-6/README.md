# Food Delivery Website with Sanity CMS Integration

## Overview

This project demonstrates a dynamic, data-driven food delivery website that leverages **Sanity CMS** for content management. Built using **Next.js** and **React**, this platform enables users to browse a wide range of food items, add them to a cart, customize orders, and proceed through a seamless checkout process. The backend is powered by Sanity CMS to manage the content and product data.

---

## Features

### 1. **Product Listings**
- Dynamic product listings fetched from Sanity CMS using **GROQ** queries.
- Each product includes:
  - Product name, description, price, and image (retrieved from Sanity).
  - Dynamic filtering options based on categories and attributes like price and availability.
  - Lazy loading of images for performance optimization.

### 2. **Product Detail Page**
- Detailed information about each product:
  - Rich-text descriptions fetched from Sanity.
  - Price, sizes, color options, and available stock.
  - Image gallery and zoom functionality using Sanity assets.
  - Real-time stock updates reflecting inventory changes.

### 3. **Category Filtering**
- Users can filter products based on categories like **Pizza**, **Burgers**, **Desserts**, and more.
- Categories are dynamically fetched from Sanity.
  
### 4. **Search Functionality**
- Full-text search powered by **Sanity's search API**.
- Supports real-time suggestions as users type.
- Allows search across multiple fields like name, description, and tags.

### 5. **Cart System**
- Persistent cart that saves added items, quantities, and total price.
- Real-time stock checks using Sanity data.
- Cart is persisted locally, syncing with the server on page load.

### 6. **User Profile**
- Users can view and manage their profile, including:
  - Name, email, and saved addresses.
  - Order history and detailed view of each order.
  - Order tracking with real-time status updates.

### 7. **Checkout Flow**
- Multi-step checkout process integrated with **Sanity CMS**.
- Steps include:
  1. Billing and shipping information.
  2. Shipping method selection.
  3. Payment details.
  4. Order review and confirmation.
- Validation and inventory checks during checkout.

### 8. **Wishlist**
- Users can save food items to a wishlist for later purchase.
- Syncs with **Sanity** for logged-in users and with **local storage** for guest users.

### 9. **Reviews and Ratings**
- Users can rate and review products (food items).
- Reviews are stored in Sanity and displayed on product detail pages.
- Average ratings are automatically calculated.

### 10. **Notifications**
- Real-time toast notifications for actions like adding items to the cart, successful purchases, and new updates.

### 11. **Admin Panel**
- Admin panel built in **Sanity Studio** for managing the website’s content, including:
  - Product information, images, pricing, and availability.
  - Promotions and discounts.
  - Customer orders and profiles.

### 12. **Social Media Sharing**
- Share food items on social media platforms directly from the product pages.
- Dynamic Open Graph tags generated using Sanity data.

### 13. **Order Tracking**
- Real-time order tracking for customers, including estimated delivery time and order status.

---

## Technologies Used
- **Frontend**: 
  - **Next.js** (React Framework)
  - **Sanity CMS** (Content Management System)
  - **Tailwind CSS** (For styling)
  - **React Context API** (For state management)

- **Backend**:
  - **Sanity CMS**: Headless CMS for managing product data, user profiles, and content.

- **Other**:
  - **GROQ**: Query language used to fetch data from Sanity CMS.
  - **Local Storage**: For persistent cart and wishlist for guest users.
  - **Sanity Studio**: Admin panel for managing data.

---

## Installation & Setup

### Prerequisites:
- **Node.js** (v14 or higher)
- **Sanity CLI** installed globally on your machine.

### Steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Tahasaif3/Food-Deleivery-Website.git
   cd Food-Deleivery-Website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the Sanity CMS backend:
   - Go to the `sanity` folder and install Sanity dependencies:

     ```bash
     cd sanity
     npm install
     ```

   - Create a Sanity project if you don’t have one already. Follow the steps in the Sanity documentation to set up your project.
   - Add the required schemas (products, categories, orders, etc.) to Sanity Studio as per your project needs.

4. Add environment variables for your **Sanity API** credentials:
   - In the root directory, create a `.env.local` file and add the following:

     ```
     SANITY_PROJECT_ID=your_project_id
     SANITY_DATASET=your_dataset_name
     ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   This will start both the frontend and the Sanity Studio.

---

## Project Structure

```
/food-delivery-website
  /pages
    - index.js (Home page with product listings)
    - product/[slug].js (Dynamic product page)
    - cart.js (Cart page)
    - checkout.js (Checkout page)
    - profile.js (User profile page)
    - orders.js (Order tracking page)
  /components
    - ProductList.js
    - ProductCard.js
    - Cart.js
    - SearchBar.js
    - CategoryFilter.js
    - Wishlist.js
    - OrderSummary.js
    - Footer.js
  /sanity
    - schemas
      - product.js (Product schema)
      - order.js (Order schema)
      - category.js (Category schema)
      - user.js (User schema)
    - sanity.js (Sanity client setup)
  /styles
    - tailwind.config.js
    - global.css
```

---

## Future Enhancements
- Add a payment gateway integration for real payments.
- Implement a rating system for drivers (delivery).
- Integrate personalized recommendations based on user behavior.
- Enhance order tracking with GPS-based delivery tracking.

---

## Contributing

Feel free to fork this project and contribute! You can open an issue or send a pull request with improvements, bug fixes, or new features.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Points:
1. **Dynamic Components**: The frontend pulls data dynamically from **Sanity CMS** for products, categories, and more, making it easy to update content.
2. **State Management**: Uses **React Context API** to manage global state for the cart, wishlist, and user profile.
3. **Optimized Performance**: Implements lazy loading and efficient querying with **GROQ** to fetch only the necessary data.
4. **Customization & Extensibility**: The website's content can be easily customized through **Sanity Studio** without needing to change the codebase.

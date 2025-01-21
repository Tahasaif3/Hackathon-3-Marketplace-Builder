# **Q-Commerce Food Marketplace**

## **Marketplace Builder Hackathon**

This project was developed as part of the **Marketplace Builder Hackathon**, which focused on creating scalable, dynamic e-commerce platforms with seamless frontend and backend integration. Today marks a significant milestone in our hackathon journey. We've successfully implemented a wide array of **dynamic frontend components**, integrating them seamlessly with **Sanity CMS** to create a robust, data-driven marketplace platform. This README outlines the components we’ve built and how they interact with our **Sanity backend**, providing a seamless and scalable e-commerce experience.

---

## **Q-Commerce Food Marketplace**

### **Overview**

The **Q-Commerce Food Marketplace** is a dynamic platform aimed at delivering high-quality meals quickly to busy urban consumers. The platform allows users to browse curated restaurant selections, place orders, track deliveries in real-time, and manage their profiles. Built with **React**, **Next.js**, and **Sanity CMS**, this project integrates advanced frontend components and data management capabilities to create a seamless e-commerce experience.

---

### **Key Features**

- **Fast Delivery**: Lightning-fast delivery with real-time order tracking.
- **Curated Restaurant Selection**: A handpicked collection of the best local restaurants.
- **Secure Payment Options**: Multiple payment methods for a safe and easy checkout process.
- **Personalized User Profiles**: Manage user orders, preferences, and saved addresses.
- **Real-Time Notifications & Order Tracking**: Immediate updates on order status and location.
- **Reviews and Ratings**: Users can leave feedback on products and restaurants.

---

## **Dynamic Components Overview**

Our platform incorporates a series of dynamic components that interact with **Sanity CMS** to provide real-time, data-driven updates. These components were designed with flexibility and scalability in mind to ensure a smooth user experience. Here's an overview of the core components we've implemented:

### **1. Product Listing Component**
- Responsive grid layout to showcase products dynamically fetched from **Sanity CMS** using **GROQ** queries.
- Displays product name, price, high-quality images, and real-time stock status.
- Optimized with lazy loading to improve performance.
- Utilizes **Sanity’s hot content updates** to reflect changes in real-time without page reloads.

### **2. Product Detail Component**
- Dynamic routing with **Next.js** and **Sanity’s slug field** for SEO-friendly URLs.
- Displays comprehensive product details fetched from **Sanity CMS**, including:
  - Product descriptions, pricing, available sizes, and color options.
- Image gallery with zoom functionality using **Sanity’s asset references**.
- Real-time stock updates through **Sanity’s listening feature**.

### **3. Category Component**
- Developed dynamic categories fetched from **Sanity CMS**.
- Created hierarchical categories using **Sanity's reference fields**.
- Filtering system to narrow products by category using **Sanity’s query API**.

### **4. Search Bar**
- Implemented powerful full-text search across product names, descriptions, and tags.
- Real-time suggestions based on **Sanity’s search API**.
- Optimized search performance with indexed fields in **Sanity**.

### **5. Cart Component**
- Persistent cart with state management via **React Context**.
- Tracks item quantities and total price, syncing real-time product data with **Sanity**.
- Cart persistence with **local storage**, synced with **Sanity** on page load.

### **6. Wishlist Component**
- Allows users to save products for future reference.
- Utilizes **local storage** for guest users and **Sanity** for logged-in users, syncing data upon login.

### **7. Checkout Flow Component**
- Multi-step checkout process integrated with **Sanity**:
  - Billing & shipping details, payment options, and order review.
  - Real-time inventory checks against **Sanity** data to ensure product availability.
  - Order documents created in **Sanity** after a successful checkout.

### **8. User Profile Component**
- Displays user information, saved addresses, and order history fetched from **Sanity**.
- Allows real-time updates to user details, synced with **Sanity**.

### **9. Reviews and Ratings Component**
- Users can submit product reviews and rate items using a star-rating system.
- Ratings are stored in **Sanity**, which averages them and displays the overall score.
- Reviews are paginated and sorted using **Sanity’s API**.

### **10. Pagination Component**
- Pagination system for product listings with navigation buttons and numbered pages.
- Efficient querying using **Sanity's API** to fetch the appropriate products for each page.

### **11. Filter Panel Component**
- Created advanced filters such as price range, brand selection, and availability toggles.
- Filters dynamically update product listings in real-time through **Sanity’s query API**.

### **12. Related Products Component**
- Displays related products based on **Sanity’s reference fields** and product tags.
- Implemented a carousel for dynamic display of related items.

### **13. Footer and Header Components**
- Branded navigation elements, dynamically managed through **Sanity**.
- Menu builder in **Sanity** for easy management of navigation items.

### **14. Notifications Component**
- Toast notifications for actions like adding items to the cart, successful purchases, and error messages.
- Integrated with **Sanity** to display dynamic notifications.

### **15. Order Tracking Component**
- Real-time order status updates, delivery times, and location tracking.
- Visual timeline based on **Sanity’s order status** data.

### **16. FAQ and Help Center Component**
- Searchable FAQ section and contact form that generates support tickets in **Sanity**.
- Chatbot UI pulling responses from **Sanity’s knowledge base**.

### **17. Discount and Promotion Component**
- Admin interface in **Sanity Studio** for creating and managing discounts.
- Display active discounts dynamically on product listings and during checkout.

### **18. Social Media Sharing Component**
- Share buttons for popular social media platforms.
- Open Graph integration for rich content sharing, pulling data from **Sanity**.

### **19. Gift Card and Voucher Component**
- System for purchasing and redeeming gift cards tracked in **Sanity**.
- Redemption process integrated into checkout, validated against **Sanity** data.

### **20. Customer Feedback Component**
- Feedback form allowing users to submit ratings and comments.
- Admin dashboard in **Sanity Studio** for reviewing feedback and responding to users.

---

## **API Data Migration and Backend Integration**

To ensure scalability and dynamic content management, I migrated product data and other essential content to **Sanity CMS**, integrating it seamlessly with the front end. This allows for easy content updates, real-time data fetching, and a smooth, data-driven experience for users. Sanity’s **GROQ queries** and real-time content updates played a pivotal role in optimizing both performance and user interaction across all components.

---

## **Testing, Error Handling, and Backend Refinement**

- **Testing**: Conducted thorough testing on all components to ensure they functioned correctly across all use cases.
- **Error Handling**: Implemented robust error handling mechanisms to ensure smooth user experience, with clear messages for issues such as payment failures or missing product data.
- **Backend Refinement**: Refined backend integration with **Sanity** to improve query performance, reduce load times, and ensure the reliability of API calls.

---

## **Staging Environment**

Explore the fully functional staging environment of the marketplace at the following URL:

🌐 [Visit My Website](https://food-deleivery-website-phi.vercel.app)

---

## **Future Enhancements**

- **Advanced Order Customization**: Add more customization options for food orders.
- **Real-Time Push Notifications**: Push notifications for order status, promotions, and more.
- **Mobile Application**: Expand the platform with a mobile app built with **React Native**.
- **Admin Dashboard**: Improve restaurant management with a backend dashboard for admins.

---

## **Installation & Setup**

To set up and run the project locally, follow these steps:

### **Clone the repository**

```bash
git clone https://github.com/Tahasaif3/Hackathon-3-Marketplace-Builder.git
cd Hackathon-3-Marketplace-Builder
then go to cd Hackathon-Day-6 Directory
then  enter code . to open folder in vs code
```

### **Install dependencies**

```bash
npm install
```

### **Configure Sanity**

Create a Sanity project, enable **API Read Token**, and set up **Editor** for the full access. Add your Sanity configuration to the `.env.local` file.

### **Run the project**

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000).

---

## **License**

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

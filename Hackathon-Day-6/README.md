# **Deployment Preparation and Staging Environment Setup - Day 6**

## **Overview**

This README documents the steps completed on **Day 6** for the **Deployment Preparation and Staging Environment Setup**. The goal was to prepare the marketplace for deployment by setting up a staging environment, ensuring the application is ready for production, and conducting necessary tests. The completed tasks ensure that the marketplace is secure, optimized, and ready for end-users.

---

## **Objectives**

1. Set up and configure a staging environment for the marketplace.
2. Deploy the application to a hosting platform.
3. Configure environment variables securely.
4. Conduct various tests (functional, performance, security) in the staging environment.
5. Document the entire deployment and testing process.
6. Organize all project files and reports for clarity and ease of access.

---

## **Steps Completed**

### **1. Hosting Platform Setup**
- **Platform Selection**: Chose **Vercel** as the hosting platform due to its seamless integration with GitHub and its efficient deployment process.
- **Repository Integration**: Connected the **GitHub repository** to Vercel, allowing for automatic deployments upon updates.
- **Build and Deployment Configuration**: Configured the build settings in Vercel, ensuring the application is deployed smoothly with every commit.

### **2. Environment Variable Configuration**
- Created a **.env file** to store sensitive information securely, such as:
  - API keys
  - Database credentials
  - Project-specific configurations
- Uploaded environment variables to **Vercel's dashboard**, ensuring that sensitive information is not exposed publicly.

### **3. Deploying the Application to Staging**
- Successfully deployed the marketplace application to a **staging environment** on Vercel.
- Verified that the application loads correctly and all core functionalities (product listing, cart, user authentication, etc.) are working as expected in the staging environment.

### **4. Staging Environment Testing**
- Conducted **functional testing** to ensure key features like product listings, cart operations, and user authentication work correctly.
- Performed **performance testing** using **Lighthouse**, analyzing page load speeds, responsiveness, and overall site performance.
- Implemented **security testing** to validate that the site is protected from common web vulnerabilities such as XSS, SQL Injection, and CSRF.

#### **Sample Test Cases**:
- **TC001**: Product listing functionality – Passed
- **TC002**: API error handling – Passed
- **TC003**: Cart operations – Passed
- **TC004**: Responsiveness – Passed
- **TC005**: Homepage loading speed – Passed
- **TC006**: Product filtering functionality – Passed
- **TC007**: Cart addition from product page – Passed
- **TC008**: Checkout functionality – Passed

The full test report and performance results can be found in the `/documents` folder of this repository.

### **5. Documentation Updates**
- Created a detailed **README.md** summarizing all activities from **Day 1 to Day 6**. This file includes explanations of the tasks completed, the tools and platforms used, and the results of various tests.
- Organized all project files in a structured folder hierarchy:
  - **`src/`**: Source code
  - **`public/`**: Static assets (images, fonts, etc.)
  - **`documents/`**: Test cases, performance reports, and other project documentation
- Ensured that all documentation is clear and accessible for both developers and stakeholders.

### **6. Project Organization**
- Ensured that all files and folders are logically organized to facilitate future development and deployment.
- All test case reports, performance testing results, and other relevant documents were added to the **`documents/`** folder for easy reference.
- The **`README.md`** provides a comprehensive summary of the project's goals, steps, and outputs.

---

## **Expected Outputs**

1. A **fully functional staging environment** hosted on Vercel.
2. **Environment variables** securely configured and deployed.
3. **Test case and performance reports** documenting all staging environment tests.
4. A well-organized GitHub repository, containing all project files and documents.
5. A **professional README.md** summarizing project activities and results.

---

## **Deployment URL**
The staging environment of the marketplace is now live! You can access it using the link below:

🌐 [Visit My Website](https://food-deleivery-website-phi.vercel.app/)

---

## **Next Steps**
1. Monitor the staging environment for any issues that may arise post-deployment.
2. Address any potential issues identified during the testing phase.
3. Prepare the application for the **production deployment** by conducting final checks and updates.

---

## **Final Thoughts**
Day 6 was a crucial step in preparing the marketplace for deployment. The setup of the staging environment, coupled with thorough testing and documentation, ensures that the application is ready for a seamless user experience in production. The successful deployment to Vercel, secure configuration of environment variables, and comprehensive testing have laid the groundwork for a smooth transition to the live environment.

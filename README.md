# Cypress-Web-Tests

This repository contains automated functional end-to-end (E2E) tests for the Automation Exercise website – a full-fledged practice platform designed for Automation Engineers.

 🌐 Access the website through this link 👉 [automationexercise.com](https://automationexercise.com)

![image](https://github.com/user-attachments/assets/b914db74-c8d2-4777-b319-eae39c350d33)


## 🧭 Overview

In this project, I implement automated functional end-to-end (E2E) tests using Cypress with JavaScript, following BDD practices with the Gherkin language using Cucumber tool, and applying the Page Object Model (POM) design pattern. The goal is to ensure the quality and reliability of the Automation Exercise website.

&nbsp;

## 🛠️ Technologies and Tools Used

- JavaScript  
- Node.js  
- npm  
- Cypress  
- Cucumber  
- Gherkin  
- BDD (Behavior-Driven Development)  
- Page Object Model (POM)

<div align="left">
  <a href="https://www.javascript.com/" title="JavaScript">
    <img alt="JavaScript" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" style="vertical-align: middle;" />
  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <a href="https://nodejs.org/" title="Node.js">
    <img alt="Node.js" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" style="vertical-align: middle;" />
  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <a href="https://www.npmjs.com/" title="npm">
    <img alt="npm" height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" style="vertical-align: middle;" />
  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <a href="https://www.cypress.io/" title="Cypress">
    <img alt="Cypress" height="50" src="https://raw.githubusercontent.com/cypress-io/cypress/develop/assets/cypress-logo-dark.png" style="vertical-align: middle;" />
  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

  <a href="https://cucumber.io/" title="Cucumber">
  <img alt="Cucumber" height="50" src="https://cdn.simpleicons.org/cucumber/4CAF50" style="vertical-align: middle;" />
  </a>
</div>

&nbsp;

## ⚙️ Structure of the Project

This project was designed with a focus on **scalability** and **ease of maintenance** for both existing and future test scenarios.

The tests are written in **Gherkin language** using the **Cucumber** tool, which enables the creation of test scenarios following the **BDD (Behavior Driven Development)** approach. These files can be found in the `features` folder.

![image](https://github.com/user-attachments/assets/33f89e15-4c28-4451-be4b-f9489a519773)
&nbsp;

The step definitions are written in JavaScript using Cypress, and are responsible for executing the steps described in each test scenario defined in the `features` folder. All step definition files are organized in the `step_definitions` folder.

![image](https://github.com/user-attachments/assets/910aa5ee-d597-499d-a495-f4f6df92ef9a)
&nbsp;

This project follows the **Page Object Model (POM)** pattern, a best practice that improves code organization and maintainability. Inside the `pages` folder, you will find classes that represent pages, containing selectors to identify HTML elements and methods implemented in **Cypress + JavaScript** to perform the actions needed for the functional tests.

![image](https://github.com/user-attachments/assets/68578d9d-96dd-46aa-9e37-eee3d3839f34)
![image](https://github.com/user-attachments/assets/00abc6ac-f599-408f-9f72-064d113ebfe2)

&nbsp;

## 🔍 Test Scenarios for the Search Bar Functionality

Below is a curated list of valid and invalid test scenarios I designed for the search bar feature.  
The automated scripts in this project cover a selected set of these scenarios.

| ✅:❌ | **Scenario**                            | **Example**                            | **Expected Result**                                         |
|-------|-----------------------------------------|------------------------------------------|-------------------------------------------------------------|
| ✅    | Search by full product name             | "Blue Top"                             | Returns the exact matching product                          |
| ✅    | Search by partial product name          | "Dress"                                | Returns all products containing "Dress"                     |
| ✅    | Search by brand name                    | "Polo"                                 | Returns products from the Polo brand                        |
| ✅    | Search by category name                 | "T-Shirt"                              | Returns products under the T-Shirt category                 |
| ✅    | Search by color keyword                 | "Black"                                | Returns all black-colored products                          |
| ✅    | Search by product attributes            | "Cotton T-Shirt"                       | Returns cotton T-Shirts                                     |
| ✅    | Search using synonyms                   | "Sneakers", "Tennis Shoes"             | Returns similar products                                    |
| ✅    | Search using related category terms     | "Pants"                                | Returns jeans, joggers, etc.                                |
| ✅    | Search using uppercase letters          | "JEANS"                                | Same result as lowercase                                    |
| ✅    | Search using lowercase letters          | "jeans"                                | Same result as uppercase                                    |
| ✅    | Search by multi-word name               | "Stylish Dress"                        | Returns the exact match                                     |
| ✅    | Search with extra spaces                | "  Saree  "                            | Trims and returns results normally                          |
| ✅    | Search with small typo (fuzzy match)    | "Blu Top"                              | Returns "Blue Top" if fuzzy match is supported              |
| ✅    | Search by singular/plural               | "Top", "Tops"                          | Returns related products                                    |
| ✅    | Suggestions while typing                | Typing "dre"                           | Displays options like "Dress", "Dress Shirt"                |
| ✅    | Search history on focus                 | Click on input                         | Displays previous searches like “Dress”, “Jeans”, etc.      |
| ❌    | Search with empty field                 | ""                                     | No action taken; the system ignores empty searches without error or results   |
| ❌    | Search with only spaces                 | "     "                                | No action taken; the system ignores only spaces searches without error or results  |
| ❌    | Search with special characters          | "@#%&*"                                | No results; display a clear and informative message.        |
| ❌    | Search for non-existent product         | "Chocolate"                            | No results; display a clear and informative message.        |
| ❌    | Random numeric string                   | "837492"                               | No results; display a clear and informative message.        |
| ❌    | Search with emoji                       | "🧸🎯🚀"                              | No results; display a clear and informative message.        |
| ❌    | Offline search or unstable connection   | Search with no internet                | Displays fallback UI or clear error message                 |


&nbsp;


## 🧪 Automated Test Scenarios in this project

In this project, I have automated two test scenarios taken from the list above:

- ### **1. Search for a product by category**  
  Tests searching by categories such as "Dress", "Tops", "T-Shirt", among others, verifying that the product list returned correctly matches the searched category.

  ![image](https://github.com/user-attachments/assets/5cf897be-7ff2-47c2-b691-64842ee16f61)

   #### Test Results:
  ![image](https://github.com/user-attachments/assets/95d6e4bc-e033-4c65-9ec3-a9aa9da28a6b)

  - **Bug found** :  ❌ Search for a product by category (example #4) 👉 T-Shirt

    Search by category "T-Shirt" fails due to inconsistency in the system’s category naming (registered as "Tshirts" without a hyphen). As a result, the search only returns some products with "T-Shirt" in their 
    titles but does not correctly filter every products by category.  

    🐞 View the full bug report by clicking [here](./bug-reports/search-bar/bug-search-by-category-t-shirt/report.md)

  &nbsp;
  
- ### **2. Search for a product by brand**  
  Tests searching by various brands, including "Polo", "H&M", "Babyhug", "Biba", etc., validating the correct display of products from those brands.

  ![image](https://github.com/user-attachments/assets/ce5bdcb2-f3ca-453f-924a-9704a1c7460a)

  #### Test Results:
  ![image](https://github.com/user-attachments/assets/7bd52733-56fa-4331-9461-a60e50a6d624)

  - **Bug found:**  ❌ Search for a product by brand
    
    The search bar does not return products when searching for brands such as "Babyhug", "Kookie Kids", and "Biba". The results section remains empty, negatively affecting user experience.  

    🐞 View the full bug report by clicking [here](./bug-reports/search-bar/bug-search-by-brand/report.md)

   &nbsp;
  
## 🔬 Running Tests Locally

To run the tests locally, please follow the steps below:

### Prerequisites


1. Make sure you have the latest versions of the following tools installed on your computer:
 
 * [Node](https://nodejs.org/en/) 
 * [Git](https://git-scm.com/)
 * [VS Code](https://code.visualstudio.com) or any code editor of your choice

 &nbsp;

 ### Code Editor

Inside your code editor, open the terminal and run the following commands:

2. Clone this GitHub repository:

 ```
 git clone https://github.com/henriquekoaski/cypress-web-tests.git
 ```

3. Navigate to the project directory:

 ```
cd cypress-web-tests
 ```

4. Install the dependencies:

 ```
npm install
 ```
&nbsp;
> 💡 If this is your first time using Cypress on this computer, run the following command after installing dependencies to ensure Cypress binaries are properly installed:

```
npx cypress install
 ```

&nbsp;

### Running the Tests
There are two options to run the tests:

#### 🔽 Option 1: Running the tests in headless mode (without a graphical interface)  

5. Execute the tests in the terminal:

  ```
npx cypress run
  ```
Expected Output:

![image](https://github.com/user-attachments/assets/6409a87f-c554-4852-9996-ab0824d95735)

&nbsp;

#### 🔽 Option 2: Running Tests in Interactive Mode (with Graphical Interface)

5. Open Cypress:

  ```
npx cypress open
 ```

6. Select `E2E Testing`

![image](https://github.com/user-attachments/assets/9f2c5d28-5564-4fb5-99bb-07b451836600)
&nbsp;

7. Choose your preferred browser and click the `Start E2E Testing in "Chosen Browser'` button

![image](https://github.com/user-attachments/assets/94226b50-cbc6-440b-ac06-7afb63e33f4c)
&nbsp;

8. Click on `search_bar.feature`

![image](https://github.com/user-attachments/assets/7e8a2251-a4a3-4273-b5d4-fcc0c97c16a9)
&nbsp;

### Interactive Test View:

When running tests in interactive mode, Cypress opens a browser window where you can visually follow the test execution in real-time. The interface is divided mainly into two sections:

&nbsp;

**Left panel**: Displays the list of test steps currently being executed, highlighting each step as it runs. This helps you track the progress and identify where the test is at any moment.

![image](https://github.com/user-attachments/assets/cad03acd-9b17-41ee-9e98-fd7828c2e7e7)

 &nbsp;

**Right panel**: Shows the browser viewport where the test simulates user interactions, such as clicking buttons, filling forms, and navigating pages. You will see the actual UI being tested as the commands are executed.

![image](https://github.com/user-attachments/assets/97cbd962-a5c6-4e6c-b7aa-0365cde3aab0)

&nbsp;

### 🧾 Test Results Dashboard
This panel displays the summary of test executions, showing which tests have passed or failed. It provides a clear and immediate overview of the current test suite status, helping you quickly identify any issues that need attention.

![image](https://github.com/user-attachments/assets/5336c63d-0c79-4b1d-a5c7-295954ea6303)

![Passed](https://img.shields.io/badge/Passed-5-brightgreen) ![Failed](https://img.shields.io/badge/Failed-9-red)

&nbsp;

---

## 📬 Connect with Me

Feel free to reach out or check my professional profile:

- [LinkedIn](https://www.linkedin.com/in/henriquekoaski/)  
- [GitHub](https://github.com/henriquekoaski)  

> I'm always open to feedback, collaboration, and professional connections. Let's connect!


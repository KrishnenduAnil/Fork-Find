# Fork-Find
## Team name : Alpha duo
### Your next favourite dish is just a click away
## Team Members
   ### Member1 : Krishnendu Anil - Vidya Academy Of Science And Technology
   ### Member2 : Avany Manoj - Vidya Academy Of Science And Technology
## Hosted project link

## Project Description 
  ### Our project provides new dishes that are shown as a result of ingredients that are chosen by the user
## Problem statement
  ### Every women who cooks daily has a query about what to cook today with the ingredients she have 
## The Solution
  ### Here is a solution for the query by inputing the ingredients she have and our project provides recipes with them
## Technical details
  ### Languages used are html css js
  ##tools used for Software Development:
Text Editor or IDE:
VS Code: 
Sublime Text
Atom
Version Control:
Git: A tool for version control that helps developers track changes in the codebase.
GitHub: Hosting service for repositories, to store and share code with version control.
Web Browser (for testing):
Google Chrome, Mozilla Firefox, Microsoft Edge: Browsers with developer tools to inspect, debug, and test HTML, CSS, and JavaScript.
Browser Developer Tools:
Console: For debugging JavaScript code and checking for errors during runtime.
Network Tab: To monitor API requests and responses, ensuring that the Spoonacular API integration works smoothly.
## Web Application: This is a web-based application that allows users to select ingredients visually or input them manually, which is then used to fetch recipes from the Spoonacular API.
API: The code integrates with the Spoonacular API for retrieving recipes based on user-selected ingredients.
Response Format: The API sends a response in JSON format, containing the list of recipes to be displayed on the front-end.
Loading Animation: A CSS-driven animation is used to simulate tree growth during the data-fetchi
ng process.
implementation - This software implements a recipe search tool where users can select ingredients and find recipes from the Spoonacular API. The implementation follows a modular approach, starting with basic frontend work (HTML/CSS/JS) and extending to the integration with an external API. The deployment can be done using GitHub Pages or other static hosting services. Future enhancements include user authentication and better error handling.
##  Tools and Services Required:
API Service:
Spoonacular API:
API Key:
You said:
installation briefly
ChatGPT said:
ChatGPT
Installation Guide for Recipe Finder Software
Follow these steps to install and run the Recipe Finder application locally.

1. Prerequisites
Before starting, ensure you have the following installed:

Text Editor or IDE:

Install VS Code (recommended), Sublime Text, or Atom.
Git (optional for version control):

Install Git from https://git-scm.com/ if you want to use version control or GitHub for repository hosting.
Browser:

Use Google Chrome or Mozilla Firefox for testing.
API Key:

Sign up for an account on the Spoonacular API site https://spoonacular.com/food-api and generate an API key.
2. Clone or Download the Code
Option 1: Clone the Repository (using Git)

If the project is hosted on GitHub (or any other Git repository), you can clone it using Git.

Open a terminal/command prompt.

Run the following command (replace your-repo-url with the actual URL of the GitHub repository):

bash
Copy
git clone your-repo-url
Option 2: Download as ZIP

Alternatively, you can download the project as a ZIP file from GitHub or any other repository hosting site, then extract it to your local machine.

3. Set Up the Project
Install Required Dependencies:
The current version of this project does not use external dependencies (like npm packages), but if you plan to extend it, you might want to use a package manager like npm or yarn for future enhancements.
API Key Setup:
You need to insert your Spoonacular API key into the code to interact with the API.

In the script.js file:

js
Copy
const SPOONACULAR_API_KEY = 'your-api-key-here';  // Replace this with your actual API key.
Alternatively, you can store the API key in an environment variable or in a .env file if you plan to use backend technology (like Node.js).

4. Open the Project Locally
After cloning or downloading the project, navigate to the project folder.

Open the index.html file directly in your browser. You can do this by:

Double-clicking on the index.html file, or
Right-click and selecting Open with > your preferred browser.
5. Testing the Application
Testing the Recipe Finder:

Open the app in your browser.
Select ingredients from the displayed images (or type them manually).
Press the Find Recipes button to fetch recipe suggestions based on your selected ingredients.
Wait for the tree animation to finish loading, and the recipes will display.
If everything is set up correctly, you should see recipes returned based on your selected ingredients from Spoonacular’s API.

6. (Optional) Deploy the Application
If you'd like to deploy the Recipe Finder app for public use, you can deploy it on platforms like:

GitHub Pages (for static sites):
If the project is hosted on GitHub, you can easily enable GitHub Pages in the repository settings. This will make the app available at a URL like https://yourusername.github.io/repo-name.
Netlify or Vercel:
For more sophisticated deployment options, you can use Netlify or Vercel to host your app with continuous deployment.
run - 1. Prepare Your Environment
Before running the app, ensure that you have the following:

A modern web browser (e.g., Google Chrome, Mozilla Firefox).
Text editor (e.g., VS Code, Sublime Text) to view or edit the project files.
API Key from Spoonacular (you can sign up here and get the key).
2. Set Up the Project Files
If you've already cloned or downloaded the project files, follow these steps to ensure it's set up:

Open the Project Folder:

Navigate to the folder where the project files are stored. If you've downloaded the project as a ZIP file, extract it first.
Edit script.js to Add Your API Key:

Open the script.js file.
Find the following line:
js
Copy
const SPOONACULAR_API_KEY = 'your-api-key-here';
Replace 'your-api-key-here' with the actual API key you obtained from Spoonacular.
3. Run the Project
Option 1: Open the HTML File Directly in Your Browser
Double-click the index.html file in your project folder.
Your default browser will open and load the Recipe Finder app.
Option 2: Using a Local Development Server (Optional)
If you prefer to run it using a local development server (useful for larger projects), you can use one of the following methods:

Using Python's HTTP Server (Python 3.x):

Open a terminal or command prompt.
Navigate to the project directory:
bash
Copy
cd path/to/your/project
Start the Python HTTP server:
For Python 3.x:
bash
Copy
python -m http.server 8000
For Python 2.x:
bash
Copy
python -m SimpleHTTPServer 8000
Open your browser and navigate to:
arduino
Copy
http://localhost:8000
Using VS Code Live Server Extension (if you're using Visual Studio Code):

Install the Live Server extension in VS Code.
Open the index.html file in VS Code.
Right-click on the file and select "Open with Live Server".
Your app should open in the browser.
4. Interacting with the Application
Once the app is open in your browser:

Select Ingredients: Click on the ingredient images to select them, or type the ingredient names in the input box.
Submit: After selecting ingredients, click the Find Recipes button.
Wait for Results: You'll see a tree animation, and after a few seconds, the recipes related to the selected ingredients will appear.
Troubleshooting
No recipes found: If no recipes are displayed, make sure that your API key is correct and that Spoonacular's API is accessible.
No ingredients selected: If the app asks you to select ingredients, ensure you clicked on the images or typed them in the input box.




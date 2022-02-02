# evaluate-news-article-with-npl
Evaluate a news article with Natural Language Processing

## Versions:
- node: v16.13.1
- npm: 8.1.2

## API in use:
MeaningCloud, Language Identification API v4.0

## Instructions:
1. Check if node and npm are installed:
   - npm version
   - node version
   In case they are not installed, use the following commands to do so: 
   - install node
2. Install required modules specified in package.json file
   - npm install
3. Ceate a .env file in the main directory with API_KEY='your_key' inside
4. Test
   - npm run test
5. Build and start the app in dev mode
   - npm run build-dev
6. Start the application:
   - npm run start

## Functionality:
After starting the application the main page index.html appears. 
In the input field, the user can enter a word in any language they want, 
and as a result of clicking on the 'Check' button, a result appears bellow.
If the word is recognised, its language will be shown, otherwise the message 
'Undetermined' will appear. When the user enters a word that contains digits 
in the input field, its border is coloured in red.


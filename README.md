# evaluate-news-article-with-npl
Evaluate a news article with Natural Language Processing

##Versions:
- node: v16.13.1
- npm: 8.1.2

##API in use:
MeaningCloud, Language Identification API v4.0

##Instructions:
1. Check if node and npm are installed:
   - npm version
   - node version
   In case they are not installed, use the following commands to do so: 
   - install node
2. Install required modules specified in package.json file
   - npm install
3. Test
   - npm run test
4. Build
   - npm run build-prod
5. Start the application:
   - npm run start-prod

##Functionality:
After starting the application the main page index.html appears. 
In the input field, the user can enter a word in any language they want, 
and as a result of clicking on the 'Check' button, a result appears bellow.
If the word is recognised, its language will be shown, otherwise the message 
'Language not recognised' will appear.
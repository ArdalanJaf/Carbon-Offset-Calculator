# Carbon Offset Simulator

Plan your way to carbon-neutrality!
Choose annual-carbon-emissions by selecting a country average or entering a custom value and enter purchases of trees. Click submit and get data on how much carbon you will offset, how long it will take and how much it will cost!
You can also change the calculator's configuration (tree cost, tree carbon offset, time for tree to grow) by clicking the cog in the top-left corner (note: this is designed as an admin feature).

node.js, react-redux, react-hook-form, recharts, styled-components, axios, express, mySQL


## Run/Build Instructions

### Front-end
- npm install
- npm start

### [Back-end API](https://github.com/ArdalanJaf/API-Carbon-Offset-Calculator)

- npm install
- nodemon server.js
- **Note:** SQL database required for full functionality. 
  - Database: [API-Carbon-Offset-Calculator/mySQL/database.sql](https://github.com/ArdalanJaf/API-Carbon-Offset-Calculator/blob/main/mySQL/database.sql) 
  - To use without database (static configuration):
   1. comment out line 12 & 13 [here](https://github.com/ArdalanJaf/API-Carbon-Offset-Calculator/blob/main/routes.js)
   2. un-comment line 14


## Notes for Switch2Zero

### Features 

- Calculator meets all requirements (only exception is tree-purchase limit per year not implemented)
- Admin UI to change calculator config (top-left corner cog icon), config data is stored in SQL db.
- Refined UI (it's hard to make a calculator look engaging!), 
- Fully responsive front-end down to 400px. 
- Non-text features made screen-reader friendly.
- Hosted with cPanel [here][https://carbon-offset-simulator.ardalanjaf.com/].
- When Nneccesary, code commented.

### Choices explained

Styled-componenets, not Bootstrap? 
> I'm more familiar with SASS, so thought that the better option given the time restraints (I wanted to honour this challenge as a test to what can be made ASAP). I also hedged a bet that the *feel* of my site might stand out more if all the other applicants used bootstrap. Lastly, I would like to build up a styled-components library. 

No react-bootstrap-table2?
> Initially I wanted the purchase table to be a UL, because of a particular visual design I had in mind. However, this later caused me issues so for the sake of saving time I opted to turn it into a normal html table because it required minimal re-formating of my existing code.

### Improvements 

- Tooltips to help guide the user through the form. I did not want to clutter this minimal site with text, however in retrospect more information is needed.
- Fix minor UX bugs: 
  - Tree-counter only updating upon Submit or Add Purchase. 
  - 55 tree purchases per year limit.
  - Dynamic label for Carbon Emissions on the offset table.
  - Entering annual emissions value should trigger API call to tell user how many trees they need to plant.
- Save system: I did actually implement a local storage save/load component, but felt it was too clunky for shipping. In retrospect a save feature (even in local storage) would be very welcome for UX, as it is labourious to enter in purchases. It would not be a lot more work to implement a user save feature to the SQL database. 
- Option for user to have their results emailed to them.
- Connect average country emission list to API to have all countries and data be more accurate.
- Calculator API:
  - Allow user to select currency, calculator does conversion through external API call.
  - Rate of inflation implementation based on external API or user's custom input (this was next on my to-do list before I decided it was time to ship)
  - Validation of request data on back-end and instructive error messages responses.
  - Tell user extra trees needed, based on predictions of planted saplings that fail to grow, forest fires, etc.



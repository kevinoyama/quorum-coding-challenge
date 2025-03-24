1. Discuss your strategy and decisions implementing the application. Please, considertime complexity, effort cost, technologies used and any other variable that you understand important on your development process.
```
    Based on the complexity of the challenge, which was low, and trying to reduce by maximun the effort cost, I decided to code the backend in NodeJs using Express to be much simpler to implement and react typescript to the frontend because I have a deeper knowledge on this library if compared to others. The part which I have struggled the most was to parse the CSV file for the API which my endpoints were set before the data was parsed from the CSV files. I fix that by changing my parse function to asyncronous using Promise. If I wanted to go further with this solution, I would include a feature that allows the user to see what were the bills that each legislator has voted on.
```
2. How would you change your solution to account forfuture columns that might be requested, such as “Bill Voted On Date” or“Co-Sponsors”?
```
    In order to add new columns to this current solution, it will be required to change the following:
    - Update the CSV files with the new columns
    - Update the endpoints to incluse these new fields on their responses
    - Update the interfaces in the client project ('./client/interfaces') to include these new field
    - update the tables on the pages to include these new columns

```
3. How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?
```
    This question is a little confusing, but if I understand correctly: It is asking how I would organize and structure the data into the csv files if the raw data was provided to me. I would keep most of the structure, the only thing I would change if removing the "votes_(2).csv" from it and replace where it is using vote_id to use the bill_id directly. This is adding an extra unnecessary step to the data model.
```
4. How long did you spend working on the assignment?
```
    4 hours.
```
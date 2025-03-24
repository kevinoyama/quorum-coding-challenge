# Quorum Coding Challenge

This is a Web Application allow users to check and review information about bills and who have supported them.

## Technologies
- Back end: NodeJs using Express
- Front end: ReactJs, Vite and TypeScript

## Sytem Design notes
- Data are coming from CSV files (directory ```data```)
- No complex calculation or logic
- Simple API
- Simple Interface
- Flexible to accept new fields on the data source in the future

```mermaid
flowchart LR
    A@{ shape: docs, label: "CSVs" }
    B[API] 
    C[User Interface]
    A --> B <--> C
```

### API
- 2 endpoints:
    - List all legislators and the count of bills he or she supported or opposed
    - List all the bills, the count of supported and opposed votes and its primary sponsor

### Interface
- 3 pages:
    - Home Page
    - Legislator Summary: Show a table with all legislators and the count of bills he or she supported or opposed
    - Bills Summary: Show a table with all the bills, the count of supported and opposed votes and its primary sponsor

## How to run the web app in dev mode

Requirements:
- NodeJs Installed

Steps:
- Open 2 intances of the terminal
    - Terminal 1 (initiate API)
        - From the base directory run the following command ```npm i```
        - Run the following command ```npm run start```
    - Terminal 2 (initiate frontend)
        - Go to the client directory by running the following command ```cd ./client```
        - Run the following command ```npm i```
        - Run the following command ```npm run dev```
- Open a browser and access ```http://localhost:5173```
    

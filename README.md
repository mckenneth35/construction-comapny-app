## Get Started

Run on terminal (Linux/OSX):
`docker run -d -p 3000:3000 -p 3001:3001 --name companies-app mckenneth35/construction-company-app`

## How to Try

Open a browser, and go to `localhost:3000`. Try with different searching text, and toggling the checkboxes to filter desired characteristics

![image](https://user-images.githubusercontent.com/22095735/148962856-d928d4a9-0d14-439f-9ade-59d574520ce2.png)

## Note

The filter checkboxes works together, with an "AND" logic. 

## TODO for Improvements:

1. Use debounce to capture user input on Search bar - to reduce triggering the search API (too often)

2. Sorting mechanisms

3. Break down GET API to fetch only the list of IDs, then append the details if the ID is not in store - Possibly switching to use GraphAPI

4. Additional functionality of adding/updating/deleting an entry

5. Duo layouts for displaying the list of companies, e.g. Card view & List view

6. Authorization header for calling API

7. Cache the API GET results to Redis to reduce loading on making queries (if the data is not very available)

8. Use cursor for paging

9. Setup webpack with tools like babel-loader for code quality and compatibility

10. Use some established libraries (e.g. MaterialUI) to standardize the reusable components

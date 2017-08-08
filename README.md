# Early Bird

Early Bird is a decoupled web application that uses the Yelp API to help developers find potential freelance opportunities. This particular repository contains the ReactJS front end for Early Bird. This ReactJS application communicates with a back end Rails API to fetch and display search results for the user.

## How It Works

- User enters a search term and location
- Early Bird queries the Yelp API for businesses matching these search parameters
- A website grading algorithm determines if any these businesses could use help from a developer
- A list of businesses that could use some website help is returned to the user
- User can now reach out to these businesses and potentially land a freelance gig

## Usage

Early Bird is hosted on Heroku and can be accessed [here](https://early-bird-react-js.herokuapp.com/). Upon loading the site, the user will be greeted with a search form.

![Search](./search.png 'Search')

After the user enters appropriate search terms, the application will begin fetching the relevant results.

![Loading](./loading.png 'Loading')

Once the search results have been fetched, they will be displayed to the user.

![Results](./results.png 'Results')

The user can then navigate to each business's Yelp page and reach out for potential freelance opportunities.

## License

Early Bird is licensed under the MIT License - see [LICENSE.txt](./LICENSE.txt) for details.

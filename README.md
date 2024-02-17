# ArribaStocks [![GitHub License](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/)

Empower your investment journey with Arriba Stocks, an application for investors who need to monitor real-time stock prices.

## Table of Contents

* [Description](#description)
* [User Story](#user-story)
* [Technologies Used](#technologies-used)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)
* [Sources](#sources)

## Description

With ArribaStocks users can search for the stocks they are interested in and retrieve up-to-the-minute information on price action and day change.

## App Preview
![Screenshot of launchpage](./src/assets/arribaStock.JPG)
Application Preview


## Getting Started

### Dependencies

* Bootstrap
* IEX Cloud API
* Finnhub API

### Installing

* Run npm install to install all dependencies

### Executing program

* To run the program execute following command:
```
npm start
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)

## Arriba Stocks

Refactor in bite-size chunks so code is easier to read and maintain, reduce complexity, 
reduce code duplication, easier to debug, easier to add new features, and ultimately reduce maintenance costs

Added comments

Re-defined API terms to make code more versatile if we need to use different API

Reformatting to be able to update state independently, so we can have better control over which properties are changing

Challenge: originally, i planned on retrieving previous day info to calculate percent and price change but the API required to pay to access historical data so i had to pivot and use the stock open price to calculate day change info



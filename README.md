## Arriba Stocks

Refactor in bite-size chunks so code is easier to read and maintain, reduce complexity, 
reduce code duplication, easier to debug, easier to add new features, and ultimately reduce maintenance costs

Added comments

Re-defined API terms to make code more versatile if we need to use different API

Reformatting to be able to update state independently, so we can have better control over which properties are changing

Challenge: originally, i planned on retrieving previous day info to calculate percent and price change but the API required to pay to access historical data so i had to pivot and use the stock open price to calculate day change info

IEX cloud
heroicons
react recharts
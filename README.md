# Getting Started with Barcode Search WebApp

## Installation

In the project directory, you can run:

```
> yarn install
> yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Features
 - [x] Search a barcode using the Search Input
 - [x] If barcode has been searched previously, is retrieved from Recent Searches
 - [x] Product detailed information is displayed on the screen:
    - [x] Product name
    - [x] Product brand
    - [x] Product barcode (code)
    - [x] Product ingredients
    - [x] Product nutritional values  
 - [x] Previous items searched get stored in Recent Searches
 - [x] Navigate in the recent searches and select an item searched before
 - [x] Normalize value before submitting search
 - [x] Normalize nutritional values 
 - [x] Adjusts to different screen sizes
 - [x] Handle error messages for different scenarios (no items found, invalid input,...)
 - [x] Persists recent searches after page is refreshed
 - [x] Handling items without image
 - [x] Auto-scroll to top when item is searched
 - [x] Loading mode when an item is being searched
 - [x] Unit tests covering state logic and a sample component

## Demo
![BarcodeSearch-web2](https://user-images.githubusercontent.com/33632044/136274995-9b958758-8d83-443a-84d9-b95cac1aaf06.gif)

## Testing

In the project directory, you can run the unit test using the following command:

```
> yarn jest
```

## Improvements

 - [ ] URL to sync with the searched barcode
 - [ ] Translation
 - [ ] Automated tests
 - [ ] Create Storybook
 - [ ] Improve ingredients parsing method
 - [ ] Test unit areas to cover all of the Components




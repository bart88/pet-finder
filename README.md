# Pet Finder Map

Losing a pet sucks. Getting other pet lovers to keep an eye out
for your beloved pet has gotten much easier with facebook groups
posting information, sharing posts and the like. This project aims
to assist and enhance this using Facebooks graph api of lost pet pages and
google maps to provide a visual map of lost pets in your geographic location.

## How to install

All that is needed to get up and running with this project :
- node js
- npm



## How it works
This project is currently all front end. There is no server side code
and all apis used are javascript based.

## Things to Do

- Add configuration to extend and add multiple data points for getting stories from ( facebook public pages ).

- Look into using localStorage as a means to improve performance.

- Doing it all in the front end is going to suck for performance, we will need to use the facebook api serverside
and cache all the stories. From there we should also store gecoded addresses from previous addresses as we are
severly limited in capacity for geocode lookups.


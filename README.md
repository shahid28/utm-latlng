# utm-latlng

LatLng to UTM converter vice versa for Nodejs.

## Installation

Via [npm]:

	$ npm install utm-latlng

## Usage
### Javascript
```js
var utmObj = require('utm-latlng');
var utm=new utmObj(); //Default Ellipsoid is 'WGS 84'
OR
var utm=new utmObj('Everest');
```

## Ellipsoid List
1.  Airy
2.  Australian National
3.  Bessel 1841
4.  Bessel 1841 Nambia
5.  Clarke 1866
6.  Clarke 1880
7.  Everest
8.  Fischer 1960 Mercury
9.  Fischer 1968
10. Fischer 1968
11. GRS 1967
12. GRS 1980
13. Helmert 1906
14. Hough
15. International
16. Krassovsky
17. Modified Airy
18. Modified Everest
19. Modified Fischer 1960
20. South American 1969
21. WGS 60
22. WGS 66
23. WGS 72
24. WGS 72
25. ED50
26. WGS 84
27. EUREF89
28. ETRS89

### `utm.convertUtmToLatLng(easting, northing, zoneNum, zoneLetter);`

Convert from UTM to latitude/longitude coordinates.

Returns `{ lat:xxxxx, lang:xxxxx }`.

### `utm.convertLatLngToUtm(latitude, longitude,precision);`

Convert from latitude/longitude coordinates to UTM.

Returns `{ Easting:xxxxx, Northing:xxxxx,  ZoneNumber:xxxx, ZoneLetter:xxxxx }`.

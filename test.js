// NOTE: In order to run the test, change the export in utm.js to export.module
// The test runs al ellipsoids that are available, does 10000 iterations with
// different lat and lng values and 10000 iterations with easting, northing,
// zonenumber and zoneletter. If no errors occur the es6 version has the same
// resuts as the exsting library

// NOTE: The es6 version has a slighty different way of using it. There is no
// constructor, just two functions, toUtm and fromUtm with an added ellipsoid
// property which is now set in the constructor. Can also be left empty if
// WGS 84 is needed.

// New usage
// toUtm(latitude, longitude, ellipsoid)
// RESULT { easting : ..., northing : ..., zoneNumber : ..., zoneLetter : ... }
// fromoUtm(easting, northing, zoneNumber, zoneLetter, ellipsoid)
// RESULT { latitude : ..., longitude : ... }

const { toUtm, fromUtm } = require('./utm');
const utmObj = require('utm-latlng');

const max = 10000;
const precision = 5;

const ellipsoids = [
  'Airy',
  'Australian National',
  'Bessel 1841',
  'Bessel 1841 Nambia',
  'Clarke 1866',
  'Clarke 1880',
  'Everest',
  'Fischer 1960 Mercury',
  'Fischer 1968',
  'GRS 1967',
  'GRS 1980',
  'Helmert 1906',
  'Hough',
  'International',
  'Krassovsky',
  'Modified Airy',
  'Modified Everest',
  'Modified Fischer 1960',
  'South American 1969',
  'WGS 60',
  'WGS 66',
  'WGS 72',
  'ED50',
  'WGS 84',
  'EUREF89',
  'ETRS89',
];

function convertKeys(result) {
  let output = {};
  Object.keys(result).forEach(key => {
    output[key.toLowerCase()] = result[key];
  });
  return output;
}

function check(ellipsoid) {
  let counter = 0;

  while(counter < max) {
    const latitude = -90 + ((180 / max) * counter);
    const longitude = -180 + ((360 / max) * counter);

    // To utm
    const utm = new utmObj(ellipsoid);
    let node = convertKeys(utm.convertLatLngToUtm(latitude, longitude, precision));
    let es6 = convertKeys(toUtm(latitude, longitude, precision, ellipsoid));
    if (JSON.stringify(node) !== JSON.stringify(es6)) {
      console.log('OLD: ', JSON.stringify(node));
      console.log('NEW: ', JSON.stringify(es6));
      throw new Error('Mismatch Lat/Lng to UTM');
    }

    // From utm
    node = convertKeys(utm.convertUtmToLatLng(node.easting, node.northing, node.zonenumber, node.zoneletter));
    es6 = convertKeys(fromUtm(es6.easting, es6.northing, es6.zonenumber, es6.zoneletter, ellipsoid));

    if (node.lat !== es6.latitude || node.lng !== es6.longitude) {
      console.log('OLD: ', JSON.stringify(node));
      console.log('NEW: ', JSON.stringify(es6));
      throw new Error('Mismatch UTM to Lat/Lng');
    }

    counter++;
  }
}

ellipsoids.forEach(name => check(name));
console.log('DONE, no errors');
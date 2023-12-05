type ElipsoidType = 'Airy'
| 'Australian National'
| 'Bessel 1841'
| 'Bessel 1841 Nambia'
| 'Clarke 1866'
| 'Clarke 1880'
| 'Everest'
| 'Fischer 1960 Mercury'
| 'Fischer 1968'
| 'GRS 1967'
| 'GRS 1980'
| 'Helmert 1906'
| 'Hough'
| 'International'
| 'Krassovsky'
| 'Modified Airy'
| 'Modified Everest'
| 'Modified Fischer 1960' 
| 'South American 1969'
| 'WGS 60'
| 'WGS 66'
| 'WGS 72'
| 'ED50'
| 'WGS 84'
| 'EUREF89'
| 'ETRS89';

type ZoneLetter = 'X'
| 'W'
| 'V'
| 'U'
| 'T'
| 'S'
| 'R'
| 'Q'
| 'P'
| 'N'
| 'M'
| 'L'
| 'K'
| 'J'
| 'H'
| 'G'
| 'F'
| 'E'
| 'D'
| 'C'
| 'Z';

declare class UTMLatLng {

Constructor(type?: ElipsoidType)

ConvertLatLngToUtm(latitude: number, longitude: number, precision: number): string | {
Easting: number;
Northing: number;
ZoneNumber: number;
ZoneLetter: ZoneLetter;
}

convertUtmToLatLng(UTMEasting: number, UTMNorthing: number, UTMZoneNumber: number, UTMZoneLetter: Zoneletter): string | {
lat: number;
lng: number;
}
}

export = UTMLatLng;


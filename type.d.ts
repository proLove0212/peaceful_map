/**** Stack Navigators Param List ****/

type RootStackParamList = {
    Root: undefined,
    Direction: undefined,
}

type BottomParamList = {
    Map: undefined,
    SavedItinerary: undefined,
}


/**** MapComponent Param List ****/

type LatLngObject = { lat: number | undefined; lng: number | undefined };

/**** Redux Store ****/

interface RootState {
    markerLocationState: MarkerLocationState,
}

interface MarkerLocationState {
    markerLocation: LatLngObject,
}

type MarkerLocationAction = { 
    type: string,
    payload: LatLngObject 
}
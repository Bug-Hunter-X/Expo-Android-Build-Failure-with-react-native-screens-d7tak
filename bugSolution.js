// Solution:  A combination of cleaning build caches, clearing the watchman watchlist, and potentially ejecting and re-linking native modules may resolve this.

expo prebuild --clean
expo prebuild --clean
//Optionally use watchman watch-del-all and/or expo start --clear
//If the above steps do not work, consider ejecting and re-linking native modules in your react-native-screens configuration.  Consult your react-native-screens documentation for steps.
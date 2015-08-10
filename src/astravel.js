// Astravel is  tiny and fast ESTree-compliant AST walker and modifier.
//
// Astravel was written by David Bonnet and released under an MIT license.
//
// The Git repository for Astravel is available at:
// https://github.com/davidbonnet/astravel.git
//
// Please use the GitHub bug tracker to report issues:
// https://github.com/davidbonnet/astravel/issues


import traveller from "./traveller"
import attachComments from "./attachComments"


function makeCustomTraveller( places ) {
	/*
	Returns a custom AST traveller object based on the default traveller.
	*/
	let customTraveller = Object.create( traveller )
	for ( let key in places )
		customTraveller[ key ] = places[ key ]
	return customTraveller
}


export { traveller as defaultTraveller, attachComments, makeCustomTraveller }


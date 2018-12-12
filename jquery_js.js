From: =?ks_c_5601-1987?B?SW50ZXJuZXQgRXhwbG9yZXIgMTG/obytIMD6wOW1yg==?=
Subject: 
Date: Tue, 4 Dec 2018 11:12:23 +0900
MIME-Version: 1.0
Content-Type: text/html;
	charset="ks_c_5601-1987"
Content-Transfer-Encoding: quoted-printable
Content-Location: https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js
X-MimeOLE: Produced By Microsoft MimeOLE V6.1.7601.24158

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<HTML><HEAD><META content=3D"IE=3D5.0000" =
http-equiv=3D"X-UA-Compatible">

<META http-equiv=3D"Content-Type" content=3D"text/html; =
charset=3Dks_c_5601-1987">
<META name=3D"GENERATOR" content=3D"MSHTML 11.00.9600.19180"></HEAD>
<BODY>/*! * jQuery JavaScript Library v3.3.1 * https://jquery.com/ * * =
Includes=20
Sizzle.js * https://sizzlejs.com/ * * Copyright JS Foundation and other=20
contributors * Released under the MIT license * =
https://jquery.org/license * *=20
Date: 2018-01-20T17:24Z */ ( function( global, factory ) {	"use strict";	=
if (=20
typeof module =3D=3D=3D "object" &amp;&amp; typeof module.exports =
=3D=3D=3D "object" ) {		//=20
For CommonJS and CommonJS-like environments where a proper `window`		// =
is=20
present, execute the factory and get jQuery.		// For environments that =
do not=20
have a `window` with a `document`		// (such as Node.js), expose a =
factory as=20
module.exports.		// This accentuates the need for the creation of a real =

`window`.		// e.g. var jQuery =3D require("jquery")(window);		// See =
ticket #14549=20
for more info.		module.exports =3D global.document ?			factory( global, =
true ) :
			function( w ) {				if ( !w.document ) {					throw new Error( "jQuery =
requires=20
a window with a document" );				}				return factory( w );			};	} else {
		factory( global );	} // Pass this if window is not defined yet } )( =
typeof=20
window !=3D=3D "undefined" ? window : this, function( window, noGlobal ) =
{ // Edge=20
&lt;=3D 12 - 13+, Firefox &lt;=3D18 - 45+, IE 10 - 11, Safari 5.1 - 9+, =
iOS 6 - 9.1
 // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses =
strict=20
mode // arguments.callee.caller (trac-13335). But as of jQuery 3.0 =
(2016),=20
strict mode should be common // enough that all such attempts are =
guarded in a=20
try block. "use strict"; var arr =3D []; var document =3D =
window.document; var=20
getProto =3D Object.getPrototypeOf; var slice =3D arr.slice; var concat =
=3D=20
arr.concat; var push =3D arr.push; var indexOf =3D arr.indexOf; var =
class2type =3D {};
 var toString =3D class2type.toString; var hasOwn =3D =
class2type.hasOwnProperty; var=20
fnToString =3D hasOwn.toString; var ObjectFunctionString =3D =
fnToString.call( Object=20
); var support =3D {}; var isFunction =3D function isFunction( obj ) {   =
   //=20
Support: Chrome &lt;=3D57, Firefox &lt;=3D52      // In some browsers, =
typeof=20
returns "function" for HTML=20
<OBJECT> elements      // (i.e., `typeof document.createElement( =
"object" ) =3D=3D=3D=20
"function"`).      // We don't want to classify *any* DOM node as a =
function.   =20
  return typeof obj =3D=3D=3D "function" &amp;&amp; typeof obj.nodeType =
!=3D=3D "number"; =20
}; var isWindow =3D function isWindow( obj ) {		return obj !=3D null =
&amp;&amp; obj=20
=3D=3D=3D obj.window;	};	var preservedScriptAttributes =3D {		type: =
true,		src: true,
		noModule: true	};	function DOMEval( code, doc, node ) {		doc =3D doc =
||=20
document;		var i,			script =3D doc.createElement( "script" );		=
script.text =3D code;
		if ( node ) {			for ( i in preservedScriptAttributes ) {				if ( node[ =
i ] ) {
					script[ i ] =3D node[ i ];				}			}		}		doc.head.appendChild( =
script=20
).parentNode.removeChild( script );	} function toType( obj ) {	if ( obj =
=3D=3D null=20
) {		return obj + "";	}	// Support: Android &lt;=3D2.3 only (functionish =
RegExp)
	return typeof obj =3D=3D=3D "object" || typeof obj =3D=3D=3D "function" =
?		class2type[=20
toString.call( obj ) ] || "object" :		typeof obj; } /* global Symbol */ =
//=20
Defining this global in .eslintrc.json would create a danger of using =
the global
 // unguarded in another place, it seems safer to define global only for =
this=20
module var	version =3D "3.3.1",	// Define a local copy of jQuery	jQuery =
=3D=20
function( selector, context ) {		// The jQuery object is actually just =
the init=20
constructor 'enhanced'		// Need init if jQuery is called (just allow =
error to be=20
thrown if not included)		return new jQuery.fn.init( selector, context );	=
},	//=20
Support: Android &lt;=3D4.0 only	// Make sure we trim BOM and NBSP	rtrim =
=3D=20
/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; jQuery.fn =3D jQuery.prototype =3D =
{	// The=20
current version of jQuery being used	jquery: version,	constructor: =
jQuery,	//=20
The default length of a jQuery object is 0	length: 0,	toArray: =
function() {
		return slice.call( this );	},	// Get the Nth element in the matched =
element=20
set OR	// Get the whole matched element set as a clean array	get: =
function( num=20
) {		// Return all the elements in a clean array		if ( num =3D=3D null ) =
{			return=20
slice.call( this );		}		// Return just the one element from the set		=
return num=20
&lt; 0 ? this[ num + this.length ] : this[ num ];	},	// Take an array of =

elements and push it onto the stack	// (returning the new matched =
element set)
	pushStack: function( elems ) {		// Build a new jQuery matched element =
set		var=20
ret =3D jQuery.merge( this.constructor(), elems );		// Add the old =
object onto the=20
stack (as a reference)		ret.prevObject =3D this;		// Return the =
newly-formed=20
element set		return ret;	},	// Execute a callback for every element in =
the=20
matched set.	each: function( callback ) {		return jQuery.each( this, =
callback );
	},	map: function( callback ) {		return this.pushStack( jQuery.map( =
this,=20
function( elem, i ) {			return callback.call( elem, i, elem );		} ) );	=
},	slice:=20
function() {		return this.pushStack( slice.apply( this, arguments ) );	=
},	first:=20
function() {		return this.eq( 0 );	},	last: function() {		return =
this.eq( -1 );
	},	eq: function( i ) {		var len =3D this.length,			j =3D +i + ( i &lt; =
0 ? len : 0=20
);		return this.pushStack( j &gt;=3D 0 &amp;&amp; j &lt; len ? [ this[ j =
] ] : []=20
);	},	end: function() {		return this.prevObject || this.constructor();	=
},	// For=20
internal use only.	// Behaves like an Array's method, not like a jQuery =
method.
	push: push,	sort: arr.sort,	splice: arr.splice }; jQuery.extend =3D=20
jQuery.fn.extend =3D function() {	var options, name, src, copy, =
copyIsArray,=20
clone,		target =3D arguments[ 0 ] || {},		i =3D 1,		length =3D =
arguments.length,		deep=20
=3D false;	// Handle a deep copy situation	if ( typeof target =3D=3D=3D =
"boolean" ) {
		deep =3D target;		// Skip the boolean and the target		target =3D =
arguments[ i ] ||=20
{};		i++;	}	// Handle case when target is a string or something =
(possible in=20
deep copy)	if ( typeof target !=3D=3D "object" &amp;&amp; !isFunction( =
target ) ) {
		target =3D {};	}	// Extend jQuery itself if only one argument is =
passed	if ( i=20
=3D=3D=3D length ) {		target =3D this;		i--;	}	 for ( ; i &lt; length; =
i++ ) {		// Only=20
deal with non-null/undefined values		if ( ( options =3D arguments[ i ] ) =
!=3D null )=20
{			// Extend the base object			for ( name in options ) {				src =3D =
target[ name=20
];				copy =3D options[ name ];				// Prevent never-ending loop				if ( =
target =3D=3D=3D=20
copy ) {					continue;				}				// Recurse if we're merging plain objects =
or=20
arrays				if ( deep &amp;&amp; copy &amp;&amp; ( jQuery.isPlainObject( =
copy ) ||
					( copyIsArray =3D Array.isArray( copy ) ) ) ) {					if ( =
copyIsArray ) {
						copyIsArray =3D false;						clone =3D src &amp;&amp; =
Array.isArray( src ) ?=20
src : [];					} else {						clone =3D src &amp;&amp; =
jQuery.isPlainObject( src ) ?=20
src : {};					}					// Never move original objects, clone them					=
target[ name=20
] =3D jQuery.extend( deep, clone, copy );				// Don't bring in undefined =
values
				} else if ( copy !=3D=3D undefined ) {					target[ name ] =3D copy;		=
		}			}		}	}
	// Return the modified object	return target; }; jQuery.extend( {	// =
Unique for=20
each copy of jQuery on the page	expando: "jQuery" + ( version + =
Math.random()=20
).replace( /\D/g, "" ),	// Assume jQuery is ready without the ready =
module
	isReady: true,	error: function( msg ) {		throw new Error( msg );	},	=
noop:=20
function() {},	isPlainObject: function( obj ) {		var proto, Ctor;		// =
Detect=20
obvious negatives		// Use toString instead of jQuery.type to catch host =
objects
		if ( !obj || toString.call( obj ) !=3D=3D "[object Object]" ) {			=
return false;		}
		proto =3D getProto( obj );		// Objects with no prototype (e.g., =
`Object.create(=20
null )`) are plain		if ( !proto ) {			return true;		}		// Objects with =
prototype=20
are plain iff they were constructed by a global Object function		Ctor =
=3D=20
hasOwn.call( proto, "constructor" ) &amp;&amp; proto.constructor;		=
return typeof=20
Ctor =3D=3D=3D "function" &amp;&amp; fnToString.call( Ctor ) =3D=3D=3D =
ObjectFunctionString;
	},	isEmptyObject: function( obj ) {		/* eslint-disable no-unused-vars =
*/		//=20
See https://github.com/eslint/eslint/issues/6125		var name;		for ( name =
in obj )=20
{			return false;		}		return true;	},	// Evaluates a script in a global =
context
	globalEval: function( code ) {		DOMEval( code );	},	each: function( =
obj,=20
callback ) {		var length, i =3D 0;		if ( isArrayLike( obj ) ) {			length =
=3D=20
obj.length;			for ( ; i &lt; length; i++ ) {				if ( callback.call( obj[ =
i ], i,=20
obj[ i ] ) =3D=3D=3D false ) {					break;				}			}		} else {			for ( i =
in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) =3D=3D=3D false ) {					=
break;				}
			}		}		return obj;	},	// Support: Android &lt;=3D4.0 only	trim: =
function( text )=20
{		return text =3D=3D null ?			"" :			( text + "" ).replace( rtrim, "" =
);	},	//=20
results is for internal usage only	makeArray: function( arr, results ) {	=
	var=20
ret =3D results || [];		if ( arr !=3D null ) {			if ( isArrayLike( =
Object( arr ) ) )=20
{				jQuery.merge( ret,					typeof arr =3D=3D=3D "string" ?					[ arr ] =
: arr				);
			} else {				push.call( ret, arr );			}		}		return ret;	},	inArray: =
function(=20
elem, arr, i ) {		return arr =3D=3D null ? -1 : indexOf.call( arr, elem, =
i );	},	//=20
Support: Android &lt;=3D4.0 only, PhantomJS 1 only	// push.apply(_, =
arraylike)=20
throws on ancient WebKit	merge: function( first, second ) {		var len =3D =

+second.length,			j =3D 0,			i =3D first.length;		for ( ; j &lt; len; =
j++ ) {
			first[ i++ ] =3D second[ j ];		}		first.length =3D i;		return first;	=
},	grep:=20
function( elems, callback, invert ) {		var callbackInverse,			matches =
=3D [],			i=20
=3D 0,			length =3D elems.length,			callbackExpect =3D !invert;		// Go =
through the=20
array, only saving the items		// that pass the validator function		for ( =
; i=20
&lt; length; i++ ) {			callbackInverse =3D !callback( elems[ i ], i );			=
if (=20
callbackInverse !=3D=3D callbackExpect ) {				matches.push( elems[ i ] =
);			}		}
		return matches;	},	// arg is for internal usage only	map: function( =
elems,=20
callback, arg ) {		var length, value,			i =3D 0,			ret =3D [];		// Go =
through the=20
array, translating each of the items to their new values		if ( =
isArrayLike(=20
elems ) ) {			length =3D elems.length;			for ( ; i &lt; length; i++ ) {		=
		value =3D=20
callback( elems[ i ], i, arg );				if ( value !=3D null ) {					=
ret.push( value );
				}			}		// Go through every key on the object,		} else {			for ( i in =
elems )=20
{				value =3D callback( elems[ i ], i, arg );				if ( value !=3D null ) =
{
					ret.push( value );				}			}		}		// Flatten any nested arrays		=
return=20
concat.apply( [], ret );	},	// A global GUID counter for objects	guid: =
1,	//=20
jQuery.support is not used in Core but other projects attach their	// =
properties=20
to it so it needs to exist.	support: support } ); if ( typeof Symbol =
=3D=3D=3D=20
"function" ) {	jQuery.fn[ Symbol.iterator ] =3D arr[ Symbol.iterator ]; =
} //=20
Populate the class2type map jQuery.each( "Boolean Number String Function =
Array=20
Date RegExp Object Error Symbol".split( " " ), function( i, name ) {	=
class2type[=20
"[object " + name + "]" ] =3D name.toLowerCase(); } ); function =
isArrayLike( obj )=20
{	// Support: real iOS 8.2 only (not reproducible in simulator)	// `in` =
check=20
used to prevent JIT error (gh-2145)	// hasOwn isn't used here due to =
false=20
negatives	// regarding Nodelist length in IE	var length =3D !!obj =
&amp;&amp;=20
"length" in obj &amp;&amp; obj.length,		type =3D toType( obj );	if ( =
isFunction(=20
obj ) || isWindow( obj ) ) {		return false;	}	return type =3D=3D=3D =
"array" || length=20
=3D=3D=3D 0 ||		typeof length =3D=3D=3D "number" &amp;&amp; length &gt; =
0 &amp;&amp; (=20
length - 1 ) in obj; } var Sizzle =3D /*! * Sizzle CSS Selector Engine =
v2.3.3 *=20
https://sizzlejs.com/ * * Copyright jQuery Foundation and other =
contributors *=20
Released under the MIT license * http://jquery.org/license * * Date: =
2016-08-08=20
*/ (function( window ) { var i,	support,	Expr,	getText,	isXML,	tokenize,
	compile,	select,	outermostContext,	sortInput,	hasDuplicate,	// Local =
document=20
vars	setDocument,	document,	docElem,	documentIsHTML,	rbuggyQSA,	=
rbuggyMatches,
	matches,	contains,	// Instance-specific data	expando =3D "sizzle" + 1 * =
new=20
Date(),	preferredDoc =3D window.document,	dirruns =3D 0,	done =3D 0,	=
classCache =3D=20
createCache(),	tokenCache =3D createCache(),	compilerCache =3D =
createCache(),
	sortOrder =3D function( a, b ) {		if ( a =3D=3D=3D b ) {			hasDuplicate =
=3D true;		}
		return 0;	},	// Instance methods	hasOwn =3D ({}).hasOwnProperty,	arr =
=3D [],	pop =3D=20
arr.pop,	push_native =3D arr.push,	push =3D arr.push,	slice =3D =
arr.slice,	// Use a=20
stripped-down indexOf as it's faster than native	//=20
https://jsperf.com/thor-indexof-vs-for/5	indexOf =3D function( list, =
elem ) {		var=20
i =3D 0,			len =3D list.length;		for ( ; i &lt; len; i++ ) {			if ( =
list[i] =3D=3D=3D elem=20
) {				return i;			}		}		return -1;	},	booleans =3D=20
"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden=
|ismap|loop|multiple|open|readonly|required|scoped",
	// Regular expressions	// =
http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace =3D "[\\x20\\t\\r\\n\\f]",	//=20
http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier	identifier =
=3D=20
"(?:\\\\.|[\\w-]|[^\0-\\xa0])+",	// Attribute selectors:=20
http://www.w3.org/TR/selectors/#attribute-selectors	attributes =3D "\\[" =
+=20
whitespace + "*(" + identifier + ")(?:" + whitespace +		// Operator =
(capture 2)
		"*([*^$|!~]?=3D)" + whitespace +		// "Attribute values must be CSS =
identifiers=20
[capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + =
identifier +=20
"))|)" + whitespace +		"*\\]",	pseudos =3D ":(" + identifier + =
")(?:\\((" +		// To=20
reduce the number of selectors needing tokenize in the preFilter, prefer =

arguments:		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +		// 2. =
simple=20
(capture 6)		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +		// 3. =
anything=20
else (capture 2)		".*" +		")\\)|)",	// Leading and non-escaped trailing=20
whitespace, capturing some non-whitespace characters preceding the =
latter
	rwhitespace =3D new RegExp( whitespace + "+", "g" ),	rtrim =3D new =
RegExp( "^" +=20
whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),	=
rcomma =3D=20
new RegExp( "^" + whitespace + "*," + whitespace + "*" ),	rcombinators =
=3D new=20
RegExp( "^" + whitespace + "*([&gt;+~]|" + whitespace + ")" + whitespace =
+ "*"=20
),	rattributeQuotes =3D new RegExp( "=3D" + whitespace + =
"*([^\\]'\"]*?)" +=20
whitespace + "*\\]", "g" ),	rpseudo =3D new RegExp( pseudos ),	=
ridentifier =3D new=20
RegExp( "^" + identifier + "$" ),	matchExpr =3D {		"ID": new RegExp( =
"^#(" +=20
identifier + ")" ),		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),		=
"TAG":=20
new RegExp( "^(" + identifier + "|[*])" ),		"ATTR": new RegExp( "^" + =
attributes=20
),		"PSEUDO": new RegExp( "^" + pseudos ),		"CHILD": new RegExp(=20
"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + =
whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),		"bool": new RegExp( =
"^(?:" +=20
booleans + ")$", "i" ),		// For use in libraries implementing .is()		// =
We use=20
this for POS matching in `select`		"needsContext": new RegExp( "^" + =
whitespace=20
+ "*[&gt;+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +			whitespace + =

"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=3D[^-]|$)", "i" )	},	rinputs =
=3D=20
/^(?:input|select|textarea|button)$/i,	rheader =3D /^h\d$/i,	rnative =3D =

/^[^{]+\{\s*\[native \w/,	// Easily-parseable/retrievable ID or TAG or =
CLASS=20
selectors	rquickExpr =3D /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,	rsibling =
=3D /[+~]/,	//=20
CSS escapes	// =
http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape =3D new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + =
whitespace=20
+ ")|.)", "ig" ),	funescape =3D function( _, escaped, escapedWhitespace =
) {		var=20
high =3D "0x" + escaped - 0x10000;		// NaN means non-codepoint		// =
Support:=20
Firefox&lt;24		// Workaround erroneous numeric interpretation of +"0x"		=
return=20
high !=3D=3D high || escapedWhitespace ?			escaped :			high &lt; 0 ?				=
// BMP=20
codepoint				String.fromCharCode( high + 0x10000 ) :				// Supplemental =
Plane=20
codepoint (surrogate pair)				String.fromCharCode( high &gt;&gt; 10 | =
0xD800,=20
high &amp; 0x3FF | 0xDC00 );	},	// CSS string/identifier serialization	=
//=20
https://drafts.csswg.org/cssom/#common-serializing-idioms	rcssescape =3D =

/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,	fcssescape =3D =
function(=20
ch, asCodePoint ) {		if ( asCodePoint ) {			// U+0000 NULL becomes =
U+FFFD=20
REPLACEMENT CHARACTER			if ( ch =3D=3D=3D "\0" ) {				return "\uFFFD";			=
}			//=20
Control characters and (dependent upon position) numbers get escaped as =
code=20
points			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1=20
).toString( 16 ) + " ";		}		// Other potentially-special ASCII =
characters get=20
backslash-escaped		return "\\" + ch;	},	// Used for iframes	// See =
setDocument()
	// Removing the function wrapper causes a "Permission Denied"	// error =
in IE
	unloadHandler =3D function() {		setDocument();	},	disabledAncestor =3D=20
addCombinator(		function( elem ) {			return elem.disabled =3D=3D=3D true =
&amp;&amp;=20
("form" in elem || "label" in elem);		},		{ dir: "parentNode", next: =
"legend" }
	); // Optimize for push.apply( _, NodeList ) try {	push.apply(		(arr =
=3D=20
slice.call( preferredDoc.childNodes )),		preferredDoc.childNodes	);	// =
Support:=20
Android&lt;4.0	// Detect silently failing push.apply	arr[=20
preferredDoc.childNodes.length ].nodeType; } catch ( e ) {	push =3D { =
apply:=20
arr.length ?		// Leverage slice if possible		function( target, els ) {
			push_native.apply( target, slice.call(els) );		} :		// Support: =
IE&lt;9		//=20
Otherwise append directly		function( target, els ) {			var j =3D =
target.length,
				i =3D 0;			// Can't trust NodeList.length			while ( (target[j++] =3D =
els[i++]) )=20
{}			target.length =3D j - 1;		}	}; } function Sizzle( selector, =
context, results,=20
seed ) {	var m, i, elem, nid, match, groups, newSelector,		newContext =
=3D context=20
&amp;&amp; context.ownerDocument,		// nodeType defaults to 9, since =
context=20
defaults to document		nodeType =3D context ? context.nodeType : 9;	=
results =3D=20
results || [];	// Return early from calls with invalid selector or =
context	if (=20
typeof selector !=3D=3D "string" || !selector ||		nodeType !=3D=3D 1 =
&amp;&amp; nodeType=20
!=3D=3D 9 &amp;&amp; nodeType !=3D=3D 11 ) {		return results;	}	// Try =
to shortcut find=20
operations (as opposed to filters) in HTML documents	if ( !seed ) {		if =
( (=20
context ? context.ownerDocument || context : preferredDoc ) !=3D=3D =
document ) {
			setDocument( context );		}		context =3D context || document;		if (=20
documentIsHTML ) {			// If the selector is sufficiently simple, try =
using a=20
"get*By*" DOM method			// (excepting DocumentFragment context, where the =
methods=20
don't exist)			if ( nodeType !=3D=3D 11 &amp;&amp; (match =3D =
rquickExpr.exec(=20
selector )) ) {				// ID selector				if ( (m =3D match[1]) ) {					// =
Document=20
context					if ( nodeType =3D=3D=3D 9 ) {						if ( (elem =3D =
context.getElementById( m=20
)) ) {							// Support: IE, Opera, Webkit							// TODO: identify =
versions
							// getElementById can match elements by name instead of ID							=
if (=20
elem.id =3D=3D=3D m ) {								results.push( elem );								return =
results;							}
						} else {							return results;						}					// Element context					} =
else {
						// Support: IE, Opera, Webkit						// TODO: identify versions						=
//=20
getElementById can match elements by name instead of ID						if ( =
newContext=20
&amp;&amp; (elem =3D newContext.getElementById( m )) &amp;&amp;							=
contains(=20
context, elem ) &amp;&amp;							elem.id =3D=3D=3D m ) {							=
results.push( elem );
							return results;						}					}				// Type selector				} else if ( =
match[2]=20
) {					push.apply( results, context.getElementsByTagName( selector ) );
					return results;				// Class selector				} else if ( (m =3D =
match[3])=20
&amp;&amp; support.getElementsByClassName &amp;&amp;
					context.getElementsByClassName ) {					push.apply( results,=20
context.getElementsByClassName( m ) );					return results;				}			}			// =
Take=20
advantage of querySelectorAll			if ( support.qsa &amp;&amp;				=
!compilerCache[=20
selector + " " ] &amp;&amp;				(!rbuggyQSA || !rbuggyQSA.test( selector =
)) ) {
				if ( nodeType !=3D=3D 1 ) {					newContext =3D context;					=
newSelector =3D=20
selector;				// qSA looks outside Element context, which is not what we =
want
				// Thanks to Andrew Dupont for this workaround technique				// =
Support: IE=20
&lt;=3D8				// Exclude object elements				} else if (=20
context.nodeName.toLowerCase() !=3D=3D "object" ) {					// Capture the =
context ID,=20
setting it first if necessary					if ( (nid =3D context.getAttribute( =
"id" )) ) {
						nid =3D nid.replace( rcssescape, fcssescape );					} else {
						context.setAttribute( "id", (nid =3D expando) );					}					// =
Prefix every=20
selector in the list					groups =3D tokenize( selector );					i =3D =
groups.length;
					while ( i-- ) {						groups[i] =3D "#" + nid + " " + toSelector( =
groups[i] );
					}					newSelector =3D groups.join( "," );					// Expand context for =
sibling=20
selectors					newContext =3D rsibling.test( selector ) &amp;&amp; =
testContext(=20
context.parentNode ) ||						context;				}				if ( newSelector ) {					=
try {
						push.apply( results,							newContext.querySelectorAll( =
newSelector )
						);						return results;					} catch ( qsaError ) {					} finally {	=
					if=20
( nid =3D=3D=3D expando ) {							context.removeAttribute( "id" );						=
}					}				}
			}		}	}	// All others	return select( selector.replace( rtrim, "$1" ), =
context,=20
results, seed ); } /** * Create key-value caches of limited size * =
@returns=20
{function(string, object)} Returns the Object data after storing it on =
itself=20
with *	property name the (space-suffixed) string and (if the cache is =
larger=20
than Expr.cacheLength) *	deleting the oldest entry */ function =
createCache() {
	var keys =3D [];	function cache( key, value ) {		// Use (key + " ") to =
avoid=20
collision with native prototype properties (see Issue #157)		if ( =
keys.push( key=20
+ " " ) &gt; Expr.cacheLength ) {			// Only keep the most recent entries
			delete cache[ keys.shift() ];		}		return (cache[ key + " " ] =3D =
value);	}
	return cache; } /** * Mark a function for special use by Sizzle * =
@param=20
{Function} fn The function to mark */ function markFunction( fn ) {	fn[ =
expando=20
] =3D true;	return fn; } /** * Support testing using an element * @param =

{Function} fn Passed the created element and returns a boolean result */
 function assert( fn ) {	var el =3D document.createElement("fieldset");	=
try {
		return !!fn( el );	} catch (e) {		return false;	} finally {		// Remove =
from=20
its parent by default		if ( el.parentNode ) {			=
el.parentNode.removeChild( el );
		}		// release memory in IE		el =3D null;	} } /** * Adds the same =
handler for all=20
of the specified attrs * @param {String} attrs Pipe-separated list of =
attributes=20
* @param {Function} handler The method that will be applied */ function=20
addHandle( attrs, handler ) {	var arr =3D attrs.split("|"),		i =3D =
arr.length;	while=20
( i-- ) {		 Expr.attrHandle[ arr[i] ] =3D handler;	} } /** * Checks =
document order=20
of two siblings * @param {Element} a * @param {Element} b * @returns =
{Number}=20
Returns less than 0 if a precedes b, greater than 0 if a follows b */ =
function=20
siblingCheck( a, b ) {	var cur =3D b &amp;&amp; a,		diff =3D cur =
&amp;&amp;=20
a.nodeType =3D=3D=3D 1 &amp;&amp; b.nodeType =3D=3D=3D 1 &amp;&amp;			=
a.sourceIndex -=20
b.sourceIndex;	// Use IE sourceIndex if available on both nodes	if ( =
diff ) {
		return diff;	}	// Check if b follows a	if ( cur ) {		while ( (cur =3D=20
cur.nextSibling) ) {			if ( cur =3D=3D=3D b ) {				return -1;			}		}	}	=
return a ? 1 :=20
-1; } /** * Returns a function to use in pseudos for input types * =
@param=20
{String} type */ function createInputPseudo( type ) {	return function( =
elem ) {
		var name =3D elem.nodeName.toLowerCase();		return name =3D=3D=3D =
"input" &amp;&amp;=20
elem.type =3D=3D=3D type;	}; } /** * Returns a function to use in =
pseudos for buttons=20
* @param {String} type */ function createButtonPseudo( type ) {	return =
function(=20
elem ) {		var name =3D elem.nodeName.toLowerCase();		return (name =
=3D=3D=3D "input" ||=20
name =3D=3D=3D "button") &amp;&amp; elem.type =3D=3D=3D type;	}; } /** * =
Returns a function=20
to use in pseudos for :enabled/:disabled * @param {Boolean} disabled =
true for=20
:disabled; false for :enabled */ function createDisabledPseudo( disabled =
) {	//=20
Known :disabled false positives: fieldset[disabled] &gt; =
legend:nth-of-type(n+2)=20
:can-disable	return function( elem ) {		// Only certain elements can =
match=20
:enabled or :disabled		//=20
https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled		=
//=20
https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled		=
if (=20
"form" in elem ) {			// Check for inherited disabledness on relevant=20
non-disabled elements:			// * listed form-associated elements in a =
disabled=20
fieldset			//  =20
https://html.spec.whatwg.org/multipage/forms.html#category-listed			//   =

https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled			=
// *=20
option elements in a disabled optgroup			//  =20
https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled=
			//=20
All such elements have a "form" property.			if ( elem.parentNode =
&amp;&amp;=20
elem.disabled =3D=3D=3D false ) {				// Option elements defer to a =
parent optgroup if=20
present				if ( "label" in elem ) {					if ( "label" in elem.parentNode =
) {
						return elem.parentNode.disabled =3D=3D=3D disabled;					} else {			=
			return=20
elem.disabled =3D=3D=3D disabled;					}				}				// Support: IE 6 - 11				=
// Use the=20
isDisabled shortcut property to check for disabled fieldset ancestors				=
return=20
elem.isDisabled =3D=3D=3D disabled ||					// Where there is no =
isDisabled, check=20
manually					/* jshint -W018 */					elem.isDisabled !=3D=3D !disabled =
&amp;&amp;
						disabledAncestor( elem ) =3D=3D=3D disabled;			}			return =
elem.disabled =3D=3D=3D=20
disabled;		// Try to winnow out elements that can't be disabled before =
trusting=20
the disabled property.		// Some victims get caught in our net (label, =
legend,=20
menu, track), but it shouldn't		// even exist on them, let alone have a =
boolean=20
value.		} else if ( "label" in elem ) {			return elem.disabled =3D=3D=3D =
disabled;		}
		// Remaining elements are neither :enabled nor :disabled		return =
false;	}; }
 /** * Returns a function to use in pseudos for positionals * @param =
{Function}=20
fn */ function createPositionalPseudo( fn ) {	return =
markFunction(function(=20
argument ) {		argument =3D +argument;		return markFunction(function( =
seed, matches=20
) {			var j,				matchIndexes =3D fn( [], seed.length, argument ),				i =
=3D=20
matchIndexes.length;			// Match elements found at the specified indexes		=
	while=20
( i-- ) {				 if ( seed[ (j =3D matchIndexes[i]) ] ) {					seed[j] =3D =
!(matches[j]=20
=3D seed[j]);				}			}		});	}); } /** * Checks a node for validity as a =
Sizzle=20
context * @param {Element|Object=3D} context * @returns =
{Element|Object|Boolean}=20
The input node if acceptable, otherwise a falsy value */ function =
testContext(=20
context ) {	return context &amp;&amp; typeof =
context.getElementsByTagName !=3D=3D=20
"undefined" &amp;&amp; context; } // Expose support vars for convenience =
support=20
=3D Sizzle.support =3D {}; /** * Detects XML nodes * @param =
{Element|Object} elem An=20
element or a document * @returns {Boolean} True iff elem is a non-HTML =
XML node=20
*/ isXML =3D Sizzle.isXML =3D function( elem ) {	// documentElement is =
verified for=20
cases where it doesn't yet exist	// (such as loading iframes in IE - =
#4833)	var=20
documentElement =3D elem &amp;&amp; (elem.ownerDocument || =
elem).documentElement;
	return documentElement ? documentElement.nodeName !=3D=3D "HTML" : =
false; }; /** *=20
Sets document-related variables once based on the current document * =
@param=20
{Element|Object} [doc] An element or document object to use to set the =
document=20
* @returns {Object} Returns the current document */ setDocument =3D=20
Sizzle.setDocument =3D function( node ) {	var hasCompare, subWindow,		=
doc =3D node ?=20
node.ownerDocument || node : preferredDoc;	// Return early if doc is =
invalid or=20
already selected	if ( doc =3D=3D=3D document || doc.nodeType !=3D=3D 9 =
||=20
!doc.documentElement ) {		return document;	}	// Update global variables	=
document=20
=3D doc;	docElem =3D document.documentElement;	documentIsHTML =3D =
!isXML( document );
	// Support: IE 9-11, Edge	// Accessing iframe documents after unload =
throws=20
"permission denied" errors (jQuery #13936)	if ( preferredDoc !=3D=3D =
document=20
&amp;&amp;		(subWindow =3D document.defaultView) &amp;&amp; =
subWindow.top !=3D=3D=20
subWindow ) {		// Support: IE 11, Edge		if ( subWindow.addEventListener =
) {
			subWindow.addEventListener( "unload", unloadHandler, false );		// =
Support: IE=20
9 - 10 only		} else if ( subWindow.attachEvent ) {			=
subWindow.attachEvent(=20
"onunload", unloadHandler );		}	}	/* Attributes
	---------------------------------------------------------------------- =
*/	//=20
Support: IE&lt;8	// Verify that getAttribute really returns attributes =
and not=20
properties	// (excepting IE8 booleans)	support.attributes =3D =
assert(function( el=20
) {		el.className =3D "i";		return !el.getAttribute("className");	});	/* =

getElement(s)By*
	---------------------------------------------------------------------- =
*/	//=20
Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName =3D assert(function( el ) {		=
el.appendChild(=20
document.createComment("") );		return =
!el.getElementsByTagName("*").length;	});
	// Support: IE&lt;9	support.getElementsByClassName =3D rnative.test(=20
document.getElementsByClassName );	// Support: IE&lt;10	// Check if=20
getElementById returns elements by name	// The broken getElementById =
methods=20
don't pick up programmatically-set names,	// so use a roundabout=20
getElementsByName test	support.getById =3D assert(function( el ) {
		docElem.appendChild( el ).id =3D expando;		return =
!document.getElementsByName ||=20
!document.getElementsByName( expando ).length;	});	// ID filter and find	=
if (=20
support.getById ) {		Expr.filter["ID"] =3D function( id ) {			var attrId =
=3D=20
id.replace( runescape, funescape );			return function( elem ) {				=
return=20
elem.getAttribute("id") =3D=3D=3D attrId;			};		};		Expr.find["ID"] =3D =
function( id,=20
context ) {			if ( typeof context.getElementById !=3D=3D "undefined" =
&amp;&amp;=20
documentIsHTML ) {				var elem =3D context.getElementById( id );				=
return elem ?=20
[ elem ] : [];			}		};	} else {		Expr.filter["ID"] =3D  function( id ) {	=
		var=20
attrId =3D id.replace( runescape, funescape );			return function( elem ) =
{				var=20
node =3D typeof elem.getAttributeNode !=3D=3D "undefined" &amp;&amp;
					elem.getAttributeNode("id");				return node &amp;&amp; node.value =
=3D=3D=3D=20
attrId;			};		};		// Support: IE 6 - 7 only		// getElementById is not =
reliable=20
as a find shortcut		Expr.find["ID"] =3D function( id, context ) {			if ( =
typeof=20
context.getElementById !=3D=3D "undefined" &amp;&amp; documentIsHTML ) {	=
			var=20
node, i, elems,					elem =3D context.getElementById( id );				if ( elem =
) {					//=20
Verify the id attribute					node =3D elem.getAttributeNode("id");					if =
( node=20
&amp;&amp; node.value =3D=3D=3D id ) {						return [ elem ];					}					=
// Fall back on=20
getElementsByName					elems =3D context.getElementsByName( id );					i =
=3D 0;
					while ( (elem =3D elems[i++]) ) {						node =3D =
elem.getAttributeNode("id");
						if ( node &amp;&amp; node.value =3D=3D=3D id ) {							return [ =
elem ];						}
					}				}				return [];			}		};	}	// Tag	Expr.find["TAG"] =3D=20
support.getElementsByTagName ?		function( tag, context ) {			if ( typeof =

context.getElementsByTagName !=3D=3D "undefined" ) {				return=20
context.getElementsByTagName( tag );			// DocumentFragment nodes don't =
have=20
gEBTN			} else if ( support.qsa ) {				return context.querySelectorAll( =
tag );
			}		} :		function( tag, context ) {			var elem,				tmp =3D [],				i =
=3D 0,				//=20
By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes =
too
				results =3D context.getElementsByTagName( tag );			// Filter out =
possible=20
comments			if ( tag =3D=3D=3D "*" ) {				while ( (elem =3D results[i++]) =
) {					if (=20
elem.nodeType =3D=3D=3D 1 ) {						tmp.push( elem );					}				}				=
return tmp;			}
			return results;		};	// Class	Expr.find["CLASS"] =3D=20
support.getElementsByClassName &amp;&amp; function( className, context ) =
{		if (=20
typeof context.getElementsByClassName !=3D=3D "undefined" &amp;&amp; =
documentIsHTML=20
) {			return context.getElementsByClassName( className );		}	};	/*=20
QSA/matchesSelector
	 ---------------------------------------------------------------------- =
*/	//=20
QSA and matchesSelector support	// matchesSelector(:active) reports =
false when=20
true (IE9/Opera 11.5)	rbuggyMatches =3D [];	// qSa(:focus) reports false =
when true=20
(Chrome 21)	// We allow this because of a bug in IE8/9 that throws an =
error	//=20
whenever `document.activeElement` is accessed on an iframe	// So, we =
allow=20
:focus to pass through QSA all the time to avoid the IE error	// See=20
https://bugs.jquery.com/ticket/13378	rbuggyQSA =3D [];	if ( (support.qsa =
=3D=20
rnative.test( document.querySelectorAll )) ) {		// Build QSA regex		// =
Regex=20
strategy adopted from Diego Perini		assert(function( el ) {			// Select =
is set=20
to empty string on purpose			// This is to test IE's treatment of not =
explicitly
			// setting a boolean content attribute,			// since its presence =
should be=20
enough			// https://bugs.jquery.com/ticket/12359			docElem.appendChild( =
el=20
).innerHTML =3D "<A id=3D'" + expando + "'></A>" +				"<SELECT id=3D'" + =
expando + "-\r\\'=20
msallowcapture=3D"">" +				"<OPTION selected=3D""></OPTION></SELECT>";			=
// Support:=20
IE8, Opera 11-12.16			// Nothing should be selected when empty strings =
follow ^=3D=20
or $=3D or *=3D			// The test attribute must be unknown in Opera but =
"safe" for=20
WinRT			//=20
https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_secti=
on			if=20
( el.querySelectorAll("[msallowcapture^=3D'']").length ) {				=
rbuggyQSA.push(=20
"[*^$]=3D" + whitespace + "*(?:''|\"\")" );			}			// Support: IE8			// =
Boolean=20
attributes and "value" are not treated correctly			if (=20
!el.querySelectorAll("[selected]").length ) {				rbuggyQSA.push( "\\[" + =

whitespace + "*(?:value|" + booleans + ")" );			}			// Support: =
Chrome&lt;29,=20
Android&lt;4.4, Safari&lt;7.0+, iOS&lt;7.0+, PhantomJS&lt;1.9.8+			if (=20
!el.querySelectorAll( "[id~=3D" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=3D");			}			// Webkit/Opera - :checked should =
return=20
selected option elements			//=20
http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked			// IE8 =
throws=20
error here and will not see later tests			if (=20
!el.querySelectorAll(":checked").length ) {				=
rbuggyQSA.push(":checked");			}
			// Support: Safari 8+, iOS 8+			//=20
https://bugs.webkit.org/show_bug.cgi?id=3D136851			// In-page =
`selector#id=20
sibling-combinator selector` fails			if ( !el.querySelectorAll( "a#" + =
expando +=20
"+*" ).length ) {				rbuggyQSA.push(".#.+[+~]");			}		});		=
assert(function( el )=20
{			el.innerHTML =3D "<A disabled=3D"disabled" =
href=3D"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/"></A>"=20
+				"<SELECT disabled=3D"disabled"><OPTION></OPTION></SELECT>";			// =
Support:=20
Windows 8 Native Apps			// The type and name attributes are restricted =
during=20
.innerHTML assignment			var input =3D document.createElement("input");
			input.setAttribute( "type", "hidden" );			el.appendChild( input=20
).setAttribute( "name", "D" );			// Support: IE8			// Enforce =
case-sensitivity=20
of name attribute			if ( el.querySelectorAll("[name=3Dd]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=3D" );			}			// FF =
3.5 -=20
:enabled/:disabled and hidden elements (hidden elements are still =
enabled)			//=20
IE8 throws error here and will not see later tests			if (=20
el.querySelectorAll(":enabled").length !=3D=3D 2 ) {				rbuggyQSA.push( =
":enabled",=20
":disabled" );			}			// Support: IE9-11+			// IE's :disabled selector =
does not=20
pick up the children of disabled fieldsets			docElem.appendChild( el =
).disabled=20
=3D true;			if ( el.querySelectorAll(":disabled").length !=3D=3D 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );			}			// Opera 10-11 does =
not=20
throw on post-comma invalid pseudos			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");		});	}	if ( (support.matchesSelector =3D =
rnative.test(=20
(matches =3D docElem.matches ||		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {		assert(function( el ) {			// Check =
to see=20
if it's possible to do matchesSelector			// on a disconnected node (IE =
9)
			support.disconnectedMatch =3D matches.call( el, "*" );			// This =
should fail=20
with an exception			// Gecko does not error, returns false instead
			matches.call( el, "[s!=3D'']:x" );			rbuggyMatches.push( "!=3D", =
pseudos );		});
	}	rbuggyQSA =3D rbuggyQSA.length &amp;&amp; new RegExp( =
rbuggyQSA.join("|") );
	rbuggyMatches =3D rbuggyMatches.length &amp;&amp; new RegExp(=20
rbuggyMatches.join("|") );	/* Contains
	 ---------------------------------------------------------------------- =
*/
	 hasCompare =3D rnative.test( docElem.compareDocumentPosition );	// =
Element=20
contains another	// Purposefully self-exclusive	// As in, an element =
does not=20
contain itself	contains =3D hasCompare || rnative.test( docElem.contains =
) ?
		function( a, b ) {			var adown =3D a.nodeType =3D=3D=3D 9 ? =
a.documentElement : a,
				bup =3D b &amp;&amp; b.parentNode;			return a =3D=3D=3D bup || !!( =
bup &amp;&amp;=20
bup.nodeType =3D=3D=3D 1 &amp;&amp; (				adown.contains ?					=
adown.contains( bup ) :
					a.compareDocumentPosition &amp;&amp; a.compareDocumentPosition( bup =
) &amp;=20
16			));		} :		function( a, b ) {			if ( b ) {				while ( (b =3D =
b.parentNode) ) {
					if ( b =3D=3D=3D a ) {						return true;					}				}			}			return =
false;		};	/*=20
Sorting	 =
----------------------------------------------------------------------=20
*/	// Document order sorting	sortOrder =3D hasCompare ?	function( a, b ) =
{		//=20
Flag for duplicate removal		if ( a =3D=3D=3D b ) {			hasDuplicate =3D =
true;			return 0;
		}		// Sort on method existence if only one input has =
compareDocumentPosition
		var compare =3D !a.compareDocumentPosition - =
!b.compareDocumentPosition;		if (=20
compare ) {			return compare;		}		// Calculate position if both inputs =
belong to=20
the same document		compare =3D ( a.ownerDocument || a ) =3D=3D=3D ( =
b.ownerDocument || b=20
) ?			a.compareDocumentPosition( b ) :			// Otherwise we know they are=20
disconnected			1;		// Disconnected nodes		if ( compare &amp; 1 ||
			(!support.sortDetached &amp;&amp; b.compareDocumentPosition( a ) =
=3D=3D=3D compare)=20
) {			// Choose the first element that is related to our preferred =
document			if=20
( a =3D=3D=3D document || a.ownerDocument =3D=3D=3D preferredDoc =
&amp;&amp;=20
contains(preferredDoc, a) ) {				return -1;			}			if ( b =3D=3D=3D =
document ||=20
b.ownerDocument =3D=3D=3D preferredDoc &amp;&amp; contains(preferredDoc, =
b) ) {
				return 1;			}			// Maintain original order			return sortInput ?				( =

indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :				0;		}		return =
compare=20
&amp; 4 ? -1 : 1;	} :	function( a, b ) {		// Exit early if the nodes are =

identical		if ( a =3D=3D=3D b ) {			hasDuplicate =3D true;			return 0;		=
}		var cur,			i=20
=3D 0,			aup =3D a.parentNode,			bup =3D b.parentNode,			ap =3D [ a ],			=
bp =3D [ b ];		//=20
Parentless nodes are either documents or disconnected		if ( !aup || !bup =
) {
			return a =3D=3D=3D document ? -1 :				b =3D=3D=3D document ? 1 :				=
aup ? -1 :				bup ? 1=20
:				sortInput ?				( indexOf( sortInput, a ) - indexOf( sortInput, b ) =
) :
				0;		// If the nodes are siblings, we can do a quick check		} else if =
( aup=20
=3D=3D=3D bup ) {			return siblingCheck( a, b );		}		// Otherwise we =
need full lists=20
of their ancestors for comparison		cur =3D a;		while ( (cur =3D =
cur.parentNode) ) {
			ap.unshift( cur );		}		cur =3D b;		while ( (cur =3D cur.parentNode) ) =
{
			bp.unshift( cur );		}		// Walk down the tree looking for a =
discrepancy		while=20
( ap[i] =3D=3D=3D bp[i] ) {			i++;		}		return i ?			// Do a sibling =
check if the nodes=20
have a common ancestor			siblingCheck( ap[i], bp[i] ) :			// Otherwise =
nodes in=20
our document sort first			ap[i] =3D=3D=3D preferredDoc ? -1 :			bp[i] =
=3D=3D=3D preferredDoc=20
? 1 :			0;	};	return document; }; Sizzle.matches =3D function( expr, =
elements ) {
	return Sizzle( expr, null, null, elements ); }; Sizzle.matchesSelector =
=3D=20
function( elem, expr ) {	// Set document vars if needed	if ( (=20
elem.ownerDocument || elem ) !=3D=3D document ) {		setDocument( elem );	=
}	// Make=20
sure that attribute selectors are quoted	expr =3D expr.replace( =
rattributeQuotes,=20
"=3D'$1']" );	if ( support.matchesSelector &amp;&amp; documentIsHTML =
&amp;&amp;
		!compilerCache[ expr + " " ] &amp;&amp;		( !rbuggyMatches ||=20
!rbuggyMatches.test( expr ) ) &amp;&amp;		( !rbuggyQSA     || =
!rbuggyQSA.test(=20
expr ) ) ) {		try {			var ret =3D matches.call( elem, expr );			// IE =
9's=20
matchesSelector returns false on disconnected nodes			if ( ret ||=20
support.disconnectedMatch ||					// As well, disconnected nodes are said =
to be=20
in a document					// fragment in IE 9					elem.document &amp;&amp;=20
elem.document.nodeType !=3D=3D 11 ) {				return ret;			}		} catch (e) {}	=
}	return=20
Sizzle( expr, document, null, [ elem ] ).length &gt; 0; }; =
Sizzle.contains =3D=20
function( context, elem ) {	// Set document vars if needed	if ( (=20
context.ownerDocument || context ) !=3D=3D document ) {		setDocument( =
context );	}
	return contains( context, elem ); }; Sizzle.attr =3D function( elem, =
name ) {	//=20
Set document vars if needed	if ( ( elem.ownerDocument || elem ) !=3D=3D =
document ) {
		setDocument( elem );	}	var fn =3D Expr.attrHandle[ name.toLowerCase() =
],		//=20
Don't get fooled by Object.prototype properties (jQuery #13807)		val =3D =
fn=20
&amp;&amp; hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?			fn( =
elem,=20
name, !documentIsHTML ) :			undefined;	return val !=3D=3D undefined ?		=
val :
		support.attributes || !documentIsHTML ?			elem.getAttribute( name ) :		=
	(val =3D=20
elem.getAttributeNode(name)) &amp;&amp; val.specified ?				val.value :			=
	null;
 }; Sizzle.escape =3D function( sel ) {	return (sel + "").replace( =
rcssescape,=20
fcssescape ); }; Sizzle.error =3D function( msg ) {	throw new Error( =
"Syntax=20
error, unrecognized expression: " + msg ); }; /** * Document sorting and =

removing duplicates * @param {ArrayLike} results */ Sizzle.uniqueSort =
=3D=20
function( results ) {	var elem,		duplicates =3D [],		j =3D 0,		i =3D 0;	=
// Unless we=20
*know* we can detect duplicates, assume their presence	hasDuplicate =3D=20
!support.detectDuplicates;	sortInput =3D !support.sortStable &amp;&amp;=20
results.slice( 0 );	results.sort( sortOrder );	if ( hasDuplicate ) {		=
while (=20
(elem =3D results[i++]) ) {			if ( elem =3D=3D=3D results[ i ] ) {				j =
=3D=20
duplicates.push( i );			}		}		while ( j-- ) {			 results.splice( =
duplicates[ j=20
], 1 );		}	}	// Clear input after sorting to release objects	// See=20
https://github.com/jquery/sizzle/pull/225	sortInput =3D null;	return =
results; };
 /** * Utility function for retrieving the text value of an array of DOM =
nodes *=20
@param {Array|Element} elem */ getText =3D Sizzle.getText =3D function( =
elem ) {	var=20
node,		ret =3D "",		i =3D 0,		nodeType =3D elem.nodeType;	if ( !nodeType =
) {		// If no=20
nodeType, this is expected to be an array		while ( (node =3D elem[i++]) =
) {			//=20
Do not traverse comment nodes			ret +=3D getText( node );		}	} else if ( =
nodeType=20
=3D=3D=3D 1 || nodeType =3D=3D=3D 9 || nodeType =3D=3D=3D 11 ) {		// Use =
textContent for elements
		// innerText usage removed for consistency of new lines (jQuery =
#11153)		if (=20
typeof elem.textContent =3D=3D=3D "string" ) {			return =
elem.textContent;		} else {
			// Traverse its children			for ( elem =3D elem.firstChild; elem; elem =
=3D=20
elem.nextSibling ) {				ret +=3D getText( elem );			}		}	} else if ( =
nodeType =3D=3D=3D=20
3 || nodeType =3D=3D=3D 4 ) {		return elem.nodeValue;	}	// Do not =
include comment or=20
processing instruction nodes	return ret; }; Expr =3D Sizzle.selectors =
=3D {	// Can=20
be adjusted by the user	cacheLength: 50,	createPseudo: markFunction,	=
match:=20
matchExpr,	attrHandle: {},	find: {},	relative: {		"&gt;": { dir: =
"parentNode",=20
first: true },		" ": { dir: "parentNode" },		"+": { dir: =
"previousSibling",=20
first: true },		"~": { dir: "previousSibling" }	},	preFilter: {		"ATTR": =

function( match ) {			match[1] =3D match[1].replace( runescape, =
funescape );			//=20
Move the given value to match[3] whether quoted or unquoted			match[3] =
=3D (=20
match[3] || match[4] || match[5] || "" ).replace( runescape, funescape =
);			if (=20
match[2] =3D=3D=3D "~=3D" ) {				match[3] =3D " " + match[3] + " ";			}		=
	return=20
match.slice( 0, 4 );		},		"CHILD": function( match ) {			/* matches from =

matchExpr["CHILD"]				1 type (only|nth|...)				2 what (child|of-type)				=
3=20
argument (even|odd|\d*|\d*n([+-]\d+)?|...)				4 xn-component of xn+y =
argument=20
([+-]?\d*n|)				5 sign of xn-component				6 x of xn-component				7 sign =
of=20
y-component				8 y of y-component			*/			match[1] =3D =
match[1].toLowerCase();			if=20
( match[1].slice( 0, 3 ) =3D=3D=3D "nth" ) {				// nth-* requires =
argument				if (=20
!match[3] ) {					Sizzle.error( match[0] );				}				// numeric x and y=20
parameters for Expr.filter.CHILD				// remember that false/true cast=20
respectively to 0/1				match[4] =3D +( match[4] ? match[5] + (match[6] =
|| 1) : 2 *=20
( match[3] =3D=3D=3D "even" || match[3] =3D=3D=3D "odd" ) );				match[5] =
=3D +( ( match[7] +=20
match[8] ) || match[3] =3D=3D=3D "odd" );			// other types prohibit =
arguments			} else=20
if ( match[3] ) {				Sizzle.error( match[0] );			}			return match;		},
		"PSEUDO": function( match ) {			var excess,				unquoted =3D !match[6] =
&amp;&amp;=20
match[2];			if ( matchExpr["CHILD"].test( match[0] ) ) {				return null;	=
		}
			// Accept quoted arguments as-is			if ( match[3] ) {				match[2] =3D =
match[4]=20
|| match[5] || "";			// Strip excess characters from unquoted arguments		=
	} else=20
if ( unquoted &amp;&amp; rpseudo.test( unquoted ) &amp;&amp;				// Get =
excess=20
from tokenize (recursively)				(excess =3D tokenize( unquoted, true )) =
&amp;&amp;
				// advance to the next closing parenthesis				(excess =3D =
unquoted.indexOf(=20
")", unquoted.length - excess ) - unquoted.length) ) {				// excess is a =

negative index				match[0] =3D match[0].slice( 0, excess );				match[2] =
=3D=20
unquoted.slice( 0, excess );			}			// Return only captures needed by the =
pseudo=20
filter method (type and argument)			return match.slice( 0, 3 );		}	},	=
filter: {
		"TAG": function( nodeNameSelector ) {			var nodeName =3D=20
nodeNameSelector.replace( runescape, funescape ).toLowerCase();			return =

nodeNameSelector =3D=3D=3D "*" ?				function() { return true; } :				=
function( elem )=20
{					return elem.nodeName &amp;&amp; elem.nodeName.toLowerCase() =
=3D=3D=3D nodeName;
				};		},		"CLASS": function( className ) {			var pattern =3D =
classCache[=20
className + " " ];			return pattern ||				(pattern =3D new RegExp( "(^|" =
+=20
whitespace + ")" + className + "(" + whitespace + "|$)" )) &amp;&amp;
				classCache( className, function( elem ) {					return pattern.test( =
typeof=20
elem.className =3D=3D=3D "string" &amp;&amp; elem.className || typeof=20
elem.getAttribute !=3D=3D "undefined" &amp;&amp; =
elem.getAttribute("class") || "" );
				});		},		"ATTR": function( name, operator, check ) {			return =
function( elem=20
) {				var result =3D Sizzle.attr( elem, name );				if ( result =3D=3D =
null ) {
					return operator =3D=3D=3D "!=3D";				}				if ( !operator ) {					=
return true;				}
				result +=3D "";				return operator =3D=3D=3D "=3D" ? result =
=3D=3D=3D check :					operator=20
=3D=3D=3D "!=3D" ? result !=3D=3D check :					operator =3D=3D=3D "^=3D" =
? check &amp;&amp;=20
result.indexOf( check ) =3D=3D=3D 0 :					operator =3D=3D=3D "*=3D" ? =
check &amp;&amp;=20
result.indexOf( check ) &gt; -1 :					operator =3D=3D=3D "$=3D" ? check =
&amp;&amp;=20
result.slice( -check.length ) =3D=3D=3D check :					operator =3D=3D=3D =
"~=3D" ? ( " " +=20
result.replace( rwhitespace, " " ) + " " ).indexOf( check ) &gt; -1 :
					operator =3D=3D=3D "|=3D" ? result =3D=3D=3D check || result.slice( =
0, check.length + 1 )=20
=3D=3D=3D check + "-" :					 false;			};		},		"CHILD": function( type, =
what, argument,=20
first, last ) {			var simple =3D type.slice( 0, 3 ) !=3D=3D "nth",				=
forward =3D=20
type.slice( -4 ) !=3D=3D "last",				ofType =3D what =3D=3D=3D "of-type";	=
		return first =3D=3D=3D=20
1 &amp;&amp; last =3D=3D=3D 0 ?				// Shortcut for :nth-*(n)				=
function( elem ) {
					return !!elem.parentNode;				} :				function( elem, context, xml ) =
{
					var cache, uniqueCache, outerCache, node, nodeIndex, start,						=
dir =3D=20
simple !=3D=3D forward ? "nextSibling" : "previousSibling",						parent =
=3D=20
elem.parentNode,						name =3D ofType &amp;&amp; =
elem.nodeName.toLowerCase(),
						useCache =3D !xml &amp;&amp; !ofType,						diff =3D false;					if =
( parent ) {
						// :(first|last|only)-(child|of-type)						if ( simple ) {							=
while (=20
dir ) {								node =3D elem;								while ( (node =3D node[ dir ]) ) {		=
							if (=20
ofType ?										node.nodeName.toLowerCase() =3D=3D=3D name :										=
node.nodeType=20
=3D=3D=3D 1 ) {										return false;									}								}								// =
Reverse direction=20
for :only-* (if we haven't yet done so)								start =3D dir =3D type =
=3D=3D=3D "only"=20
&amp;&amp; !start &amp;&amp; "nextSibling";							}							return true;			=
			}
						start =3D [ forward ? parent.firstChild : parent.lastChild ];						=
//=20
non-xml :nth-child(...) stores cache data on `parent`						if ( forward=20
&amp;&amp; useCache ) {							// Seek `elem` from a previously-cached =
index
							// ...in a gzip-friendly way							node =3D parent;							=
outerCache =3D=20
node[ expando ] || (node[ expando ] =3D {});							// Support: IE &lt;9 =
only
							// Defend against cloned attroperties (jQuery gh-1709)							=
uniqueCache=20
=3D outerCache[ node.uniqueID ] ||								(outerCache[ node.uniqueID ] =
=3D {});
							cache =3D uniqueCache[ type ] || [];							nodeIndex =3D cache[ 0 =
] =3D=3D=3D=20
dirruns &amp;&amp; cache[ 1 ];							diff =3D nodeIndex &amp;&amp; =
cache[ 2 ];
							node =3D nodeIndex &amp;&amp; parent.childNodes[ nodeIndex ];					=
		while (=20
(node =3D ++nodeIndex &amp;&amp; node &amp;&amp; node[ dir ] ||								=
// Fallback=20
to seeking `elem` from the start								(diff =3D nodeIndex =3D 0) || =
start.pop()) )=20
{								// When found, cache indexes on `parent` and break								if (=20
node.nodeType =3D=3D=3D 1 &amp;&amp; ++diff &amp;&amp; node =3D=3D=3D =
elem ) {
									uniqueCache[ type ] =3D [ dirruns, nodeIndex, diff ];									=
break;
								}							}						} else {							// Use previously-cached element =
index if=20
available							if ( useCache ) {								// ...in a gzip-friendly way
								node =3D elem;								outerCache =3D node[ expando ] || (node[ =
expando ] =3D=20
{});								// Support: IE &lt;9 only								// Defend against cloned=20
attroperties (jQuery gh-1709)								uniqueCache =3D outerCache[ =
node.uniqueID ]=20
||									(outerCache[ node.uniqueID ] =3D {});								cache =3D =
uniqueCache[ type=20
] || [];								nodeIndex =3D cache[ 0 ] =3D=3D=3D dirruns &amp;&amp; =
cache[ 1 ];
								diff =3D nodeIndex;							}							// xml :nth-child(...)							=
// or=20
:nth-last-child(...) or :nth(-last)?-of-type(...)							if ( diff =
=3D=3D=3D false ) {
								// Use the same loop as above to seek `elem` from the start						=
		while=20
( (node =3D ++nodeIndex &amp;&amp; node &amp;&amp; node[ dir ] ||								=
	(diff =3D=20
nodeIndex =3D 0) || start.pop()) ) {									if ( ( ofType ?
										node.nodeName.toLowerCase() =3D=3D=3D name :										=
node.nodeType =3D=3D=3D 1 )=20
&amp;&amp;										++diff ) {										// Cache the index of each =
encountered=20
element										if ( useCache ) {											outerCache =3D node[ =
expando ] ||=20
(node[ expando ] =3D {});											// Support: IE &lt;9 only											=
// Defend=20
against cloned attroperties (jQuery gh-1709)											uniqueCache =3D =
outerCache[=20
node.uniqueID ] ||												(outerCache[ node.uniqueID ] =3D {});
											uniqueCache[ type ] =3D [ dirruns, diff ];										}									=
	if (=20
node =3D=3D=3D elem ) {											break;										}									}								}			=
				}						}
						// Incorporate the offset, then check against cycle size						diff =
-=3D=20
last;						return diff =3D=3D=3D first || ( diff % first =3D=3D=3D 0 =
&amp;&amp; diff / first=20
&gt;=3D 0 );					}				};		},		"PSEUDO": function( pseudo, argument ) {			=
//=20
pseudo-class names are case-insensitive			//=20
http://www.w3.org/TR/selectors/#pseudo-classes			// Prioritize by case=20
sensitivity in case custom pseudos are added with uppercase letters			// =

Remember that setFilters inherits from pseudos			var args,				fn =3D =
Expr.pseudos[=20
pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||					Sizzle.error( =

"unsupported pseudo: " + pseudo );			// The user may use createPseudo to =

indicate that			// arguments are needed to create the filter function			=
// just=20
as Sizzle does			if ( fn[ expando ] ) {				return fn( argument );			}			=
// But=20
maintain support for old signatures			if ( fn.length &gt; 1 ) {				args =
=3D [=20
pseudo, pseudo, "", argument ];				return =
Expr.setFilters.hasOwnProperty(=20
pseudo.toLowerCase() ) ?					markFunction(function( seed, matches ) {				=
		var=20
idx,							matched =3D fn( seed, argument ),							i =3D matched.length;	=
					while=20
( i-- ) {							 idx =3D indexOf( seed, matched[i] );							seed[ idx ] =
=3D !(=20
matches[ idx ] =3D matched[i] );						}					}) :					function( elem ) {
						return fn( elem, 0, args );					};			}			return fn;		}	},	pseudos: =
{		//=20
Potentially complex pseudos		"not": markFunction(function( selector ) {		=
	//=20
Trim the selector passed to compile			// to avoid treating leading and =
trailing
			// spaces as combinators			var input =3D [],				results =3D [],				=
matcher =3D=20
compile( selector.replace( rtrim, "$1" ) );			return matcher[ expando ] =
?
				markFunction(function( seed, matches, context, xml ) {					var elem,
						unmatched =3D matcher( seed, null, xml, [] ),						i =3D =
seed.length;					//=20
Match elements unmatched by `matcher`					while ( i-- ) {						 if ( =
(elem =3D=20
unmatched[i]) ) {							seed[i] =3D !(matches[i] =3D elem);						}					}	=
			}) :
				function( elem, context, xml ) {					input[0] =3D elem;					matcher( =
input,=20
null, xml, results );					// Don't keep the element (issue #299)					=
input[0] =3D=20
null;					return !results.pop();				};		}),		"has": =
markFunction(function(=20
selector ) {			return function( elem ) {				return Sizzle( selector, =
elem=20
).length &gt; 0;			};		}),		"contains": markFunction(function( text ) {		=
	text =3D=20
text.replace( runescape, funescape );			return function( elem ) {				=
return (=20
elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) =
&gt; -1;
			};		}),		// "Whether an element is represented by a :lang() selector		=
// is=20
based solely on the element's language value		// being equal to the =
identifier=20
C,		// or beginning with the identifier C immediately followed by "-".		=
// The=20
matching of C against the element's language value is performed=20
case-insensitively.		// The identifier C does not have to be a valid =
language=20
name."		// http://www.w3.org/TR/selectors/#lang-pseudo		"lang": =
markFunction(=20
function( lang ) {			// lang value must be a valid identifier			if (=20
!ridentifier.test(lang || "") ) {				Sizzle.error( "unsupported lang: " =
+ lang=20
);			}			lang =3D lang.replace( runescape, funescape ).toLowerCase();			=
return=20
function( elem ) {				var elemLang;				do {					if ( (elemLang =3D =
documentIsHTML=20
?						elem.lang :						elem.getAttribute("xml:lang") ||=20
elem.getAttribute("lang")) ) {						elemLang =3D elemLang.toLowerCase();
						return elemLang =3D=3D=3D lang || elemLang.indexOf( lang + "-" ) =
=3D=3D=3D 0;					}
				} while ( (elem =3D elem.parentNode) &amp;&amp; elem.nodeType =
=3D=3D=3D 1 );
				return false;			};		}),		// Miscellaneous		"target": function( elem =
) {
			var hash =3D window.location &amp;&amp; window.location.hash;			=
return hash=20
&amp;&amp; hash.slice( 1 ) =3D=3D=3D elem.id;		},		"root": function( =
elem ) {			return=20
elem =3D=3D=3D docElem;		},		"focus": function( elem ) {			return elem =
=3D=3D=3D=20
document.activeElement &amp;&amp; (!document.hasFocus || =
document.hasFocus())=20
&amp;&amp; !!(elem.type || elem.href || ~elem.tabIndex);		},		// Boolean =

properties		"enabled": createDisabledPseudo( false ),		"disabled":=20
createDisabledPseudo( true ),		"checked": function( elem ) {			// In =
CSS3,=20
:checked should return both checked and selected elements			//=20
http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked			var =
nodeName =3D=20
elem.nodeName.toLowerCase();			return (nodeName =3D=3D=3D "input" =
&amp;&amp;=20
!!elem.checked) || (nodeName =3D=3D=3D "option" &amp;&amp; =
!!elem.selected);		},
		"selected": function( elem ) {			// Accessing this property makes=20
selected-by-default			// options in Safari work properly			if ( =
elem.parentNode=20
) {				elem.parentNode.selectedIndex;			}			return elem.selected =
=3D=3D=3D true;		},
		// Contents		"empty": function( elem ) {			//=20
http://www.w3.org/TR/selectors/#empty-pseudo			// :empty is negated by =
element=20
(1) or content nodes (text: 3; cdata: 4; entity ref: 5),			//   but not =
by=20
others (comment: 8; processing instruction: 7; etc.)			// nodeType &lt; =
6 works=20
because attributes (2) do not appear as children			for ( elem =3D =
elem.firstChild;=20
elem; elem =3D elem.nextSibling ) {				if ( elem.nodeType &lt; 6 ) {					=
return=20
false;				}			}			return true;		},		"parent": function( elem ) {			=
return=20
!Expr.pseudos["empty"]( elem );		},		// Element/input types		"header": =
function(=20
elem ) {			return rheader.test( elem.nodeName );		},		"input": function( =
elem )=20
{			return rinputs.test( elem.nodeName );		},		"button": function( elem =
) {
			var name =3D elem.nodeName.toLowerCase();			return name =3D=3D=3D =
"input" &amp;&amp;=20
elem.type =3D=3D=3D "button" || name =3D=3D=3D "button";		},		"text": =
function( elem ) {
			var attr;			return elem.nodeName.toLowerCase() =3D=3D=3D "input" =
&amp;&amp;
				elem.type =3D=3D=3D "text" &amp;&amp;				// Support: IE&lt;8				// =
New HTML5=20
attribute values (e.g., "search") appear with elem.type =3D=3D=3D "text"	=
			( (attr =3D=20
elem.getAttribute("type")) =3D=3D null || attr.toLowerCase() =3D=3D=3D =
"text" );		},		//=20
Position-in-collection		"first": createPositionalPseudo(function() {			=
return [=20
0 ];		}),		"last": createPositionalPseudo(function( matchIndexes, length =
) {
			return [ length - 1 ];		}),		"eq": createPositionalPseudo(function(=20
matchIndexes, length, argument ) {			return [ argument &lt; 0 ? argument =
+=20
length : argument ];		}),		"even": createPositionalPseudo(function(=20
matchIndexes, length ) {			var i =3D 0;			for ( ; i &lt; length; i +=3D =
2 ) {
				matchIndexes.push( i );			}			return matchIndexes;		}),		"odd":=20
createPositionalPseudo(function( matchIndexes, length ) {			var i =3D 1;	=
		for ( ;=20
i &lt; length; i +=3D 2 ) {				matchIndexes.push( i );			}			return =
matchIndexes;
		}),		"lt": createPositionalPseudo(function( matchIndexes, length, =
argument ) {
			var i =3D argument &lt; 0 ? argument + length : argument;			for ( ; =
--i &gt;=3D=20
0; ) {				matchIndexes.push( i );			}			return matchIndexes;		}),		"gt": =

createPositionalPseudo(function( matchIndexes, length, argument ) {			=
var i =3D=20
argument &lt; 0 ? argument + length : argument;			for ( ; ++i &lt; =
length; ) {
				matchIndexes.push( i );			}			return matchIndexes;		})	} };
 Expr.pseudos["nth"] =3D Expr.pseudos["eq"]; // Add button/input type =
pseudos for=20
( i in { radio: true, checkbox: true, file: true, password: true, image: =
true }=20
) {	Expr.pseudos[ i ] =3D createInputPseudo( i ); } for ( i in { submit: =
true,=20
reset: true } ) {	Expr.pseudos[ i ] =3D createButtonPseudo( i ); } // =
Easy API for=20
creating new setFilters function setFilters() {} setFilters.prototype =
=3D=20
Expr.filters =3D Expr.pseudos; Expr.setFilters =3D new setFilters(); =
tokenize =3D=20
Sizzle.tokenize =3D function( selector, parseOnly ) {	var matched, =
match, tokens,=20
type,		soFar, groups, preFilters,		cached =3D tokenCache[ selector + " " =
];	if (=20
cached ) {		return parseOnly ? 0 : cached.slice( 0 );	}	soFar =3D =
selector;	groups=20
=3D [];	preFilters =3D Expr.preFilter;	while ( soFar ) {		// Comma and =
first run		if=20
( !matched || (match =3D rcomma.exec( soFar )) ) {			if ( match ) {				=
// Don't=20
consume trailing commas as valid				soFar =3D soFar.slice( =
match[0].length ) ||=20
soFar;			}			groups.push( (tokens =3D []) );		}		matched =3D false;		// =
Combinators
		if ( (match =3D rcombinators.exec( soFar )) ) {			matched =3D =
match.shift();
			tokens.push({				value: matched,				// Cast descendant combinators to =
space
				type: match[0].replace( rtrim, " " )			});			soFar =3D soFar.slice(=20
matched.length );		}		// Filters		for ( type in Expr.filter ) {			if ( =
(match =3D=20
matchExpr[ type ].exec( soFar )) &amp;&amp; (!preFilters[ type ] ||				=
(match =3D=20
preFilters[ type ]( match ))) ) {				matched =3D match.shift();				=
tokens.push({
					value: matched,					type: type,					matches: match				});				soFar =
=3D=20
soFar.slice( matched.length );			}		}		if ( !matched ) {			break;		}	}	=
// Return=20
the length of the invalid excess	// if we're just parsing	// Otherwise, =
throw an=20
error or return tokens	return parseOnly ?		soFar.length :		soFar ?
			Sizzle.error( selector ) :			// Cache the tokens			tokenCache( =
selector,=20
groups ).slice( 0 ); }; function toSelector( tokens ) {	var i =3D 0,		=
len =3D=20
tokens.length,		selector =3D "";	for ( ; i &lt; len; i++ ) {		selector =
+=3D=20
tokens[i].value;	}	return selector; } function addCombinator( matcher,=20
combinator, base ) {	var dir =3D combinator.dir,		skip =3D =
combinator.next,		key =3D=20
skip || dir,		checkNonElements =3D base &amp;&amp; key =3D=3D=3D =
"parentNode",		doneName=20
=3D done++;	return combinator.first ?		// Check against closest =
ancestor/preceding=20
element		function( elem, context, xml ) {			while ( (elem =3D elem[ dir =
]) ) {
				if ( elem.nodeType =3D=3D=3D 1 || checkNonElements ) {					return =
matcher( elem,=20
context, xml );				}			}			return false;		} :		// Check against all=20
ancestor/preceding elements		function( elem, context, xml ) {			var =
oldCache,=20
uniqueCache, outerCache,				newCache =3D [ dirruns, doneName ];			// We =
can't set=20
arbitrary data on XML nodes, so they don't benefit from combinator =
caching			if=20
( xml ) {				while ( (elem =3D elem[ dir ]) ) {					if ( elem.nodeType =
=3D=3D=3D 1 ||=20
checkNonElements ) {						if ( matcher( elem, context, xml ) ) {							=
return=20
true;						}					}				}			} else {				while ( (elem =3D elem[ dir ]) ) {	=
				if (=20
elem.nodeType =3D=3D=3D 1 || checkNonElements ) {						outerCache =3D =
elem[ expando ] ||=20
(elem[ expando ] =3D {});						// Support: IE &lt;9 only						// Defend =
against=20
cloned attroperties (jQuery gh-1709)						uniqueCache =3D outerCache[=20
elem.uniqueID ] || (outerCache[ elem.uniqueID ] =3D {});						if ( skip =
&amp;&amp;=20
skip =3D=3D=3D elem.nodeName.toLowerCase() ) {							elem =3D elem[ dir =
] || elem;
						} else if ( (oldCache =3D uniqueCache[ key ]) &amp;&amp;							=
oldCache[ 0 ]=20
=3D=3D=3D dirruns &amp;&amp; oldCache[ 1 ] =3D=3D=3D doneName ) {							=
// Assign to=20
newCache so results back-propagate to previous elements							return =
(newCache[=20
2 ] =3D oldCache[ 2 ]);						} else {							// Reuse newcache so results =

back-propagate to previous elements							uniqueCache[ key ] =3D =
newCache;
							// A match means we're done; a fail means we have to keep =
checking
							if ( (newCache[ 2 ] =3D matcher( elem, context, xml )) ) {								=
return=20
true;							}						}					}				}			}			return false;		}; } function=20
elementMatcher( matchers ) {	return matchers.length &gt; 1 ?		function( =
elem,=20
context, xml ) {			var i =3D matchers.length;			while ( i-- ) {				 if ( =

!matchers[i]( elem, context, xml ) ) {					return false;				}			}			=
return true;
		} :		matchers[0]; } function multipleContexts( selector, contexts, =
results ) {
	var i =3D 0,		len =3D contexts.length;	for ( ; i &lt; len; i++ ) {		=
Sizzle(=20
selector, contexts[i], results );	}	return results; } function condense( =

unmatched, map, filter, context, xml ) {	var elem,		newUnmatched =3D [],	=
	i =3D 0,
		len =3D unmatched.length,		mapped =3D map !=3D null;	for ( ; i &lt; =
len; i++ ) {		if=20
( (elem =3D unmatched[i]) ) {			if ( !filter || filter( elem, context, =
xml ) ) {
				newUnmatched.push( elem );				if ( mapped ) {					map.push( i );				=
}			}		}
	}	return newUnmatched; } function setMatcher( preFilter, selector, =
matcher,=20
postFilter, postFinder, postSelector ) {	if ( postFilter &amp;&amp; =
!postFilter[=20
expando ] ) {		postFilter =3D setMatcher( postFilter );	}	if ( =
postFinder=20
&amp;&amp; !postFinder[ expando ] ) {		postFinder =3D setMatcher( =
postFinder,=20
postSelector );	}	return markFunction(function( seed, results, context, =
xml ) {
		var temp, i, elem,			preMap =3D [],			postMap =3D [],			preexisting =
=3D=20
results.length,			// Get initial elements from seed or context			elems =
=3D seed ||=20
multipleContexts( selector || "*", context.nodeType ? [ context ] : =
context, []=20
),			// Prefilter to get matcher input, preserving a map for =
seed-results=20
synchronization			matcherIn =3D preFilter &amp;&amp; ( seed || !selector =
) ?
				condense( elems, preMap, preFilter, context, xml ) :				elems,			=
matcherOut=20
=3D matcher ?				// If we have a postFinder, or filtered seed, or =
non-seed=20
postFilter or preexisting results,				postFinder || ( seed ? preFilter : =

preexisting || postFilter ) ?					// ...intermediate processing is =
necessary
					[] :					// ...otherwise use results directly					results :				=
matcherIn;
		// Find primary matches		if ( matcher ) {			matcher( matcherIn, =
matcherOut,=20
context, xml );		}		// Apply postFilter		if ( postFilter ) {			temp =3D =
condense(=20
matcherOut, postMap );			postFilter( temp, [], context, xml );			// =
Un-match=20
failing elements by moving them back to matcherIn			i =3D temp.length;			=
while (=20
i-- ) {				 if ( (elem =3D temp[i]) ) {					matcherOut[ postMap[i] ] =3D =

!(matcherIn[ postMap[i] ] =3D elem);				}			}		}		if ( seed ) {			if ( =
postFinder=20
|| preFilter ) {				if ( postFinder ) {					// Get the final matcherOut =
by=20
condensing this intermediate into postFinder contexts					temp =3D [];			=
		i =3D=20
matcherOut.length;					while ( i-- ) {						 if ( (elem =3D =
matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match							=
temp.push(=20
(matcherIn[i] =3D elem) );						}					}					postFinder( null, =
(matcherOut =3D []),=20
temp, xml );				}				// Move matched elements from seed to results to =
keep them=20
synchronized				i =3D matcherOut.length;				while ( i-- ) {					 if ( =
(elem =3D=20
matcherOut[i]) &amp;&amp;						(temp =3D postFinder ? indexOf( seed, =
elem ) :=20
preMap[i]) &gt; -1 ) {						seed[temp] =3D !(results[temp] =3D elem);				=
	}				}			}
		// Add elements to results, through postFinder if defined		} else {
			matcherOut =3D condense(				matcherOut =3D=3D=3D results ?					=
matcherOut.splice(=20
preexisting, matcherOut.length ) :					matcherOut			);			if ( postFinder =
) {
				postFinder( null, results, matcherOut, xml );			} else {				=
push.apply(=20
results, matcherOut );			}		}	}); } function matcherFromTokens( tokens ) =
{	var=20
checkContext, matcher, j,		len =3D tokens.length,		leadingRelative =3D=20
Expr.relative[ tokens[0].type ],		implicitRelative =3D leadingRelative =
||=20
Expr.relative[" "],		i =3D leadingRelative ? 1 : 0,		// The foundational =
matcher=20
ensures that elements are reachable from top-level context(s)		=
matchContext =3D=20
addCombinator( function( elem ) {			return elem =3D=3D=3D checkContext;		=
},=20
implicitRelative, true ),		matchAnyContext =3D addCombinator( function( =
elem ) {
			return indexOf( checkContext, elem ) &gt; -1;		}, implicitRelative, =
true ),
		matchers =3D [ function( elem, context, xml ) {			var ret =3D ( =
!leadingRelative=20
&amp;&amp; ( xml || context !=3D=3D outermostContext ) ) || (				=
(checkContext =3D=20
context).nodeType ?					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );			// Avoid hanging onto =
element=20
(issue #299)			checkContext =3D null;			return ret;		} ];	for ( ; i &lt; =
len; i++=20
) {		if ( (matcher =3D Expr.relative[ tokens[i].type ]) ) {			matchers =
=3D [=20
addCombinator(elementMatcher( matchers ), matcher) ];		} else {			=
matcher =3D=20
Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );			// =
Return=20
special upon seeing a positional matcher			if ( matcher[ expando ] ) {			=
	//=20
Find the next relative operator (if any) for proper handling				j =3D =
++i;				for=20
( ; j &lt; len; j++ ) {					if ( Expr.relative[ tokens[j].type ] ) {					=
	break;
					}				}				return setMatcher(					i &gt; 1 &amp;&amp; =
elementMatcher(=20
matchers ),					i &gt; 1 &amp;&amp; toSelector(						// If the preceding =
token=20
was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type =
=3D=3D=3D " " ?=20
"*" : "" })					).replace( rtrim, "$1" ),					matcher,					i &lt; j =
&amp;&amp;=20
matcherFromTokens( tokens.slice( i, j ) ),					j &lt; len &amp;&amp;=20
matcherFromTokens( (tokens =3D tokens.slice( j )) ),					j &lt; len =
&amp;&amp;=20
toSelector( tokens )				);			}			matchers.push( matcher );		}	}	return=20
elementMatcher( matchers ); } function matcherFromGroupMatchers(=20
elementMatchers, setMatchers ) {	var bySet =3D setMatchers.length &gt; =
0,
		byElement =3D elementMatchers.length &gt; 0,		superMatcher =3D =
function( seed,=20
context, xml, results, outermost ) {			var elem, j, matcher,				=
matchedCount =3D=20
0,				i =3D "0",				unmatched =3D seed &amp;&amp; [],				setMatched =3D =
[],
				contextBackup =3D outermostContext,				// We must always have either =
seed=20
elements or outermost context				elems =3D seed || byElement &amp;&amp;=20
Expr.find["TAG"]( "*", outermost ),				// Use integer dirruns iff this =
is the=20
outermost matcher				dirrunsUnique =3D (dirruns +=3D contextBackup =
=3D=3D null ? 1 :=20
Math.random() || 0.1),				len =3D elems.length;			if ( outermost ) {
				outermostContext =3D context =3D=3D=3D document || context || =
outermost;			}			//=20
Add elements passing elementMatchers directly to results			// Support: =
IE&lt;9,=20
Safari			// Tolerate NodeList properties (IE: "length"; Safari: =
<number>)=20
matching elements by id			for ( ; i !=3D=3D len &amp;&amp; (elem =3D =
elems[i]) !=3D=20
null; i++ ) {				if ( byElement &amp;&amp; elem ) {					j =3D 0;					if =
( !context=20
&amp;&amp; elem.ownerDocument !=3D=3D document ) {						setDocument( =
elem );
						xml =3D !documentIsHTML;					}					while ( (matcher =3D =
elementMatchers[j++])=20
) {						if ( matcher( elem, context || document, xml) ) {							=
results.push(=20
elem );							break;						}					}					if ( outermost ) {						dirruns =
=3D=20
dirrunsUnique;					}				}				// Track unmatched elements for set filters	=
			if (=20
bySet ) {					// They will have gone through all possible matchers					=
if (=20
(elem =3D !matcher &amp;&amp; elem) ) {						matchedCount--;					}					=
// Lengthen=20
the array for every element, matched or not					if ( seed ) {
						unmatched.push( elem );					}				}			}			// `i` is now the count =
of=20
elements visited above, and adding it to `matchedCount`			// makes the =
latter=20
nonnegative.			matchedCount +=3D i;			// Apply set filters to unmatched =
elements
			// NOTE: This can be skipped if there are no unmatched elements =
(i.e.,=20
`matchedCount`			// equals `i`), unless we didn't visit _any_ elements =
in the=20
above loop because we have			// no element matchers and no seed.			//=20
Incrementing an initially-string "0" `i` allows `i` to remain a string =
only in=20
that			// case, which will result in a "00" `matchedCount` that differs =
from `i`=20
but is also			// numerically zero.			if ( bySet &amp;&amp; i !=3D=3D =
matchedCount )=20
{				j =3D 0;				while ( (matcher =3D setMatchers[j++]) ) {					matcher( =
unmatched,=20
setMatched, context, xml );				}				if ( seed ) {					// Reintegrate =
element=20
matches to eliminate the need for sorting					if ( matchedCount &gt; 0 ) =
{
						while ( i-- ) {							 if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] =3D pop.call( results );							}						}					}					=
// Discard=20
index placeholder values to get only actual matches					setMatched =3D =
condense(=20
setMatched );				}				// Add matches to results				push.apply( results,=20
setMatched );				// Seedless set matches succeeding multiple successful =
matchers=20
stipulate sorting				if ( outermost &amp;&amp; !seed &amp;&amp;=20
setMatched.length &gt; 0 &amp;&amp;					( matchedCount + =
setMatchers.length )=20
&gt; 1 ) {					Sizzle.uniqueSort( results );				}			}			// Override =
manipulation=20
of globals by nested matchers			if ( outermost ) {				dirruns =3D =
dirrunsUnique;
				outermostContext =3D contextBackup;			}			return unmatched;		};	=
return bySet ?
		markFunction( superMatcher ) :		superMatcher; } compile =3D =
Sizzle.compile =3D=20
function( selector, match /* Internal Use Only */ ) {	var i,		=
setMatchers =3D [],
		elementMatchers =3D [],		cached =3D compilerCache[ selector + " " ];	=
if ( !cached=20
) {		// Generate a function of recursive functions that can be used to =
check=20
each element		if ( !match ) {			match =3D tokenize( selector );		}		i =
=3D=20
match.length;		while ( i-- ) {			 cached =3D matcherFromTokens( match[i] =
);			if (=20
cached[ expando ] ) {				setMatchers.push( cached );			} else {
				elementMatchers.push( cached );			}		}		// Cache the compiled =
function
		cached =3D compilerCache( selector, matcherFromGroupMatchers( =
elementMatchers,=20
setMatchers ) );		// Save selector and tokenization		cached.selector =3D =
selector;
	}	return cached; }; /** * A low-level selection function that works =
with=20
Sizzle's compiled *  selector functions * @param {String|Function} =
selector A=20
selector or a pre-compiled *  selector function built with =
Sizzle.compile *=20
@param {Element} context * @param {Array} [results] * @param {Array} =
[seed] A=20
set of elements to match against */ select =3D Sizzle.select =3D =
function( selector,=20
context, results, seed ) {	var i, tokens, token, type, find,		compiled =
=3D typeof=20
selector =3D=3D=3D "function" &amp;&amp; selector,		match =3D !seed =
&amp;&amp; tokenize(=20
(selector =3D compiled.selector || selector) );	results =3D results || =
[];	// Try to=20
minimize operations if there is only one selector in the list and no =
seed	//=20
(the latter of which guarantees us context)	if ( match.length =3D=3D=3D =
1 ) {		//=20
Reduce context if the leading compound selector is an ID		tokens =3D =
match[0] =3D=20
match[0].slice( 0 );		if ( tokens.length &gt; 2 &amp;&amp; (token =3D=20
tokens[0]).type =3D=3D=3D "ID" &amp;&amp;				context.nodeType =3D=3D=3D =
9 &amp;&amp;=20
documentIsHTML &amp;&amp; Expr.relative[ tokens[1].type ] ) {			context =
=3D (=20
Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context =
) || []=20
)[0];			if ( !context ) {				return results;			// Precompiled matchers =
will=20
still verify ancestry, so step up a level			} else if ( compiled ) {				=
context=20
=3D context.parentNode;			}			selector =3D selector.slice(=20
tokens.shift().value.length );		}		// Fetch a seed set for right-to-left =

matching		i =3D matchExpr["needsContext"].test( selector ) ? 0 : =
tokens.length;
		while ( i-- ) {			 token =3D tokens[i];			// Abort if we hit a =
combinator			if (=20
Expr.relative[ (type =3D token.type) ] ) {				break;			}			if ( (find =
=3D Expr.find[=20
type ]) ) {				// Search, expanding context for leading sibling =
combinators
				if ( (seed =3D find(					token.matches[0].replace( runescape, =
funescape ),
					rsibling.test( tokens[0].type ) &amp;&amp; testContext( =
context.parentNode=20
) || context				)) ) {					// If seed is empty or no tokens remain, we =
can=20
return early					tokens.splice( i, 1 );					selector =3D seed.length =
&amp;&amp;=20
toSelector( tokens );					if ( !selector ) {						push.apply( results, =
seed );
						return results;					}					break;				}			}		}	}	// Compile and =
execute a=20
filtering function if one is not provided	// Provide `match` to avoid=20
retokenization if we modified the selector above	( compiled || compile(=20
selector, match ) )(		seed,		context,		!documentIsHTML,		results,		=
!context ||=20
rsibling.test( selector ) &amp;&amp; testContext( context.parentNode ) =
||=20
context	);	return results; }; // One-time assignments // Sort stability
 support.sortStable =3D expando.split("").sort( sortOrder ).join("") =
=3D=3D=3D expando;
 // Support: Chrome 14-35+ // Always assume duplicates if they aren't =
passed to=20
the comparison function support.detectDuplicates =3D !!hasDuplicate; // =
Initialize=20
against the default document setDocument(); // Support: Webkit&lt;537.32 =
-=20
Safari 6.0.3/Chrome 25 (fixed in Chrome 27) // Detached nodes =
confoundingly=20
follow *each other* support.sortDetached =3D assert(function( el ) {	// =
Should=20
return 1, but returns 4 (following)	return el.compareDocumentPosition(=20
document.createElement("fieldset") ) &amp; 1; }); // Support: IE&lt;8 // =
Prevent=20
attribute/property "interpolation" //=20
https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx if (=20
!assert(function( el ) {	el.innerHTML =3D "<A =
href=3D"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js#"><=
/A>";
	return el.firstChild.getAttribute("href") =3D=3D=3D "#" ; }) ) {	=
addHandle(=20
"type|href|height|width", function( elem, name, isXML ) {		if ( !isXML ) =
{
			return elem.getAttribute( name, name.toLowerCase() =3D=3D=3D "type" ? =
1 : 2 );		}
	}); } // Support: IE&lt;9 // Use defaultValue in place of =
getAttribute("value")
 if ( !support.attributes || !assert(function( el ) {	el.innerHTML =3D =
"<INPUT>";
	el.firstChild.setAttribute( "value", "" );	return =
el.firstChild.getAttribute(=20
"value" ) =3D=3D=3D ""; }) ) {	addHandle( "value", function( elem, name, =
isXML ) {		if=20
( !isXML &amp;&amp; elem.nodeName.toLowerCase() =3D=3D=3D "input" ) {			=
return=20
elem.defaultValue;		}	}); } // Support: IE&lt;9 // Use getAttributeNode =
to fetch=20
booleans when getAttribute lies if ( !assert(function( el ) {	return=20
el.getAttribute("disabled") =3D=3D null; }) ) {	addHandle( booleans, =
function( elem,=20
name, isXML ) {		var val;		if ( !isXML ) {			return elem[ name ] =
=3D=3D=3D true ?=20
name.toLowerCase() :					(val =3D elem.getAttributeNode( name )) =
&amp;&amp;=20
val.specified ?					val.value :				null;		}	}); } return Sizzle; })( =
window );
 jQuery.find =3D Sizzle; jQuery.expr =3D Sizzle.selectors; // Deprecated
 jQuery.expr[ ":" ] =3D jQuery.expr.pseudos; jQuery.uniqueSort =3D =
jQuery.unique =3D=20
Sizzle.uniqueSort; jQuery.text =3D Sizzle.getText; jQuery.isXMLDoc =3D =
Sizzle.isXML;
 jQuery.contains =3D Sizzle.contains; jQuery.escapeSelector =3D =
Sizzle.escape; var=20
dir =3D function( elem, dir, until ) {	var matched =3D [],		truncate =3D =
until !=3D=3D=20
undefined;	while ( ( elem =3D elem[ dir ] ) &amp;&amp; elem.nodeType =
!=3D=3D 9 ) {		if=20
( elem.nodeType =3D=3D=3D 1 ) {			if ( truncate &amp;&amp; jQuery( elem =
).is( until )=20
) {				break;			}			matched.push( elem );		}	}	return matched; }; var =
siblings =3D=20
function( n, elem ) {	var matched =3D [];	for ( ; n; n =3D n.nextSibling =
) {		if (=20
n.nodeType =3D=3D=3D 1 &amp;&amp; n !=3D=3D elem ) {			matched.push( n =
);		}	}	return=20
matched; }; var rneedsContext =3D jQuery.expr.match.needsContext; =
function=20
nodeName( elem, name ) {  return elem.nodeName &amp;&amp;=20
elem.nodeName.toLowerCase() =3D=3D=3D name.toLowerCase(); }; var =
rsingleTag =3D (=20
/^&lt;([a-z][^\/\0&gt;:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?&gt;(?:&lt;\/\1&g=
t;|)$/i=20
); // Implement the identical functionality for filter and not function =
winnow(=20
elements, qualifier, not ) {	if ( isFunction( qualifier ) ) {		return=20
jQuery.grep( elements, function( elem, i ) {			return !!qualifier.call( =
elem, i,=20
elem ) !=3D=3D not;		} );	}	// Single element	if ( qualifier.nodeType ) =
{		return=20
jQuery.grep( elements, function( elem ) {			return ( elem =3D=3D=3D =
qualifier ) !=3D=3D=20
not;		} );	}	// Arraylike of elements (jQuery, arguments, Array)	if ( =
typeof=20
qualifier !=3D=3D "string" ) {		return jQuery.grep( elements, function( =
elem ) {
			return ( indexOf.call( qualifier, elem ) &gt; -1 ) !=3D=3D not;		} );	=
}	//=20
Filtered directly for both simple and complex selectors	return =
jQuery.filter(=20
qualifier, elements, not ); } jQuery.filter =3D function( expr, elems, =
not ) {	var=20
elem =3D elems[ 0 ];	if ( not ) {		expr =3D ":not(" + expr + ")";	}	if ( =

elems.length =3D=3D=3D 1 &amp;&amp; elem.nodeType =3D=3D=3D 1 ) {		=
return=20
jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];	}	return=20
jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {		=
return=20
elem.nodeType =3D=3D=3D 1;	} ) ); }; jQuery.fn.extend( {	find: function( =
selector ) {
		var i, ret,			len =3D this.length,			self =3D this;		if ( typeof =
selector !=3D=3D=20
"string" ) {			return this.pushStack( jQuery( selector ).filter( =
function() {
				for ( i =3D 0; i &lt; len; i++ ) {					if ( jQuery.contains( self[ i =
], this )=20
) {						return true;					}				}			} ) );		}		ret =3D this.pushStack( [] =
);		for (=20
i =3D 0; i &lt; len; i++ ) {			jQuery.find( selector, self[ i ], ret );		=
}		return=20
len &gt; 1 ? jQuery.uniqueSort( ret ) : ret;	},	filter: function( =
selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );	},	=
not:=20
function( selector ) {		return this.pushStack( winnow( this, selector || =
[],=20
true ) );	},	is: function( selector ) {		return !!winnow(			this,			// =
If this=20
is a positional/relative selector, check membership in the returned set		=
	// so=20
$("p:first").is("p:last") won't return true for a doc with two "p".			=
typeof=20
selector =3D=3D=3D "string" &amp;&amp; rneedsContext.test( selector ) ?		=
		jQuery(=20
selector ) :				selector || [],			false		).length;	} } ); // Initialize =
a jQuery=20
object // A central reference to the root jQuery(document) var =
rootjQuery,	// A=20
simple way to check for HTML strings	// Prioritize #id over <tag> to =
avoid XSS=20
via location.hash (#9521)	// Strict HTML recognition (#11290: must start =
with=20
&lt;)	// Shortcut simple #id case for speed	rquickExpr =3D=20
/^(?:\s*(&lt;[\w\W]+&gt;)[^&gt;]*|#([\w-]+))$/,	init =3D jQuery.fn.init =
=3D=20
function( selector, context, root ) {		var match, elem;		// HANDLE: =
$(""),=20
$(null), $(undefined), $(false)		if ( !selector ) {			return this;		}		=
// Method=20
init() accepts an alternate rootjQuery		// so migrate can support =
jQuery.sub=20
(gh-2101)		root =3D root || rootjQuery;		// Handle HTML strings		if ( =
typeof=20
selector =3D=3D=3D "string" ) {			if ( selector[ 0 ] =3D=3D=3D "&lt;" =
&amp;&amp;
				selector[ selector.length - 1 ] =3D=3D=3D "&gt;" &amp;&amp;				=
selector.length=20
&gt;=3D 3 ) {				// Assume that strings that start and end with &lt;&gt; =
are HTML=20
and skip the regex check				match =3D [ null, selector, null ];			} else =
{
				match =3D rquickExpr.exec( selector );			}			// Match html or make =
sure no=20
context is specified for #id			if ( match &amp;&amp; ( match[ 1 ] || =
!context )=20
) {				// HANDLE: $(html) -&gt; $(array)				if ( match[ 1 ] ) {					=
context =3D=20
context instanceof jQuery ? context[ 0 ] : context;					// Option to run =
scripts=20
is true for back-compat					// Intentionally let the error be thrown if=20
parseHTML is not present					jQuery.merge( this, jQuery.parseHTML(						=
match[ 1=20
],						context &amp;&amp; context.nodeType ? context.ownerDocument || =
context :=20
document,						true					) );					// HANDLE: $(html, props)					if (=20
rsingleTag.test( match[ 1 ] ) &amp;&amp; jQuery.isPlainObject( context ) =
) {
						for ( match in context ) {							// Properties of context are =
called as=20
methods if possible							if ( isFunction( this[ match ] ) ) {								=
this[=20
match ]( context[ match ] );							// ...and otherwise set as attributes	=
						}=20
else {								this.attr( match, context[ match ] );							}						}					}
					return this;				// HANDLE: $(#id)				} else {					elem =3D=20
document.getElementById( match[ 2 ] );					if ( elem ) {						// Inject =
the=20
element directly into the jQuery object						this[ 0 ] =3D elem;						=
this.length=20
=3D 1;					}					return this;				}			// HANDLE: $(expr, $(...))			} else =
if (=20
!context || context.jquery ) {				return ( context || root ).find( =
selector );
			// HANDLE: $(expr, context)			// (which is just equivalent to:=20
$(context).find(expr)			} else {				return this.constructor( context =
).find(=20
selector );			}		// HANDLE: $(DOMElement)		} else if ( selector.nodeType =
) {
			this[ 0 ] =3D selector;			this.length =3D 1;			return this;		// =
HANDLE:=20
$(function)		// Shortcut for document ready		} else if ( isFunction( =
selector )=20
) {			return root.ready !=3D=3D undefined ?				root.ready( selector ) :		=
		//=20
Execute immediately if ready is not present				selector( jQuery );		}		=
return=20
jQuery.makeArray( selector, this );	}; // Give the init function the =
jQuery=20
prototype for later instantiation init.prototype =3D jQuery.fn; // =
Initialize=20
central reference rootjQuery =3D jQuery( document ); var rparentsprev =
=3D=20
/^(?:parents|prev(?:Until|All))/,	// Methods guaranteed to produce a =
unique set=20
when starting from a unique set	guaranteedUnique =3D {		children: true,		=
contents:=20
true,		next: true,		prev: true	}; jQuery.fn.extend( {	has: function( =
target ) {
		var targets =3D jQuery( target, this ),			l =3D targets.length;		=
return=20
this.filter( function() {			var i =3D 0;			for ( ; i &lt; l; i++ ) {				=
if (=20
jQuery.contains( this, targets[ i ] ) ) {					return true;				}			}		} =
);	},
	closest: function( selectors, context ) {		var cur,			i =3D 0,			l =3D =
this.length,
			matched =3D [],			targets =3D typeof selectors !=3D=3D "string" =
&amp;&amp; jQuery(=20
selectors );		// Positional selectors never match, since there's no =
_selection_=20
context		if ( !rneedsContext.test( selectors ) ) {			for ( ; i &lt; l; =
i++ ) {
				for ( cur =3D this[ i ]; cur &amp;&amp; cur !=3D=3D context; cur =3D =
cur.parentNode=20
) {					// Always skip document fragments					if ( cur.nodeType &lt; 11=20
&amp;&amp; ( targets ?						targets.index( cur ) &gt; -1 :						// Don't =
pass=20
non-elements to Sizzle						cur.nodeType =3D=3D=3D 1 &amp;&amp;
							jQuery.find.matchesSelector( cur, selectors ) ) ) {						=
matched.push(=20
cur );						break;					}				}			}		}		return this.pushStack( =
matched.length &gt;=20
1 ? jQuery.uniqueSort( matched ) : matched );	},	// Determine the =
position of an=20
element within the set	index: function( elem ) {		// No argument, return =
index=20
in parent		if ( !elem ) {			return ( this[ 0 ] &amp;&amp; this[ 0 =
].parentNode )=20
? this.first().prevAll().length : -1;		}		// Index in selector		if ( =
typeof elem=20
=3D=3D=3D "string" ) {			return indexOf.call( jQuery( elem ), this[ 0 ] =
);		}		//=20
Locate the position of the desired element		return indexOf.call( this,			=
// If=20
it receives a jQuery object, the first element is used			elem.jquery ? =
elem[ 0 ]=20
: elem		);	},	add: function( selector, context ) {		return =
this.pushStack(
			jQuery.uniqueSort(				jQuery.merge( this.get(), jQuery( selector, =
context ) )
			)		);	},	addBack: function( selector ) {		return this.add( selector =
=3D=3D null ?
			this.prevObject : this.prevObject.filter( selector )		);	} } ); =
function=20
sibling( cur, dir ) {	while ( ( cur =3D cur[ dir ] ) &amp;&amp; =
cur.nodeType !=3D=3D 1=20
) {}	return cur; } jQuery.each( {	parent: function( elem ) {		var parent =
=3D=20
elem.parentNode;		return parent &amp;&amp; parent.nodeType !=3D=3D 11 ? =
parent :=20
null;	},	parents: function( elem ) {		return dir( elem, "parentNode" );	=
},
	parentsUntil: function( elem, i, until ) {		return dir( elem, =
"parentNode",=20
until );	},	next: function( elem ) {		return sibling( elem, =
"nextSibling" );	},
	prev: function( elem ) {		return sibling( elem, "previousSibling" );	},
	nextAll: function( elem ) {		return dir( elem, "nextSibling" );	},	=
prevAll:=20
function( elem ) {		return dir( elem, "previousSibling" );	},	nextUntil: =

function( elem, i, until ) {		return dir( elem, "nextSibling", until );	=
},
	prevUntil: function( elem, i, until ) {		return dir( elem, =
"previousSibling",=20
until );	},	siblings: function( elem ) {		return siblings( ( =
elem.parentNode ||=20
{} ).firstChild, elem );	},	children: function( elem ) {		return =
siblings(=20
elem.firstChild );	},	contents: function( elem ) {        if ( nodeName( =
elem,=20
"iframe" ) ) {            return elem.contentDocument;        }        =
//=20
Support: IE 9 - 11 only, iOS 7 only, Android Browser &lt;=3D4.3 only     =
   //=20
Treat the template element as a regular one in browsers that        // =
don't=20
support it.        if ( nodeName( elem, "template" ) ) {            elem =
=3D=20
elem.content || elem;        }        return jQuery.merge( [], =
elem.childNodes=20
);	} }, function( name, fn ) {	jQuery.fn[ name ] =3D function( until, =
selector ) {
		var matched =3D jQuery.map( this, fn, until );		if ( name.slice( -5 ) =
!=3D=3D=20
"Until" ) {			selector =3D until;		}		if ( selector &amp;&amp; typeof =
selector =3D=3D=3D=20
"string" ) {			matched =3D jQuery.filter( selector, matched );		}		if (=20
this.length &gt; 1 ) {			// Remove duplicates			if ( !guaranteedUnique[ =
name ] )=20
{				jQuery.uniqueSort( matched );			}			// Reverse order for parents* =
and=20
prev-derivatives			if ( rparentsprev.test( name ) ) {				=
matched.reverse();			}
		}		return this.pushStack( matched );	}; } ); var rnothtmlwhite =3D (=20
/[^\x20\t\r\n\f]+/g ); // Convert String-formatted options into =
Object-formatted=20
ones function createOptions( options ) {	var object =3D {};	jQuery.each( =

options.match( rnothtmlwhite ) || [], function( _, flag ) {		object[ =
flag ] =3D=20
true;	} );	return object; } /* * Create a callback list using the =
following=20
parameters: * *	options: an optional list of space-separated options =
that will=20
change how *			the callback list behaves or a more traditional option =
object * *=20
By default a callback list will act like an event callback list and can =
be *=20
"fired" multiple times. * * Possible options: * *	once:			will ensure =
the=20
callback list can only be fired once (like a Deferred) * *	memory:			=
will keep=20
track of previous values and will call any callback added *					after =
the list=20
has been fired right away with the latest "memorized" *					values (like =
a=20
Deferred) * *	unique:			will ensure a callback can only be added once =
(no=20
duplicate in the list) * *	stopOnFalse:	interrupt callings when a =
callback=20
returns false * */ jQuery.Callbacks =3D function( options ) {	// Convert =
options=20
from String-formatted to Object-formatted if needed	// (we check in =
cache first)
	options =3D typeof options =3D=3D=3D "string" ?		createOptions( options =
) :
		jQuery.extend( {}, options );	var // Flag to know if list is currently =
firing
		firing,		// Last fire value for non-forgettable lists		memory,		// =
Flag to=20
know if list was already fired		fired,		// Flag to prevent firing		=
locked,		//=20
Actual callback list		list =3D [],		// Queue of execution data for =
repeatable=20
lists		queue =3D [],		// Index of currently firing callback (modified by =

add/remove as needed)		firingIndex =3D -1,		// Fire callbacks		fire =3D =
function() {
			// Enforce single-firing			locked =3D locked || options.once;			// =
Execute=20
callbacks for all pending executions,			// respecting firingIndex =
overrides and=20
runtime changes			fired =3D firing =3D true;			for ( ; queue.length; =
firingIndex =3D=20
-1 ) {				memory =3D queue.shift();				while ( ++firingIndex &lt; =
list.length ) {
					// Run callback and check for early termination					if ( list[ =
firingIndex=20
].apply( memory[ 0 ], memory[ 1 ] ) =3D=3D=3D false &amp;&amp;
						options.stopOnFalse ) {						// Jump to end and forget the data so =
.add=20
doesn't re-fire						firingIndex =3D list.length;						memory =3D false;	=
				}				}
			}			// Forget the data if we're done with it			if ( !options.memory ) =
{
				memory =3D false;			}			firing =3D false;			// Clean up if we're =
done firing for=20
good			if ( locked ) {				// Keep an empty list if we have data for =
future add=20
calls				if ( memory ) {					list =3D [];				// Otherwise, this object =
is spent
				} else {					list =3D "";				}			}		},		// Actual Callbacks object		=
self =3D {
			// Add a callback or a collection of callbacks to the list			add: =
function()=20
{				if ( list ) {					// If we have memory from a past run, we should =
fire=20
after adding					if ( memory &amp;&amp; !firing ) {						firingIndex =3D =

list.length - 1;						queue.push( memory );					}					( function add( =
args ) {
						jQuery.each( args, function( _, arg ) {							if ( isFunction( arg =
) ) {
								if ( !options.unique || !self.has( arg ) ) {									list.push( =
arg );
								}							} else if ( arg &amp;&amp; arg.length &amp;&amp; toType( =
arg )=20
!=3D=3D "string" ) {								// Inspect recursively								add( arg );				=
			}						}=20
);					} )( arguments );					if ( memory &amp;&amp; !firing ) {						=
fire();
					}				}				return this;			},			// Remove a callback from the list			=
remove:=20
function() {				jQuery.each( arguments, function( _, arg ) {					var =
index;
					while ( ( index =3D jQuery.inArray( arg, list, index ) ) &gt; -1 ) =
{
						list.splice( index, 1 );						// Handle firing indexes						if ( =
index=20
&lt;=3D firingIndex ) {							firingIndex--;						}					}				} );				=
return this;
			},			// Check if a given callback is in the list.			// If no argument =
is=20
given, return whether or not list has callbacks attached.			has: =
function( fn )=20
{				return fn ?					jQuery.inArray( fn, list ) &gt; -1 :					=
list.length &gt;=20
0;			},			// Remove all callbacks from the list			empty: function() {				=
if (=20
list ) {					list =3D [];				}				return this;			},			// Disable .fire =
and .add
			// Abort any current/pending executions			// Clear all callbacks and =
values
			disable: function() {				locked =3D queue =3D [];				list =3D memory =
=3D "";
				return this;			},			disabled: function() {				return !list;			},			=
//=20
Disable .fire			// Also disable .add unless we have memory (since it =
would have=20
no effect)			// Abort any pending executions			lock: function() {				=
locked =3D=20
queue =3D [];				if ( !memory &amp;&amp; !firing ) {					list =3D memory =
=3D "";				}
				return this;			},			locked: function() {				return !!locked;			},			=
// Call=20
all callbacks with the given context and arguments			fireWith: function( =

context, args ) {				if ( !locked ) {					args =3D args || [];					args =
=3D [=20
context, args.slice ? args.slice() : args ];					queue.push( args );					=
if (=20
!firing ) {						fire();					}				}				return this;			},			// Call all =
the=20
callbacks with the given arguments			fire: function() {				=
self.fireWith( this,=20
arguments );				return this;			},			// To know if the callbacks have =
already=20
been called at least once			fired: function() {				return !!fired;			}		=
};
	return self; }; function Identity( v ) {	return v; } function Thrower( =
ex ) {
	throw ex; } function adoptValue( value, resolve, reject, noValue ) {	=
var=20
method;	try {		// Check for promise aspect first to privilege =
synchronous=20
behavior		if ( value &amp;&amp; isFunction( ( method =3D value.promise ) =
) ) {
			method.call( value ).done( resolve ).fail( reject );		// Other =
thenables		}=20
else if ( value &amp;&amp; isFunction( ( method =3D value.then ) ) ) {
			method.call( value, resolve, reject );		// Other non-thenables		} =
else {			//=20
Control `resolve` arguments by letting Array#slice cast boolean =
`noValue` to=20
integer:			// * false: [ value ].slice( 0 ) =3D&gt; resolve( value )			=
// * true:=20
[ value ].slice( 1 ) =3D&gt; resolve()			resolve.apply( undefined, [ =
value=20
].slice( noValue ) );		}	// For Promises/A+, convert exceptions into =
rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra =
checks=20
appearing in	// Deferred#then to conditionally suppress rejection.	} =
catch (=20
value ) {		// Support: Android 4.0 only		// Strict mode functions =
invoked=20
without .call/.apply get global-object context		reject.apply( undefined, =
[ value=20
] );	} } jQuery.extend( {	Deferred: function( func ) {		var tuples =3D [	=
			//=20
action, add listener, callbacks,				// ... .then handlers, argument =
index,=20
[final state]				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],				[ "resolve", "done",=20
jQuery.Callbacks( "once memory" ),					jQuery.Callbacks( "once memory" =
), 0,=20
"resolved" ],				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]			],			state =3D =

"pending",			promise =3D {				state: function() {					return state;				=
},
				always: function() {					deferred.done( arguments ).fail( arguments =
);
					return this;				},				"catch": function( fn ) {					return =
promise.then(=20
null, fn );				},				// Keep pipe for back-compat				pipe: function( /* =
fnDone,=20
fnFail, fnProgress */ ) {					var fns =3D arguments;					return =
jQuery.Deferred(=20
function( newDefer ) {						jQuery.each( tuples, function( i, tuple ) {		=
					//=20
Map tuples (progress, done, fail) to arguments (done, fail, progress)				=
			var=20
fn =3D isFunction( fns[ tuple[ 4 ] ] ) &amp;&amp; fns[ tuple[ 4 ] ];					=
		//=20
deferred.progress(function() { bind to newDefer or newDefer.notify })				=
			//=20
deferred.done(function() { bind to newDefer or newDefer.resolve })							=
//=20
deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {								var returned =3D fn =
&amp;&amp;=20
fn.apply( this, arguments );								if ( returned &amp;&amp; isFunction( =

returned.promise ) ) {									returned.promise()										.progress(=20
newDefer.notify )										.done( newDefer.resolve )										.fail(=20
newDefer.reject );								} else {									newDefer[ tuple[ 0 ] + "With" =
](
										this,										fn ? [ returned ] : arguments									);								=
}
							} );						} );						fns =3D null;					} ).promise();				},				=
then:=20
function( onFulfilled, onRejected, onProgress ) {					var maxDepth =3D =
0;
					function resolve( depth, deferred, handler, special ) {						return =

function() {							var that =3D this,								args =3D arguments,								=
mightThrow =3D=20
function() {									var returned, then;									// Support: Promises/A+ =
section=20
2.3.3.3.3									// https://promisesaplus.com/#point-59									// =
Ignore=20
double-resolution attempts									if ( depth &lt; maxDepth ) {										=
return;
									}									returned =3D handler.apply( that, args );									// =
Support:=20
Promises/A+ section 2.3.1									// https://promisesaplus.com/#point-48
									if ( returned =3D=3D=3D deferred.promise() ) {										throw =
new TypeError(=20
"Thenable self-resolution" );									}									// Support: Promises/A+ =
sections=20
2.3.3.1, 3.5									// https://promisesaplus.com/#point-54									//=20
https://promisesaplus.com/#point-75									// Retrieve `then` only once
									then =3D returned &amp;&amp;										// Support: Promises/A+ =
section=20
2.3.4										// https://promisesaplus.com/#point-64										// Only =
check=20
objects and functions for thenability										( typeof returned =
=3D=3D=3D "object" ||
											typeof returned =3D=3D=3D "function" ) &amp;&amp;										=
returned.then;
									// Handle a returned thenable									if ( isFunction( then ) ) =
{
										// Special processors (notify) just wait for resolution								=
		if (=20
special ) {											then.call(												returned,												=
resolve(=20
maxDepth, deferred, Identity, special ),												resolve( maxDepth, =
deferred,=20
Thrower, special )											);										// Normal processors (resolve) =
also=20
hook into progress										} else {											// ...and disregard older =

resolution values											maxDepth++;											then.call(
												returned,												resolve( maxDepth, deferred, Identity, =
special=20
),												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )											);										}									// =
Handle all=20
other returned values									} else {										// Only substitute =
handlers pass=20
on context										// and multiple values (non-spec behavior)										=
if (=20
handler !=3D=3D Identity ) {											that =3D undefined;											=
args =3D [ returned=20
];										}										// Process the value(s)										// Default =
process is=20
resolve										( special || deferred.resolveWith )( that, args );						=
			}
								},								// Only normal processors (resolve) catch and reject=20
exceptions								process =3D special ?									mightThrow :									=
function() {
										try {											mightThrow();										} catch ( e ) {									=
		if (=20
jQuery.Deferred.exceptionHook ) {												=
jQuery.Deferred.exceptionHook( e,
													process.stackTrace );											}											// Support: =
Promises/A+=20
section 2.3.3.3.4.1											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions											if ( depth + 1 =
&gt;=3D=20
maxDepth ) {												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)												if ( =
handler=20
!=3D=3D Thrower ) {													that =3D undefined;													args =3D =
[ e ];
												}												deferred.rejectWith( that, args );											}
										}									};							// Support: Promises/A+ section 2.3.3.3.1			=
				//=20
https://promisesaplus.com/#point-57							// Re-resolve promises =
immediately to=20
dodge false rejection from							// subsequent errors							if ( depth ) =
{
								process();							} else {								// Call an optional hook to =
record the=20
stack, in case of exception								// since it's otherwise lost when =
execution=20
goes async								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace =3D jQuery.Deferred.getStackHook();								}
								window.setTimeout( process );							}						};					}					return=20
jQuery.Deferred( function( newDefer ) {						// progress_handlers.add( =
... )
						tuples[ 0 ][ 3 ].add(							resolve(								0,								newDefer,
								isFunction( onProgress ) ?									onProgress :									=
Identity,
								newDefer.notifyWith							)						);						// =
fulfilled_handlers.add( ...=20
)						tuples[ 1 ][ 3 ].add(							resolve(								0,								newDefer,
								isFunction( onFulfilled ) ?									onFulfilled :									=
Identity
							)						);						// rejected_handlers.add( ... )						tuples[ 2 ][ =
3 ].add(
							resolve(								0,								newDefer,								isFunction( onRejected =
) ?
									onRejected :									Thrower							)						);					} ).promise();	=
			},
				// Get a promise for this deferred				// If obj is provided, the =
promise=20
aspect is added to the object				promise: function( obj ) {					return =
obj !=3D=20
null ? jQuery.extend( obj, promise ) : promise;				}			},			deferred =3D =
{};		//=20
Add list-specific methods		jQuery.each( tuples, function( i, tuple ) {			=
var=20
list =3D tuple[ 2 ],				stateString =3D tuple[ 5 ];			// =
promise.progress =3D list.add
			// promise.done =3D list.add			// promise.fail =3D list.add			=
promise[ tuple[ 1 ]=20
] =3D list.add;			// Handle state			if ( stateString ) {				list.add(
					function() {						// state =3D "resolved" (i.e., fulfilled)						// =
state =3D=20
"rejected"						state =3D stateString;					},					// =
rejected_callbacks.disable
					// fulfilled_callbacks.disable					tuples[ 3 - i ][ 2 ].disable,				=
	//=20
rejected_handlers.disable					// fulfilled_handlers.disable					tuples[ =
3 - i ][=20
3 ].disable,					// progress_callbacks.lock					tuples[ 0 ][ 2 ].lock,			=
		//=20
progress_handlers.lock					tuples[ 0 ][ 3 ].lock				);			}			//=20
progress_handlers.fire			// fulfilled_handlers.fire			// =
rejected_handlers.fire
			list.add( tuple[ 3 ].fire );			// deferred.notify =3D function() {=20
deferred.notifyWith(...) }			// deferred.resolve =3D function() {=20
deferred.resolveWith(...) }			// deferred.reject =3D function() {=20
deferred.rejectWith(...) }			deferred[ tuple[ 0 ] ] =3D function() {				=
deferred[=20
tuple[ 0 ] + "With" ]( this =3D=3D=3D deferred ? undefined : this, =
arguments );
				return this;			};			// deferred.notifyWith =3D list.fireWith			//=20
deferred.resolveWith =3D list.fireWith			// deferred.rejectWith =3D =
list.fireWith
			deferred[ tuple[ 0 ] + "With" ] =3D list.fireWith;		} );		// Make the =
deferred=20
a promise		promise.promise( deferred );		// Call given func if any		if ( =
func )=20
{			func.call( deferred, deferred );		}		// All done!		return deferred;	=
},	//=20
Deferred helper	when: function( singleValue ) {		var			// count of =
uncompleted=20
subordinates			remaining =3D arguments.length,			// count of unprocessed =
arguments
			i =3D remaining,			// subordinate fulfillment data			resolveContexts =
=3D Array( i=20
),			resolveValues =3D slice.call( arguments ),			// the master Deferred	=
		master=20
=3D jQuery.Deferred(),			// subordinate callback factory			updateFunc =
=3D function(=20
i ) {				return function( value ) {					resolveContexts[ i ] =3D this;
					resolveValues[ i ] =3D arguments.length &gt; 1 ? slice.call( =
arguments ) :=20
value;					if ( !( --remaining ) ) {						master.resolveWith( =
resolveContexts,=20
resolveValues );					}				};			};		// Single- and empty arguments are =
adopted=20
like Promise.resolve		if ( remaining &lt;=3D 1 ) {			adoptValue( =
singleValue,=20
master.done( updateFunc( i ) ).resolve, master.reject,				!remaining );		=
	// Use=20
.then() to unwrap secondary thenables (cf. gh-3000)			if ( =
master.state() =3D=3D=3D=20
"pending" ||				isFunction( resolveValues[ i ] &amp;&amp; resolveValues[ =
i=20
].then ) ) {				return master.then();			}		}		// Multiple arguments are=20
aggregated like Promise.all array elements		while ( i-- ) {			 =
adoptValue(=20
resolveValues[ i ], updateFunc( i ), master.reject );		}		return=20
master.promise();	} } ); // These usually indicate a programmer mistake =
during=20
development, // warn about them ASAP rather than swallowing them by =
default. var=20
rerrorNames =3D =
/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
 jQuery.Deferred.exceptionHook =3D function( error, stack ) {	// =
Support: IE 8 - 9=20
only	// Console exists when dev tools are open, which can happen at any =
time	if=20
( window.console &amp;&amp; window.console.warn &amp;&amp; error =
&amp;&amp;=20
rerrorNames.test( error.name ) ) {		window.console.warn( =
"jQuery.Deferred=20
exception: " + error.message, error.stack, stack );	} }; =
jQuery.readyException =3D=20
function( error ) {	window.setTimeout( function() {		throw error;	} ); =
}; // The=20
deferred used on DOM ready var readyList =3D jQuery.Deferred(); =
jQuery.fn.ready =3D=20
function( fn ) {	readyList		.then( fn )		// Wrap jQuery.readyException =
in a=20
function so that the lookup		// happens at the time of error handling =
instead of=20
callback		// registration.		.catch( function( error ) {			=
jQuery.readyException(=20
error );		} );	return this; }; jQuery.extend( {	// Is the DOM ready to =
be used?=20
Set to true once it occurs.	isReady: false,	// A counter to track how =
many items=20
to wait for before	// the ready event fires. See #6781	readyWait: 1,	// =
Handle=20
when the DOM is ready	ready: function( wait ) {		// Abort if there are =
pending=20
holds or we're already ready		if ( wait =3D=3D=3D true ? =
--jQuery.readyWait :=20
jQuery.isReady ) {			return;		}		// Remember that the DOM is ready
		jQuery.isReady =3D true;		// If a normal DOM Ready event fired, =
decrement, and=20
wait if need be		if ( wait !=3D=3D true &amp;&amp; --jQuery.readyWait =
&gt; 0 ) {
			return;		}		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );	} } ); =
jQuery.ready.then =3D=20
readyList.then; // The ready event handler and self cleanup method =
function=20
completed() {	document.removeEventListener( "DOMContentLoaded", =
completed );
	window.removeEventListener( "load", completed );	jQuery.ready(); } // =
Catch=20
cases where $(document).ready() is called // after the browser event has =
already=20
occurred. // Support: IE &lt;=3D9 - 10 only // Older IE sometimes =
signals=20
"interactive" too soon if ( document.readyState =3D=3D=3D "complete" ||	=
(=20
document.readyState !=3D=3D "loading" &amp;&amp; =
!document.documentElement.doScroll=20
) ) {	// Handle it asynchronously to allow scripts the opportunity to =
delay=20
ready	window.setTimeout( jQuery.ready ); } else {	// Use the handy event =

callback	document.addEventListener( "DOMContentLoaded", completed );	// =
A=20
fallback to window.onload, that will always work	=
window.addEventListener(=20
"load", completed ); } // Multifunctional method to get and set values =
of a=20
collection // The value/s can optionally be executed if it's a function =
var=20
access =3D function( elems, fn, key, value, chainable, emptyGet, raw ) {	=
var i =3D=20
0,		len =3D elems.length,		bulk =3D key =3D=3D null;	// Sets many values	=
if ( toType(=20
key ) =3D=3D=3D "object" ) {		chainable =3D true;		for ( i in key ) {			=
access( elems,=20
fn, i, key[ i ], true, emptyGet, raw );		}	// Sets one value	} else if ( =
value=20
!=3D=3D undefined ) {		chainable =3D true;		if ( !isFunction( value ) ) =
{			raw =3D=20
true;		}		if ( bulk ) {			// Bulk operations run against the entire set		=
	if (=20
raw ) {				fn.call( elems, value );				fn =3D null;			// ...except when =
executing=20
function values			} else {				bulk =3D fn;				fn =3D function( elem, =
key, value ) {
					return bulk.call( jQuery( elem ), value );				};			}		}		if ( fn ) =
{			for=20
( ; i &lt; len; i++ ) {				fn(					elems[ i ], key, raw ?					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )				);			}		}	}	=
if (=20
chainable ) {		return elems;	}	// Gets	if ( bulk ) {		return fn.call( =
elems );	}
	return len ? fn( elems[ 0 ], key ) : emptyGet; }; // Matches dashed =
string for=20
camelizing var rmsPrefix =3D /^-ms-/,	rdashAlpha =3D /-([a-z])/g; // =
Used by=20
camelCase as callback to replace() function fcamelCase( all, letter ) {	=
return=20
letter.toUpperCase(); } // Convert dashed to camelCase; used by the css =
and data=20
modules // Support: IE &lt;=3D9 - 11, Edge 12 - 15 // Microsoft forgot =
to hump=20
their vendor prefix (#9572) function camelCase( string ) {	return=20
string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase ); } =
var=20
acceptData =3D function( owner ) {	// Accepts only:	//  - Node	//    -=20
Node.ELEMENT_NODE	//    - Node.DOCUMENT_NODE	//  - Object	//    - Any	=
return=20
owner.nodeType =3D=3D=3D 1 || owner.nodeType =3D=3D=3D 9 || !( =
+owner.nodeType ); };
 function Data() {	this.expando =3D jQuery.expando + Data.uid++; } =
Data.uid =3D 1;
 Data.prototype =3D {	cache: function( owner ) {		// Check if the owner =
object=20
already has a cache		var value =3D owner[ this.expando ];		// If not, =
create one
		if ( !value ) {			value =3D {};			// We can accept data for =
non-element nodes in=20
modern browsers,			// but we should not, see #8335.			// Always return =
an empty=20
object.			if ( acceptData( owner ) ) {				// If it is a node unlikely to =
be=20
stringify-ed or looped over				// use plain assignment				if ( =
owner.nodeType )=20
{					owner[ this.expando ] =3D value;				// Otherwise secure it in a=20
non-enumerable property				// configurable must be true to allow the =
property to=20
be				// deleted when data is removed				} else {					=
Object.defineProperty(=20
owner, this.expando, {						value: value,						configurable: true					} =
);				}
			}		}		return value;	},	set: function( owner, data, value ) {		var =
prop,
			cache =3D this.cache( owner );		// Handle: [ owner, key, value ] args	=
	//=20
Always use camelCase key (gh-2257)		if ( typeof data =3D=3D=3D "string" =
) {			cache[=20
camelCase( data ) ] =3D value;		// Handle: [ owner, { properties } ] =
args		} else=20
{			// Copy the properties one-by-one to the cache object			for ( prop =
in data )=20
{				cache[ camelCase( prop ) ] =3D data[ prop ];			}		}		return cache;	=
},	get:=20
function( owner, key ) {		return key =3D=3D=3D undefined ?			this.cache( =
owner ) :
			// Always use camelCase key (gh-2257)			owner[ this.expando ] =
&amp;&amp;=20
owner[ this.expando ][ camelCase( key ) ];	},	access: function( owner, =
key,=20
value ) {		// In cases where either:		//		//   1. No key was specified		=
//   2.=20
A string key was specified, but no value provided		//		// Take the =
"read" path=20
and allow the get method to determine		// which value to return, =
respectively=20
either:		//		//   1. The entire cache object		//   2. The data stored at =
the key
		//		if ( key =3D=3D=3D undefined ||				( ( key &amp;&amp; typeof key =
=3D=3D=3D "string" )=20
&amp;&amp; value =3D=3D=3D undefined ) ) {			return this.get( owner, key =
);		}		//=20
When the key is not a string, or both a key and value		// are specified, =
set or=20
extend (existing objects) with either:		//		//   1. An object of =
properties		// =20
 2. A key and value		//		this.set( owner, key, value );		// Since the =
"set" path=20
can have two possible entry points		// return the expected data based on =
which=20
path was taken[*]		return value !=3D=3D undefined ? value : key;	},	=
remove:=20
function( owner, key ) {		var i,			cache =3D owner[ this.expando ];		if =
( cache=20
=3D=3D=3D undefined ) {			return;		}		if ( key !=3D=3D undefined ) {			=
// Support array or=20
space separated string of keys			if ( Array.isArray( key ) ) {				// If =
key is=20
an array of keys...				// We always set camelCase keys, so remove that.		=
		key =3D=20
key.map( camelCase );			} else {				key =3D camelCase( key );				// If a =
key with=20
the spaces exists, use it.				// Otherwise, create an array by matching=20
non-whitespace				key =3D key in cache ?					[ key ] :					( key.match(=20
rnothtmlwhite ) || [] );			}			i =3D key.length;			while ( i-- ) {				=
delete=20
cache[ key[ i ] ];			}		}		// Remove the expando if there's no more data	=
	if (=20
key =3D=3D=3D undefined || jQuery.isEmptyObject( cache ) ) {			// =
Support: Chrome=20
&lt;=3D35 - 45			// Webkit &amp; Blink performance suffers when deleting =

properties			// from DOM nodes, so set to undefined instead			//=20
https://bugs.chromium.org/p/chromium/issues/detail?id=3D378607 (bug =
restricted)
			if ( owner.nodeType ) {				owner[ this.expando ] =3D undefined;			} =
else {
				delete owner[ this.expando ];			}		}	},	hasData: function( owner ) {	=
	var=20
cache =3D owner[ this.expando ];		return cache !=3D=3D undefined =
&amp;&amp;=20
!jQuery.isEmptyObject( cache );	} }; var dataPriv =3D new Data(); var =
dataUser =3D=20
new Data(); //	Implementation Summary // //	1. Enforce API surface and =
semantic=20
compatibility with 1.9.x branch //	2. Improve the module's =
maintainability by=20
reducing the storage //		paths to a single mechanism. //	3. Use the same =
single=20
mechanism to support "private" and "user" data. //	4. _Never_ expose =
"private"=20
data to user code (TODO: Drop _data, _removeData) //	5. Avoid exposing=20
implementation details on user objects (eg. expando properties) //	6. =
Provide a=20
clear path for implementation upgrade to WeakMap in 2014 var rbrace =3D=20
/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,	rmultiDash =3D /[A-Z]/g; function =
getData( data )=20
{	if ( data =3D=3D=3D "true" ) {		return true;	}	if ( data =3D=3D=3D =
"false" ) {		return=20
false;	}	if ( data =3D=3D=3D "null" ) {		return null;	}	// Only convert =
to a number if=20
it doesn't change the string	if ( data =3D=3D=3D +data + "" ) {		return =
+data;	}	if (=20
rbrace.test( data ) ) {		return JSON.parse( data );	}	return data; } =
function=20
dataAttr( elem, key, data ) {	var name;	// If nothing was found =
internally, try=20
to fetch any	// data from the HTML5 data-* attribute	if ( data =3D=3D=3D =
undefined=20
&amp;&amp; elem.nodeType =3D=3D=3D 1 ) {		name =3D "data-" + =
key.replace( rmultiDash,=20
"-$&amp;" ).toLowerCase();		data =3D elem.getAttribute( name );		if ( =
typeof data=20
=3D=3D=3D "string" ) {			try {				data =3D getData( data );			} catch ( =
e ) {}			// Make=20
sure we set the data so it isn't changed later			dataUser.set( elem, =
key, data=20
);		} else {			data =3D undefined;		}	}	return data; } jQuery.extend( {	=
hasData:=20
function( elem ) {		return dataUser.hasData( elem ) || dataPriv.hasData( =
elem );
	},	data: function( elem, name, data ) {		return dataUser.access( elem, =
name,=20
data );	},	removeData: function( elem, name ) {		dataUser.remove( elem, =
name );
	},	// TODO: Now that all calls to _data and _removeData have been =
replaced	//=20
with direct calls to dataPriv methods, these can be deprecated.	_data: =
function(=20
elem, name, data ) {		return dataPriv.access( elem, name, data );	},
	_removeData: function( elem, name ) {		dataPriv.remove( elem, name );	} =
} );
 jQuery.fn.extend( {	data: function( key, value ) {		var i, name, data,		=
	elem =3D=20
this[ 0 ],			attrs =3D elem &amp;&amp; elem.attributes;		// Gets all =
values		if (=20
key =3D=3D=3D undefined ) {			if ( this.length ) {				data =3D =
dataUser.get( elem );
				if ( elem.nodeType =3D=3D=3D 1 &amp;&amp; !dataPriv.get( elem, =
"hasDataAttrs" ) )=20
{					i =3D attrs.length;					while ( i-- ) {						// Support: IE 11 =
only						//=20
The attrs elements can be null (#14894)						if ( attrs[ i ] ) {							=
name =3D=20
attrs[ i ].name;							if ( name.indexOf( "data-" ) =3D=3D=3D 0 ) {						=
		name =3D=20
camelCase( name.slice( 5 ) );								dataAttr( elem, name, data[ name ] =
);
							}						}					}					dataPriv.set( elem, "hasDataAttrs", true );				=
}			}
			return data;		}		// Sets multiple values		if ( typeof key =3D=3D=3D =
"object" ) {
			return this.each( function() {				dataUser.set( this, key );			} );		=
}
		return access( this, function( value ) {			var data;			// The calling =
jQuery=20
object (element matches) is not empty			// (and therefore has an element =
appears=20
at this[ 0 ]) and the			// `value` parameter was not undefined. An empty =
jQuery=20
object			// will result in `undefined` for elem =3D this[ 0 ] which will	=
		//=20
throw an exception if an attempt to read a data cache is made.			if ( =
elem=20
&amp;&amp; value =3D=3D=3D undefined ) {				// Attempt to get data from =
the cache
				// The key will always be camelCased in Data				data =3D =
dataUser.get( elem,=20
key );				if ( data !=3D=3D undefined ) {					return data;				}				// =
Attempt to=20
"discover" the data in				// HTML5 custom data-* attrs				data =3D =
dataAttr( elem,=20
key );				if ( data !=3D=3D undefined ) {					return data;				}				// We =
tried=20
really hard, but the data doesn't exist.				return;			}			// Set the =
data...
			this.each( function() {				// We always store the camelCased key
				dataUser.set( this, key, value );			} );		}, null, value, =
arguments.length=20
&gt; 1, null, true );	},	removeData: function( key ) {		return =
this.each(=20
function() {			dataUser.remove( this, key );		} );	} } ); jQuery.extend( =
{
	queue: function( elem, type, data ) {		var queue;		if ( elem ) {			type =
=3D (=20
type || "fx" ) + "queue";			queue =3D dataPriv.get( elem, type );			// =
Speed up=20
dequeue by getting out quickly if this is just a lookup			if ( data ) {		=
		if (=20
!queue || Array.isArray( data ) ) {					queue =3D dataPriv.access( elem, =
type,=20
jQuery.makeArray( data ) );				} else {					queue.push( data );				}			}
			return queue || [];		}	},	dequeue: function( elem, type ) {		type =3D =
type ||=20
"fx";		var queue =3D jQuery.queue( elem, type ),			startLength =3D =
queue.length,
			fn =3D queue.shift(),			hooks =3D jQuery._queueHooks( elem, type ),			=
next =3D=20
function() {				jQuery.dequeue( elem, type );			};		// If the fx queue =
is=20
dequeued, always remove the progress sentinel		if ( fn =3D=3D=3D =
"inprogress" ) {			fn=20
=3D queue.shift();			startLength--;		}		 if ( fn ) {			// Add a progress =
sentinel=20
to prevent the fx queue from being			// automatically dequeued			if ( =
type =3D=3D=3D=20
"fx" ) {				queue.unshift( "inprogress" );			}			// Clear up the last =
queue stop=20
function			delete hooks.stop;			fn.call( elem, next, hooks );		}		if (=20
!startLength &amp;&amp; hooks ) {			hooks.empty.fire();		}	},	// Not =
public -=20
generate a queueHooks object, or return the current one	_queueHooks: =
function(=20
elem, type ) {		var key =3D type + "queueHooks";		return dataPriv.get( =
elem, key )=20
|| dataPriv.access( elem, key, {			empty: jQuery.Callbacks( "once =
memory" ).add(=20
function() {				dataPriv.remove( elem, [ type + "queue", key ] );			} )		=
} );	}
 } ); jQuery.fn.extend( {	queue: function( type, data ) {		var setter =
=3D 2;		if (=20
typeof type !=3D=3D "string" ) {			data =3D type;			type =3D "fx";			=
setter--;		}		 if (=20
arguments.length &lt; setter ) {			return jQuery.queue( this[ 0 ], type =
);		}
		return data =3D=3D=3D undefined ?			this :			this.each( function() {			=
	var queue =3D=20
jQuery.queue( this, type, data );				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );				if ( type =3D=3D=3D "fx" =
&amp;&amp; queue[ 0=20
] !=3D=3D "inprogress" ) {					jQuery.dequeue( this, type );				}			} );	=
},	dequeue:=20
function( type ) {		return this.each( function() {			jQuery.dequeue( =
this, type=20
);		} );	},	clearQueue: function( type ) {		return this.queue( type || =
"fx", []=20
);	},	// Get a promise resolved when queues of a certain type	// are =
emptied (fx=20
is the type by default)	promise: function( type, obj ) {		var tmp,			=
count =3D 1,
			defer =3D jQuery.Deferred(),			elements =3D this,			i =3D =
this.length,			resolve =3D=20
function() {				if ( !( --count ) ) {					defer.resolveWith( elements, [ =

elements ] );				}			};		if ( typeof type !=3D=3D "string" ) {			obj =3D =
type;			type=20
=3D undefined;		}		type =3D type || "fx";		while ( i-- ) {			 tmp =3D =
dataPriv.get(=20
elements[ i ], type + "queueHooks" );			if ( tmp &amp;&amp; tmp.empty ) =
{
				count++;				tmp.empty.add( resolve );			}		}		resolve();		return=20
defer.promise( obj );	} } ); var pnum =3D ( =
/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/=20
).source; var rcssNum =3D new RegExp( "^(?:([+-])=3D|)(" + pnum + =
")([a-z%]*)$", "i"=20
); var cssExpand =3D [ "Top", "Right", "Bottom", "Left" ]; var =
isHiddenWithinTree=20
=3D function( elem, el ) {		// isHiddenWithinTree might be called from=20
jQuery#filter function;		// in that case, element will be second =
argument		elem=20
=3D el || elem;		// Inline style trumps all		return elem.style.display =
=3D=3D=3D "none"=20
||			elem.style.display =3D=3D=3D "" &amp;&amp;			// Otherwise, check =
computed style
			// Support: Firefox &lt;=3D43 - 45			// Disconnected elements can =
have computed=20
display: none, so first confirm that elem is			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &amp;&amp;			jQuery.css( =
elem,=20
"display" ) =3D=3D=3D "none";	}; var swap =3D function( elem, options, =
callback, args )=20
{	var ret, name,		old =3D {};	// Remember the old values, and insert the =
new ones
	for ( name in options ) {		old[ name ] =3D elem.style[ name ];		=
elem.style[ name=20
] =3D options[ name ];	}	ret =3D callback.apply( elem, args || [] );	// =
Revert the=20
old values	for ( name in options ) {		elem.style[ name ] =3D old[ name =
];	}	return=20
ret; }; function adjustCSS( elem, prop, valueParts, tween ) {	var =
adjusted,=20
scale,		maxIterations =3D 20,		currentValue =3D tween ?			function() {			=
	return=20
tween.cur();			} :			function() {				return jQuery.css( elem, prop, "" =
);			},
		initial =3D currentValue(),		unit =3D valueParts &amp;&amp; =
valueParts[ 3 ] || (=20
jQuery.cssNumber[ prop ] ? "" : "px" ),		// Starting value computation =
is=20
required for potential unit mismatches		initialInUnit =3D ( =
jQuery.cssNumber[ prop=20
] || unit !=3D=3D "px" &amp;&amp; +initial ) &amp;&amp;			rcssNum.exec( =
jQuery.css(=20
elem, prop ) );	if ( initialInUnit &amp;&amp; initialInUnit[ 3 ] !=3D=3D =
unit ) {
		// Support: Firefox &lt;=3D54		// Halve the iteration target value to =
prevent=20
interference from CSS upper bounds (gh-2144)		initial =3D initial / 2;		=
// Trust=20
units reported by jQuery.css		unit =3D unit || initialInUnit[ 3 ];		// =
Iteratively=20
approximate from a nonzero starting point		initialInUnit =3D +initial || =
1;		while=20
( maxIterations-- ) {			// Evaluate and update our best guess (doubling =
guesses=20
that zero out).			// Finish if the scale equals or crosses 1 (making the =
old*new=20
product non-positive).			jQuery.style( elem, prop, initialInUnit + unit =
);			if=20
( ( 1 - scale ) * ( 1 - ( scale =3D currentValue() / initial || 0.5 ) ) =
&lt;=3D 0 )=20
{				maxIterations =3D 0;			}			initialInUnit =3D initialInUnit / scale;	=
	}
		initialInUnit =3D initialInUnit * 2;		jQuery.style( elem, prop, =
initialInUnit +=20
unit );		// Make sure we update the tween properties later on		=
valueParts =3D=20
valueParts || [];	}	if ( valueParts ) {		initialInUnit =3D =
+initialInUnit ||=20
+initial || 0;		// Apply relative offset (+=3D/-=3D) if specified		=
adjusted =3D=20
valueParts[ 1 ] ?			initialInUnit + ( valueParts[ 1 ] + 1 ) * =
valueParts[ 2 ] :
			+valueParts[ 2 ];		if ( tween ) {			tween.unit =3D unit;			=
tween.start =3D=20
initialInUnit;			tween.end =3D adjusted;		}	}	return adjusted; } var=20
defaultDisplayMap =3D {}; function getDefaultDisplay( elem ) {	var temp,	=
	doc =3D=20
elem.ownerDocument,		nodeName =3D elem.nodeName,		display =3D =
defaultDisplayMap[=20
nodeName ];	if ( display ) {		return display;	}	temp =3D =
doc.body.appendChild(=20
doc.createElement( nodeName ) );	display =3D jQuery.css( temp, "display" =
);
	temp.parentNode.removeChild( temp );	if ( display =3D=3D=3D "none" ) {		=
display =3D=20
"block";	}	defaultDisplayMap[ nodeName ] =3D display;	return display; } =
function=20
showHide( elements, show ) {	var display, elem,		values =3D [],		index =
=3D 0,
		length =3D elements.length;	// Determine new display value for =
elements that=20
need to change	for ( ; index &lt; length; index++ ) {		elem =3D =
elements[ index ];
		if ( !elem.style ) {			continue;		}		display =3D elem.style.display;		=
if ( show=20
) {			// Since we force visibility upon cascade-hidden elements, an =
immediate=20
(and slow)			// check is required in this first loop unless we have a =
nonempty=20
display value (either			// inline or about-to-be-restored)			if ( =
display =3D=3D=3D=20
"none" ) {				values[ index ] =3D dataPriv.get( elem, "display" ) || =
null;				if (=20
!values[ index ] ) {					elem.style.display =3D "";				}			}			if (=20
elem.style.display =3D=3D=3D "" &amp;&amp; isHiddenWithinTree( elem ) ) =
{				values[=20
index ] =3D getDefaultDisplay( elem );			}		} else {			if ( display =
!=3D=3D "none" ) {
				values[ index ] =3D "none";				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );			}		}	}	// Set the =
display of the=20
elements in a second loop to avoid constant reflow	for ( index =3D 0; =
index &lt;=20
length; index++ ) {		if ( values[ index ] !=3D null ) {			elements[ =
index=20
].style.display =3D values[ index ];		}	}	return elements; } =
jQuery.fn.extend( {
	show: function() {		return showHide( this, true );	},	hide: function() =
{
		return showHide( this );	},	toggle: function( state ) {		if ( typeof =
state =3D=3D=3D=20
"boolean" ) {			return state ? this.show() : this.hide();		}		return =
this.each(=20
function() {			if ( isHiddenWithinTree( this ) ) {				jQuery( this =
).show();			}=20
else {				jQuery( this ).hide();			}		} );	} } ); var rcheckableType =3D =
(=20
/^(?:checkbox|radio)$/i ); var rtagName =3D (=20
/&lt;([a-z][^\/\0&gt;\x20\t\r\n\f]+)/i ); var rscriptType =3D (=20
/^$|^module$|\/(?:java|ecma)script/i ); // We have to close these tags =
to=20
support XHTML (#13200) var wrapMap =3D {	// Support: IE &lt;=3D9 only	=
option: [ 1,=20
"<SELECT multiple=3D"multiple">", "</SELECT>" ],	// XHTML parsers do not =
magically=20
insert elements in the	// same way that tag soup parsers do. So we =
cannot=20
shorten	// this by omitting  or other required elements.	thead: [ 1, "", =
"
<TABLE></TABLE>" ],	col: [ 2, "", "
<TABLE>
  <COLGROUP></COLGROUP></TABLE>" ],	tr: [ 2, "", "
<TABLE>
  <TBODY></TBODY></TABLE>" ],	td: [ 3, "", "
<TABLE>
  <TBODY>
  <TR></TR></TBODY></TABLE>" ],	_default: [ 0, "", "" ] }; // Support: =
IE &lt;=3D9=20
only wrapMap.optgroup =3D wrapMap.option; wrapMap.tbody =3D =
wrapMap.tfoot =3D=20
wrapMap.colgroup =3D wrapMap.caption =3D wrapMap.thead; wrapMap.th =3D =
wrapMap.td;
 function getAll( context, tag ) {	// Support: IE &lt;=3D9 - 11 only	// =
Use typeof=20
to avoid zero-argument method invocation on host objects (#15151)	var =
ret;	if (=20
typeof context.getElementsByTagName !=3D=3D "undefined" ) {		ret =3D=20
context.getElementsByTagName( tag || "*" );	} else if ( typeof=20
context.querySelectorAll !=3D=3D "undefined" ) {		ret =3D =
context.querySelectorAll(=20
tag || "*" );	} else {		ret =3D [];	}	if ( tag =3D=3D=3D undefined || =
tag &amp;&amp;=20
nodeName( context, tag ) ) {		return jQuery.merge( [ context ], ret );	}	=
return=20
ret; } // Mark scripts as having already been evaluated function =
setGlobalEval(=20
elems, refElements ) {	var i =3D 0,		l =3D elems.length;	for ( ; i &lt; =
l; i++ ) {
		dataPriv.set(			elems[ i ],			"globalEval",			!refElements || =
dataPriv.get(=20
refElements[ i ], "globalEval" )		);	} } var rhtml =3D =
/&lt;|&amp;#?\w+;/;
 function buildFragment( elems, context, scripts, selection, ignored ) {	=
var=20
elem, tmp, tag, wrap, contains, j,		fragment =3D =
context.createDocumentFragment(),
		nodes =3D [],		i =3D 0,		l =3D elems.length;	for ( ; i &lt; l; i++ ) {	=
	elem =3D=20
elems[ i ];		if ( elem || elem =3D=3D=3D 0 ) {			// Add nodes directly			=
if ( toType(=20
elem ) =3D=3D=3D "object" ) {				// Support: Android &lt;=3D4.0 only, =
PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit				=
jQuery.merge( nodes,=20
elem.nodeType ? [ elem ] : elem );			// Convert non-html into a text =
node			}=20
else if ( !rhtml.test( elem ) ) {				nodes.push( context.createTextNode( =
elem )=20
);			// Convert html into DOM nodes			} else {				tmp =3D tmp ||=20
fragment.appendChild( context.createElement( "div" ) );				// =
Deserialize a=20
standard representation				tag =3D ( rtagName.exec( elem ) || [ "", "" ] =
)[ 1=20
].toLowerCase();				wrap =3D wrapMap[ tag ] || wrapMap._default;				=
tmp.innerHTML=20
=3D wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];				// Descend =
through=20
wrappers to the right content				j =3D wrap[ 0 ];				while ( j-- ) {					=
tmp =3D=20
tmp.lastChild;				}				// Support: Android &lt;=3D4.0 only, PhantomJS 1 =
only				//=20
push.apply(_, arraylike) throws on ancient WebKit				jQuery.merge( =
nodes,=20
tmp.childNodes );				// Remember the top-level container				tmp =3D=20
fragment.firstChild;				// Ensure the created nodes are orphaned =
(#12392)
				tmp.textContent =3D "";			}		}	}	// Remove wrapper from fragment
	fragment.textContent =3D "";	i =3D 0;	while ( ( elem =3D nodes[ i++ ] ) =
) {		// Skip=20
elements already in the context collection (trac-4087)		if ( selection=20
&amp;&amp; jQuery.inArray( elem, selection ) &gt; -1 ) {			if ( ignored =
) {
				ignored.push( elem );			}			continue;		}		contains =3D =
jQuery.contains(=20
elem.ownerDocument, elem );		// Append to fragment		tmp =3D getAll(=20
fragment.appendChild( elem ), "script" );		// Preserve script evaluation =
history
		if ( contains ) {			setGlobalEval( tmp );		}		// Capture executables		=
if (=20
scripts ) {			j =3D 0;			while ( ( elem =3D tmp[ j++ ] ) ) {				if (=20
rscriptType.test( elem.type || "" ) ) {					scripts.push( elem );				}			=
}		}	}
	return fragment; } ( function() {	var fragment =3D=20
document.createDocumentFragment(),		div =3D fragment.appendChild(=20
document.createElement( "div" ) ),		input =3D document.createElement( =
"input" );
	// Support: Android 4.0 - 4.3 only	// Check state lost if the name is =
set=20
(#11217)	// Support: Windows Web Apps (WWA)	// `name` and `type` must =
use=20
.setAttribute for WWA (#14901)	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );	input.setAttribute( "name", =
"t" );
	div.appendChild( input );	// Support: Android &lt;=3D4.1 only	// Older =
WebKit=20
doesn't clone checked state correctly in fragments	support.checkClone =
=3D=20
div.cloneNode( true ).cloneNode( true ).lastChild.checked;	// Support: =
IE=20
&lt;=3D11 only	// Make sure textarea (and checkbox) defaultValue is =
properly=20
cloned	div.innerHTML =3D "<TEXTAREA>x</TEXTAREA>";	=
support.noCloneChecked =3D=20
!!div.cloneNode( true ).lastChild.defaultValue; } )(); var =
documentElement =3D=20
document.documentElement; var	rkeyEvent =3D /^key/,	rmouseEvent =3D=20
/^(?:mouse|pointer|contextmenu|drag|drop)|click/,	rtypenamespace =3D=20
/^([^.]*)(?:\.(.+)|)/; function returnTrue() {	return true; } function=20
returnFalse() {	return false; } // Support: IE &lt;=3D9 only // See =
#13393 for=20
more info function safeActiveElement() {	try {		return =
document.activeElement;	}=20
catch ( err ) { } } function on( elem, types, selector, data, fn, one ) =
{	var=20
origFn, type;	// Types can be a map of types/handlers	if ( typeof types =
=3D=3D=3D=20
"object" ) {		// ( types-Object, selector, data )		if ( typeof selector =
!=3D=3D=20
"string" ) {			// ( types-Object, data )			data =3D data || selector;			=
selector =3D=20
undefined;		}		for ( type in types ) {			on( elem, type, selector, data, =
types[=20
type ], one );		}		return elem;	}	if ( data =3D=3D null &amp;&amp; fn =
=3D=3D null ) {
		// ( types, fn )		fn =3D selector;		data =3D selector =3D undefined;	} =
else if ( fn=20
=3D=3D null ) {		if ( typeof selector =3D=3D=3D "string" ) {			// ( =
types, selector, fn )
			fn =3D data;			data =3D undefined;		} else {			// ( types, data, fn )	=
		fn =3D=20
data;			data =3D selector;			selector =3D undefined;		}	}	if ( fn =
=3D=3D=3D false ) {		fn=20
=3D returnFalse;	} else if ( !fn ) {		return elem;	}	if ( one =3D=3D=3D =
1 ) {		origFn =3D=20
fn;		fn =3D function( event ) {			// Can use an empty set, since event =
contains=20
the info			jQuery().off( event );			return origFn.apply( this, arguments =
);		};
		// Use same guid so caller can remove using origFn		fn.guid =3D =
origFn.guid || (=20
origFn.guid =3D jQuery.guid++ );	}	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );	} ); } /* * =
Helper=20
functions for managing events -- not part of the public interface. * =
Props to=20
Dean Edwards' addEvent library for many of the ideas. */ jQuery.event =
=3D {
	global: {},	add: function( elem, types, handler, data, selector ) {		=
var=20
handleObjIn, eventHandle, tmp,			events, t, handleObj,			special, =
handlers,=20
type, namespaces, origType,			elemData =3D dataPriv.get( elem );		// =
Don't attach=20
events to noData or text/comment nodes (but allow plain objects)		if ( =
!elemData=20
) {			return;		}		// Caller can pass in an object of custom data in lieu =
of the=20
handler		if ( handler.handler ) {			handleObjIn =3D handler;			handler =
=3D=20
handleObjIn.handler;			selector =3D handleObjIn.selector;		}		// Ensure =
that=20
invalid selectors throw exceptions at attach time		// Evaluate against=20
documentElement in case elem is a non-element node (e.g., document)		if =
(=20
selector ) {			jQuery.find.matchesSelector( documentElement, selector );	=
	}		//=20
Make sure that the handler has a unique ID, used to find/remove it later	=
	if (=20
!handler.guid ) {			handler.guid =3D jQuery.guid++;		}		// Init the =
element's=20
event structure and main handler, if this is the first		if ( !( events =
=3D=20
elemData.events ) ) {			events =3D elemData.events =3D {};		}		if ( !( =
eventHandle =3D=20
elemData.handle ) ) {			eventHandle =3D elemData.handle =3D function( e =
) {				//=20
Discard the second event of a jQuery.event.trigger() and				// when an =
event is=20
called after a page has unloaded				return typeof jQuery !=3D=3D =
"undefined"=20
&amp;&amp; jQuery.event.triggered !=3D=3D e.type ?					=
jQuery.event.dispatch.apply(=20
elem, arguments ) : undefined;			};		}		// Handle multiple events =
separated by a=20
space		types =3D ( types || "" ).match( rnothtmlwhite ) || [ "" ];		t =
=3D=20
types.length;		while ( t-- ) {			 tmp =3D rtypenamespace.exec( types[ t =
] ) || [];
			type =3D origType =3D tmp[ 1 ];			namespaces =3D ( tmp[ 2 ] || "" =
).split( "."=20
).sort();			// There *must* be a type, no attaching namespace-only =
handlers			if=20
( !type ) {				continue;			}			// If event changes its type, use the =
special=20
event handlers for the changed type			special =3D jQuery.event.special[ =
type ] ||=20
{};			// If selector defined, determine special event api type, =
otherwise given=20
type			type =3D ( selector ? special.delegateType : special.bindType ) =
|| type;
			// Update special based on newly reset type			special =3D =
jQuery.event.special[=20
type ] || {};			// handleObj is passed to all event handlers			handleObj =
=3D=20
jQuery.extend( {				type: type,				origType: origType,				data: data,
				handler: handler,				guid: handler.guid,				selector: selector,
				needsContext: selector &amp;&amp; =
jQuery.expr.match.needsContext.test(=20
selector ),				namespace: namespaces.join( "." )			}, handleObjIn );			=
// Init=20
the event handler queue if we're the first			if ( !( handlers =3D =
events[ type ] )=20
) {				handlers =3D events[ type ] =3D [];				handlers.delegateCount =3D =
0;				// Only=20
use addEventListener if the special events handler returns false				if ( =

!special.setup ||					special.setup.call( elem, data, namespaces, =
eventHandle )=20
=3D=3D=3D false ) {					if ( elem.addEventListener ) {						=
elem.addEventListener(=20
type, eventHandle );					}				}			}			if ( special.add ) {				=
special.add.call(=20
elem, handleObj );				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid =3D handler.guid;				}			}			// Add to the =
element's=20
handler list, delegates in front			if ( selector ) {				handlers.splice( =

handlers.delegateCount++, 0, handleObj );			} else {				handlers.push( =
handleObj=20
);			}			// Keep track of which events have ever been used, for event=20
optimization			jQuery.event.global[ type ] =3D true;		}	},	// Detach an =
event or=20
set of events from an element	remove: function( elem, types, handler, =
selector,=20
mappedTypes ) {		var j, origCount, tmp,			events, t, handleObj,			=
special,=20
handlers, type, namespaces, origType,			elemData =3D dataPriv.hasData( =
elem )=20
&amp;&amp; dataPriv.get( elem );		if ( !elemData || !( events =3D =
elemData.events=20
) ) {			return;		}		// Once for each type.namespace in types; type may =
be=20
omitted		types =3D ( types || "" ).match( rnothtmlwhite ) || [ "" ];		t =
=3D=20
types.length;		while ( t-- ) {			 tmp =3D rtypenamespace.exec( types[ t =
] ) || [];
			type =3D origType =3D tmp[ 1 ];			namespaces =3D ( tmp[ 2 ] || "" =
).split( "."=20
).sort();			// Unbind all events (on this namespace, if provided) for =
the=20
element			if ( !type ) {				for ( type in events ) {					=
jQuery.event.remove(=20
elem, type + types[ t ], handler, selector, true );				}				continue;			=
}
			special =3D jQuery.event.special[ type ] || {};			type =3D ( selector =
?=20
special.delegateType : special.bindType ) || type;			handlers =3D =
events[ type ]=20
|| [];			tmp =3D tmp[ 2 ] &amp;&amp;				new RegExp( "(^|\\.)" + =
namespaces.join(=20
"\\.(?:.*\\.|)" ) + "(\\.|$)" );			// Remove matching events			origCount =
=3D j =3D=20
handlers.length;			while ( j-- ) {				 handleObj =3D handlers[ j ];				=
if ( (=20
mappedTypes || origType =3D=3D=3D handleObj.origType ) &amp;&amp;					( =
!handler ||=20
handler.guid =3D=3D=3D handleObj.guid ) &amp;&amp;					( !tmp || =
tmp.test(=20
handleObj.namespace ) ) &amp;&amp;					( !selector || selector =3D=3D=3D =

handleObj.selector ||						selector =3D=3D=3D "**" &amp;&amp; =
handleObj.selector ) ) {
					handlers.splice( j, 1 );					if ( handleObj.selector ) {
						handlers.delegateCount--;					}					 if ( special.remove ) {
						special.remove.call( elem, handleObj );					}				}			}			// Remove =
generic=20
event handler if we removed something and no more handlers exist			// =
(avoids=20
potential for endless recursion during removal of special event =
handlers)			if (=20
origCount &amp;&amp; !handlers.length ) {				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) =
=3D=3D=3D false ) {
					jQuery.removeEvent( elem, type, elemData.handle );				}				delete =
events[=20
type ];			}		}		// Remove data and the expando if it's no longer used		=
if (=20
jQuery.isEmptyObject( events ) ) {			dataPriv.remove( elem, "handle =
events" );
		}	},	dispatch: function( nativeEvent ) {		// Make a writable =
jQuery.Event from=20
the native event object		var event =3D jQuery.event.fix( nativeEvent );		=
var i, j,=20
ret, matched, handleObj, handlerQueue,			args =3D new Array( =
arguments.length ),
			handlers =3D ( dataPriv.get( this, "events" ) || {} )[ event.type ] =
|| [],
			special =3D jQuery.event.special[ event.type ] || {};		// Use the =
fix-ed=20
jQuery.Event rather than the (read-only) native event		args[ 0 ] =3D =
event;		for (=20
i =3D 1; i &lt; arguments.length; i++ ) {			args[ i ] =3D arguments[ i =
];		}
		event.delegateTarget =3D this;		// Call the preDispatch hook for the =
mapped=20
type, and let it bail if desired		if ( special.preDispatch &amp;&amp;=20
special.preDispatch.call( this, event ) =3D=3D=3D false ) {			return;		}	=
	// Determine=20
handlers		handlerQueue =3D jQuery.event.handlers.call( this, event, =
handlers );
		// Run delegates first; they may want to stop propagation beneath us		=
i =3D 0;
		while ( ( matched =3D handlerQueue[ i++ ] ) &amp;&amp;=20
!event.isPropagationStopped() ) {			event.currentTarget =3D =
matched.elem;			j =3D 0;
			while ( ( handleObj =3D matched.handlers[ j++ ] ) &amp;&amp;
				!event.isImmediatePropagationStopped() ) {				// Triggered event =
must either=20
1) have no namespace, or 2) have namespace(s)				// a subset or equal to =
those=20
in the bound event (both can have no namespace).				if ( =
!event.rnamespace ||=20
event.rnamespace.test( handleObj.namespace ) ) {					event.handleObj =3D =

handleObj;					event.data =3D handleObj.data;					ret =3D ( ( =
jQuery.event.special[=20
handleObj.origType ] || {} ).handle ||						handleObj.handler ).apply(=20
matched.elem, args );					if ( ret !=3D=3D undefined ) {						if ( ( =
event.result =3D=20
ret ) =3D=3D=3D false ) {							event.preventDefault();							=
event.stopPropagation();
						}					}				}			}		}		// Call the postDispatch hook for the mapped =
type		if=20
( special.postDispatch ) {			special.postDispatch.call( this, event );		=
}
		return event.result;	},	handlers: function( event, handlers ) {		var =
i,=20
handleObj, sel, matchedHandlers, matchedSelectors,			handlerQueue =3D =
[],
			delegateCount =3D handlers.delegateCount,			cur =3D event.target;		// =
Find=20
delegate handlers		if ( delegateCount &amp;&amp;			// Support: IE =
&lt;=3D9			//=20
Black-hole SVG <use> instance trees (trac-13180)			cur.nodeType =
&amp;&amp;			//=20
Support: Firefox &lt;=3D42			// Suppress spec-violating clicks =
indicating a=20
non-primary pointer button (trac-3861)			//=20
https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click			// Support: =
IE 11=20
only			// ...but not arrow key "clicks" of radio inputs, which can have =
`button`=20
-1 (gh-2343)			!( event.type =3D=3D=3D "click" &amp;&amp; event.button =
&gt;=3D 1 ) ) {
			for ( ; cur !=3D=3D this; cur =3D cur.parentNode || this ) {				// =
Don't check=20
non-elements (#13208)				// Don't process clicks on disabled elements =
(#6911,=20
#8165, #11382, #11764)				if ( cur.nodeType =3D=3D=3D 1 &amp;&amp; !( =
event.type =3D=3D=3D=20
"click" &amp;&amp; cur.disabled =3D=3D=3D true ) ) {					matchedHandlers =
=3D [];
					matchedSelectors =3D {};					for ( i =3D 0; i &lt; delegateCount; =
i++ ) {
						handleObj =3D handlers[ i ];						// Don't conflict with =
Object.prototype=20
properties (#13203)						sel =3D handleObj.selector + " ";						if (=20
matchedSelectors[ sel ] =3D=3D=3D undefined ) {							matchedSelectors[ =
sel ] =3D=20
handleObj.needsContext ?								jQuery( sel, this ).index( cur ) &gt; -1 =
:
								jQuery.find( sel, this, null, [ cur ] ).length;						}						if ( =

matchedSelectors[ sel ] ) {							matchedHandlers.push( handleObj );					=
	}
					}					if ( matchedHandlers.length ) {						handlerQueue.push( { =
elem: cur,=20
handlers: matchedHandlers } );					}				}			}		}		// Add the remaining=20
(directly-bound) handlers		cur =3D this;		if ( delegateCount &lt; =
handlers.length=20
) {			handlerQueue.push( { elem: cur, handlers: handlers.slice( =
delegateCount )=20
} );		}		return handlerQueue;	},	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {			enumerable: =
true,
			configurable: true,			get: isFunction( hook ) ?				function() {					=
if (=20
this.originalEvent ) {							return hook( this.originalEvent );					}				=
} :
				function() {					if ( this.originalEvent ) {							return=20
this.originalEvent[ name ];					}				},			set: function( value ) {
				Object.defineProperty( this, name, {					enumerable: true,					=
configurable:=20
true,					writable: true,					value: value				} );			}		} );	},	fix: =
function(=20
originalEvent ) {		return originalEvent[ jQuery.expando ] ?			=
originalEvent :
			new jQuery.Event( originalEvent );	},	special: {		load: {			// =
Prevent=20
triggered image.load events from bubbling to window.load			noBubble: =
true		},
		focus: {			// Fire native event if possible so blur/focus sequence is =
correct
			trigger: function() {				if ( this !=3D=3D safeActiveElement() =
&amp;&amp;=20
this.focus ) {					this.focus();					return false;				}			},			=
delegateType:=20
"focusin"		},		blur: {			trigger: function() {				if ( this =3D=3D=3D=20
safeActiveElement() &amp;&amp; this.blur ) {					this.blur();					return =
false;
				}			},			delegateType: "focusout"		},		click: {			// For checkbox, =
fire=20
native event so checked state will be right			trigger: function() {				=
if (=20
this.type =3D=3D=3D "checkbox" &amp;&amp; this.click &amp;&amp; =
nodeName( this,=20
"input" ) ) {					this.click();					return false;				}			},			// For=20
cross-browser consistency, don't fire native .click() on links			=
_default:=20
function( event ) {				return nodeName( event.target, "a" );			}		},
		beforeunload: {			postDispatch: function( event ) {				// Support: =
Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.				if =
(=20
event.result !=3D=3D undefined &amp;&amp; event.originalEvent ) {
					event.originalEvent.returnValue =3D event.result;				}			}		}	} };
 jQuery.removeEvent =3D function( elem, type, handle ) {	// This "if" is =
needed=20
for plain objects	if ( elem.removeEventListener ) {		=
elem.removeEventListener(=20
type, handle );	} }; jQuery.Event =3D function( src, props ) {	// Allow=20
instantiation without the 'new' keyword	if ( !( this instanceof =
jQuery.Event ) )=20
{		return new jQuery.Event( src, props );	}	// Event object	if ( src =
&amp;&amp;=20
src.type ) {		this.originalEvent =3D src;		this.type =3D src.type;		// =
Events=20
bubbling up the document may have been marked as prevented		// by a =
handler=20
lower down the tree; reflect the correct value.		this.isDefaultPrevented =
=3D=20
src.defaultPrevented ||				src.defaultPrevented =3D=3D=3D undefined =
&amp;&amp;				//=20
Support: Android &lt;=3D2.3 only				src.returnValue =3D=3D=3D false ?			=
returnTrue :
			returnFalse;		// Create target properties		// Support: Safari =
&lt;=3D6 - 7 only
		// Target should not be a text node (#504, #13143)		this.target =3D ( =
src.target=20
&amp;&amp; src.target.nodeType =3D=3D=3D 3 ) ?			src.target.parentNode :	=
		src.target;
		this.currentTarget =3D src.currentTarget;		this.relatedTarget =3D=20
src.relatedTarget;	// Event type	} else {		this.type =3D src;	}	// Put =
explicitly=20
provided properties onto the event object	if ( props ) {		jQuery.extend( =
this,=20
props );	}	// Create a timestamp if incoming event doesn't have one
	this.timeStamp =3D src &amp;&amp; src.timeStamp || Date.now();	// Mark =
it as=20
fixed	this[ jQuery.expando ] =3D true; }; // jQuery.Event is based on =
DOM3 Events=20
as specified by the ECMAScript Language Binding //=20
https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-bin=
ding.html
 jQuery.Event.prototype =3D {	constructor: jQuery.Event,	=
isDefaultPrevented:=20
returnFalse,	isPropagationStopped: returnFalse,	=
isImmediatePropagationStopped:=20
returnFalse,	isSimulated: false,	preventDefault: function() {		var e =3D =

this.originalEvent;		this.isDefaultPrevented =3D returnTrue;		if ( e =
&amp;&amp;=20
!this.isSimulated ) {			e.preventDefault();		}	},	stopPropagation: =
function() {
		var e =3D this.originalEvent;		this.isPropagationStopped =3D =
returnTrue;		if ( e=20
&amp;&amp; !this.isSimulated ) {			e.stopPropagation();		}	},
	stopImmediatePropagation: function() {		var e =3D this.originalEvent;
		this.isImmediatePropagationStopped =3D returnTrue;		if ( e &amp;&amp;=20
!this.isSimulated ) {			e.stopImmediatePropagation();		}
		this.stopPropagation();	} }; // Includes all common event props =
including=20
KeyEvent and MouseEvent specific props jQuery.each( {	altKey: true,	=
bubbles:=20
true,	cancelable: true,	changedTouches: true,	ctrlKey: true,	detail: =
true,
	eventPhase: true,	metaKey: true,	pageX: true,	pageY: true,	shiftKey: =
true,
	view: true,	"char": true,	charCode: true,	key: true,	keyCode: true,	=
button:=20
true,	buttons: true,	clientX: true,	clientY: true,	offsetX: true,	=
offsetY: true,
	pointerId: true,	pointerType: true,	screenX: true,	screenY: true,
	targetTouches: true,	toElement: true,	touches: true,	which: function( =
event ) {
		var button =3D event.button;		// Add which for key events		if ( =
event.which =3D=3D=20
null &amp;&amp; rkeyEvent.test( event.type ) ) {			return event.charCode =
!=3D null=20
? event.charCode : event.keyCode;		}		// Add which for click: 1 =
=3D=3D=3D left; 2 =3D=3D=3D=20
middle; 3 =3D=3D=3D right		if ( !event.which &amp;&amp; button !=3D=3D =
undefined=20
&amp;&amp; rmouseEvent.test( event.type ) ) {			if ( button &amp; 1 ) {
				return 1;			}			if ( button &amp; 2 ) {				return 3;			}			if ( =
button &amp;=20
4 ) {				return 2;			}			return 0;		}		return event.which;	} },=20
jQuery.event.addProp ); // Create mouseenter/leave events using =
mouseover/out=20
and event-time checks // so that event delegation works in jQuery. // Do =
the=20
same for pointerenter/pointerleave and pointerover/pointerout // // =
Support:=20
Safari 7 only // Safari sends mouseenter too often; see: //=20
https://bugs.chromium.org/p/chromium/issues/detail?id=3D470258 // for =
the=20
description of the bug (it existed in older Chrome versions as well).
 jQuery.each( {	mouseenter: "mouseover",	mouseleave: "mouseout",	=
pointerenter:=20
"pointerover",	pointerleave: "pointerout" }, function( orig, fix ) {
	jQuery.event.special[ orig ] =3D {		delegateType: fix,		bindType: fix,		=
handle:=20
function( event ) {			var ret,				target =3D this,				related =3D=20
event.relatedTarget,				handleObj =3D event.handleObj;			// For =
mouseenter/leave=20
call the handler if related is outside the target.			// NB: No =
relatedTarget if=20
the mouse left/entered the browser window			if ( !related || ( related =
!=3D=3D=20
target &amp;&amp; !jQuery.contains( target, related ) ) ) {				=
event.type =3D=20
handleObj.origType;				ret =3D handleObj.handler.apply( this, arguments =
);
				event.type =3D fix;			}			return ret;		}	}; } ); jQuery.fn.extend( {	=
on:=20
function( types, selector, data, fn ) {		return on( this, types, =
selector, data,=20
fn );	},	one: function( types, selector, data, fn ) {		return on( this, =
types,=20
selector, data, fn, 1 );	},	off: function( types, selector, fn ) {		var=20
handleObj, type;		if ( types &amp;&amp; types.preventDefault &amp;&amp;=20
types.handleObj ) {			// ( event )  dispatched jQuery.Event			handleObj =
=3D=20
types.handleObj;			jQuery( types.delegateTarget ).off(				=
handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :					=
handleObj.origType,
				handleObj.selector,				handleObj.handler			);			return this;		}		if =
( typeof=20
types =3D=3D=3D "object" ) {			// ( types-object [, selector] )			for ( =
type in types=20
) {				this.off( type, selector, types[ type ] );			}			return this;		}		=
if (=20
selector =3D=3D=3D false || typeof selector =3D=3D=3D "function" ) {			=
// ( types [, fn] )
			fn =3D selector;			selector =3D undefined;		}		if ( fn =3D=3D=3D =
false ) {			fn =3D=20
returnFalse;		}		return this.each( function() {			jQuery.event.remove( =
this,=20
types, fn, selector );		} );	} } ); var	/* eslint-disable max-len */	// =
See=20
https://github.com/eslint/eslint/issues/3229	rxhtmlTag =3D=20
/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0&gt;\=
x20\t\r\n\f]*)[^&gt;]*)\/&gt;/gi,
	/* eslint-enable */	// Support: IE &lt;=3D10 - 11, Edge 12 - 13 only	// =
In=20
IE/Edge using regex groups here causes severe slowdowns.	// See=20
https://connect.microsoft.com/IE/feedback/details/1736512/	rnoInnerhtml =
=3D=20
/<script|<style|<link =
rcleanscript=3D"/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)"=20
rchecked=3D"/checked\s*(?:[^=3D]|=3D\s*.checked.)/i," =
checked=3D"checked" or=3D""=20
i,=3D"">\s*$/g; // Prefer a tbody over its parent table for containing =
new rows
 function manipulationTarget( elem, content ) {	if ( nodeName( elem, =
"table" )=20
&amp;&amp;		nodeName( content.nodeType !=3D=3D 11 ? content : =
content.firstChild,=20
"tr" ) ) {		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;	}	=
return=20
elem; } // Replace/restore the type attribute of script elements for =
safe DOM=20
manipulation function disableScript( elem ) {	elem.type =3D ( =
elem.getAttribute(=20
"type" ) !=3D=3D null ) + "/" + elem.type;	return elem; } function =
restoreScript(=20
elem ) {	if ( ( elem.type || "" ).slice( 0, 5 ) =3D=3D=3D "true/" ) {		=
elem.type =3D=20
elem.type.slice( 5 );	} else {		elem.removeAttribute( "type" );	}	return =
elem; }
 function cloneCopyEvent( src, dest ) {	var i, l, type, pdataOld, =
pdataCur,=20
udataOld, udataCur, events;	if ( dest.nodeType !=3D=3D 1 ) {		return;	}	=
// 1. Copy=20
private data: events, handlers, etc.	if ( dataPriv.hasData( src ) ) {		=
pdataOld=20
=3D dataPriv.access( src );		pdataCur =3D dataPriv.set( dest, pdataOld =
);		events =3D=20
pdataOld.events;		if ( events ) {			delete pdataCur.handle;			=
pdataCur.events =3D=20
{};			for ( type in events ) {				for ( i =3D 0, l =3D events[ type =
].length; i &lt;=20
l; i++ ) {					jQuery.event.add( dest, type, events[ type ][ i ] );				}	=
		}		}
	}	// 2. Copy user data	if ( dataUser.hasData( src ) ) {		udataOld =3D=20
dataUser.access( src );		udataCur =3D jQuery.extend( {}, udataOld );
		dataUser.set( dest, udataCur );	} } // Fix IE bugs, see support tests =
function=20
fixInput( src, dest ) {	var nodeName =3D dest.nodeName.toLowerCase();	// =
Fails to=20
persist the checked state of a cloned checkbox or radio button.	if ( =
nodeName=20
=3D=3D=3D "input" &amp;&amp; rcheckableType.test( src.type ) ) {		=
dest.checked =3D=20
src.checked;	// Fails to return the selected option to the default =
selected=20
state when cloning options	} else if ( nodeName =3D=3D=3D "input" || =
nodeName =3D=3D=3D=20
"textarea" ) {		dest.defaultValue =3D src.defaultValue;	} } function =
domManip(=20
collection, args, callback, ignored ) {	// Flatten any nested arrays	=
args =3D=20
concat.apply( [], args );	var fragment, first, scripts, hasScripts, =
node, doc,
		i =3D 0,		l =3D collection.length,		iNoClone =3D l - 1,		value =3D =
args[ 0 ],
		valueIsFunction =3D isFunction( value );	// We can't cloneNode =
fragments that=20
contain checked, in WebKit	if ( valueIsFunction ||			( l &gt; 1 =
&amp;&amp;=20
typeof value =3D=3D=3D "string" &amp;&amp;				!support.checkClone =
&amp;&amp;=20
rchecked.test( value ) ) ) {		return collection.each( function( index ) =
{			var=20
self =3D collection.eq( index );			if ( valueIsFunction ) {				args[ 0 ] =
=3D=20
value.call( this, index, self.html() );			}			domManip( self, args, =
callback,=20
ignored );		} );	}	if ( l ) {		fragment =3D buildFragment( args, =
collection[ 0=20
].ownerDocument, false, collection, ignored );		first =3D =
fragment.firstChild;		if=20
( fragment.childNodes.length =3D=3D=3D 1 ) {			fragment =3D first;		}		=
// Require either=20
new content or an interest in ignored elements to invoke the callback		=
if (=20
first || ignored ) {			scripts =3D jQuery.map( getAll( fragment, =
"script" ),=20
disableScript );			hasScripts =3D scripts.length;			// Use the original =
fragment=20
for the last item			// instead of the first because it can end up			// =
being=20
emptied incorrectly in certain situations (#8070).			for ( ; i &lt; l; =
i++ ) {
				node =3D fragment;				if ( i !=3D=3D iNoClone ) {					node =3D =
jQuery.clone( node,=20
true, true );					// Keep references to cloned scripts for later =
restoration
					if ( hasScripts ) {						// Support: Android &lt;=3D4.0 only, =
PhantomJS 1=20
only						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );					}				}
				callback.call( collection[ i ], node, i );			}			if ( hasScripts ) {	=
			doc=20
=3D scripts[ scripts.length - 1 ].ownerDocument;				// Reenable scripts
				jQuery.map( scripts, restoreScript );				// Evaluate executable =
scripts on=20
first document insertion				for ( i =3D 0; i &lt; hasScripts; i++ ) {				=
	node =3D=20
scripts[ i ];					if ( rscriptType.test( node.type || "" ) &amp;&amp;
						!dataPriv.access( node, "globalEval" ) &amp;&amp;						=
jQuery.contains(=20
doc, node ) ) {						if ( node.src &amp;&amp; ( node.type || "" =
).toLowerCase() =20
!=3D=3D "module" ) {							// Optional AJAX dependency, but won't run =
scripts if not=20
present							if ( jQuery._evalUrl ) {								jQuery._evalUrl( node.src =
);
							}						} else {							DOMEval( node.textContent.replace( =
rcleanScript, ""=20
), doc, node );						}					}				}			}		}	}	return collection; } function =
remove(=20
elem, selector, keepData ) {	var node,		nodes =3D selector ? =
jQuery.filter(=20
selector, elem ) : elem,		i =3D 0;	for ( ; ( node =3D nodes[ i ] ) !=3D =
null; i++ ) {
		if ( !keepData &amp;&amp; node.nodeType =3D=3D=3D 1 ) {			=
jQuery.cleanData( getAll(=20
node ) );		}		if ( node.parentNode ) {			if ( keepData &amp;&amp;=20
jQuery.contains( node.ownerDocument, node ) ) {				setGlobalEval( =
getAll( node,=20
"script" ) );			}			node.parentNode.removeChild( node );		}	}	return =
elem; }
 jQuery.extend( {	htmlPrefilter: function( html ) {		return =
html.replace(=20
rxhtmlTag, "&lt;$1&gt;<!--$2-->" );	},	clone: function( elem, =
dataAndEvents,=20
deepDataAndEvents ) {		var i, l, srcElements, destElements,			clone =3D=20
elem.cloneNode( true ),			inPage =3D jQuery.contains( =
elem.ownerDocument, elem );
		// Fix IE cloning issues		if ( !support.noCloneChecked &amp;&amp; (=20
elem.nodeType =3D=3D=3D 1 || elem.nodeType =3D=3D=3D 11 ) &amp;&amp;				=
!jQuery.isXMLDoc(=20
elem ) ) {			// We eschew Sizzle here for performance reasons:=20
https://jsperf.com/getall-vs-sizzle/2			destElements =3D getAll( clone =
);
			srcElements =3D getAll( elem );			for ( i =3D 0, l =3D =
srcElements.length; i &lt;=20
l; i++ ) {				fixInput( srcElements[ i ], destElements[ i ] );			}		}		=
// Copy=20
the events from the original to the clone		if ( dataAndEvents ) {			if ( =

deepDataAndEvents ) {				srcElements =3D srcElements || getAll( elem );
				destElements =3D destElements || getAll( clone );				for ( i =3D 0, =
l =3D=20
srcElements.length; i &lt; l; i++ ) {					cloneCopyEvent( srcElements[ i =
],=20
destElements[ i ] );				}			} else {				cloneCopyEvent( elem, clone );			=
}		}
		// Preserve script evaluation history		destElements =3D getAll( clone, =
"script"=20
);		if ( destElements.length &gt; 0 ) {			setGlobalEval( destElements, =
!inPage=20
&amp;&amp; getAll( elem, "script" ) );		}		// Return the cloned set		=
return=20
clone;	},	cleanData: function( elems ) {		var data, elem, type,			=
special =3D=20
jQuery.event.special,			i =3D 0;		for ( ; ( elem =3D elems[ i ] ) =
!=3D=3D undefined; i++=20
) {			if ( acceptData( elem ) ) {				if ( ( data =3D elem[ =
dataPriv.expando ] ) )=20
{					if ( data.events ) {						for ( type in data.events ) {							if ( =

special[ type ] ) {								jQuery.event.remove( elem, type );							// =
This is a=20
shortcut to avoid jQuery.event.remove's overhead							} else {
								jQuery.removeEvent( elem, type, data.handle );							}						}				=
	}
					// Support: Chrome &lt;=3D35 - 45+					// Assign undefined instead =
of using=20
delete, see Data#remove					elem[ dataPriv.expando ] =3D undefined;				}	=
			if (=20
elem[ dataUser.expando ] ) {					// Support: Chrome &lt;=3D35 - 45+					=
// Assign=20
undefined instead of using delete, see Data#remove					elem[ =
dataUser.expando ]=20
=3D undefined;				}			}		}	} } ); jQuery.fn.extend( {	detach: function( =
selector )=20
{		return remove( this, selector, true );	},	remove: function( selector =
) {
		return remove( this, selector );	},	text: function( value ) {		return =
access(=20
this, function( value ) {			return value =3D=3D=3D undefined ?				=
jQuery.text( this )=20
:				this.empty().each( function() {					if ( this.nodeType =3D=3D=3D 1 =
||=20
this.nodeType =3D=3D=3D 11 || this.nodeType =3D=3D=3D 9 ) {						=
this.textContent =3D value;
					}				} );		}, null, value, arguments.length );	},	append: =
function() {
		return domManip( this, arguments, function( elem ) {			if ( =
this.nodeType =3D=3D=3D=20
1 || this.nodeType =3D=3D=3D 11 || this.nodeType =3D=3D=3D 9 ) {				var =
target =3D=20
manipulationTarget( this, elem );				target.appendChild( elem );			}		} =
);	},
	prepend: function() {		return domManip( this, arguments, function( elem =
) {
			if ( this.nodeType =3D=3D=3D 1 || this.nodeType =3D=3D=3D 11 || =
this.nodeType =3D=3D=3D 9 ) {
				var target =3D manipulationTarget( this, elem );				=
target.insertBefore( elem,=20
target.firstChild );			}		} );	},	before: function() {		return domManip( =
this,=20
arguments, function( elem ) {			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );			}		} );	},	after: =
function() {
		return domManip( this, arguments, function( elem ) {			if ( =
this.parentNode )=20
{				this.parentNode.insertBefore( elem, this.nextSibling );			}		} );	=
},	empty:=20
function() {		var elem,			i =3D 0;		for ( ; ( elem =3D this[ i ] ) !=3D =
null; i++ ) {
			if ( elem.nodeType =3D=3D=3D 1 ) {				// Prevent memory leaks				=
jQuery.cleanData(=20
getAll( elem, false ) );				// Remove any remaining nodes				=
elem.textContent =3D=20
"";			}		}		return this;	},	clone: function( dataAndEvents, =
deepDataAndEvents )=20
{		dataAndEvents =3D dataAndEvents =3D=3D null ? false : dataAndEvents;
		deepDataAndEvents =3D deepDataAndEvents =3D=3D null ? dataAndEvents :=20
deepDataAndEvents;		return this.map( function() {			return jQuery.clone( =
this,=20
dataAndEvents, deepDataAndEvents );		} );	},	html: function( value ) {		=
return=20
access( this, function( value ) {			var elem =3D this[ 0 ] || {},				i =
=3D 0,				l =3D=20
this.length;			if ( value =3D=3D=3D undefined &amp;&amp; elem.nodeType =
=3D=3D=3D 1 ) {
				return elem.innerHTML;			}			// See if we can take a shortcut and =
just use=20
innerHTML			if ( typeof value =3D=3D=3D "string" &amp;&amp; =
!rnoInnerhtml.test( value=20
) &amp;&amp;				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1=20
].toLowerCase() ] ) {				value =3D jQuery.htmlPrefilter( value );				try =
{					for=20
( ; i &lt; l; i++ ) {						elem =3D this[ i ] || {};						// Remove =
element nodes=20
and prevent memory leaks						if ( elem.nodeType =3D=3D=3D 1 ) {
							jQuery.cleanData( getAll( elem, false ) );							elem.innerHTML =
=3D value;
						}					}					elem =3D 0;				// If using innerHTML throws an =
exception, use=20
the fallback method				} catch ( e ) {}			}			if ( elem ) {
				this.empty().append( value );			}		}, null, value, arguments.length =
);	},
	replaceWith: function() {		var ignored =3D [];		// Make the changes, =
replacing=20
each non-ignored context element with the new content		return domManip( =
this,=20
arguments, function( elem ) {			var parent =3D this.parentNode;			if (=20
jQuery.inArray( this, ignored ) &lt; 0 ) {				jQuery.cleanData( getAll( =
this )=20
);				if ( parent ) {					parent.replaceChild( elem, this );				}			}		=
// Force=20
callback invocation		}, ignored );	} } ); jQuery.each( {	appendTo: =
"append",
	prependTo: "prepend",	insertBefore: "before",	insertAfter: "after",	=
replaceAll:=20
"replaceWith" }, function( name, original ) {	jQuery.fn[ name ] =3D =
function(=20
selector ) {		var elems,			ret =3D [],			insert =3D jQuery( selector ),		=
	last =3D=20
insert.length - 1,			i =3D 0;		for ( ; i &lt;=3D last; i++ ) {			elems =
=3D i =3D=3D=3D last=20
? this : this.clone( true );			jQuery( insert[ i ] )[ original ]( elems =
);			//=20
Support: Android &lt;=3D4.0 only, PhantomJS 1 only			// .get() because=20
push.apply(_, arraylike) throws on ancient WebKit			push.apply( ret, =
elems.get()=20
);		}		return this.pushStack( ret );	}; } ); var rnumnonpx =3D new =
RegExp( "^(" +=20
pnum + ")(?!px)[a-z%]+$", "i" ); var getStyles =3D function( elem ) {		=
// Support:=20
IE &lt;=3D11 only, Firefox &lt;=3D30 (#15098, #14150)		// IE throws on =
elements=20
created in popups		// FF meanwhile throws on frame elements through=20
"defaultView.getComputedStyle"		var view =3D =
elem.ownerDocument.defaultView;		if (=20
!view || !view.opener ) {			view =3D window;		}		return =
view.getComputedStyle(=20
elem );	}; var rboxStyle =3D new RegExp( cssExpand.join( "|" ), "i" ); ( =

function() {	// Executing both pixelPosition &amp; boxSizingReliable =
tests=20
require only one layout	// so they're executed at the same time to save =
the=20
second computation.	function computeStyleTests() {		// This is a =
singleton, we=20
need to execute it only once		if ( !div ) {			return;		}
		container.style.cssText =3D =
"position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";		div.style.cssText =3D
			=
"position:relative;display:block;box-sizing:border-box;overflow:scroll;" =
+
			"margin:auto;border:1px;padding:1px;" +			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );		var =
divStyle =3D=20
window.getComputedStyle( div );		pixelPositionVal =3D divStyle.top =
!=3D=3D "1%";		//=20
Support: Android 4.0 - 4.3 only, Firefox &lt;=3D3 - 44		=
reliableMarginLeftVal =3D=20
roundPixelMeasures( divStyle.marginLeft ) =3D=3D=3D 12;		// Support: =
Android 4.0 - 4.3=20
only, Safari &lt;=3D9.1 - 10.1, iOS &lt;=3D7.0 - 9.3		// Some styles =
come back with=20
percentage values, even though they shouldn't		div.style.right =3D =
"60%";
		pixelBoxStylesVal =3D roundPixelMeasures( divStyle.right ) =3D=3D=3D =
36;		// Support:=20
IE 9 - 11 only		// Detect misreporting of content dimensions for=20
box-sizing:border-box elements		boxSizingReliableVal =3D =
roundPixelMeasures(=20
divStyle.width ) =3D=3D=3D 36;		// Support: IE 9 only		// Detect =
overflow:scroll=20
screwiness (gh-3699)		div.style.position =3D "absolute";		=
scrollboxSizeVal =3D=20
div.offsetWidth =3D=3D=3D 36 || "absolute";		=
documentElement.removeChild( container );
		// Nullify the div so it wouldn't be stored in the memory and		// it =
will also=20
be a sign that checks already performed		div =3D null;	}	function=20
roundPixelMeasures( measure ) {		return Math.round( parseFloat( measure =
) );	}
	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal,=20
pixelBoxStylesVal,		reliableMarginLeftVal,		container =3D =
document.createElement(=20
"div" ),		div =3D document.createElement( "div" );	// Finish early in =
limited=20
(non-browser) environments	if ( !div.style ) {		return;	}	// Support: IE =
&lt;=3D9=20
- 11 only	// Style of cloned element affects source element cloned =
(#8908)
	div.style.backgroundClip =3D "content-box";	div.cloneNode( true=20
).style.backgroundClip =3D "";	support.clearCloneStyle =3D =
div.style.backgroundClip=20
=3D=3D=3D "content-box";	jQuery.extend( support, {		boxSizingReliable: =
function() {
			computeStyleTests();			return boxSizingReliableVal;		},		=
pixelBoxStyles:=20
function() {			computeStyleTests();			return pixelBoxStylesVal;		},
		pixelPosition: function() {			computeStyleTests();			return =
pixelPositionVal;
		},		reliableMarginLeft: function() {			computeStyleTests();			return=20
reliableMarginLeftVal;		},		scrollboxSize: function() {			=
computeStyleTests();
			return scrollboxSizeVal;		}	} ); } )(); function curCSS( elem, name, =
computed=20
) {	var width, minWidth, maxWidth, ret,		// Support: Firefox 51+		// =
Retrieving=20
style before computed somehow		// fixes an issue with getting wrong =
values		//=20
on detached elements		style =3D elem.style;	computed =3D computed || =
getStyles( elem=20
);	// getPropertyValue is needed for:	//   .css('filter') (IE 9 only, =
#12537)	//=20
  .css('--customProperty) (#3144)	if ( computed ) {		ret =3D=20
computed.getPropertyValue( name ) || computed[ name ];		if ( ret =
=3D=3D=3D ""=20
&amp;&amp; !jQuery.contains( elem.ownerDocument, elem ) ) {			ret =3D=20
jQuery.style( elem, name );		}		// A tribute to the "awesome hack by =
Dean=20
Edwards"		// Android Browser returns percentage for some values,		// but =
width=20
seems to be reliably pixels.		// This is against the CSSOM draft spec:		=
//=20
https://drafts.csswg.org/cssom/#resolved-values		if ( =
!support.pixelBoxStyles()=20
&amp;&amp; rnumnonpx.test( ret ) &amp;&amp; rboxStyle.test( name ) ) {			=
//=20
Remember the original values			width =3D style.width;			minWidth =3D =
style.minWidth;
			maxWidth =3D style.maxWidth;			// Put in the new values to get a =
computed value=20
out			style.minWidth =3D style.maxWidth =3D style.width =3D ret;			ret =
=3D=20
computed.width;			// Revert the changed values			style.width =3D width;
			style.minWidth =3D minWidth;			style.maxWidth =3D maxWidth;		}	}	=
return ret !=3D=3D=20
undefined ?		// Support: IE &lt;=3D9 - 11 only		// IE returns zIndex =
value as an=20
integer.		ret + "" :		ret; } function addGetHookIf( conditionFn, hookFn =
) {	//=20
Define the hook, we'll check on the first run if it's really needed.	=
return {
		get: function() {			if ( conditionFn() ) {				// Hook not needed (or =
it's not=20
possible to use it due				// to missing dependency), remove it.				=
delete=20
this.get;				return;			}			// Hook needed; redefine it so that the =
support test=20
is not executed again.			return ( this.get =3D hookFn ).apply( this, =
arguments );
		}	}; } var	// Swappable if display is none or starts with table	// =
except=20
"table", "table-cell", or "table-caption"	// See here for display =
values:=20
https://developer.mozilla.org/en-US/docs/CSS/display	rdisplayswap =3D=20
/^(none|table(?!-c[ea]).+)/,	rcustomProp =3D /^--/,	cssShow =3D { =
position:=20
"absolute", visibility: "hidden", display: "block" },	cssNormalTransform =
=3D {
		letterSpacing: "0",		fontWeight: "400"	},	cssPrefixes =3D [ "Webkit", =
"Moz",=20
"ms" ],	emptyStyle =3D document.createElement( "div" ).style; // Return =
a css=20
property mapped to a potentially vendor prefixed property function=20
vendorPropName( name ) {	// Shortcut for names that are not vendor =
prefixed	if (=20
name in emptyStyle ) {		return name;	}	// Check for vendor prefixed =
names	var=20
capName =3D name[ 0 ].toUpperCase() + name.slice( 1 ),		i =3D =
cssPrefixes.length;
	while ( i-- ) {		name =3D cssPrefixes[ i ] + capName;		if ( name in =
emptyStyle )=20
{			return name;		}	} } // Return a property mapped along what =
jQuery.cssProps=20
suggests or to // a vendor prefixed property. function finalPropName( =
name ) {
	var ret =3D jQuery.cssProps[ name ];	if ( !ret ) {		ret =3D =
jQuery.cssProps[ name ]=20
=3D vendorPropName( name ) || name;	}	return ret; } function =
setPositiveNumber(=20
elem, value, subtract ) {	// Any relative (+/-) values have already been	=
//=20
normalized at this point	var matches =3D rcssNum.exec( value );	return =
matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || =
"px" ) :
		value; } function boxModelAdjustment( elem, dimension, box, =
isBorderBox,=20
styles, computedVal ) {	var i =3D dimension =3D=3D=3D "width" ? 1 : 0,		=
extra =3D 0,
		delta =3D 0;	// Adjustment may not be necessary	if ( box =3D=3D=3D ( =
isBorderBox ?=20
"border" : "content" ) ) {		return 0;	}	for ( ; i &lt; 4; i +=3D 2 ) {		=
// Both=20
box models exclude margin		if ( box =3D=3D=3D "margin" ) {			delta +=3D =
jQuery.css(=20
elem, box + cssExpand[ i ], true, styles );		}		// If we get here with a =

content-box, we're seeking "padding" or "border" or "margin"		if ( =
!isBorderBox=20
) {			// Add padding			delta +=3D jQuery.css( elem, "padding" + =
cssExpand[ i ],=20
true, styles );			// For "border" or "margin", add border			if ( box =
!=3D=3D=20
"padding" ) {				delta +=3D jQuery.css( elem, "border" + cssExpand[ i ] =
+ "Width",=20
true, styles );			// But still keep track of it otherwise			} else {				=
extra +=3D=20
jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );			=
}		//=20
If we get here with a border-box (content + padding + border), we're =
seeking=20
"content" or		// "padding" or "margin"		} else {			// For "content", =
subtract=20
padding			if ( box =3D=3D=3D "content" ) {				delta -=3D jQuery.css( =
elem, "padding" +=20
cssExpand[ i ], true, styles );			}			// For "content" or "padding", =
subtract=20
border			if ( box !=3D=3D "margin" ) {				delta -=3D jQuery.css( elem, =
"border" +=20
cssExpand[ i ] + "Width", true, styles );			}		}	}	// Account for =
positive=20
content-box scroll gutter when requested by providing computedVal	if (=20
!isBorderBox &amp;&amp; computedVal &gt;=3D 0 ) {		// =
offsetWidth/offsetHeight is=20
a rounded sum of content, padding, scroll gutter, and border		// =
Assuming=20
integer scroll gutter, subtract the rest and round down		delta +=3D =
Math.max( 0,=20
Math.ceil(			elem[ "offset" + dimension[ 0 ].toUpperCase() + =
dimension.slice( 1=20
) ] -			 computedVal -			 delta -			 extra -			 0.5		) );	}	return =
delta; }
 function getWidthOrHeight( elem, dimension, extra ) {	// Start with =
computed=20
style	var styles =3D getStyles( elem ),		val =3D curCSS( elem, =
dimension, styles ),
		isBorderBox =3D jQuery.css( elem, "boxSizing", false, styles ) =
=3D=3D=3D "border-box",
		valueIsBorderBox =3D isBorderBox;	// Support: Firefox &lt;=3D54	// =
Return a=20
confounding non-pixel value or feign ignorance, as appropriate.	if (=20
rnumnonpx.test( val ) ) {		if ( !extra ) {			return val;		}		val =3D =
"auto";	}	//=20
Check for style in case a browser which returns unreliable values	// for =

getComputedStyle silently falls back to the reliable elem.style	=
valueIsBorderBox=20
=3D valueIsBorderBox &amp;&amp;		( support.boxSizingReliable() || val =
=3D=3D=3D=20
elem.style[ dimension ] );	// Fall back to offsetWidth/offsetHeight when =
value=20
is "auto"	// This happens for inline elements with no explicit setting =
(gh-3571)
	// Support: Android &lt;=3D4.1 - 4.3 only	// Also use =
offsetWidth/offsetHeight=20
for misreported inline dimensions (gh-3602)	if ( val =3D=3D=3D "auto" ||	=
	!parseFloat(=20
val ) &amp;&amp; jQuery.css( elem, "display", false, styles ) =3D=3D=3D =
"inline" ) {
		val =3D elem[ "offset" + dimension[ 0 ].toUpperCase() + =
dimension.slice( 1 ) ];
		// offsetWidth/offsetHeight provide border-box values		=
valueIsBorderBox =3D=20
true;	}	// Normalize "" and auto	val =3D parseFloat( val ) || 0;	// =
Adjust for the=20
element's box model	return ( val +		boxModelAdjustment(			elem,			=
dimension,
			extra || ( isBorderBox ? "border" : "content" ),			valueIsBorderBox,
			styles,			// Provide the current computed size to request scroll =
gutter=20
calculation (gh-3589)			val		)	) + "px"; } jQuery.extend( {	// Add in =
style=20
property hooks for overriding the default	// behavior of getting and =
setting a=20
style property	cssHooks: {		opacity: {			get: function( elem, computed ) =
{				if=20
( computed ) {					// We should always get a number back from opacity				=
	var=20
ret =3D curCSS( elem, "opacity" );					return ret =3D=3D=3D "" ? "1" : =
ret;				}			}		}
	},	// Don't automatically add "px" to these possibly-unitless =
properties
	cssNumber: {		"animationIterationCount": true,		"columnCount": true,
		"fillOpacity": true,		"flexGrow": true,		"flexShrink": true,		=
"fontWeight":=20
true,		"lineHeight": true,		"opacity": true,		"order": true,		"orphans": =
true,
		"widows": true,		"zIndex": true,		"zoom": true	},	// Add in properties =
whose=20
names you wish to fix before	// setting or getting the value	cssProps: =
{},	//=20
Get and set the style property on a DOM Node	style: function( elem, =
name, value,=20
extra ) {		// Don't set styles on text and comment nodes		if ( !elem ||=20
elem.nodeType =3D=3D=3D 3 || elem.nodeType =3D=3D=3D 8 || !elem.style ) =
{			return;		}		//=20
Make sure that we're working with the right name		var ret, type, hooks,
			origName =3D camelCase( name ),			isCustomProp =3D rcustomProp.test( =
name ),
			style =3D elem.style;		// Make sure that we're working with the right =
name. We=20
don't		// want to query the value if it is a CSS custom property		// =
since they=20
are user-defined.		if ( !isCustomProp ) {			name =3D finalPropName( =
origName );		}
		// Gets hook for the prefixed version, then unprefixed version		hooks =
=3D=20
jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];		// Check if =
we're=20
setting a value		if ( value !=3D=3D undefined ) {			type =3D typeof =
value;			//=20
Convert "+=3D" or "-=3D" to relative numbers (#7345)			if ( type =
=3D=3D=3D "string"=20
&amp;&amp; ( ret =3D rcssNum.exec( value ) ) &amp;&amp; ret[ 1 ] ) {				=
value =3D=20
adjustCSS( elem, name, ret );				// Fixes bug #9237				type =3D =
"number";			}			//=20
Make sure that null and NaN values aren't set (#7116)			if ( value =
=3D=3D null ||=20
value !=3D=3D value ) {				return;			}			// If a number was passed in, =
add the unit=20
(except for certain CSS properties)			if ( type =3D=3D=3D "number" ) {			=
	value +=3D ret=20
&amp;&amp; ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );			}	=
		//=20
background-* props affect original clone's values			if (=20
!support.clearCloneStyle &amp;&amp; value =3D=3D=3D "" &amp;&amp; =
name.indexOf(=20
"background" ) =3D=3D=3D 0 ) {				style[ name ] =3D "inherit";			}			// =
If a hook was=20
provided, use that value, otherwise just set the specified value			if ( =
!hooks=20
|| !( "set" in hooks ) ||				( value =3D hooks.set( elem, value, extra ) =
) !=3D=3D=20
undefined ) {				if ( isCustomProp ) {					style.setProperty( name, =
value );
				} else {					style[ name ] =3D value;				}			}		} else {			// If a =
hook was=20
provided get the non-computed value from there			if ( hooks &amp;&amp; =
"get" in=20
hooks &amp;&amp;				( ret =3D hooks.get( elem, false, extra ) ) !=3D=3D =
undefined ) {
				return ret;			}			// Otherwise just get the value from the style =
object
			return style[ name ];		}	},	css: function( elem, name, extra, styles =
) {		var=20
val, num, hooks,			origName =3D camelCase( name ),			isCustomProp =3D=20
rcustomProp.test( name );		// Make sure that we're working with the =
right name.=20
We don't		// want to modify the value if it is a CSS custom property		// =
since=20
they are user-defined.		if ( !isCustomProp ) {			name =3D finalPropName( =
origName=20
);		}		// Try prefixed name followed by the unprefixed name		hooks =3D=20
jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];		// If a hook =
was=20
provided get the computed value from there		if ( hooks &amp;&amp; "get" =
in hooks=20
) {			val =3D hooks.get( elem, true, extra );		}		// Otherwise, if a way =
to get=20
the computed value exists, use that		if ( val =3D=3D=3D undefined ) {			=
val =3D curCSS(=20
elem, name, styles );		}		// Convert "normal" to computed value		if ( =
val =3D=3D=3D=20
"normal" &amp;&amp; name in cssNormalTransform ) {			val =3D =
cssNormalTransform[=20
name ];		}		// Make numeric if forced or a qualifier was provided and =
val looks=20
numeric		if ( extra =3D=3D=3D "" || extra ) {			num =3D parseFloat( val =
);			return=20
extra =3D=3D=3D true || isFinite( num ) ? num || 0 : val;		}		return =
val;	} } );
 jQuery.each( [ "height", "width" ], function( i, dimension ) {	=
jQuery.cssHooks[=20
dimension ] =3D {		get: function( elem, computed, extra ) {			if ( =
computed ) {
				// Certain elements can have dimension info if we invisibly show =
them				//=20
but it must have a current display style that would benefit				return=20
rdisplayswap.test( jQuery.css( elem, "display" ) ) &amp;&amp;					// =
Support:=20
Safari 8+					// Table columns in Safari have non-zero offsetWidth &amp; =
zero
					// getBoundingClientRect().width unless display is changed.					// =
Support:=20
IE &lt;=3D11 only					// Running getBoundingClientRect on a disconnected =
node
					// in IE throws an error.					( !elem.getClientRects().length ||=20
!elem.getBoundingClientRect().width ) ?						swap( elem, cssShow, =
function() {
							return getWidthOrHeight( elem, dimension, extra );						} ) :
						getWidthOrHeight( elem, dimension, extra );			}		},		set: =
function( elem,=20
value, extra ) {			var matches,				styles =3D getStyles( elem ),				=
isBorderBox =3D=20
jQuery.css( elem, "boxSizing", false, styles ) =3D=3D=3D "border-box",			=
	subtract =3D=20
extra &amp;&amp; boxModelAdjustment(					elem,					dimension,					extra,
					isBorderBox,					styles				);			// Account for unreliable =
border-box=20
dimensions by comparing offset* to computed and			// faking a =
content-box to get=20
border and padding (gh-3699)			if ( isBorderBox &amp;&amp;=20
support.scrollboxSize() =3D=3D=3D styles.position ) {				subtract -=3D =
Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 =
) ] -
					 parseFloat( styles[ dimension ] ) -					 boxModelAdjustment( elem, =

dimension, "border", false, styles ) -					 0.5				);			}			// Convert =
to pixels=20
if value adjustment is needed			if ( subtract &amp;&amp; ( matches =3D=20
rcssNum.exec( value ) ) &amp;&amp;				( matches[ 3 ] || "px" ) !=3D=3D =
"px" ) {
				elem.style[ dimension ] =3D value;				value =3D jQuery.css( elem, =
dimension );
			}			return setPositiveNumber( elem, value, subtract );		}	}; } );
 jQuery.cssHooks.marginLeft =3D addGetHookIf( =
support.reliableMarginLeft,
	function( elem, computed ) {		if ( computed ) {			return ( parseFloat( =
curCSS(=20
elem, "marginLeft" ) ) ||				elem.getBoundingClientRect().left -					=
swap( elem,=20
{ marginLeft: 0 }, function() {						return =
elem.getBoundingClientRect().left;
					} )				) + "px";		}	} ); // These hooks are used by animate to =
expand=20
properties jQuery.each( {	margin: "",	padding: "",	border: "Width" }, =
function(=20
prefix, suffix ) {	jQuery.cssHooks[ prefix + suffix ] =3D {		expand: =
function(=20
value ) {			var i =3D 0,				expanded =3D {},				// Assumes a single =
number if not a=20
string				parts =3D typeof value =3D=3D=3D "string" ? value.split( " " ) =
: [ value ];
			for ( ; i &lt; 4; i++ ) {				expanded[ prefix + cssExpand[ i ] + =
suffix ] =3D
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];			}			return expanded;		=
}	};	if=20
( prefix !=3D=3D "margin" ) {		jQuery.cssHooks[ prefix + suffix ].set =
=3D=20
setPositiveNumber;	} } ); jQuery.fn.extend( {	css: function( name, value =
) {
		return access( this, function( elem, name, value ) {			var styles, =
len,				map=20
=3D {},				i =3D 0;			if ( Array.isArray( name ) ) {				styles =3D =
getStyles( elem );
				len =3D name.length;				for ( ; i &lt; len; i++ ) {					map[ name[ i =
] ] =3D=20
jQuery.css( elem, name[ i ], false, styles );				}				return map;			}			=
return=20
value !=3D=3D undefined ?				jQuery.style( elem, name, value ) :				=
jQuery.css(=20
elem, name );		}, name, value, arguments.length &gt; 1 );	} } ); =
function Tween(=20
elem, options, prop, end, easing ) {	return new Tween.prototype.init( =
elem,=20
options, prop, end, easing ); } jQuery.Tween =3D Tween; Tween.prototype =
=3D {
	constructor: Tween,	init: function( elem, options, prop, end, easing, =
unit ) {
		this.elem =3D elem;		this.prop =3D prop;		this.easing =3D easing ||=20
jQuery.easing._default;		this.options =3D options;		this.start =3D =
this.now =3D=20
this.cur();		this.end =3D end;		this.unit =3D unit || ( =
jQuery.cssNumber[ prop ] ?=20
"" : "px" );	},	cur: function() {		var hooks =3D Tween.propHooks[ =
this.prop ];
		return hooks &amp;&amp; hooks.get ?			hooks.get( this ) :
			Tween.propHooks._default.get( this );	},	run: function( percent ) {		=
var=20
eased,			hooks =3D Tween.propHooks[ this.prop ];		if ( =
this.options.duration ) {
			this.pos =3D eased =3D jQuery.easing[ this.easing ](				percent,=20
this.options.duration * percent, 0, 1, this.options.duration			);		} =
else {
			this.pos =3D eased =3D percent;		}		this.now =3D ( this.end - =
this.start ) * eased=20
+ this.start;		if ( this.options.step ) {			this.options.step.call( =
this.elem,=20
this.now, this );		}		if ( hooks &amp;&amp; hooks.set ) {			hooks.set( =
this );
		} else {			Tween.propHooks._default.set( this );		}		return this;	} };
 Tween.prototype.init.prototype =3D Tween.prototype; Tween.propHooks =3D =
{	_default:=20
{		get: function( tween ) {			var result;			// Use a property on the =
element=20
directly when it is not a DOM element,			// or when there is no matching =
style=20
property that exists.			if ( tween.elem.nodeType !=3D=3D 1 ||				=
tween.elem[=20
tween.prop ] !=3D null &amp;&amp; tween.elem.style[ tween.prop ] =3D=3D =
null ) {
				return tween.elem[ tween.prop ];			}			// Passing an empty string as =
a 3rd=20
parameter to .css will automatically			// attempt a parseFloat and =
fallback to a=20
string if the parse fails.			// Simple values such as "10px" are parsed =
to=20
Float;			// complex values such as "rotate(1rad)" are returned as-is.			=
result =3D=20
jQuery.css( tween.elem, tween.prop, "" );			// Empty strings, null, =
undefined=20
and "auto" are converted to 0.			return !result || result =3D=3D=3D =
"auto" ? 0 :=20
result;		},		set: function( tween ) {			// Use step hook for back =
compat.			//=20
Use cssHook if its there.			// Use .style if available and use plain =
properties=20
where available.			if ( jQuery.fx.step[ tween.prop ] ) {				=
jQuery.fx.step[=20
tween.prop ]( tween );			} else if ( tween.elem.nodeType =3D=3D=3D 1 =
&amp;&amp;				(=20
tween.elem.style[ jQuery.cssProps[ tween.prop ] ] !=3D null ||
					jQuery.cssHooks[ tween.prop ] ) ) {				jQuery.style( tween.elem,=20
tween.prop, tween.now + tween.unit );			} else {				tween.elem[ =
tween.prop ] =3D=20
tween.now;			}		}	} }; // Support: IE &lt;=3D9 only // Panic based =
approach to=20
setting things on disconnected nodes Tween.propHooks.scrollTop =3D=20
Tween.propHooks.scrollLeft =3D {	set: function( tween ) {		if (=20
tween.elem.nodeType &amp;&amp; tween.elem.parentNode ) {			tween.elem[=20
tween.prop ] =3D tween.now;		}	} }; jQuery.easing =3D {	linear: =
function( p ) {
		return p;	},	swing: function( p ) {		return 0.5 - Math.cos( p * =
Math.PI ) / 2;
	},	_default: "swing" }; jQuery.fx =3D Tween.prototype.init; // Back =
compat=20
&lt;1.8 extension point jQuery.fx.step =3D {}; var	fxNow, inProgress,	=
rfxtypes =3D=20
/^(?:toggle|show|hide)$/,	rrun =3D /queueHooks$/; function schedule() {	=
if (=20
inProgress ) {		if ( document.hidden =3D=3D=3D false &amp;&amp;=20
window.requestAnimationFrame ) {			window.requestAnimationFrame( =
schedule );		}=20
else {			window.setTimeout( schedule, jQuery.fx.interval );		}
		jQuery.fx.tick();	} } // Animations created synchronously will run=20
synchronously function createFxNow() {	window.setTimeout( function() {		=
fxNow =3D=20
undefined;	} );	return ( fxNow =3D Date.now() ); } // Generate =
parameters to=20
create a standard animation function genFx( type, includeWidth ) {	var =
which,		i=20
=3D 0,		attrs =3D { height: type };	// If we include width, step value =
is 1 to do=20
all cssExpand values,	// otherwise step value is 2 to skip over Left and =
Right
	includeWidth =3D includeWidth ? 1 : 0;	for ( ; i &lt; 4; i +=3D 2 - =
includeWidth )=20
{		which =3D cssExpand[ i ];		attrs[ "margin" + which ] =3D attrs[ =
"padding" + which=20
] =3D type;	}	if ( includeWidth ) {		attrs.opacity =3D attrs.width =3D =
type;	}	return=20
attrs; } function createTween( value, prop, animation ) {	var tween,		=
collection=20
=3D ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" =
] ),
		index =3D 0,		length =3D collection.length;	for ( ; index &lt; length; =
index++ ) {
		if ( ( tween =3D collection[ index ].call( animation, prop, value ) ) =
) {			//=20
We're done with this property			return tween;		}	} } function =
defaultPrefilter(=20
elem, props, opts ) {	var prop, value, toggle, hooks, oldfire, =
propTween,=20
restoreDisplay, display,		isBox =3D "width" in props || "height" in =
props,		anim =3D=20
this,		orig =3D {},		style =3D elem.style,		hidden =3D elem.nodeType =
&amp;&amp;=20
isHiddenWithinTree( elem ),		dataShow =3D dataPriv.get( elem, "fxshow" =
);	//=20
Queue-skipping animations hijack the fx hooks	if ( !opts.queue ) {		=
hooks =3D=20
jQuery._queueHooks( elem, "fx" );		if ( hooks.unqueued =3D=3D null ) {
			hooks.unqueued =3D 0;			oldfire =3D hooks.empty.fire;			=
hooks.empty.fire =3D=20
function() {				if ( !hooks.unqueued ) {					oldfire();				}			};		}
		hooks.unqueued++;		anim.always( function() {			// Ensure the complete =
handler=20
is called before this completes			anim.always( function() {				=
hooks.unqueued--;
				 if ( !jQuery.queue( elem, "fx" ).length ) {					hooks.empty.fire();	=
			}
			} );		} );	}	// Detect show/hide animations	for ( prop in props ) {		=
value =3D=20
props[ prop ];		if ( rfxtypes.test( value ) ) {			delete props[ prop ];		=
	toggle=20
=3D toggle || value =3D=3D=3D "toggle";			if ( value =3D=3D=3D ( hidden =
? "hide" : "show" ) )=20
{				// Pretend to be hidden if this is a "show" and				// there is =
still data=20
from a stopped show/hide				if ( value =3D=3D=3D "show" &amp;&amp; =
dataShow &amp;&amp;=20
dataShow[ prop ] !=3D=3D undefined ) {					hidden =3D true;				// Ignore =
all other=20
no-op show/hide data				} else {					continue;				}			}			orig[ prop ] =
=3D=20
dataShow &amp;&amp; dataShow[ prop ] || jQuery.style( elem, prop );		}	}	=
// Bail=20
out if this is a no-op like .hide().hide()	propTween =3D =
!jQuery.isEmptyObject(=20
props );	if ( !propTween &amp;&amp; jQuery.isEmptyObject( orig ) ) {		=
return;	}
	// Restrict "overflow" and "display" styles during box animations	if ( =
isBox=20
&amp;&amp; elem.nodeType =3D=3D=3D 1 ) {		// Support: IE &lt;=3D9 - 11, =
Edge 12 - 15		//=20
Record all 3 overflow attributes because IE does not infer the shorthand	=
	//=20
from identically-valued overflowX and overflowY and Edge just mirrors		=
// the=20
overflowX value there.		opts.overflow =3D [ style.overflow, =
style.overflowX,=20
style.overflowY ];		// Identify a display type, preferring old show/hide =
data=20
over the CSS cascade		restoreDisplay =3D dataShow &amp;&amp; =
dataShow.display;		if=20
( restoreDisplay =3D=3D null ) {			restoreDisplay =3D dataPriv.get( =
elem, "display" );
		}		display =3D jQuery.css( elem, "display" );		if ( display =3D=3D=3D =
"none" ) {			if=20
( restoreDisplay ) {				display =3D restoreDisplay;			} else {				// Get =
nonempty=20
value(s) by temporarily forcing visibility				showHide( [ elem ], true =
);
				restoreDisplay =3D elem.style.display || restoreDisplay;				display =
=3D=20
jQuery.css( elem, "display" );				showHide( [ elem ] );			}		}		// =
Animate=20
inline elements as inline-block		if ( display =3D=3D=3D "inline" || =
display =3D=3D=3D=20
"inline-block" &amp;&amp; restoreDisplay !=3D null ) {			if ( =
jQuery.css( elem,=20
"float" ) =3D=3D=3D "none" ) {				// Restore the original display value =
at the end of=20
pure show/hide animations				if ( !propTween ) {					anim.done( =
function() {
						style.display =3D restoreDisplay;					} );					if ( restoreDisplay =
=3D=3D null )=20
{						display =3D style.display;						restoreDisplay =3D display =
=3D=3D=3D "none" ? "" :=20
display;					}				}				style.display =3D "inline-block";			}		}	}	if (=20
opts.overflow ) {		style.overflow =3D "hidden";		anim.always( function() =
{
			style.overflow =3D opts.overflow[ 0 ];			style.overflowX =3D =
opts.overflow[ 1 ];
			style.overflowY =3D opts.overflow[ 2 ];		} );	}	// Implement =
show/hide=20
animations	propTween =3D false;	for ( prop in orig ) {		// General =
show/hide setup=20
for this element animation		if ( !propTween ) {			if ( dataShow ) {				=
if (=20
"hidden" in dataShow ) {					hidden =3D dataShow.hidden;				}			} else {
				dataShow =3D dataPriv.access( elem, "fxshow", { display: =
restoreDisplay } );
			}			// Store hidden/visible for toggle so `.stop().toggle()` =
"reverses"			if=20
( toggle ) {				dataShow.hidden =3D !hidden;			}			// Show elements =
before=20
animating them			if ( hidden ) {				showHide( [ elem ], true );			}			/* =

eslint-disable no-loop-func */			anim.done( function() {			/* =
eslint-enable=20
no-loop-func */				// The final step of a "hide" animation is actually =
hiding=20
the element				if ( !hidden ) {					showHide( [ elem ] );				}
				dataPriv.remove( elem, "fxshow" );				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );				}			} );		}		// =
Per-property=20
setup		propTween =3D createTween( hidden ? dataShow[ prop ] : 0, prop, =
anim );		if=20
( !( prop in dataShow ) ) {			dataShow[ prop ] =3D propTween.start;			if =
( hidden=20
) {				propTween.end =3D propTween.start;				propTween.start =3D 0;			}		=
}	} }
 function propFilter( props, specialEasing ) {	var index, name, easing, =
value,=20
hooks;	// camelCase, specialEasing and expand cssHook pass	for ( index =
in props=20
) {		name =3D camelCase( index );		easing =3D specialEasing[ name ];		=
value =3D props[=20
index ];		if ( Array.isArray( value ) ) {			easing =3D value[ 1 ];			=
value =3D=20
props[ index ] =3D value[ 0 ];		}		if ( index !=3D=3D name ) {			props[ =
name ] =3D=20
value;			delete props[ index ];		}		hooks =3D jQuery.cssHooks[ name ];		=
if ( hooks=20
&amp;&amp; "expand" in hooks ) {			value =3D hooks.expand( value );			=
delete=20
props[ name ];			// Not quite $.extend, this won't overwrite existing =
keys.			//=20
Reusing 'index' because we have the correct "name"			for ( index in =
value ) {
				if ( !( index in props ) ) {					props[ index ] =3D value[ index ];
					specialEasing[ index ] =3D easing;				}			}		} else {			=
specialEasing[ name ]=20
=3D easing;		}	} } function Animation( elem, properties, options ) {	var =
result,
		stopped,		index =3D 0,		length =3D Animation.prefilters.length,		=
deferred =3D=20
jQuery.Deferred().always( function() {			// Don't match elem in the =
:animated=20
selector			delete tick.elem;		} ),		tick =3D function() {			if ( stopped =
) {
				return false;			}			var currentTime =3D fxNow || createFxNow(),				=
remaining =3D=20
Math.max( 0, animation.startTime + animation.duration - currentTime ),			=
	//=20
Support: Android 2.3 only				// Archaic crash bug won't allow us to use =
`1 - (=20
0.5 || 0 )` (#12497)				temp =3D remaining / animation.duration || 0,				=
percent =3D=20
1 - temp,				index =3D 0,				length =3D animation.tweens.length;			for ( =
; index=20
&lt; length; index++ ) {				animation.tweens[ index ].run( percent );			=
}
			deferred.notifyWith( elem, [ animation, percent, remaining ] );			// =
If=20
there's more to do, yield			if ( percent &lt; 1 &amp;&amp; length ) {				=
return=20
remaining;			}			// If this was an empty animation, synthesize a final =
progress=20
notification			if ( !length ) {				deferred.notifyWith( elem, [ =
animation, 1, 0=20
] );			}			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );			return false;		},		=
animation =3D=20
deferred.promise( {			elem: elem,			props: jQuery.extend( {}, properties =
),
			opts: jQuery.extend( true, {				specialEasing: {},				easing:=20
jQuery.easing._default			}, options ),			originalProperties: properties,
			originalOptions: options,			startTime: fxNow || createFxNow(),			=
duration:=20
options.duration,			tweens: [],			createTween: function( prop, end ) {			=
	var=20
tween =3D jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );				return tween;			},			stop: =
function(=20
gotoEnd ) {				var index =3D 0,					// If we are going to the end, we =
want to run=20
all the tweens					// otherwise we skip this part					length =3D gotoEnd =
?=20
animation.tweens.length : 0;				if ( stopped ) {					return this;				}
				stopped =3D true;				for ( ; index &lt; length; index++ ) {
					animation.tweens[ index ].run( 1 );				}				// Resolve when we =
played the=20
last frame; otherwise, reject				if ( gotoEnd ) {					=
deferred.notifyWith( elem,=20
[ animation, 1, 0 ] );					deferred.resolveWith( elem, [ animation, =
gotoEnd ] );
				} else {					deferred.rejectWith( elem, [ animation, gotoEnd ] );				=
}
				return this;			}		} ),		props =3D animation.props;	propFilter( =
props,=20
animation.opts.specialEasing );	for ( ; index &lt; length; index++ ) {		=
result =3D=20
Animation.prefilters[ index ].call( animation, elem, props, =
animation.opts );
		if ( result ) {			if ( isFunction( result.stop ) ) {				=
jQuery._queueHooks(=20
animation.elem, animation.opts.queue ).stop =3D					result.stop.bind( =
result );
			}			return result;		}	}	jQuery.map( props, createTween, animation );	=
if (=20
isFunction( animation.opts.start ) ) {		animation.opts.start.call( elem, =

animation );	}	// Attach callbacks from options	animation		.progress(=20
animation.opts.progress )		.done( animation.opts.done, =
animation.opts.complete )
		.fail( animation.opts.fail )		.always( animation.opts.always );
	jQuery.fx.timer(		jQuery.extend( tick, {			elem: elem,			anim: =
animation,
			queue: animation.opts.queue		} )	);	return animation; } =
jQuery.Animation =3D=20
jQuery.extend( Animation, {	tweeners: {		"*": [ function( prop, value ) =
{			var=20
tween =3D this.createTween( prop, value );			adjustCSS( tween.elem, =
prop,=20
rcssNum.exec( value ), tween );			return tween;		} ]	},	tweener: =
function(=20
props, callback ) {		if ( isFunction( props ) ) {			callback =3D props;		=
	props =3D=20
[ "*" ];		} else {			props =3D props.match( rnothtmlwhite );		}		var =
prop,			index=20
=3D 0,			length =3D props.length;		for ( ; index &lt; length; index++ ) =
{			prop =3D=20
props[ index ];			Animation.tweeners[ prop ] =3D Animation.tweeners[ =
prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );		}	},	prefilters: [=20
defaultPrefilter ],	prefilter: function( callback, prepend ) {		if ( =
prepend ) {
			Animation.prefilters.unshift( callback );		} else {
			Animation.prefilters.push( callback );		}	} } ); jQuery.speed =3D =
function(=20
speed, easing, fn ) {	var opt =3D speed &amp;&amp; typeof speed =
=3D=3D=3D "object" ?=20
jQuery.extend( {}, speed ) : {		complete: fn || !fn &amp;&amp; easing ||
			isFunction( speed ) &amp;&amp; speed,		duration: speed,		easing: fn=20
&amp;&amp; easing || easing &amp;&amp; !isFunction( easing ) &amp;&amp; =
easing
	};	// Go to the end state if fx are off	if ( jQuery.fx.off ) {		=
opt.duration =3D=20
0;	} else {		if ( typeof opt.duration !=3D=3D "number" ) {			if ( =
opt.duration in=20
jQuery.fx.speeds ) {				opt.duration =3D jQuery.fx.speeds[ opt.duration =
];			}=20
else {				opt.duration =3D jQuery.fx.speeds._default;			}		}	}	// =
Normalize=20
opt.queue - true/undefined/null -&gt; "fx"	if ( opt.queue =3D=3D null || =
opt.queue=20
=3D=3D=3D true ) {		opt.queue =3D "fx";	}	// Queueing	opt.old =3D =
opt.complete;
	opt.complete =3D function() {		if ( isFunction( opt.old ) ) {			=
opt.old.call(=20
this );		}		if ( opt.queue ) {			jQuery.dequeue( this, opt.queue );		}	=
};	return=20
opt; }; jQuery.fn.extend( {	fadeTo: function( speed, to, easing, =
callback ) {
		// Show any hidden elements after setting opacity to 0		return =
this.filter(=20
isHiddenWithinTree ).css( "opacity", 0 ).show()			// Animate to the =
value=20
specified			.end().animate( { opacity: to }, speed, easing, callback );	=
},
	animate: function( prop, speed, easing, callback ) {		var empty =3D=20
jQuery.isEmptyObject( prop ),			optall =3D jQuery.speed( speed, easing, =
callback=20
),			doAnimation =3D function() {				// Operate on a copy of prop so =
per-property=20
easing won't be lost				var anim =3D Animation( this, jQuery.extend( {}, =
prop ),=20
optall );				// Empty animations, or finishing resolves immediately				=
if (=20
empty || dataPriv.get( this, "finish" ) ) {					anim.stop( true );				}		=
	};
			doAnimation.finish =3D doAnimation;		return empty || optall.queue =
=3D=3D=3D false ?
			this.each( doAnimation ) :			this.queue( optall.queue, doAnimation );	=
},
	stop: function( type, clearQueue, gotoEnd ) {		var stopQueue =3D =
function( hooks=20
) {			var stop =3D hooks.stop;			delete hooks.stop;			stop( gotoEnd );		=
};		if (=20
typeof type !=3D=3D "string" ) {			gotoEnd =3D clearQueue;			clearQueue =
=3D type;			type=20
=3D undefined;		}		if ( clearQueue &amp;&amp; type !=3D=3D false ) {			=
this.queue(=20
type || "fx", [] );		}		return this.each( function() {			var dequeue =3D =
true,
				index =3D type !=3D null &amp;&amp; type + "queueHooks",				timers =
=3D=20
jQuery.timers,				data =3D dataPriv.get( this );			if ( index ) {				if =
( data[=20
index ] &amp;&amp; data[ index ].stop ) {					stopQueue( data[ index ] =
);				}
			} else {				for ( index in data ) {					if ( data[ index ] &amp;&amp; =
data[=20
index ].stop &amp;&amp; rrun.test( index ) ) {						stopQueue( data[ =
index ] );
					}				}			}			for ( index =3D timers.length; index--; ) {				 if ( =
timers[=20
index ].elem =3D=3D=3D this &amp;&amp;					( type =3D=3D null || timers[ =
index ].queue =3D=3D=3D=20
type ) ) {					timers[ index ].anim.stop( gotoEnd );					dequeue =3D =
false;
					timers.splice( index, 1 );				}			}			// Start the next in the =
queue if the=20
last step wasn't forced.			// Timers currently will call their complete=20
callbacks, which			// will dequeue but only if they were gotoEnd.			if ( =
dequeue=20
|| !gotoEnd ) {				jQuery.dequeue( this, type );			}		} );	},	finish: =
function(=20
type ) {		if ( type !=3D=3D false ) {			type =3D type || "fx";		}		=
return this.each(=20
function() {			var index,				data =3D dataPriv.get( this ),				queue =3D =
data[ type=20
+ "queue" ],				hooks =3D data[ type + "queueHooks" ],				timers =3D =
jQuery.timers,
				length =3D queue ? queue.length : 0;			// Enable finishing flag on =
private=20
data			data.finish =3D true;			// Empty the queue first			jQuery.queue( =
this,=20
type, [] );			if ( hooks &amp;&amp; hooks.stop ) {				hooks.stop.call( =
this,=20
true );			}			// Look for any active animations, and finish them			for ( =
index =3D=20
timers.length; index--; ) {				 if ( timers[ index ].elem =3D=3D=3D this =
&amp;&amp;=20
timers[ index ].queue =3D=3D=3D type ) {					timers[ index ].anim.stop( =
true );
					timers.splice( index, 1 );				}			}			// Look for any animations in =
the old=20
queue and finish them			for ( index =3D 0; index &lt; length; index++ ) =
{				if (=20
queue[ index ] &amp;&amp; queue[ index ].finish ) {					queue[ index=20
].finish.call( this );				}			}			// Turn off finishing flag			delete=20
data.finish;		} );	} } ); jQuery.each( [ "toggle", "show", "hide" ], =
function(=20
i, name ) {	var cssFn =3D jQuery.fn[ name ];	jQuery.fn[ name ] =3D =
function( speed,=20
easing, callback ) {		return speed =3D=3D null || typeof speed =3D=3D=3D =
"boolean" ?
			cssFn.apply( this, arguments ) :			this.animate( genFx( name, true ), =
speed,=20
easing, callback );	}; } ); // Generate shortcuts for custom animations
 jQuery.each( {	slideDown: genFx( "show" ),	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),	fadeIn: { opacity: "show" },	fadeOut: { =

opacity: "hide" },	fadeToggle: { opacity: "toggle" } }, function( name, =
props )=20
{	jQuery.fn[ name ] =3D function( speed, easing, callback ) {		return=20
this.animate( props, speed, easing, callback );	}; } ); jQuery.timers =
=3D [];
 jQuery.fx.tick =3D function() {	var timer,		i =3D 0,		timers =3D =
jQuery.timers;	fxNow=20
=3D Date.now();	for ( ; i &lt; timers.length; i++ ) {		timer =3D timers[ =
i ];		//=20
Run the timer and safely remove it when done (allowing for external =
removal)		if=20
( !timer() &amp;&amp; timers[ i ] =3D=3D=3D timer ) {			timers.splice( =
i--, 1 );		}	}
	if ( !timers.length ) {		jQuery.fx.stop();	}	fxNow =3D undefined; };
 jQuery.fx.timer =3D function( timer ) {	jQuery.timers.push( timer );
	jQuery.fx.start(); }; jQuery.fx.interval =3D 13; jQuery.fx.start =3D =
function() {
	if ( inProgress ) {		return;	}	inProgress =3D true;	schedule(); }; =
jQuery.fx.stop=20
=3D function() {	inProgress =3D null; }; jQuery.fx.speeds =3D {	slow: =
600,	fast: 200,
	// Default speed	_default: 400 }; // Based off of the plugin by Clint =
Helfers,=20
with permission. //=20
https://web.archive.org/web/20100324014747/http://blindsignals.com/index.=
php/2009/07/jquery-delay/
 jQuery.fn.delay =3D function( time, type ) {	time =3D jQuery.fx ? =
jQuery.fx.speeds[=20
time ] || time : time;	type =3D type || "fx";	return this.queue( type, =
function(=20
next, hooks ) {		var timeout =3D window.setTimeout( next, time );		=
hooks.stop =3D=20
function() {			window.clearTimeout( timeout );		};	} ); }; ( function() =
{	var=20
input =3D document.createElement( "input" ),		select =3D =
document.createElement(=20
"select" ),		opt =3D select.appendChild( document.createElement( =
"option" ) );
	input.type =3D "checkbox";	// Support: Android &lt;=3D4.3 only	// =
Default value for=20
a checkbox should be "on"	support.checkOn =3D input.value !=3D=3D "";	// =
Support: IE=20
&lt;=3D11 only	// Must access selectedIndex to make default options =
select
	support.optSelected =3D opt.selected;	// Support: IE &lt;=3D11 only	// =
An input=20
loses its value after becoming a radio	input =3D document.createElement( =
"input"=20
);	input.value =3D "t";	input.type =3D "radio";	support.radioValue =3D =
input.value =3D=3D=3D=20
"t"; } )(); var boolHook,	attrHandle =3D jQuery.expr.attrHandle; =
jQuery.fn.extend(=20
{	attr: function( name, value ) {		return access( this, jQuery.attr, =
name,=20
value, arguments.length &gt; 1 );	},	removeAttr: function( name ) {		=
return=20
this.each( function() {			jQuery.removeAttr( this, name );		} );	} } );
 jQuery.extend( {	attr: function( elem, name, value ) {		var ret, hooks,	=
		nType=20
=3D elem.nodeType;		// Don't get/set attributes on text, comment and =
attribute=20
nodes		if ( nType =3D=3D=3D 3 || nType =3D=3D=3D 8 || nType =3D=3D=3D 2 =
) {			return;		}		//=20
Fallback to prop when attributes are not supported		if ( typeof=20
elem.getAttribute =3D=3D=3D "undefined" ) {			return jQuery.prop( elem, =
name, value );
		}		// Attribute hooks are determined by the lowercase version		// Grab =

necessary hook if one is defined		if ( nType !=3D=3D 1 || =
!jQuery.isXMLDoc( elem ) )=20
{			hooks =3D jQuery.attrHooks[ name.toLowerCase() ] ||				(=20
jQuery.expr.match.bool.test( name ) ? boolHook : undefined );		}		if ( =
value !=3D=3D=20
undefined ) {			if ( value =3D=3D=3D null ) {				jQuery.removeAttr( =
elem, name );
				return;			}			if ( hooks &amp;&amp; "set" in hooks &amp;&amp;				( =
ret =3D=20
hooks.set( elem, value, name ) ) !=3D=3D undefined ) {				return ret;			=
}
			elem.setAttribute( name, value + "" );			return value;		}		if ( hooks =

&amp;&amp; "get" in hooks &amp;&amp; ( ret =3D hooks.get( elem, name ) ) =
!=3D=3D null=20
) {			return ret;		}		ret =3D jQuery.find.attr( elem, name );		// =
Non-existent=20
attributes return null, we normalize to undefined		return ret =3D=3D =
null ?=20
undefined : ret;	},	attrHooks: {		type: {			set: function( elem, value ) =
{				if=20
( !support.radioValue &amp;&amp; value =3D=3D=3D "radio" &amp;&amp;					=
nodeName(=20
elem, "input" ) ) {					var val =3D elem.value;					elem.setAttribute( =
"type",=20
value );					if ( val ) {						elem.value =3D val;					}					return =
value;				}
			}		}	},	removeAttr: function( elem, value ) {		var name,			i =3D 0,			=
//=20
Attribute names can contain non-HTML whitespace characters			//=20
https://html.spec.whatwg.org/multipage/syntax.html#attributes-2			=
attrNames =3D=20
value &amp;&amp; value.match( rnothtmlwhite );		if ( attrNames =
&amp;&amp;=20
elem.nodeType =3D=3D=3D 1 ) {			while ( ( name =3D attrNames[ i++ ] ) ) =
{
				elem.removeAttribute( name );			}		}	} } ); // Hooks for boolean =
attributes
 boolHook =3D {	set: function( elem, value, name ) {		if ( value =
=3D=3D=3D false ) {
			// Remove boolean attributes when set to false			jQuery.removeAttr( =
elem,=20
name );		} else {			elem.setAttribute( name, name );		}		return name;	} =
};
 jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( =
i, name )=20
{	var getter =3D attrHandle[ name ] || jQuery.find.attr;	attrHandle[ =
name ] =3D=20
function( elem, name, isXML ) {		var ret, handle,			lowercaseName =3D=20
name.toLowerCase();		if ( !isXML ) {			// Avoid an infinite loop by =
temporarily=20
removing this function from the getter			handle =3D attrHandle[ =
lowercaseName ];
			attrHandle[ lowercaseName ] =3D ret;			ret =3D getter( elem, name, =
isXML ) !=3D=20
null ?				lowercaseName :				null;			attrHandle[ lowercaseName ] =3D =
handle;		}
		return ret;	}; } ); var rfocusable =3D =
/^(?:input|select|textarea|button)$/i,
	rclickable =3D /^(?:a|area)$/i; jQuery.fn.extend( {	prop: function( =
name, value )=20
{		return access( this, jQuery.prop, name, value, arguments.length &gt; =
1 );	},
	removeProp: function( name ) {		return this.each( function() {			delete =
this[=20
jQuery.propFix[ name ] || name ];		} );	} } ); jQuery.extend( {	prop: =
function(=20
elem, name, value ) {		var ret, hooks,			nType =3D elem.nodeType;		// =
Don't=20
get/set properties on text, comment and attribute nodes		if ( nType =
=3D=3D=3D 3 ||=20
nType =3D=3D=3D 8 || nType =3D=3D=3D 2 ) {			return;		}		if ( nType =
!=3D=3D 1 ||=20
!jQuery.isXMLDoc( elem ) ) {			// Fix name and attach hooks			name =3D=20
jQuery.propFix[ name ] || name;			hooks =3D jQuery.propHooks[ name ];		}	=
	if (=20
value !=3D=3D undefined ) {			if ( hooks &amp;&amp; "set" in hooks =
&amp;&amp;				(=20
ret =3D hooks.set( elem, value, name ) ) !=3D=3D undefined ) {				return =
ret;			}
			return ( elem[ name ] =3D value );		}		if ( hooks &amp;&amp; "get" in =
hooks=20
&amp;&amp; ( ret =3D hooks.get( elem, name ) ) !=3D=3D null ) {			return =
ret;		}
		return elem[ name ];	},	propHooks: {		tabIndex: {			get: function( =
elem ) {
				// Support: IE &lt;=3D9 - 11 only				// elem.tabIndex doesn't always =
return=20
the				// correct value when it hasn't been explicitly set				//=20
https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2=
008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)				var tabindex =3D=20
jQuery.find.attr( elem, "tabindex" );				if ( tabindex ) {					return =
parseInt(=20
tabindex, 10 );				}				if (					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &amp;&amp;					elem.href				) {				=
	return=20
0;				}				return -1;			}		}	},	propFix: {		"for": "htmlFor",		"class":=20
"className"	} } ); // Support: IE &lt;=3D11 only // Accessing the =
selectedIndex=20
property // forces the browser to respect setting selected // on the =
option //=20
The getter ensures a default option is selected // when in an optgroup =
// eslint=20
rule "no-unused-expressions" is disabled for this code // since it =
considers=20
such accessions noop if ( !support.optSelected ) {	=
jQuery.propHooks.selected =3D {
		get: function( elem ) {			/* eslint no-unused-expressions: "off" */			=
var=20
parent =3D elem.parentNode;			if ( parent &amp;&amp; parent.parentNode ) =
{
				parent.parentNode.selectedIndex;			}			return null;		},		set: =
function( elem=20
) {			/* eslint no-unused-expressions: "off" */			var parent =3D =
elem.parentNode;
			if ( parent ) {				parent.selectedIndex;				if ( parent.parentNode ) =
{
					parent.parentNode.selectedIndex;				}			}		}	}; } jQuery.each( [
	"tabIndex",	"readOnly",	"maxLength",	"cellSpacing",	"cellPadding",	=
"rowSpan",
	"colSpan",	"useMap",	"frameBorder",	"contentEditable" ], function() {
	jQuery.propFix[ this.toLowerCase() ] =3D this; } );	// Strip and =
collapse=20
whitespace according to HTML spec	//=20
https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace	=
function=20
stripAndCollapse( value ) {		var tokens =3D value.match( rnothtmlwhite ) =
|| [];
		return tokens.join( " " );	} function getClass( elem ) {	return=20
elem.getAttribute &amp;&amp; elem.getAttribute( "class" ) || ""; } =
function=20
classesToArray( value ) {	if ( Array.isArray( value ) ) {		return value;	=
}	if (=20
typeof value =3D=3D=3D "string" ) {		return value.match( rnothtmlwhite ) =
|| [];	}
	return []; } jQuery.fn.extend( {	addClass: function( value ) {		var =
classes,=20
elem, cur, curValue, clazz, j, finalValue,			i =3D 0;		if ( isFunction( =
value ) )=20
{			return this.each( function( j ) {				jQuery( this ).addClass( =
value.call(=20
this, j, getClass( this ) ) );			} );		}		classes =3D classesToArray( =
value );		if=20
( classes.length ) {			while ( ( elem =3D this[ i++ ] ) ) {				curValue =
=3D=20
getClass( elem );				cur =3D elem.nodeType =3D=3D=3D 1 &amp;&amp; ( " " =
+=20
stripAndCollapse( curValue ) + " " );				if ( cur ) {					j =3D 0;					=
while ( (=20
clazz =3D classes[ j++ ] ) ) {						if ( cur.indexOf( " " + clazz + " " =
) &lt; 0 )=20
{							cur +=3D clazz + " ";						}					}					// Only assign if =
different to=20
avoid unneeded rendering.					finalValue =3D stripAndCollapse( cur );				=
	if (=20
curValue !=3D=3D finalValue ) {						elem.setAttribute( "class", =
finalValue );					}
				}			}		}		return this;	},	removeClass: function( value ) {		var =
classes,=20
elem, cur, curValue, clazz, j, finalValue,			i =3D 0;		if ( isFunction( =
value ) )=20
{			return this.each( function( j ) {				jQuery( this ).removeClass( =
value.call(=20
this, j, getClass( this ) ) );			} );		}		if ( !arguments.length ) {			=
return=20
this.attr( "class", "" );		}		classes =3D classesToArray( value );		if ( =

classes.length ) {			while ( ( elem =3D this[ i++ ] ) ) {				curValue =
=3D getClass(=20
elem );				// This expression is here for better compressibility (see =
addClass)
				cur =3D elem.nodeType =3D=3D=3D 1 &amp;&amp; ( " " + =
stripAndCollapse( curValue ) +=20
" " );				if ( cur ) {					j =3D 0;					while ( ( clazz =3D classes[ j++ =
] ) ) {
						// Remove *all* instances						while ( cur.indexOf( " " + clazz + =
" " )=20
&gt; -1 ) {							cur =3D cur.replace( " " + clazz + " ", " " );						}		=
			}
					// Only assign if different to avoid unneeded rendering.					=
finalValue =3D=20
stripAndCollapse( cur );					if ( curValue !=3D=3D finalValue ) {
						elem.setAttribute( "class", finalValue );					}				}			}		}		=
return this;
	},	toggleClass: function( value, stateVal ) {		var type =3D typeof =
value,
			isValidValue =3D type =3D=3D=3D "string" || Array.isArray( value );		=
if ( typeof=20
stateVal =3D=3D=3D "boolean" &amp;&amp; isValidValue ) {			return =
stateVal ?=20
this.addClass( value ) : this.removeClass( value );		}		if ( isFunction( =
value )=20
) {			return this.each( function( i ) {				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),					stateVal				=
);			}=20
);		}		return this.each( function() {			var className, i, self, =
classNames;			if=20
( isValidValue ) {				// Toggle individual class names				i =3D 0;				=
self =3D=20
jQuery( this );				classNames =3D classesToArray( value );				while ( ( =
className=20
=3D classNames[ i++ ] ) ) {					// Check each className given, space =
separated=20
list					if ( self.hasClass( className ) ) {						self.removeClass( =
className );
					} else {						self.addClass( className );					}				}			// Toggle =
whole=20
class name			} else if ( value =3D=3D=3D undefined || type =3D=3D=3D =
"boolean" ) {
				className =3D getClass( this );				if ( className ) {					// Store =
className=20
if set					dataPriv.set( this, "__className__", className );				}				// =
If the=20
element has a class name or if we're passed `false`,				// then remove =
the whole=20
classname (if there was one, the above saved it).				// Otherwise bring =
back=20
whatever was previously saved (if anything),				// falling back to the =
empty=20
string if nothing was stored.				if ( this.setAttribute ) {
					this.setAttribute( "class",						className || value =3D=3D=3D false =
?						"" :
						dataPriv.get( this, "__className__" ) || ""					);				}			}		} );	=
},
	hasClass: function( selector ) {		var className, elem,			i =3D 0;		=
className =3D "=20
" + selector + " ";		while ( ( elem =3D this[ i++ ] ) ) {			if ( =
elem.nodeType =3D=3D=3D=20
1 &amp;&amp;				( " " + stripAndCollapse( getClass( elem ) ) + " " =
).indexOf(=20
className ) &gt; -1 ) {					return true;			}		}		return false;	} } ); =
var=20
rreturn =3D /\r/g; jQuery.fn.extend( {	val: function( value ) {		var =
hooks, ret,=20
valueIsFunction,			elem =3D this[ 0 ];		if ( !arguments.length ) {			if =
( elem ) {
				hooks =3D jQuery.valHooks[ elem.type ] ||					jQuery.valHooks[=20
elem.nodeName.toLowerCase() ];				if ( hooks &amp;&amp;					"get" in =
hooks=20
&amp;&amp;					( ret =3D hooks.get( elem, "value" ) ) !=3D=3D undefined		=
		) {
					return ret;				}				ret =3D elem.value;				// Handle most common =
string cases
				if ( typeof ret =3D=3D=3D "string" ) {					return ret.replace( =
rreturn, "" );				}
				// Handle cases where value is null/undef or number				return ret =
=3D=3D null ?=20
"" : ret;			}			return;		}		valueIsFunction =3D isFunction( value );		=
return=20
this.each( function( i ) {			var val;			if ( this.nodeType !=3D=3D 1 ) {	=
			return;
			}			if ( valueIsFunction ) {				val =3D value.call( this, i, jQuery( =
this=20
).val() );			} else {				val =3D value;			}			// Treat null/undefined as =
"";=20
convert numbers to string			if ( val =3D=3D null ) {				val =3D "";			} =
else if (=20
typeof val =3D=3D=3D "number" ) {				val +=3D "";			} else if ( =
Array.isArray( val ) ) {
				val =3D jQuery.map( val, function( value ) {					return value =3D=3D =
null ? "" :=20
value + "";				} );			}			hooks =3D jQuery.valHooks[ this.type ] ||=20
jQuery.valHooks[ this.nodeName.toLowerCase() ];			// If set returns =
undefined,=20
fall back to normal setting			if ( !hooks || !( "set" in hooks ) || =
hooks.set(=20
this, val, "value" ) =3D=3D=3D undefined ) {				this.value =3D val;			}		=
} );	} } );
 jQuery.extend( {	valHooks: {		option: {			get: function( elem ) {				=
var val =3D=20
jQuery.find.attr( elem, "value" );				return val !=3D null ?					val :			=
		//=20
Support: IE &lt;=3D10 - 11 only					// option.text throws exceptions =
(#14686,=20
#14858)					// Strip and collapse whitespace					//=20
https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );			}		},		select: {			get:=20
function( elem ) {				var value, option, i,					options =3D =
elem.options,
					index =3D elem.selectedIndex,					one =3D elem.type =3D=3D=3D =
"select-one",
					values =3D one ? null : [],					max =3D one ? index + 1 : =
options.length;				if=20
( index &lt; 0 ) {					i =3D max;				} else {					i =3D one ? index : 0;	=
			}				//=20
Loop through all the selected options				for ( ; i &lt; max; i++ ) {					=
option=20
=3D options[ i ];					// Support: IE &lt;=3D9 only					// IE8-9 doesn't =
update=20
selected after form reset (#2551)					if ( ( option.selected || i =
=3D=3D=3D index )=20
&amp;&amp;							// Don't return options that are disabled or in a =
disabled=20
optgroup							!option.disabled &amp;&amp;							( =
!option.parentNode.disabled=20
||								!nodeName( option.parentNode, "optgroup" ) ) ) {						// Get =
the=20
specific value for the option						value =3D jQuery( option ).val();					=
	// We=20
don't need an array for one selects						if ( one ) {							return =
value;						}
						// Multi-Selects return an array						values.push( value );					}		=
		}
				return values;			},			set: function( elem, value ) {				var =
optionSet,=20
option,					options =3D elem.options,					values =3D jQuery.makeArray( =
value ),
					i =3D options.length;				while ( i-- ) {					 option =3D options[ i =
];					/*=20
eslint-disable no-cond-assign */					if ( option.selected =3D						=
jQuery.inArray(=20
jQuery.valHooks.option.get( option ), values ) &gt; -1					) {						=
optionSet =3D=20
true;					}					/* eslint-enable no-cond-assign */				}				// Force =
browsers to=20
behave consistently when non-matching value is set				if ( !optionSet ) =
{
					elem.selectedIndex =3D -1;				}				return values;			}		}	} } ); // =
Radios and=20
checkboxes getter/setter jQuery.each( [ "radio", "checkbox" ], =
function() {
	jQuery.valHooks[ this ] =3D {		set: function( elem, value ) {			if (=20
Array.isArray( value ) ) {				return ( elem.checked =3D jQuery.inArray( =
jQuery(=20
elem ).val(), value ) &gt; -1 );			}		}	};	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get =3D function( elem ) {			return =
elem.getAttribute(=20
"value" ) =3D=3D=3D null ? "on" : elem.value;		};	} } ); // Return =
jQuery for=20
attributes-only inclusion support.focusin =3D "onfocusin" in window; var =

rfocusMorph =3D /^(?:focusinfocus|focusoutblur)$/,	=
stopPropagationCallback =3D=20
function( e ) {		e.stopPropagation();	}; jQuery.extend( jQuery.event, {	=
trigger:=20
function( event, data, elem, onlyHandlers ) {		var i, cur, tmp, =
bubbleType,=20
ontype, handle, special, lastElement,			eventPath =3D [ elem || document =
],			type=20
=3D hasOwn.call( event, "type" ) ? event.type : event,			namespaces =3D =
hasOwn.call(=20
event, "namespace" ) ? event.namespace.split( "." ) : [];		cur =3D =
lastElement =3D=20
tmp =3D elem =3D elem || document;		// Don't do events on text and =
comment nodes		if=20
( elem.nodeType =3D=3D=3D 3 || elem.nodeType =3D=3D=3D 8 ) {			return;		=
}		// focus/blur=20
morphs to focusin/out; ensure we're not firing them right now		if (=20
rfocusMorph.test( type + jQuery.event.triggered ) ) {			return;		}		if ( =

type.indexOf( "." ) &gt; -1 ) {			// Namespaced trigger; create a regexp =
to=20
match event type in handle()			namespaces =3D type.split( "." );			type =
=3D=20
namespaces.shift();			namespaces.sort();		}		ontype =3D type.indexOf( =
":" ) &lt; 0=20
&amp;&amp; "on" + type;		// Caller can pass in a jQuery.Event object, =
Object, or=20
just an event type string		event =3D event[ jQuery.expando ] ?			event :	=
		new=20
jQuery.Event( type, typeof event =3D=3D=3D "object" &amp;&amp; event );		=
// Trigger=20
bitmask: &amp; 1 for native handlers; &amp; 2 for jQuery (always true)
		event.isTrigger =3D onlyHandlers ? 2 : 3;		event.namespace =3D =
namespaces.join(=20
"." );		event.rnamespace =3D event.namespace ?			new RegExp( "(^|\\.)" + =

namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :			null;		// Clean up =
the=20
event in case it is being reused		event.result =3D undefined;		if ( =
!event.target=20
) {			event.target =3D elem;		}		// Clone any incoming data and prepend =
the event,=20
creating the handler arg list		data =3D data =3D=3D null ?			[ event ] :
			jQuery.makeArray( data, [ event ] );		// Allow special events to draw =
outside=20
the lines		special =3D jQuery.event.special[ type ] || {};		if ( =
!onlyHandlers=20
&amp;&amp; special.trigger &amp;&amp; special.trigger.apply( elem, data =
) =3D=3D=3D=20
false ) {			return;		}		// Determine event propagation path in advance, =
per W3C=20
events spec (#9951)		// Bubble up to document, then to window; watch for =
a=20
global ownerDocument var (#9724)		if ( !onlyHandlers &amp;&amp;=20
!special.noBubble &amp;&amp; !isWindow( elem ) ) {			bubbleType =3D=20
special.delegateType || type;			if ( !rfocusMorph.test( bubbleType + =
type ) ) {
				cur =3D cur.parentNode;			}			for ( ; cur; cur =3D cur.parentNode ) =
{
				eventPath.push( cur );				tmp =3D cur;			}			// Only add window if =
we got to=20
document (e.g., not plain obj or detached DOM)			if ( tmp =3D=3D=3D (=20
elem.ownerDocument || document ) ) {				eventPath.push( tmp.defaultView =
||=20
tmp.parentWindow || window );			}		}		// Fire handlers on the event path	=
	i =3D 0;
		while ( ( cur =3D eventPath[ i++ ] ) &amp;&amp; =
!event.isPropagationStopped() )=20
{			lastElement =3D cur;			event.type =3D i &gt; 1 ?				bubbleType :
				special.bindType || type;			// jQuery handler			handle =3D ( =
dataPriv.get(=20
cur, "events" ) || {} )[ event.type ] &amp;&amp;				dataPriv.get( cur, =
"handle"=20
);			if ( handle ) {				handle.apply( cur, data );			}			// Native =
handler
			handle =3D ontype &amp;&amp; cur[ ontype ];			if ( handle &amp;&amp;=20
handle.apply &amp;&amp; acceptData( cur ) ) {				event.result =3D =
handle.apply(=20
cur, data );				if ( event.result =3D=3D=3D false ) {					=
event.preventDefault();				}
			}		}		event.type =3D type;		// If nobody prevented the default =
action, do it=20
now		if ( !onlyHandlers &amp;&amp; !event.isDefaultPrevented() ) {			if =
( (=20
!special._default ||				special._default.apply( eventPath.pop(), data ) =
=3D=3D=3D=20
false ) &amp;&amp;				acceptData( elem ) ) {				// Call a native DOM =
method on=20
the target with the same name as the event.				// Don't do default =
actions on=20
window, that's where global variables be (#6170)				if ( ontype =
&amp;&amp;=20
isFunction( elem[ type ] ) &amp;&amp; !isWindow( elem ) ) {					// Don't =

re-trigger an onFOO event when we call its FOO() method					tmp =3D =
elem[ ontype=20
];					if ( tmp ) {						elem[ ontype ] =3D null;					}					// Prevent=20
re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered =3D type;					if ( =
event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );					=
}
					elem[ type ]();					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );		=
			}
					jQuery.event.triggered =3D undefined;					if ( tmp ) {						elem[ =
ontype ] =3D=20
tmp;					}				}			}		}		return event.result;	},	// Piggyback on a donor =
event to=20
simulate a different one	// Used only for `focus(in | out)` events	=
simulate:=20
function( type, elem, event ) {		var e =3D jQuery.extend(			new =
jQuery.Event(),
			event,			{				type: type,				isSimulated: true			}		);		=
jQuery.event.trigger(=20
e, null, elem );	} } ); jQuery.fn.extend( {	trigger: function( type, =
data ) {
		return this.each( function() {			jQuery.event.trigger( type, data, =
this );		}=20
);	},	triggerHandler: function( type, data ) {		var elem =3D this[ 0 ];		=
if ( elem=20
) {			return jQuery.event.trigger( type, data, elem, true );		}	} } ); =
//=20
Support: Firefox &lt;=3D44 // Firefox doesn't have focus(in | out) =
events //=20
Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=3D687787 =
// //=20
Support: Chrome &lt;=3D48 - 49, Safari &lt;=3D9.0 - 9.1 // focus(in | =
out) events=20
fire after focus &amp; blur events, // which is spec violation -=20
http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order =
//=20
Related ticket - =
https://bugs.chromium.org/p/chromium/issues/detail?id=3D449857 if=20
( !support.focusin ) {	jQuery.each( { focus: "focusin", blur: "focusout" =
},=20
function( orig, fix ) {		// Attach a single capturing handler on the =
document=20
while someone wants focusin/focusout		var handler =3D function( event ) =
{
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) =
);		};
		jQuery.event.special[ fix ] =3D {			setup: function() {				var doc =3D =

this.ownerDocument || this,					attaches =3D dataPriv.access( doc, fix =
);				if (=20
!attaches ) {					doc.addEventListener( orig, handler, true );				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );			},			teardown: =

function() {				var doc =3D this.ownerDocument || this,					attaches =3D =

dataPriv.access( doc, fix ) - 1;				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );					=
dataPriv.remove( doc,=20
fix );				} else {					dataPriv.access( doc, fix, attaches );				}			}		=
};	} );
 } var location =3D window.location; var nonce =3D Date.now(); var =
rquery =3D ( /\?/=20
); // Cross-browser xml parsing jQuery.parseXML =3D function( data ) {	=
var xml;	if=20
( !data || typeof data !=3D=3D "string" ) {		return null;	}	// Support: =
IE 9 - 11=20
only	// IE throws on parseFromString with invalid input.	try {		xml =3D =
( new=20
window.DOMParser() ).parseFromString( data, "text/xml" );	} catch ( e ) =
{		xml =3D=20
undefined;	}	if ( !xml || xml.getElementsByTagName( "parsererror" =
).length ) {
		jQuery.error( "Invalid XML: " + data );	}	return xml; }; var	rbracket =
=3D=20
/\[\]$/,	rCRLF =3D /\r?\n/g,	rsubmitterTypes =3D=20
/^(?:submit|button|image|reset|file)$/i,	rsubmittable =3D=20
/^(?:input|select|textarea|keygen)/i; function buildParams( prefix, obj, =

traditional, add ) {	var name;	if ( Array.isArray( obj ) ) {		// =
Serialize array=20
item.		jQuery.each( obj, function( i, v ) {			if ( traditional || =
rbracket.test(=20
prefix ) ) {				// Treat each array item as a scalar.				add( prefix, v =
);			}=20
else {				// Item is non-scalar (array or object), encode its numeric =
index.
				buildParams(					prefix + "[" + ( typeof v =3D=3D=3D "object" =
&amp;&amp; v !=3D null=20
? i : "" ) + "]",					v,					traditional,					add				);			}		} );	} else =
if (=20
!traditional &amp;&amp; toType( obj ) =3D=3D=3D "object" ) {		// =
Serialize object=20
item.		for ( name in obj ) {			buildParams( prefix + "[" + name + "]", =
obj[ name=20
], traditional, add );		}	} else {		// Serialize scalar item.		add( =
prefix, obj=20
);	} } // Serialize an array of form elements or a set of // key/values =
into a=20
query string jQuery.param =3D function( a, traditional ) {	var prefix,		=
s =3D [],
		add =3D function( key, valueOrFunction ) {			// If value is a =
function, invoke=20
it and use its return value			var value =3D isFunction( valueOrFunction =
) ?
				valueOrFunction() :				valueOrFunction;			s[ s.length ] =3D=20
encodeURIComponent( key ) + "=3D" +				encodeURIComponent( value =3D=3D =
null ? "" :=20
value );		};	// If an array was passed in, assume that it is an array of =
form=20
elements.	if ( Array.isArray( a ) || ( a.jquery &amp;&amp;=20
!jQuery.isPlainObject( a ) ) ) {		// Serialize the form elements		=
jQuery.each(=20
a, function() {			add( this.name, this.value );		} );	} else {		// If=20
traditional, encode the "old" way (the way 1.3.2 or older		// did it), =
otherwise=20
encode params recursively.		for ( prefix in a ) {			buildParams( prefix, =
a[=20
prefix ], traditional, add );		}	}	// Return the resulting serialization	=
return=20
s.join( "&amp;" ); }; jQuery.fn.extend( {	serialize: function() {		=
return=20
jQuery.param( this.serializeArray() );	},	serializeArray: function() {		=
return=20
this.map( function() {			// Can add propHook for "elements" to filter or =
add=20
form elements			var elements =3D jQuery.prop( this, "elements" );			=
return=20
elements ? jQuery.makeArray( elements ) : this;		} )		.filter( =
function() {
			var type =3D this.type;			// Use .is( ":disabled" ) so that =
fieldset[disabled]=20
works			return this.name &amp;&amp; !jQuery( this ).is( ":disabled" ) =
&amp;&amp;
				rsubmittable.test( this.nodeName ) &amp;&amp; !rsubmitterTypes.test( =
type )=20
&amp;&amp;				( this.checked || !rcheckableType.test( type ) );		} )		=
.map(=20
function( i, elem ) {			var val =3D jQuery( this ).val();			if ( val =
=3D=3D null ) {
				return null;			}			if ( Array.isArray( val ) ) {				return =
jQuery.map( val,=20
function( val ) {					return { name: elem.name, value: val.replace( =
rCRLF,=20
"\r\n" ) };				} );			}			return { name: elem.name, value: val.replace( =
rCRLF,=20
"\r\n" ) };		} ).get();	} } ); var	r20 =3D /%20/g,	rhash =3D /#.*$/,	=
rantiCache =3D=20
/([?&amp;])_=3D[^&amp;]*/,	rheaders =3D /^(.*?):[ \t]*([^\r\n]*)$/mg,	// =
#7653,=20
#8125, #8152: local protocol detection	rlocalProtocol =3D=20
/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,	rnoContent =
=3D=20
/^(?:GET|HEAD)$/,	rprotocol =3D /^\/\//,	/* Prefilters	 * 1) They are =
useful to=20
introduce custom dataTypes (see ajax/jsonp.js for an example)	 * 2) =
These are=20
called:	 *    - BEFORE asking for a transport	 *    - AFTER param =
serialization=20
(s.data is a string if s.processData is true)	 * 3) key is the dataType	 =
* 4)=20
the catchall symbol "*" can be used	 * 5) execution will start with =
transport=20
dataType and THEN continue down to "*" if needed	 */	prefilters =3D {},	=
/*=20
Transports bindings	 * 1) key is the dataType	 * 2) the catchall symbol =
"*" can=20
be used	 * 3) selection will start with transport dataType and THEN go =
to "*" if=20
needed	 */	transports =3D {},	// Avoid comment-prolog char sequence =
(#10098); must=20
appease lint and evade compression	allTypes =3D "*/".concat( "*" ),	// =
Anchor tag=20
for parsing the document origin	originAnchor =3D document.createElement( =
"a" );
	originAnchor.href =3D location.href; // Base "constructor" for=20
jQuery.ajaxPrefilter and jQuery.ajaxTransport function=20
addToPrefiltersOrTransports( structure ) {	// dataTypeExpression is =
optional and=20
defaults to "*"	return function( dataTypeExpression, func ) {		if ( =
typeof=20
dataTypeExpression !=3D=3D "string" ) {			func =3D dataTypeExpression;
			dataTypeExpression =3D "*";		}		var dataType,			i =3D 0,			dataTypes =
=3D=20
dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];		if ( =
isFunction(=20
func ) ) {			// For each dataType in the dataTypeExpression			while ( ( =
dataType=20
=3D dataTypes[ i++ ] ) ) {				// Prepend if requested				if ( dataType[ =
0 ] =3D=3D=3D=20
"+" ) {					dataType =3D dataType.slice( 1 ) || "*";					( structure[ =
dataType ] =3D=20
structure[ dataType ] || [] ).unshift( func );				// Otherwise append				=
} else=20
{					( structure[ dataType ] =3D structure[ dataType ] || [] ).push( =
func );				}
			}		}	}; } // Base inspection function for prefilters and transports =
function=20
inspectPrefiltersOrTransports( structure, options, originalOptions, =
jqXHR ) {
	var inspected =3D {},		seekingTransport =3D ( structure =3D=3D=3D =
transports );	function=20
inspect( dataType ) {		var selected;		inspected[ dataType ] =3D true;
		jQuery.each( structure[ dataType ] || [], function( _, =
prefilterOrFactory ) {
			var dataTypeOrTransport =3D prefilterOrFactory( options, =
originalOptions, jqXHR=20
);			if ( typeof dataTypeOrTransport =3D=3D=3D "string" &amp;&amp;
				!seekingTransport &amp;&amp; !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );				inspect(=20
dataTypeOrTransport );				return false;			} else if ( seekingTransport ) =
{
				return !( selected =3D dataTypeOrTransport );			}		} );		return =
selected;	}
	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] =
&amp;&amp;=20
inspect( "*" ); } // A special extend for ajax options // that takes =
"flat"=20
options (not to be deep extended) // Fixes #9887 function ajaxExtend( =
target,=20
src ) {	var key, deep,		flatOptions =3D jQuery.ajaxSettings.flatOptions =
|| {};	for=20
( key in src ) {		if ( src[ key ] !=3D=3D undefined ) {			( flatOptions[ =
key ] ?=20
target : ( deep || ( deep =3D {} ) ) )[ key ] =3D src[ key ];		}	}	if ( =
deep ) {
		jQuery.extend( true, target, deep );	}	return target; } /* Handles =
responses=20
to an ajax request: * - finds the right dataType (mediates between =
content-type=20
and expected dataType) * - returns the corresponding response */ =
function=20
ajaxHandleResponses( s, jqXHR, responses ) {	var ct, type, =
finalDataType,=20
firstDataType,		contents =3D s.contents,		dataTypes =3D s.dataTypes;	// =
Remove auto=20
dataType and get content-type in the process	while ( dataTypes[ 0 ] =
=3D=3D=3D "*" ) {
		dataTypes.shift();		if ( ct =3D=3D=3D undefined ) {			ct =3D =
s.mimeType ||=20
jqXHR.getResponseHeader( "Content-Type" );		}	}	// Check if we're =
dealing with a=20
known content-type	if ( ct ) {		for ( type in contents ) {			if ( =
contents[ type=20
] &amp;&amp; contents[ type ].test( ct ) ) {				dataTypes.unshift( type =
);
				break;			}		}	}	// Check to see if we have a response for the =
expected=20
dataType	if ( dataTypes[ 0 ] in responses ) {		finalDataType =3D =
dataTypes[ 0 ];	}=20
else {		// Try convertible dataTypes		for ( type in responses ) {			if ( =

!dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType =3D type;				break;			}			if ( !firstDataType ) {
				firstDataType =3D type;			}		}		// Or just use first one		=
finalDataType =3D=20
finalDataType || firstDataType;	}	// If we found a dataType	// We add =
the=20
dataType to the list if needed	// and return the corresponding response	=
if (=20
finalDataType ) {		if ( finalDataType !=3D=3D dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );		}		return responses[ =
finalDataType ];	}
 } /* Chain conversions given the request and the original response * =
Also sets=20
the responseXXX fields on the jqXHR instance */ function ajaxConvert( s, =

response, jqXHR, isSuccess ) {	var conv2, current, conv, tmp, prev,		=
converters=20
=3D {},		// Work with a copy of dataTypes in case we need to modify it =
for=20
conversion		dataTypes =3D s.dataTypes.slice();	// Create converters map =
with=20
lowercased keys	if ( dataTypes[ 1 ] ) {		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] =3D s.converters[ conv ];		}	}	=
current =3D=20
dataTypes.shift();	// Convert to each sequential dataType	while ( =
current ) {
		if ( s.responseFields[ current ] ) {			jqXHR[ s.responseFields[ =
current ] ] =3D=20
response;		}		// Apply the dataFilter if provided		if ( !prev &amp;&amp; =

isSuccess &amp;&amp; s.dataFilter ) {			response =3D s.dataFilter( =
response,=20
s.dataType );		}		prev =3D current;		current =3D dataTypes.shift();		if =
( current )=20
{			// There's only work to do if current dataType is non-auto			if ( =
current=20
=3D=3D=3D "*" ) {				current =3D prev;			// Convert response if prev =
dataType is=20
non-auto and differs from current			} else if ( prev !=3D=3D "*" =
&amp;&amp; prev !=3D=3D=20
current ) {				// Seek a direct converter				conv =3D converters[ prev + =
" " +=20
current ] || converters[ "* " + current ];				// If none found, seek a =
pair
				if ( !conv ) {					for ( conv2 in converters ) {						// If conv2 =
outputs=20
current						tmp =3D conv2.split( " " );						if ( tmp[ 1 ] =3D=3D=3D =
current ) {
							// If prev can be converted to accepted input							conv =3D =
converters[=20
prev + " " + tmp[ 0 ] ] ||								converters[ "* " + tmp[ 0 ] ];							=
if ( conv=20
) {								// Condense equivalence converters								if ( conv =3D=3D=3D =
true ) {
									conv =3D converters[ conv2 ];								// Otherwise, insert the=20
intermediate dataType								} else if ( converters[ conv2 ] !=3D=3D =
true ) {
									current =3D tmp[ 0 ];									dataTypes.unshift( tmp[ 1 ] );				=
				}
								break;							}						}					}				}				// Apply converter (if not =
an=20
equivalence)				if ( conv !=3D=3D true ) {					// Unless errors are =
allowed to=20
bubble, catch and return them					if ( conv &amp;&amp; s.throws ) {
						response =3D conv( response );					} else {						try {							=
response =3D=20
conv( response );						} catch ( e ) {							return {								state:=20
"parsererror",								error: conv ? e : "No conversion from " + prev + " =
to " +=20
current							};						}					}				}			}		}	}	return { state: "success", =
data:=20
response }; } jQuery.extend( {	// Counter for holding the number of =
active=20
queries	active: 0,	// Last-Modified header cache for next request	=
lastModified:=20
{},	etag: {},	ajaxSettings: {		url: location.href,		type: "GET",		=
isLocal:=20
rlocalProtocol.test( location.protocol ),		global: true,		processData: =
true,
		async: true,		contentType: "application/x-www-form-urlencoded; =
charset=3DUTF-8",
		/*		timeout: 0,		data: null,		dataType: null,		username: null,		=
password:=20
null,		cache: null,		throws: false,		traditional: false,		headers: {},		=
*/
		accepts: {			"*": allTypes,			text: "text/plain",			html: "text/html",	=
		xml:=20
"application/xml, text/xml",			json: "application/json, text/javascript"	=
	},
		contents: {			xml: /\bxml\b/,			html: /\bhtml/,			json: /\bjson\b/		},
		responseFields: {			xml: "responseXML",			text: "responseText",			=
json:=20
"responseJSON"		},		// Data converters		// Keys separate source (or =
catchall=20
"*") and destination types with a single space		converters: {			// =
Convert=20
anything to text			"* text": String,			// Text to html (true =3D no=20
transformation)			"text html": true,			// Evaluate text as a json =
expression
			"text json": JSON.parse,			// Parse text as xml			"text xml": =
jQuery.parseXML
		},		// For options that shouldn't be deep extended:		// you can add =
your own=20
custom options here if		// and when you create one that shouldn't be		// =
deep=20
extended (see ajaxExtend)		flatOptions: {			url: true,			context: true		=
}	},	//=20
Creates a full fledged settings object into target	// with both =
ajaxSettings and=20
settings fields.	// If target is omitted, writes into ajaxSettings.	=
ajaxSetup:=20
function( target, settings ) {		return settings ?			// Building a =
settings=20
object			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings =
) :
			// Extending ajaxSettings			ajaxExtend( jQuery.ajaxSettings, target =
);	},
	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),	=
ajaxTransport:=20
addToPrefiltersOrTransports( transports ),	// Main method	ajax: =
function( url,=20
options ) {		// If url is an object, simulate pre-1.5 signature		if ( =
typeof url=20
=3D=3D=3D "object" ) {			options =3D url;			url =3D undefined;		}		// =
Force options to be=20
an object		options =3D options || {};		var transport,			// URL without =
anti-cache=20
param			cacheURL,			// Response headers			responseHeadersString,
			responseHeaders,			// timeout handle			timeoutTimer,			// Url cleanup =
var
			urlAnchor,			// Request state (becomes false upon send and true upon=20
completion)			completed,			// To know if global events are to be =
dispatched
			fireGlobals,			// Loop variable			i,			// uncached part of the url
			uncached,			// Create the final options object			s =3D =
jQuery.ajaxSetup( {},=20
options ),			// Callbacks context			callbackContext =3D s.context || s,		=
	//=20
Context for global events is callbackContext if it is a DOM node or =
jQuery=20
collection			globalEventContext =3D s.context &amp;&amp;				(=20
callbackContext.nodeType || callbackContext.jquery ) ?					jQuery(=20
callbackContext ) :					jQuery.event,			// Deferreds			deferred =3D=20
jQuery.Deferred(),			completeDeferred =3D jQuery.Callbacks( "once =
memory" ),			//=20
Status-dependent callbacks			statusCode =3D s.statusCode || {},			// =
Headers (they=20
are sent all at once)			requestHeaders =3D {},			requestHeadersNames =3D =
{},			//=20
Default abort message			strAbort =3D "canceled",			// Fake xhr			jqXHR =
=3D {
				readyState: 0,				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {					var match;					if ( =
completed ) {
						if ( !responseHeaders ) {							responseHeaders =3D {};							=
while ( (=20
match =3D rheaders.exec( responseHeadersString ) ) ) {								=
responseHeaders[=20
match[ 1 ].toLowerCase() ] =3D match[ 2 ];							}						}						match =3D =

responseHeaders[ key.toLowerCase() ];					}					return match =3D=3D null =
? null :=20
match;				},				// Raw string				getAllResponseHeaders: function() {					=
return=20
completed ? responseHeadersString : null;				},				// Caches the header
				setRequestHeader: function( name, value ) {					if ( completed =
=3D=3D null ) {
						name =3D requestHeadersNames[ name.toLowerCase() ] =3D
							requestHeadersNames[ name.toLowerCase() ] || name;						=
requestHeaders[=20
name ] =3D value;					}					return this;				},				// Overrides response=20
content-type header				overrideMimeType: function( type ) {					if ( =
completed=20
=3D=3D null ) {						s.mimeType =3D type;					}					return this;				},			=
	//=20
Status-dependent callbacks				statusCode: function( map ) {					var =
code;					if=20
( map ) {						if ( completed ) {							// Execute the appropriate =
callbacks
							jqXHR.always( map[ jqXHR.status ] );						} else {							// =
Lazy-add the=20
new callbacks in a way that preserves old ones							for ( code in map ) =
{
								statusCode[ code ] =3D [ statusCode[ code ], map[ code ] ];						=
	}						}
					}					return this;				},				// Cancel the request				abort: =
function(=20
statusText ) {					var finalText =3D statusText || strAbort;					if ( =
transport )=20
{						transport.abort( finalText );					}					done( 0, finalText );					=
return=20
this;				}			};		// Attach deferreds		deferred.promise( jqXHR );		// Add =

protocol if not provided (prefilters might expect it)		// Handle falsy =
url in=20
the settings object (#10093: consistency with old signature)		// We also =
use the=20
url parameter if available		s.url =3D ( ( url || s.url || location.href =
) + "" )
			.replace( rprotocol, location.protocol + "//" );		// Alias method =
option to=20
type as per ticket #12004		s.type =3D options.method || options.type || =
s.method=20
|| s.type;		// Extract dataTypes list		s.dataTypes =3D ( s.dataType || =
"*"=20
).toLowerCase().match( rnothtmlwhite ) || [ "" ];		// A cross-domain =
request is=20
in order when the origin doesn't match the current origin.		if ( =
s.crossDomain=20
=3D=3D null ) {			urlAnchor =3D document.createElement( "a" );			// =
Support: IE &lt;=3D8=20
- 11, Edge 12 - 15			// IE throws exception on accessing the href =
property if=20
url is malformed,			// e.g. http://example.com:80x/			try {				=
urlAnchor.href =3D=20
s.url;				// Support: IE &lt;=3D8 - 11 only				// Anchor's host property =
isn't=20
correctly set when s.url is relative				urlAnchor.href =3D =
urlAnchor.href;
				s.crossDomain =3D originAnchor.protocol + "//" + originAnchor.host =
!=3D=3D
					urlAnchor.protocol + "//" + urlAnchor.host;			} catch ( e ) {				// =
If=20
there is an error parsing the URL, assume it is crossDomain,				// it =
can be=20
rejected by the transport if it is invalid				s.crossDomain =3D true;			=
}		}		//=20
Convert data if not already a string		if ( s.data &amp;&amp; =
s.processData=20
&amp;&amp; typeof s.data !=3D=3D "string" ) {			s.data =3D jQuery.param( =
s.data,=20
s.traditional );		}		// Apply prefilters		inspectPrefiltersOrTransports( =

prefilters, s, options, jqXHR );		// If request was aborted inside a =
prefilter,=20
stop there		if ( completed ) {			return jqXHR;		}		// We can fire global =
events=20
as of now if asked to		// Don't fire events if jQuery.event is undefined =
in an=20
AMD-usage scenario (#15118)		fireGlobals =3D jQuery.event &amp;&amp; =
s.global;		//=20
Watch for a new set of requests		if ( fireGlobals &amp;&amp; =
jQuery.active++ =3D=3D=3D=20
0 ) {			jQuery.event.trigger( "ajaxStart" );		}		// Uppercase the type		=
s.type =3D=20
s.type.toUpperCase();		// Determine if request has content		s.hasContent =
=3D=20
!rnoContent.test( s.type );		// Save the URL in case we're toying with =
the=20
If-Modified-Since		// and/or If-None-Match header later on		// Remove =
hash to=20
simplify url manipulation		cacheURL =3D s.url.replace( rhash, "" );		// =
More=20
options handling for requests with no content		if ( !s.hasContent ) {			=
//=20
Remember the hash so we can put it back			uncached =3D s.url.slice(=20
cacheURL.length );			// If data is available and should be processed, =
append=20
data to url			if ( s.data &amp;&amp; ( s.processData || typeof s.data =
=3D=3D=3D=20
"string" ) ) {				cacheURL +=3D ( rquery.test( cacheURL ) ? "&amp;" : =
"?" ) +=20
s.data;				// #9682: remove data so that it's not used in an eventual =
retry
				delete s.data;			}			// Add or update anti-cache param if needed			=
if (=20
s.cache =3D=3D=3D false ) {				cacheURL =3D cacheURL.replace( =
rantiCache, "$1" );
				uncached =3D ( rquery.test( cacheURL ) ? "&amp;" : "?" ) + "_=3D" + =
( nonce++ )=20
+ uncached;			}			// Put hash and anti-cache on the URL that will be =
requested=20
(gh-1732)			s.url =3D cacheURL + uncached;		// Change '%20' to '+' if =
this is=20
encoded form body content (gh-2658)		} else if ( s.data &amp;&amp; =
s.processData=20
&amp;&amp;			( s.contentType || "" ).indexOf(=20
"application/x-www-form-urlencoded" ) =3D=3D=3D 0 ) {			s.data =3D =
s.data.replace( r20,=20
"+" );		}		// Set the If-Modified-Since and/or If-None-Match header, if =
in=20
ifModified mode.		if ( s.ifModified ) {			if ( jQuery.lastModified[ =
cacheURL ] )=20
{				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ =
cacheURL=20
] );			}			if ( jQuery.etag[ cacheURL ] ) {				jqXHR.setRequestHeader(=20
"If-None-Match", jQuery.etag[ cacheURL ] );			}		}		// Set the correct =
header,=20
if data is being sent		if ( s.data &amp;&amp; s.hasContent &amp;&amp;=20
s.contentType !=3D=3D false || options.contentType ) {			=
jqXHR.setRequestHeader(=20
"Content-Type", s.contentType );		}		// Set the Accepts header for the =
server,=20
depending on the dataType		jqXHR.setRequestHeader(			"Accept",			=
s.dataTypes[ 0=20
] &amp;&amp; s.accepts[ s.dataTypes[ 0 ] ] ?				s.accepts[ s.dataTypes[ =
0 ] ] +
					( s.dataTypes[ 0 ] !=3D=3D "*" ? ", " + allTypes + "; q=3D0.01" : =
"" ) :
				s.accepts[ "*" ]		);		// Check for headers option		for ( i in =
s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );		}		// Allow custom=20
headers/mimetypes and early abort		if ( s.beforeSend &amp;&amp;			(=20
s.beforeSend.call( callbackContext, jqXHR, s ) =3D=3D=3D false || =
completed ) ) {			//=20
Abort if not done already and return			return jqXHR.abort();		}		// =
Aborting is=20
no longer a cancellation		strAbort =3D "abort";		// Install callbacks on =
deferreds
		completeDeferred.add( s.complete );		jqXHR.done( s.success );		=
jqXHR.fail(=20
s.error );		// Get transport		transport =3D =
inspectPrefiltersOrTransports(=20
transports, s, options, jqXHR );		// If no transport, we auto-abort		if =
(=20
!transport ) {			done( -1, "No Transport" );		} else {			=
jqXHR.readyState =3D 1;
			// Send global event			if ( fireGlobals ) {				=
globalEventContext.trigger(=20
"ajaxSend", [ jqXHR, s ] );			}			// If request was aborted inside =
ajaxSend,=20
stop there			if ( completed ) {				return jqXHR;			}			// Timeout			if ( =
s.async=20
&amp;&amp; s.timeout &gt; 0 ) {				timeoutTimer =3D window.setTimeout( =
function()=20
{					jqXHR.abort( "timeout" );				}, s.timeout );			}			try {				=
completed =3D=20
false;				transport.send( requestHeaders, done );			} catch ( e ) {				=
//=20
Rethrow post-completion exceptions				if ( completed ) {					throw e;				=
}				//=20
Propagate others as results				done( -1, e );			}		}		// Callback for =
when=20
everything is done		function done( status, nativeStatusText, responses, =
headers=20
) {			var isSuccess, success, error, response, modified,				statusText =
=3D=20
nativeStatusText;			// Ignore repeat invocations			if ( completed ) {				=
return;
			}			completed =3D true;			// Clear timeout if it exists			if ( =
timeoutTimer ) {
				window.clearTimeout( timeoutTimer );			}			// Dereference transport =
for=20
early garbage collection			// (no matter how long the jqXHR object will =
be used)
			transport =3D undefined;			// Cache response headers			=
responseHeadersString =3D=20
headers || "";			// Set readyState			jqXHR.readyState =3D status &gt; 0 =
? 4 : 0;
			// Determine if successful			isSuccess =3D status &gt;=3D 200 =
&amp;&amp; status=20
&lt; 300 || status =3D=3D=3D 304;			// Get response data			if ( =
responses ) {
				response =3D ajaxHandleResponses( s, jqXHR, responses );			}			// =
Convert no=20
matter what (that way responseXXX fields are always set)			response =3D=20
ajaxConvert( s, response, jqXHR, isSuccess );			// If successful, handle =
type=20
chaining			if ( isSuccess ) {				// Set the If-Modified-Since and/or=20
If-None-Match header, if in ifModified mode.				if ( s.ifModified ) {
					modified =3D jqXHR.getResponseHeader( "Last-Modified" );					if ( =
modified )=20
{						jQuery.lastModified[ cacheURL ] =3D modified;					}					modified =
=3D=20
jqXHR.getResponseHeader( "etag" );					if ( modified ) {						=
jQuery.etag[=20
cacheURL ] =3D modified;					}				}				// if no content				if ( status =
=3D=3D=3D 204 ||=20
s.type =3D=3D=3D "HEAD" ) {					statusText =3D "nocontent";				// if not =
modified				}=20
else if ( status =3D=3D=3D 304 ) {					statusText =3D "notmodified";				=
// If we have=20
data, let's convert it				} else {					statusText =3D response.state;				=
	success=20
=3D response.data;					error =3D response.error;					isSuccess =3D =
!error;				}			}=20
else {				// Extract error from statusText and normalize for non-aborts		=
		error=20
=3D statusText;				if ( status || !statusText ) {					statusText =3D =
"error";					if=20
( status &lt; 0 ) {						status =3D 0;					}				}			}			// Set data for =
the fake=20
xhr object			jqXHR.status =3D status;			jqXHR.statusText =3D ( =
nativeStatusText ||=20
statusText ) + "";			// Success/Error			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR =
] );			}=20
else {				deferred.rejectWith( callbackContext, [ jqXHR, statusText, =
error ] );
			}			// Status-dependent callbacks			jqXHR.statusCode( statusCode );
			statusCode =3D undefined;			if ( fireGlobals ) {				=
globalEventContext.trigger(=20
isSuccess ? "ajaxSuccess" : "ajaxError",					[ jqXHR, s, isSuccess ? =
success :=20
error ] );			}			// Complete			completeDeferred.fireWith( =
callbackContext, [=20
jqXHR, statusText ] );			if ( fireGlobals ) {				=
globalEventContext.trigger(=20
"ajaxComplete", [ jqXHR, s ] );				// Handle the global AJAX counter				=
if ( !(=20
--jQuery.active ) ) {					jQuery.event.trigger( "ajaxStop" );				}			}		=
}
		return jqXHR;	},	getJSON: function( url, data, callback ) {		return=20
jQuery.get( url, data, callback, "json" );	},	getScript: function( url, =
callback=20
) {		return jQuery.get( url, undefined, callback, "script" );	} } );
 jQuery.each( [ "get", "post" ], function( i, method ) {	jQuery[ method =
] =3D=20
function( url, data, callback, type ) {		// Shift arguments if data =
argument was=20
omitted		if ( isFunction( data ) ) {			type =3D type || callback;			=
callback =3D=20
data;			data =3D undefined;		}		// The url can be an options object =
(which then=20
must have .url)		return jQuery.ajax( jQuery.extend( {			url: url,			=
type:=20
method,			dataType: type,			data: data,			success: callback		},=20
jQuery.isPlainObject( url ) &amp;&amp; url ) );	}; } ); jQuery._evalUrl =
=3D=20
function( url ) {	return jQuery.ajax( {		url: url,		// Make this =
explicit, since=20
user can override this through ajaxSetup (#11264)		type: "GET",		=
dataType:=20
"script",		cache: true,		async: false,		global: false,		"throws": true	} =
); };
 jQuery.fn.extend( {	wrapAll: function( html ) {		var wrap;		if ( this[ =
0 ] ) {
			if ( isFunction( html ) ) {				html =3D html.call( this[ 0 ] );			}			=
// The=20
elements to wrap the target around			wrap =3D jQuery( html, this[ 0=20
].ownerDocument ).eq( 0 ).clone( true );			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );			}			wrap.map( function() {				var =
elem =3D=20
this;				while ( elem.firstElementChild ) {					elem =3D =
elem.firstElementChild;
				}				return elem;			} ).append( this );		}		return this;	},	=
wrapInner:=20
function( html ) {		if ( isFunction( html ) ) {			return this.each( =
function( i=20
) {				jQuery( this ).wrapInner( html.call( this, i ) );			} );		}		=
return=20
this.each( function() {			var self =3D jQuery( this ),				contents =3D=20
self.contents();			if ( contents.length ) {				contents.wrapAll( html );	=
		}=20
else {				self.append( html );			}		} );	},	wrap: function( html ) {		=
var=20
htmlIsFunction =3D isFunction( html );		return this.each( function( i ) =
{
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html =
);		} );
	},	unwrap: function( selector ) {		this.parent( selector ).not( "body" =
).each(=20
function() {			jQuery( this ).replaceWith( this.childNodes );		} );		=
return=20
this;	} } ); jQuery.expr.pseudos.hidden =3D function( elem ) {	return=20
!jQuery.expr.pseudos.visible( elem ); }; jQuery.expr.pseudos.visible =3D =
function(=20
elem ) {	return !!( elem.offsetWidth || elem.offsetHeight ||=20
elem.getClientRects().length ); }; jQuery.ajaxSettings.xhr =3D =
function() {	try {
		return new window.XMLHttpRequest();	} catch ( e ) {} }; var =
xhrSuccessStatus =3D=20
{		// File protocol always yields status code 0, assume 200		0: 200,		// =

Support: IE &lt;=3D9 only		// #1450: sometimes IE returns 1223 when it =
should be=20
204		1223: 204	},	xhrSupported =3D jQuery.ajaxSettings.xhr(); =
support.cors =3D=20
!!xhrSupported &amp;&amp; ( "withCredentials" in xhrSupported ); =
support.ajax =3D=20
xhrSupported =3D !!xhrSupported; jQuery.ajaxTransport( function( options =
) {	var=20
callback, errorCallback;	// Cross domain only allowed if supported =
through=20
XMLHttpRequest	if ( support.cors || xhrSupported &amp;&amp; =
!options.crossDomain=20
) {		return {			send: function( headers, complete ) {				var i,					xhr =
=3D=20
options.xhr();				xhr.open(					options.type,					options.url,
					options.async,					options.username,					options.password				);				=
// Apply=20
custom fields if provided				if ( options.xhrFields ) {					for ( i in=20
options.xhrFields ) {						xhr[ i ] =3D options.xhrFields[ i ];					}				=
}				//=20
Override mime type if needed				if ( options.mimeType &amp;&amp;=20
xhr.overrideMimeType ) {					xhr.overrideMimeType( options.mimeType );			=
	}
				// X-Requested-With header				// For cross-domain requests, seeing =
as=20
conditions for a preflight are				// akin to a jigsaw puzzle, we simply =
never=20
set it to be sure.				// (it can always be set on a per-request basis or =
even=20
using ajaxSetup)				// For same-domain requests, won't change header if =
already=20
provided.				if ( !options.crossDomain &amp;&amp; !headers[ =
"X-Requested-With" ]=20
) {					headers[ "X-Requested-With" ] =3D "XMLHttpRequest";				}				// =
Set headers
				for ( i in headers ) {					xhr.setRequestHeader( i, headers[ i ] );		=
		}
				// Callback				callback =3D function( type ) {					return function() =
{						if=20
( callback ) {							callback =3D errorCallback =3D xhr.onload =3D							=
	xhr.onerror=20
=3D xhr.onabort =3D xhr.ontimeout =3D									xhr.onreadystatechange =3D =
null;							if=20
( type =3D=3D=3D "abort" ) {								xhr.abort();							} else if ( type =
=3D=3D=3D "error" )=20
{								// Support: IE &lt;=3D9 only								// On a manual native =
abort, IE9=20
throws								// errors on any property access that is not readyState				=
				if=20
( typeof xhr.status !=3D=3D "number" ) {									complete( 0, "error" );	=
							}=20
else {									complete(										// File: protocol always yields status =
0; see=20
#8605, #14207										xhr.status,										xhr.statusText									);				=
				}
							} else {								complete(									xhrSuccessStatus[ xhr.status ] =
||=20
xhr.status,									xhr.statusText,									// Support: IE &lt;=3D9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)									// =
For=20
XHR2 non-text, let the caller handle it (gh-2498)									( =
xhr.responseType ||=20
"text" ) !=3D=3D "text"  ||									typeof xhr.responseText !=3D=3D =
"string" ?
										{ binary: xhr.response } :										{ text: xhr.responseText =
},
									xhr.getAllResponseHeaders()								);							}						}					};				=
};				//=20
Listen to events				xhr.onload =3D callback();				errorCallback =3D =
xhr.onerror =3D=20
xhr.ontimeout =3D callback( "error" );				// Support: IE 9 only				// =
Use=20
onreadystatechange to replace onabort				// to handle uncaught aborts				=
if (=20
xhr.onabort !=3D=3D undefined ) {					xhr.onabort =3D errorCallback;				=
} else {
					xhr.onreadystatechange =3D function() {						// Check readyState =
before=20
timeout as it changes						if ( xhr.readyState =3D=3D=3D 4 ) {							// =
Allow onerror=20
to be called first,							// but that will not handle a native abort					=
		//=20
Also, save errorCallback to a variable							// as xhr.onerror cannot be =

accessed							window.setTimeout( function() {								if ( callback ) {
									errorCallback();								}							} );						}					};				}				// =
Create=20
the abort callback				callback =3D callback( "abort" );				try {					// =
Do send=20
the request (this may raise an exception)					xhr.send( =
options.hasContent=20
&amp;&amp; options.data || null );				} catch ( e ) {					// #14683: =
Only=20
rethrow if this hasn't been notified as an error yet					if ( callback ) =
{
						throw e;					}				}			},			abort: function() {				if ( callback ) =
{
					callback();				}			}		};	} } ); // Prevent auto-execution of =
scripts when=20
no explicit dataType was provided (See gh-2432) jQuery.ajaxPrefilter( =
function(=20
s ) {	if ( s.crossDomain ) {		s.contents.script =3D false;	} } ); // =
Install=20
script dataType jQuery.ajaxSetup( {	accepts: {		script: =
"text/javascript,=20
application/javascript, " +			"application/ecmascript, =
application/x-ecmascript"
	},	contents: {		script: /\b(?:java|ecma)script\b/	},	converters: {		=
"text=20
script": function( text ) {			jQuery.globalEval( text );			return text;		=
}	} }=20
); // Handle cache's special case and crossDomain jQuery.ajaxPrefilter(=20
"script", function( s ) {	if ( s.cache =3D=3D=3D undefined ) {		s.cache =
=3D false;	}	if=20
( s.crossDomain ) {		s.type =3D "GET";	} } ); // Bind script tag hack =
transport
 jQuery.ajaxTransport( "script", function( s ) {	// This transport only =
deals=20
with cross domain requests	if ( s.crossDomain ) {		var script, callback;	=
	return=20
{			send: function( _, complete ) {				script =3D jQuery( "
<SCRIPT>" ).prop( {=0A=
					charset: s.scriptCharset,=0A=
					src: s.url=0A=
				} ).on(=0A=
					"load error",=0A=
					callback =3D function( evt ) {=0A=
						script.remove();=0A=
						callback =3D null;=0A=
						if ( evt ) {=0A=
							complete( evt.type =3D=3D=3D "error" ? 404 : 200, evt.type );=0A=
						}=0A=
					}=0A=
				);=0A=
=0A=
				// Use native DOM manipulation to avoid our domManip AJAX trickery=0A=
				document.head.appendChild( script[ 0 ] );=0A=
			},=0A=
			abort: function() {=0A=
				if ( callback ) {=0A=
					callback();=0A=
				}=0A=
			}=0A=
		};=0A=
	}=0A=
} );=0A=
=0A=
=0A=
=0A=
=0A=
var oldCallbacks =3D [],=0A=
	rjsonp =3D /(=3D)\?(?=3D&|$)|\?\?/;=0A=
=0A=
// Default jsonp settings=0A=
jQuery.ajaxSetup( {=0A=
	jsonp: "callback",=0A=
	jsonpCallback: function() {=0A=
		var callback =3D oldCallbacks.pop() || ( jQuery.expando + "_" + ( =
nonce++ ) );=0A=
		this[ callback ] =3D true;=0A=
		return callback;=0A=
	}=0A=
} );=0A=
=0A=
// Detect, normalize options and install callbacks for jsonp requests=0A=
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR =
) {=0A=
=0A=
	var callbackName, overwritten, responseContainer,=0A=
		jsonProp =3D s.jsonp !=3D=3D false && ( rjsonp.test( s.url ) ?=0A=
			"url" :=0A=
			typeof s.data =3D=3D=3D "string" &&=0A=
				( s.contentType || "" )=0A=
					.indexOf( "application/x-www-form-urlencoded" ) =3D=3D=3D 0 &&=0A=
				rjsonp.test( s.data ) && "data"=0A=
		);=0A=
=0A=
	// Handle iff the expected data type is "jsonp" or we have a parameter =
to set=0A=
	if ( jsonProp || s.dataTypes[ 0 ] =3D=3D=3D "jsonp" ) {=0A=
=0A=
		// Get callback name, remembering preexisting value associated with it=0A=
		callbackName =3D s.jsonpCallback =3D isFunction( s.jsonpCallback ) ?=0A=
			s.jsonpCallback() :=0A=
			s.jsonpCallback;=0A=
=0A=
		// Insert callback into url or form data=0A=
		if ( jsonProp ) {=0A=
			s[ jsonProp ] =3D s[ jsonProp ].replace( rjsonp, "$1" + callbackName =
);=0A=
		} else if ( s.jsonp !=3D=3D false ) {=0A=
			s.url +=3D ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=3D" + =
callbackName;=0A=
		}=0A=
=0A=
		// Use data converter to retrieve json after script execution=0A=
		s.converters[ "script json" ] =3D function() {=0A=
			if ( !responseContainer ) {=0A=
				jQuery.error( callbackName + " was not called" );=0A=
			}=0A=
			return responseContainer[ 0 ];=0A=
		};=0A=
=0A=
		// Force json dataType=0A=
		s.dataTypes[ 0 ] =3D "json";=0A=
=0A=
		// Install callback=0A=
		overwritten =3D window[ callbackName ];=0A=
		window[ callbackName ] =3D function() {=0A=
			responseContainer =3D arguments;=0A=
		};=0A=
=0A=
		// Clean-up function (fires after converters)=0A=
		jqXHR.always( function() {=0A=
=0A=
			// If previous value didn't exist - remove it=0A=
			if ( overwritten =3D=3D=3D undefined ) {=0A=
				jQuery( window ).removeProp( callbackName );=0A=
=0A=
			// Otherwise restore preexisting value=0A=
			} else {=0A=
				window[ callbackName ] =3D overwritten;=0A=
			}=0A=
=0A=
			// Save back as free=0A=
			if ( s[ callbackName ] ) {=0A=
=0A=
				// Make sure that re-using the options doesn't screw things around=0A=
				s.jsonpCallback =3D originalSettings.jsonpCallback;=0A=
=0A=
				// Save the callback name for future use=0A=
				oldCallbacks.push( callbackName );=0A=
			}=0A=
=0A=
			// Call if it was a function and we have a response=0A=
			if ( responseContainer && isFunction( overwritten ) ) {=0A=
				overwritten( responseContainer[ 0 ] );=0A=
			}=0A=
=0A=
			responseContainer =3D overwritten =3D undefined;=0A=
		} );=0A=
=0A=
		// Delegate to script=0A=
		return "script";=0A=
	}=0A=
} );=0A=
=0A=
=0A=
=0A=
=0A=
// Support: Safari 8 only=0A=
// In Safari 8 documents created via =
document.implementation.createHTMLDocument=0A=
// collapse sibling forms: the second one becomes a child of the first =
one.=0A=
// Because of that, this security measure has to be disabled in Safari 8.=0A=
// https://bugs.webkit.org/show_bug.cgi?id=3D137337=0A=
support.createHTMLDocument =3D ( function() {=0A=
	var body =3D document.implementation.createHTMLDocument( "" ).body;=0A=
	body.innerHTML =3D "<form></form><form></form>";=0A=
	return body.childNodes.length =3D=3D=3D 2;=0A=
} )();=0A=
=0A=
=0A=
// Argument "data" should be string of html=0A=
// context (optional): If specified, the fragment will be created in =
this context,=0A=
// defaults to document=0A=
// keepScripts (optional): If true, will include scripts passed in the =
html string=0A=
jQuery.parseHTML =3D function( data, context, keepScripts ) {=0A=
	if ( typeof data !=3D=3D "string" ) {=0A=
		return [];=0A=
	}=0A=
	if ( typeof context =3D=3D=3D "boolean" ) {=0A=
		keepScripts =3D context;=0A=
		context =3D false;=0A=
	}=0A=
=0A=
	var base, parsed, scripts;=0A=
=0A=
	if ( !context ) {=0A=
=0A=
		// Stop scripts or inline event handlers from being executed =
immediately=0A=
		// by using document.implementation=0A=
		if ( support.createHTMLDocument ) {=0A=
			context =3D document.implementation.createHTMLDocument( "" );=0A=
=0A=
			// Set the base href for the created document=0A=
			// so any parsed elements with URLs=0A=
			// are based on the document's URL (gh-2965)=0A=
			base =3D context.createElement( "base" );=0A=
			base.href =3D document.location.href;=0A=
			context.head.appendChild( base );=0A=
		} else {=0A=
			context =3D document;=0A=
		}=0A=
	}=0A=
=0A=
	parsed =3D rsingleTag.exec( data );=0A=
	scripts =3D !keepScripts && [];=0A=
=0A=
	// Single tag=0A=
	if ( parsed ) {=0A=
		return [ context.createElement( parsed[ 1 ] ) ];=0A=
	}=0A=
=0A=
	parsed =3D buildFragment( [ data ], context, scripts );=0A=
=0A=
	if ( scripts && scripts.length ) {=0A=
		jQuery( scripts ).remove();=0A=
	}=0A=
=0A=
	return jQuery.merge( [], parsed.childNodes );=0A=
};=0A=
=0A=
=0A=
/**=0A=
 * Load a url into a page=0A=
 */=0A=
jQuery.fn.load =3D function( url, params, callback ) {=0A=
	var selector, type, response,=0A=
		self =3D this,=0A=
		off =3D url.indexOf( " " );=0A=
=0A=
	if ( off > -1 ) {=0A=
		selector =3D stripAndCollapse( url.slice( off ) );=0A=
		url =3D url.slice( 0, off );=0A=
	}=0A=
=0A=
	// If it's a function=0A=
	if ( isFunction( params ) ) {=0A=
=0A=
		// We assume that it's the callback=0A=
		callback =3D params;=0A=
		params =3D undefined;=0A=
=0A=
	// Otherwise, build a param string=0A=
	} else if ( params && typeof params =3D=3D=3D "object" ) {=0A=
		type =3D "POST";=0A=
	}=0A=
=0A=
	// If we have elements to modify, make the request=0A=
	if ( self.length > 0 ) {=0A=
		jQuery.ajax( {=0A=
			url: url,=0A=
=0A=
			// If "type" variable is undefined, then "GET" method will be used.=0A=
			// Make value of this field explicit since=0A=
			// user can override it through ajaxSetup method=0A=
			type: type || "GET",=0A=
			dataType: "html",=0A=
			data: params=0A=
		} ).done( function( responseText ) {=0A=
=0A=
			// Save response for use in complete callback=0A=
			response =3D arguments;=0A=
=0A=
			self.html( selector ?=0A=
=0A=
				// If a selector was specified, locate the right elements in a dummy =
div=0A=
				// Exclude scripts to avoid IE 'Permission Denied' errors=0A=
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( =
selector ) :=0A=
=0A=
				// Otherwise use the full result=0A=
				responseText );=0A=
=0A=
		// If the request succeeds, this function gets "data", "status", =
"jqXHR"=0A=
		// but they are ignored because response was set above.=0A=
		// If it fails, this function gets "jqXHR", "status", "error"=0A=
		} ).always( callback && function( jqXHR, status ) {=0A=
			self.each( function() {=0A=
				callback.apply( this, response || [ jqXHR.responseText, status, =
jqXHR ] );=0A=
			} );=0A=
		} );=0A=
	}=0A=
=0A=
	return this;=0A=
};=0A=
=0A=
=0A=
=0A=
=0A=
// Attach a bunch of functions for handling common AJAX events=0A=
jQuery.each( [=0A=
	"ajaxStart",=0A=
	"ajaxStop",=0A=
	"ajaxComplete",=0A=
	"ajaxError",=0A=
	"ajaxSuccess",=0A=
	"ajaxSend"=0A=
], function( i, type ) {=0A=
	jQuery.fn[ type ] =3D function( fn ) {=0A=
		return this.on( type, fn );=0A=
	};=0A=
} );=0A=
=0A=
=0A=
=0A=
=0A=
jQuery.expr.pseudos.animated =3D function( elem ) {=0A=
	return jQuery.grep( jQuery.timers, function( fn ) {=0A=
		return elem =3D=3D=3D fn.elem;=0A=
	} ).length;=0A=
};=0A=
=0A=
=0A=
=0A=
=0A=
jQuery.offset =3D {=0A=
	setOffset: function( elem, options, i ) {=0A=
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, =
calculatePosition,=0A=
			position =3D jQuery.css( elem, "position" ),=0A=
			curElem =3D jQuery( elem ),=0A=
			props =3D {};=0A=
=0A=
		// Set position first, in-case top/left are set even on static elem=0A=
		if ( position =3D=3D=3D "static" ) {=0A=
			elem.style.position =3D "relative";=0A=
		}=0A=
=0A=
		curOffset =3D curElem.offset();=0A=
		curCSSTop =3D jQuery.css( elem, "top" );=0A=
		curCSSLeft =3D jQuery.css( elem, "left" );=0A=
		calculatePosition =3D ( position =3D=3D=3D "absolute" || position =
=3D=3D=3D "fixed" ) &&=0A=
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;=0A=
=0A=
		// Need to be able to calculate position if either=0A=
		// top or left is auto and position is either absolute or fixed=0A=
		if ( calculatePosition ) {=0A=
			curPosition =3D curElem.position();=0A=
			curTop =3D curPosition.top;=0A=
			curLeft =3D curPosition.left;=0A=
=0A=
		} else {=0A=
			curTop =3D parseFloat( curCSSTop ) || 0;=0A=
			curLeft =3D parseFloat( curCSSLeft ) || 0;=0A=
		}=0A=
=0A=
		if ( isFunction( options ) ) {=0A=
=0A=
			// Use jQuery.extend here to allow modification of coordinates =
argument (gh-1848)=0A=
			options =3D options.call( elem, i, jQuery.extend( {}, curOffset ) );=0A=
		}=0A=
=0A=
		if ( options.top !=3D null ) {=0A=
			props.top =3D ( options.top - curOffset.top ) + curTop;=0A=
		}=0A=
		if ( options.left !=3D null ) {=0A=
			props.left =3D ( options.left - curOffset.left ) + curLeft;=0A=
		}=0A=
=0A=
		if ( "using" in options ) {=0A=
			options.using.call( elem, props );=0A=
=0A=
		} else {=0A=
			curElem.css( props );=0A=
		}=0A=
	}=0A=
};=0A=
=0A=
jQuery.fn.extend( {=0A=
=0A=
	// offset() relates an element's border box to the document origin=0A=
	offset: function( options ) {=0A=
=0A=
		// Preserve chaining for setter=0A=
		if ( arguments.length ) {=0A=
			return options =3D=3D=3D undefined ?=0A=
				this :=0A=
				this.each( function( i ) {=0A=
					jQuery.offset.setOffset( this, options, i );=0A=
				} );=0A=
		}=0A=
=0A=
		var rect, win,=0A=
			elem =3D this[ 0 ];=0A=
=0A=
		if ( !elem ) {=0A=
			return;=0A=
		}=0A=
=0A=
		// Return zeros for disconnected and hidden (display: none) elements =
(gh-2310)=0A=
		// Support: IE <=3D11 only=0A=
		// Running getBoundingClientRect on a=0A=
		// disconnected node in IE throws an error=0A=
		if ( !elem.getClientRects().length ) {=0A=
			return { top: 0, left: 0 };=0A=
		}=0A=
=0A=
		// Get document-relative position by adding viewport scroll to =
viewport-relative gBCR=0A=
		rect =3D elem.getBoundingClientRect();=0A=
		win =3D elem.ownerDocument.defaultView;=0A=
		return {=0A=
			top: rect.top + win.pageYOffset,=0A=
			left: rect.left + win.pageXOffset=0A=
		};=0A=
	},=0A=
=0A=
	// position() relates an element's margin box to its offset parent's =
padding box=0A=
	// This corresponds to the behavior of CSS absolute positioning=0A=
	position: function() {=0A=
		if ( !this[ 0 ] ) {=0A=
			return;=0A=
		}=0A=
=0A=
		var offsetParent, offset, doc,=0A=
			elem =3D this[ 0 ],=0A=
			parentOffset =3D { top: 0, left: 0 };=0A=
=0A=
		// position:fixed elements are offset from the viewport, which itself =
always has zero offset=0A=
		if ( jQuery.css( elem, "position" ) =3D=3D=3D "fixed" ) {=0A=
=0A=
			// Assume position:fixed implies availability of getBoundingClientRect=0A=
			offset =3D elem.getBoundingClientRect();=0A=
=0A=
		} else {=0A=
			offset =3D this.offset();=0A=
=0A=
			// Account for the *real* offset parent, which can be the document or =
its root element=0A=
			// when a statically positioned element is identified=0A=
			doc =3D elem.ownerDocument;=0A=
			offsetParent =3D elem.offsetParent || doc.documentElement;=0A=
			while ( offsetParent &&=0A=
				( offsetParent =3D=3D=3D doc.body || offsetParent =3D=3D=3D =
doc.documentElement ) &&=0A=
				jQuery.css( offsetParent, "position" ) =3D=3D=3D "static" ) {=0A=
=0A=
				offsetParent =3D offsetParent.parentNode;=0A=
			}=0A=
			if ( offsetParent && offsetParent !=3D=3D elem && =
offsetParent.nodeType =3D=3D=3D 1 ) {=0A=
=0A=
				// Incorporate borders into its offset, since they are outside its =
content origin=0A=
				parentOffset =3D jQuery( offsetParent ).offset();=0A=
				parentOffset.top +=3D jQuery.css( offsetParent, "borderTopWidth", =
true );=0A=
				parentOffset.left +=3D jQuery.css( offsetParent, "borderLeftWidth", =
true );=0A=
			}=0A=
		}=0A=
=0A=
		// Subtract parent offsets and element margins=0A=
		return {=0A=
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", =
true ),=0A=
			left: offset.left - parentOffset.left - jQuery.css( elem, =
"marginLeft", true )=0A=
		};=0A=
	},=0A=
=0A=
	// This method will return documentElement in the following cases:=0A=
	// 1) For the element inside the iframe without offsetParent, this =
method will return=0A=
	//    documentElement of the parent window=0A=
	// 2) For the hidden or detached element=0A=
	// 3) For body or html element, i.e. in case of the html node - it will =
return itself=0A=
	//=0A=
	// but those exceptions were never presented as a real life use-cases=0A=
	// and might be considered as more preferable results.=0A=
	//=0A=
	// This logic, however, is not guaranteed and can change at any point =
in the future=0A=
	offsetParent: function() {=0A=
		return this.map( function() {=0A=
			var offsetParent =3D this.offsetParent;=0A=
=0A=
			while ( offsetParent && jQuery.css( offsetParent, "position" ) =
=3D=3D=3D "static" ) {=0A=
				offsetParent =3D offsetParent.offsetParent;=0A=
			}=0A=
=0A=
			return offsetParent || documentElement;=0A=
		} );=0A=
	}=0A=
} );=0A=
=0A=
// Create scrollLeft and scrollTop methods=0A=
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, =
function( method, prop ) {=0A=
	var top =3D "pageYOffset" =3D=3D=3D prop;=0A=
=0A=
	jQuery.fn[ method ] =3D function( val ) {=0A=
		return access( this, function( elem, method, val ) {=0A=
=0A=
			// Coalesce documents and windows=0A=
			var win;=0A=
			if ( isWindow( elem ) ) {=0A=
				win =3D elem;=0A=
			} else if ( elem.nodeType =3D=3D=3D 9 ) {=0A=
				win =3D elem.defaultView;=0A=
			}=0A=
=0A=
			if ( val =3D=3D=3D undefined ) {=0A=
				return win ? win[ prop ] : elem[ method ];=0A=
			}=0A=
=0A=
			if ( win ) {=0A=
				win.scrollTo(=0A=
					!top ? val : win.pageXOffset,=0A=
					top ? val : win.pageYOffset=0A=
				);=0A=
=0A=
			} else {=0A=
				elem[ method ] =3D val;=0A=
			}=0A=
		}, method, val, arguments.length );=0A=
	};=0A=
} );=0A=
=0A=
// Support: Safari <=3D7 - 9.1, Chrome <=3D37 - 49=0A=
// Add the top/left cssHooks using jQuery.fn.position=0A=
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=3D29084=0A=
// Blink bug: =
https://bugs.chromium.org/p/chromium/issues/detail?id=3D589347=0A=
// getComputedStyle returns percent when specified for =
top/left/bottom/right;=0A=
// rather than make the css module depend on the offset module, just =
check for it here=0A=
jQuery.each( [ "top", "left" ], function( i, prop ) {=0A=
	jQuery.cssHooks[ prop ] =3D addGetHookIf( support.pixelPosition,=0A=
		function( elem, computed ) {=0A=
			if ( computed ) {=0A=
				computed =3D curCSS( elem, prop );=0A=
=0A=
				// If curCSS returns percentage, fallback to offset=0A=
				return rnumnonpx.test( computed ) ?=0A=
					jQuery( elem ).position()[ prop ] + "px" :=0A=
					computed;=0A=
			}=0A=
		}=0A=
	);=0A=
} );=0A=
=0A=
=0A=
// Create innerHeight, innerWidth, height, width, outerHeight and =
outerWidth methods=0A=
jQuery.each( { Height: "height", Width: "width" }, function( name, type =
) {=0A=
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + =
name },=0A=
		function( defaultExtra, funcName ) {=0A=
=0A=
		// Margin is only for outerHeight, outerWidth=0A=
		jQuery.fn[ funcName ] =3D function( margin, value ) {=0A=
			var chainable =3D arguments.length && ( defaultExtra || typeof margin =
!=3D=3D "boolean" ),=0A=
				extra =3D defaultExtra || ( margin =3D=3D=3D true || value =3D=3D=3D =
true ? "margin" : "border" );=0A=
=0A=
			return access( this, function( elem, type, value ) {=0A=
				var doc;=0A=
=0A=
				if ( isWindow( elem ) ) {=0A=
=0A=
					// $( window ).outerWidth/Height return w/h including scrollbars =
(gh-1729)=0A=
					return funcName.indexOf( "outer" ) =3D=3D=3D 0 ?=0A=
						elem[ "inner" + name ] :=0A=
						elem.document.documentElement[ "client" + name ];=0A=
				}=0A=
=0A=
				// Get document width or height=0A=
				if ( elem.nodeType =3D=3D=3D 9 ) {=0A=
					doc =3D elem.documentElement;=0A=
=0A=
					// Either scroll[Width/Height] or offset[Width/Height] or =
client[Width/Height],=0A=
					// whichever is greatest=0A=
					return Math.max(=0A=
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],=0A=
						elem.body[ "offset" + name ], doc[ "offset" + name ],=0A=
						doc[ "client" + name ]=0A=
					);=0A=
				}=0A=
=0A=
				return value =3D=3D=3D undefined ?=0A=
=0A=
					// Get width or height on the element, requesting but not forcing =
parseFloat=0A=
					jQuery.css( elem, type, extra ) :=0A=
=0A=
					// Set width or height on the element=0A=
					jQuery.style( elem, type, value, extra );=0A=
			}, type, chainable ? margin : undefined, chainable );=0A=
		};=0A=
	} );=0A=
} );=0A=
=0A=
=0A=
jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick =
" +=0A=
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " =
+=0A=
	"change select submit keydown keypress keyup contextmenu" ).split( " " =
),=0A=
	function( i, name ) {=0A=
=0A=
	// Handle event binding=0A=
	jQuery.fn[ name ] =3D function( data, fn ) {=0A=
		return arguments.length > 0 ?=0A=
			this.on( name, null, data, fn ) :=0A=
			this.trigger( name );=0A=
	};=0A=
} );=0A=
=0A=
jQuery.fn.extend( {=0A=
	hover: function( fnOver, fnOut ) {=0A=
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );=0A=
	}=0A=
} );=0A=
=0A=
=0A=
=0A=
=0A=
jQuery.fn.extend( {=0A=
=0A=
	bind: function( types, data, fn ) {=0A=
		return this.on( types, null, data, fn );=0A=
	},=0A=
	unbind: function( types, fn ) {=0A=
		return this.off( types, null, fn );=0A=
	},=0A=
=0A=
	delegate: function( selector, types, data, fn ) {=0A=
		return this.on( types, selector, data, fn );=0A=
	},=0A=
	undelegate: function( selector, types, fn ) {=0A=
=0A=
		// ( namespace ) or ( selector, types [, fn] )=0A=
		return arguments.length =3D=3D=3D 1 ?=0A=
			this.off( selector, "**" ) :=0A=
			this.off( types, selector || "**", fn );=0A=
	}=0A=
} );=0A=
=0A=
// Bind a function to a context, optionally partially applying any=0A=
// arguments.=0A=
// jQuery.proxy is deprecated to promote standards (specifically =
Function#bind)=0A=
// However, it is not slated for removal any time soon=0A=
jQuery.proxy =3D function( fn, context ) {=0A=
	var tmp, args, proxy;=0A=
=0A=
	if ( typeof context =3D=3D=3D "string" ) {=0A=
		tmp =3D fn[ context ];=0A=
		context =3D fn;=0A=
		fn =3D tmp;=0A=
	}=0A=
=0A=
	// Quick check to determine if target is callable, in the spec=0A=
	// this throws a TypeError, but we will just return undefined.=0A=
	if ( !isFunction( fn ) ) {=0A=
		return undefined;=0A=
	}=0A=
=0A=
	// Simulated bind=0A=
	args =3D slice.call( arguments, 2 );=0A=
	proxy =3D function() {=0A=
		return fn.apply( context || this, args.concat( slice.call( arguments ) =
) );=0A=
	};=0A=
=0A=
	// Set the guid of unique handler to the same of original handler, so =
it can be removed=0A=
	proxy.guid =3D fn.guid =3D fn.guid || jQuery.guid++;=0A=
=0A=
	return proxy;=0A=
};=0A=
=0A=
jQuery.holdReady =3D function( hold ) {=0A=
	if ( hold ) {=0A=
		jQuery.readyWait++;=0A=
	} else {=0A=
		jQuery.ready( true );=0A=
	}=0A=
};=0A=
jQuery.isArray =3D Array.isArray;=0A=
jQuery.parseJSON =3D JSON.parse;=0A=
jQuery.nodeName =3D nodeName;=0A=
jQuery.isFunction =3D isFunction;=0A=
jQuery.isWindow =3D isWindow;=0A=
jQuery.camelCase =3D camelCase;=0A=
jQuery.type =3D toType;=0A=
=0A=
jQuery.now =3D Date.now;=0A=
=0A=
jQuery.isNumeric =3D function( obj ) {=0A=
=0A=
	// As of jQuery 3.0, isNumeric is limited to=0A=
	// strings and numbers (primitives or objects)=0A=
	// that can be coerced to finite numbers (gh-2662)=0A=
	var type =3D jQuery.type( obj );=0A=
	return ( type =3D=3D=3D "number" || type =3D=3D=3D "string" ) &&=0A=
=0A=
		// parseFloat NaNs numeric-cast false positives ("")=0A=
		// ...but misinterprets leading-number strings, particularly hex =
literals ("0x...")=0A=
		// subtraction forces infinities to NaN=0A=
		!isNaN( obj - parseFloat( obj ) );=0A=
};=0A=
=0A=
=0A=
=0A=
=0A=
// Register as a named AMD module, since jQuery can be concatenated with =
other=0A=
// files that may use define, but not via a proper concatenation script =
that=0A=
// understands anonymous AMD modules. A named AMD is safest and most =
robust=0A=
// way to register. Lowercase jquery is used because AMD module names are=0A=
// derived from file names, and jQuery is normally delivered in a =
lowercase=0A=
// file name. Do this after creating the global so that if an AMD module =
wants=0A=
// to call noConflict to hide this version of jQuery, it will work.=0A=
=0A=
// Note that for maximum portability, libraries that are not jQuery =
should=0A=
// declare themselves as anonymous modules, and avoid setting a global =
if an=0A=
// AMD loader is present. jQuery is a special case. For more =
information, see=0A=
// =
https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wik=
i-anon=0A=
=0A=
if ( typeof define =3D=3D=3D "function" && define.amd ) {=0A=
	define( "jquery", [], function() {=0A=
		return jQuery;=0A=
	} );=0A=
}=0A=
=0A=
=0A=
=0A=
=0A=
var=0A=
=0A=
	// Map over jQuery in case of overwrite=0A=
	_jQuery =3D window.jQuery,=0A=
=0A=
	// Map over the $ in case of overwrite=0A=
	_$ =3D window.$;=0A=
=0A=
jQuery.noConflict =3D function( deep ) {=0A=
	if ( window.$ =3D=3D=3D jQuery ) {=0A=
		window.$ =3D _$;=0A=
	}=0A=
=0A=
	if ( deep && window.jQuery =3D=3D=3D jQuery ) {=0A=
		window.jQuery =3D _jQuery;=0A=
	}=0A=
=0A=
	return jQuery;=0A=
};=0A=
=0A=
// Expose jQuery and $ identifiers, even in AMD=0A=
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)=0A=
// and CommonJS for browser emulators (#13566)=0A=
if ( !noGlobal ) {=0A=
	window.jQuery =3D window.$ =3D jQuery;=0A=
}=0A=
=0A=
=0A=
=0A=
=0A=
return jQuery;=0A=
} );=0A=
</SCRIPT>
</script|<style|<link></use></tag></number></OBJECT></BODY></HTML>

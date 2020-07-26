import * as React from 'react';
export var importFonts = function () { return (<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Roboto:300,400,700&display=swap" rel="stylesheet"/>); };
export var sans = "'Roboto', sans-serif";
export var serif = "'Abril Fatface', serif";
export var defaultFontSize = 14;
export var getFontSans = function () { return "\n  font-family: " + sans + ";\n"; };
export var getFontSerif = function () { return "\n  font-family: " + serif + ";\n"; };
export default {
    importFonts: importFonts,
    getFontSans: getFontSans,
    getFontSerif: getFontSerif
};
//# sourceMappingURL=Fonts.jsx.map
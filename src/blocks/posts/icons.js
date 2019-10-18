/**
 * WordPress dependencies
 */
const { SVG, Path } = wp.components;

/**
 * Block user interface icons
 */
const icons = {};

icons.imageLeft = <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><Path d="m11 15v-10h-10v10zm2-6h6v-2h-6zm0 4h6v-2h-6z" /></SVG>;
icons.imageRight = <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><Path d="m19 15v-10h-10v10zm-18-6h6v-2h-6zm0 4h6v-2h-6z" /></SVG>;
icons.styleHorizontalImageRight = <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 26" height="26" width="56"><Path d="m48 11.0910645v-10.00000005h-10v10.00000005zm-40-6.00000005h24v-2h-24zm0 4v-2h18v2zm40 16.00000005h-10v-10h10zm-40-6v-2h24v2zm0 4v-2h18v2z" /></SVG>;
icons.styleHorizontalImageLeft = <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 26" height="26" width="56"><Path d="m18 11.0910645v-10.00000005h-10v10.00000005zm6-6.00000005h24v-2h-24zm0 4v-2h18v2zm-6 16.00000005h-10v-10h10zm6-6v-2h24v2zm0 4v-2h18v2z" /></SVG>;
icons.styleStacked = <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 26" height="26" width="56"><Path d="m26 17v-16h-16v16zm-16 4h10v-2h-10zm0 4v-2h10v2zm36-8h-16v-16h16zm-16 4v-2h10v2zm0 4v-2h10v2z" /></SVG>;
icons.styleFeatured = (
    <svg width="56" height="26" xmlns="http://www.w3.org/2000/svg">
    <g>
    <title>Layer 1</title>
    <rect id="svg_8" height="17" width="17" y="4.428571" x="6.785714" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#555d65" fill="#555d65"/>
    <rect id="svg_9" height="17" width="17" y="373.428571" x="832.785714" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#555d65" fill="#555d65"/>
    <rect id="svg_10" height="17" width="17" y="373.428571" x="833.785714" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#555d65" fill="#555d65"/>
    <rect id="svg_11" height="17" width="17" y="4.75" x="32.25" stroke-linecap="null" stroke-linejoin="null" stroke-dasharray="null" stroke-width="5" stroke="#555d65" fill="#555d65"/>
    <polygon stroke-width="0" stroke="#555d65" points="15.25,7.150336742401123 16.801673889160156,11.614303588867188 21.526653289794922,11.710592269897461 17.760662078857422,14.565763473510742 19.12918472290039,19.08924102783203 15.25,16.38986587524414 11.37081527709961,19.08924102783203 12.739337921142578,14.565763473510742 8.973346710205078,11.710592269897461 13.698326110839844,11.614303588867188 15.25,7.150336742401123 16.801673889160156,11.614303588867188 " strokeWidth="0" strokecolor="#555d65" fill="#ffffff" orient="point" r2="2.639865" r="6.599663" point="5" shape="star" id="svg_12" cy="4.75" cx="7.25"/>
    <polygon id="svg_13" stroke-width="0" stroke="#555d65" points="825.25,368.7805480957031 826.8016967773438,373.2445068359375 831.5266723632812,373.3408203125 827.7606811523438,376.19598388671875 829.1292114257812,380.7194519042969 825.25,378.02008056640625 821.3707885742188,380.7194519042969 822.7393188476562,376.19598388671875 818.9733276367188,373.3408203125 823.6983032226562,373.2445068359375 825.25,368.7805480957031 826.8016967773438,373.2445068359375 " strokeWidth="0" strokecolor="#555d65" fill="#ffffff" orient="point" r2="2.639865" r="6.599663" point="5" shape="star" cy="4.75" cx="7.25"/>
    <polygon id="svg_14" stroke-width="0" stroke="#555d65" points="824.25,368.7805552482605 825.8016738891602,373.24452209472656 830.5266532897949,373.34081077575684 826.7606620788574,376.1959819793701 828.1291847229004,380.7194595336914 824.25,378.0200843811035 820.3708152770996,380.7194595336914 821.7393379211426,376.1959819793701 817.9733467102051,373.34081077575684 822.6983261108398,373.24452209472656 824.25,368.7805552482605 825.8016738891602,373.24452209472656 " strokeWidth="0" strokecolor="#555d65" fill="#ffffff" orient="point" r2="2.639865" r="6.599663" point="5" shape="star" cy="4.75" cx="7.25"/>
    <polygon stroke="#555d65" stroke-width="0" points="41.25,7.117888450622559 42.75058364868164,11.416571617126465 47.31998062133789,11.509294509887695 43.67799377441406,14.258748054504395 45.0014533996582,18.614736557006836 41.25,16.015310287475586 37.49854278564453,18.614736557006836 38.82200622558594,14.258748054504395 35.18001937866211,11.509294509887695 39.749420166015625,11.416571617126465 41.25,7.117888450622559 42.75058364868164,11.416571617126465 " strokeWidth="0" strokecolor="#555d65" fill="#ffffff" orient="point" r2="3.394113" r="8.485281" point="5" shape="star" id="svg_15" cy="3.75" cx="31.25"/>
    </g>
    </svg>
)

export default icons;

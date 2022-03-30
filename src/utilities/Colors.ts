/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

/**
 * This is general list of colors and all screen will get color from here
 * If a particular screen has different kind of color that is particular to that screen
 * Then new list will be created
 */

import { colorTransparency } from './Styles';

export const applyColorCode = (color: string, percentage: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100) =>
    color + colorTransparency[percentage];

export default {
    primary: applyColorCode('#000088', 70),
    white: '#FFF',
    lighter: '#F3F3F3',
    light: '#DAE1E7',
    dark: '#444',
    darker: '#222',
    black: '#000',
    heading: '#242424',
    subHeading: '#8A8A8A',

    blackShadePrimary: '#0f1110',
    borderColorPrimary: '#c7c7c7',
    primaryLight: applyColorCode('#000088', 10),
};

export const colorCode = {
    SAFFRON: '#FF9933',
    SAFFRONLOW: (percentage?: any) => applyColorCode(colorCode.SAFFRON, percentage),
    CHAKRA: '#000088',
    CHAKRALOW: (percentage?: any) => applyColorCode(colorCode.CHAKRA, percentage),
    GREEN: '#138808',
    GREENLOW: (percentage?: any) => applyColorCode(colorCode.GREEN, percentage),
    WHITE: '#FFFFFF',
    WHITELOW: (percentage?: any) => applyColorCode(colorCode.WHITE, percentage),
    BLACK: '#000000',
    BLACKLOW: (percentage?: any) => applyColorCode(colorCode.BLACK, percentage),
    RED: 'red',
};

export const mainColor = colorCode.CHAKRALOW(70);
export const borderColor = colorCode.BLACKLOW(10);
export const messageColor = colorCode.BLACKLOW(40);
export const errorColor = colorCode.RED;
export const black10 = colorCode.BLACKLOW(10);
export const black20 = colorCode.BLACKLOW(20);
export const black30 = colorCode.BLACKLOW(30);
export const black40 = colorCode.BLACKLOW(40);
export const black50 = colorCode.BLACKLOW(50);
export const black60 = colorCode.BLACKLOW(60);
export const black70 = colorCode.BLACKLOW(70);
export const black80 = colorCode.BLACKLOW(80);
export const black90 = colorCode.BLACKLOW(90);
export const black100 = colorCode.BLACKLOW(100);
export const generalColor = '#124234';

export const productColor = [
    { name: 'maroon', colorCode: '#800000' },
    { name: 'dark red', colorCode: '#8B0000', rgbaColorCode: '(139,0,0)' },
    { name: 'brown', colorCode: '#A52A2A', rgbaColorCode: '(165,42,42)' },
    { name: 'firebrick', colorCode: '#B22222', rgbaColorCode: '(178,34,34)' },
    { name: 'crimson', colorCode: '#DC143C', rgbaColorCode: '(220,20,60)' },
    { name: 'red', colorCode: '#FF0000', rgbaColorCode: '(255,0,0)' },
    { name: 'tomato', colorCode: '#FF6347', rgbaColorCode: '(255,99,71)' },
    { name: 'coral', colorCode: '#FF7F50', rgbaColorCode: '(255,127,80)' },
    { name: 'indian red', colorCode: '#CD5C5C', rgbaColorCode: '(205,92,92)' },
    { name: 'light coral', colorCode: '#F08080', rgbaColorCode: '(240,128,128)' },
    { name: 'dark salmon', colorCode: '#E9967A', rgbaColorCode: '(233,150,122)' },
    { name: 'salmon', colorCode: '#FA8072', rgbaColorCode: '(250,128,114)' },
    { name: 'light salmon', colorCode: '#FFA07A', rgbaColorCode: '(255,160,122)' },
    { name: 'orange red', colorCode: '#FF4500', rgbaColorCode: '(255,69,0)' },
    { name: 'dark orange', colorCode: '#FF8C00', rgbaColorCode: '(255,140,0)' },
    { name: 'orange', colorCode: '#FFA500', rgbaColorCode: '(255,165,0)' },
    { name: 'gold', colorCode: '#FFD700', rgbaColorCode: '(255,215,0)' },
    { name: 'dark golden rod', colorCode: '#B8860B', rgbaColorCode: '(184,134,11)' },
    { name: 'golden rod', colorCode: '#DAA520', rgbaColorCode: '(218,165,32)' },
    { name: 'pale golden rod', colorCode: '#EEE8AA', rgbaColorCode: '(238,232,170)' },
    { name: 'dark khaki', colorCode: '#BDB76B', rgbaColorCode: '(189,183,107)' },
    { name: 'khaki', colorCode: '#F0E68C', rgbaColorCode: '(240,230,140)' },
    { name: 'olive', colorCode: '#808000', rgbaColorCode: '(128,128,0)' },
    { name: 'yellow', colorCode: '#FFFF00', rgbaColorCode: '(255,255,0)' },
    { name: 'yellow green', colorCode: '#9ACD32', rgbaColorCode: '(154,205,50)' },
    { name: 'dark olive green', colorCode: '#556B2F', rgbaColorCode: '(85,107,47)' },
    { name: 'olive drab', colorCode: '#6B8E23', rgbaColorCode: '(107,142,35)' },
    { name: 'lawn green', colorCode: '#7CFC00', rgbaColorCode: '(124,252,0)' },
    { name: 'chart reuse', colorCode: '#7FFF00', rgbaColorCode: '(127,255,0)' },
    { name: 'green yellow', colorCode: '#ADFF2F', rgbaColorCode: '(173,255,47)' },
    { name: 'dark green', colorCode: '#006400', rgbaColorCode: '(0,100,0)' },
    { name: 'green', colorCode: '#008000', rgbaColorCode: '(0,128,0)' },
    { name: 'forest green', colorCode: '#228B22', rgbaColorCode: '(34,139,34)' },
    { name: 'lime', colorCode: '#00FF00', rgbaColorCode: '(0,255,0)' },
    { name: 'lime green', colorCode: '#32CD32', rgbaColorCode: '(50,205,50)' },
    { name: 'light green', colorCode: '#90EE90', rgbaColorCode: '(144,238,144)' },
    { name: 'pale green', colorCode: '#98FB98', rgbaColorCode: '(152,251,152)' },
    { name: 'dark sea green', colorCode: '#8FBC8F', rgbaColorCode: '(143,188,143)' },
    { name: 'medium spring green', colorCode: '#00FA9A', rgbaColorCode: '(0,250,154)' },
    { name: 'spring green', colorCode: '#00FF7F', rgbaColorCode: '(0,255,127)' },
    { name: 'sea green', colorCode: '#2E8B57', rgbaColorCode: '(46,139,87)' },
    { name: 'medium aqua marine', colorCode: '#66CDAA', rgbaColorCode: '(102,205,170)' },
    { name: 'medium sea green', colorCode: '#3CB371', rgbaColorCode: '(60,179,113)' },
    { name: 'light sea green', colorCode: '#20B2AA', rgbaColorCode: '(32,178,170)' },
    { name: 'dark slate gray', colorCode: '#2F4F4F', rgbaColorCode: '(47,79,79)' },
    { name: 'teal', colorCode: '#008080', rgbaColorCode: '(0,128,128)' },
    { name: 'dark cyan', colorCode: '#008B8B', rgbaColorCode: '(0,139,139)' },
    { name: 'aqua', colorCode: '#00FFFF', rgbaColorCode: '(0,255,255)' },
    { name: 'cyan', colorCode: '#00FFFF', rgbaColorCode: '(0,255,255)' },
    { name: 'light cyan', colorCode: '#E0FFFF', rgbaColorCode: '(224,255,255)' },
    { name: 'dark turquoise', colorCode: '#00CED1', rgbaColorCode: '(0,206,209)' },
    { name: 'turquoise', colorCode: '#40E0D0', rgbaColorCode: '(64,224,208)' },
    { name: 'medium turquoise', colorCode: '#48D1CC', rgbaColorCode: '(72,209,204)' },
    { name: 'pale turquoise', colorCode: '#AFEEEE', rgbaColorCode: '(175,238,238)' },
    { name: 'aqua marine', colorCode: '#7FFFD4', rgbaColorCode: '(127,255,212)' },
    { name: 'powder blue', colorCode: '#B0E0E6', rgbaColorCode: '(176,224,230)' },
    { name: 'cadet blue', colorCode: '#5F9EA0', rgbaColorCode: '(95,158,160)' },
    { name: 'steel blue', colorCode: '#4682B4', rgbaColorCode: '(70,130,180)' },
    { name: 'corn flower blue', colorCode: '#6495ED', rgbaColorCode: '(100,149,237)' },
    { name: 'deep sky blue', colorCode: '#00BFFF', rgbaColorCode: '(0,191,255)' },
    { name: 'dodger blue', colorCode: '#1E90FF', rgbaColorCode: '(30,144,255)' },
    { name: 'light blue', colorCode: '#ADD8E6', rgbaColorCode: '(173,216,230)' },
    { name: 'sky blue', colorCode: '#87CEEB', rgbaColorCode: '(135,206,235)' },
    { name: 'light sky blue', colorCode: '#87CEFA', rgbaColorCode: '(135,206,250)' },
    { name: 'midnight blue', colorCode: '#191970', rgbaColorCode: '(25,25,112)' },
    { name: 'navy', colorCode: '#000080', rgbaColorCode: '(0,0,128)' },
    { name: 'dark blue', colorCode: '#00008B', rgbaColorCode: '(0,0,139)' },
    { name: 'medium blue', colorCode: '#0000CD', rgbaColorCode: '(0,0,205)' },
    { name: 'blue', colorCode: '#0000FF', rgbaColorCode: '(0,0,255)' },
    { name: 'royal blue', colorCode: '#4169E1', rgbaColorCode: '(65,105,225)' },
    { name: 'blue violet', colorCode: '#8A2BE2', rgbaColorCode: '(138,43,226)' },
    { name: 'indigo', colorCode: '#4B0082', rgbaColorCode: '(75,0,130)' },
    { name: 'dark slate blue', colorCode: '#483D8B', rgbaColorCode: '(72,61,139)' },
    { name: 'slate blue', colorCode: '#6A5ACD', rgbaColorCode: '(106,90,205)' },
    { name: 'medium slate blue', colorCode: '#7B68EE', rgbaColorCode: '(123,104,238)' },
    { name: 'medium purple', colorCode: '#9370DB', rgbaColorCode: '(147,112,219)' },
    { name: 'dark magenta', colorCode: '#8B008B', rgbaColorCode: '(139,0,139)' },
    { name: 'dark violet', colorCode: '#9400D3', rgbaColorCode: '(148,0,211)' },
    { name: 'dark orchid', colorCode: '#9932CC', rgbaColorCode: '(153,50,204)' },
    { name: 'medium orchid', colorCode: '#BA55D3', rgbaColorCode: '(186,85,211)' },
    { name: 'purple', colorCode: '#800080', rgbaColorCode: '(128,0,128)' },
    { name: 'thistle', colorCode: '#D8BFD8', rgbaColorCode: '(216,191,216)' },
    { name: 'plum', colorCode: '#DDA0DD', rgbaColorCode: '(221,160,221)' },
    { name: 'violet', colorCode: '#EE82EE', rgbaColorCode: '(238,130,238)' },
    { name: 'magenta / fuchsia', colorCode: '#FF00FF', rgbaColorCode: '(255,0,255)' },
    { name: 'orchid', colorCode: '#DA70D6', rgbaColorCode: '(218,112,214)' },
    { name: 'medium violet red', colorCode: '#C71585', rgbaColorCode: '(199,21,133)' },
    { name: 'pale violet red', colorCode: '#DB7093', rgbaColorCode: '(219,112,147)' },
    { name: 'deep pink', colorCode: '#FF1493', rgbaColorCode: '(255,20,147)' },
    { name: 'hot pink', colorCode: '#FF69B4', rgbaColorCode: '(255,105,180)' },
    { name: 'light pink', colorCode: '#FFB6C1', rgbaColorCode: '(255,182,193)' },
    { name: 'pink', colorCode: '#FFC0CB', rgbaColorCode: '(255,192,203)' },
    { name: 'antique white', colorCode: '#FAEBD7', rgbaColorCode: '(250,235,215)' },
    { name: 'beige', colorCode: '#F5F5DC', rgbaColorCode: '(245,245,220)' },
    { name: 'bisque', colorCode: '#FFE4C4', rgbaColorCode: '(255,228,196)' },
    { name: 'blanched almond', colorCode: '#FFEBCD', rgbaColorCode: '(255,235,205)' },
    { name: 'wheat', colorCode: '#F5DEB3', rgbaColorCode: '(245,222,179)' },
    { name: 'corn silk', colorCode: '#FFF8DC', rgbaColorCode: '(255,248,220)' },
    { name: 'lemon chiffon', colorCode: '#FFFACD', rgbaColorCode: '(255,250,205)' },
    { name: 'light golden rod yellow', colorCode: '#FAFAD2', rgbaColorCode: '(250,250,210)' },
    { name: 'light yellow', colorCode: '#FFFFE0', rgbaColorCode: '(255,255,224)' },
    { name: 'saddle brown', colorCode: '#8B4513', rgbaColorCode: '(139,69,19)' },
    { name: 'sienna', colorCode: '#A0522D', rgbaColorCode: '(160,82,45)' },
    { name: 'chocolate', colorCode: '#D2691E', rgbaColorCode: '(210,105,30)' },
    { name: 'peru', colorCode: '#CD853F', rgbaColorCode: '(205,133,63)' },
    { name: 'sandy brown', colorCode: '#F4A460', rgbaColorCode: '(244,164,96)' },
    { name: 'burly wood', colorCode: '#DEB887', rgbaColorCode: '(222,184,135)' },
    { name: 'tan', colorCode: '#D2B48C', rgbaColorCode: '(210,180,140)' },
    { name: 'rosy brown	', colorCode: '#BC8F8F', rgbaColorCode: '(188,143,143)' },
    { name: 'moccasin	', colorCode: '#FFE4B5', rgbaColorCode: '(255,228,181)' },
    { name: 'navajo white	', colorCode: '#FFDEAD', rgbaColorCode: '(255,222,173)' },
    { name: 'peach puff	', colorCode: '#FFDAB9', rgbaColorCode: '(255,218,185)' },
    { name: 'misty rose	', colorCode: '#FFE4E1', rgbaColorCode: '(255,228,225)' },
    { name: 'lavender blush	', colorCode: '#FFF0F5', rgbaColorCode: '(255,240,245)' },
    { name: 'linen	', colorCode: '#FAF0E6', rgbaColorCode: '(250,240,230)' },
    { name: 'old lace	', colorCode: '#FDF5E6', rgbaColorCode: '(253,245,230)' },
    { name: 'papaya whip	', colorCode: '#FFEFD5', rgbaColorCode: '(255,239,213)' },
    { name: 'sea shell	', colorCode: '#FFF5EE', rgbaColorCode: '(255,245,238)' },
    { name: 'mint cream	', colorCode: '#F5FFFA', rgbaColorCode: '(245,255,250)' },
    { name: 'slate gray	', colorCode: '#708090', rgbaColorCode: '(112,128,144)' },
    { name: 'light slate gray	', colorCode: '#778899', rgbaColorCode: '(119,136,153)' },
    { name: 'light steel blue', colorCode: '#B0C4DE', rgbaColorCode: '(176,196,222)' },
    { name: 'lavender	', colorCode: '#E6E6FA', rgbaColorCode: '(230,230,250)' },
    { name: 'floral white	', colorCode: '#FFFAF0', rgbaColorCode: '(255,250,240)' },
    { name: 'alice blue', colorCode: '#F0F8FF', rgbaColorCode: '(240,248,255)' },
    { name: 'ghost white	', colorCode: '#F8F8FF', rgbaColorCode: '(248,248,255)' },
    { name: 'honeydew	', colorCode: '#F0FFF0', rgbaColorCode: '(240,255,240)' },
    { name: 'ivory	', colorCode: '#FFFFF0', rgbaColorCode: '(255,255,240)' },
    { name: 'azure	', colorCode: '#F0FFFF', rgbaColorCode: '(240,255,255)' },
    { name: 'snow	', colorCode: '#FFFAFA', rgbaColorCode: '(255,250,250)' },
    { name: 'black	', colorCode: '#000000', rgbaColorCode: '(0,0,0)' },
    { name: 'dim gray / dim grey	', colorCode: '#696969', rgbaColorCode: '(105,105,105)' },
    { name: 'gray / grey	', colorCode: '#808080', rgbaColorCode: '(128,128,128)' },
    { name: 'dark gray / dark grey	', colorCode: '#A9A9A9', rgbaColorCode: '(169,169,169)' },
    { name: 'silver	', colorCode: '#C0C0C0', rgbaColorCode: '(192,192,192)' },
    { name: 'light gray / light grey	', colorCode: '#D3D3D3', rgbaColorCode: '(211,211,211)' },
    { name: 'gainsboro	', colorCode: '#DCDCDC', rgbaColorCode: '(220,220,220)' },
    { name: 'white smoke	', colorCode: '#F5F5F5', rgbaColorCode: '(245,245,245)' },
    { name: 'white	', colorCode: '#FFFFFF', rgbaColorCode: '(255,255,255)' },
];

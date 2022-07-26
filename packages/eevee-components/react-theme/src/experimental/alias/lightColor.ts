import type { ColorTokens, BrandVariants } from '../theme.types';
import { white, grey, personaSharedColors } from '../global/colors';

export const generateColorTokens = (brand: BrandVariants): ColorTokens => ({
  bg1: white,
  bg2: grey[96],
  bg3: grey[2],
  bg4: 'rgb(0,0,0,0)',
  bgTransparent: 'transparent',
  bgDisable: grey[94],
  bgNote: 'hsl(210, 55%, 92%)',
  bgImportant: personaSharedColors.blue.tint20,
  bgTip: 'hsla(160, 100%, 40%, 0.1)',
  bgCaution: personaSharedColors.cranberry.tint20,
  bgWarning: 'hsla(52, 100%, 50%, 0.25)',

  //
  f1: 'rgb(15, 20, 25)',
  f2: 'rgb(83, 100, 113)',
  f3: 'rgb(29, 155, 240)',
  f4: 'rgb(0,186,124)',
  f5: 'rgb(249,24,128)',
  f6: 'rgb(255, 255, 255)',
  f7: 'hsl(245, 100%, 60%)',
  f8: 'hsl(255, 85%, 30%)',
  f9: 'hsl(225, 25%, 20%)',
  f10: 'hsl(225, 15%, 15%)',
  fDisable: '#5c5c5c',
  //
  b1: personaSharedColors.anchor.shade20,
  b2: 'rgba(230, 230, 230, 1)',

  bNote: 'hsl(245, 100%, 60%)',
  bImportant: personaSharedColors.blue.primary,
  bTip: 'hsl(160, 100%, 40%)',
  bCaution: personaSharedColors.cranberry.primary,
  bWarning: 'hsl(37, 100%, 50%)',
  bDisable: '#e0e0e0',
  //
  syntaxBg: 'hsl(225, 25%, 97%)',
  syntaxHighlight: 'hsl(225, 25%, 93%)',
  syntaxTxt: '#2A2A2A',
  syntaxComment: '#467790',
  syntaxProp: '#da0079',
  syntaxBool: '#bf00b8',
  syntaxVal: '#78909C',
  syntaxStr: '#651fff',
  syntaxName: '#AA00FF',
  syntaxDel: 'rgb(255, 85, 85)',
  syntaxRegex: '#3600d6',
  syntaxFn: '#3D5AFE',

  h1: 'rgba(231, 233, 234, 0.1)',
  h2: 'rgba(255,255,255,0.03)',
  h3: 'rgba(29,155,240,0.1)',
  h4: 'rgb(26,140,216)',
  h5: 'rgba(15,20,25,0.1)',
  //
  spColorsFgActive: '#24292e!important',
  spColorsFgDefault: '#959da5!important',
  spColorsFgInactive: '#e4e7eb!important',
  spColorsBgActive: '#e4e7eb!important',
  spColorsBgDefault: '#fff!important',
  spColorsBgDefaultOverlay: '#fff!important',
  spColorsBgInput: '#fff!important',
  spColorsAccent: '#c8c8fa!important',
  spColorsBgError: '#ffcdca!important',
  spColorsFgError: '#811e18!important',
  themePlain: '#24292e',
  themeComment: '#6a737d',
  themeKeyword: '#d73a49',
  themeTag: '#22863a',
  themePunctuation: '#24292e',
  themeDefinition: '#6f42c1',
  themeProperty: '#005cc5',
  themeStatic: '#032f62',
  themeString: '#032f62',
  bg5: '',
  bg6: '',
  bg7: '',
  bg8: '',
  bg9: '',
  bg10: '',
});

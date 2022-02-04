import React from 'react';

/**
 * Icons must be imported separately because some of them may not be used in application
 * otherwise try to use use following syntax:
 */
// eslint-disable-next-line import/no-webpack-loader-syntax
// import icons from '!!raw-loader!icons/*.svg';

// eslint-disable-next-line import/no-webpack-loader-syntax
import HomeIcon from '!!raw-loader!icons/home.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import DefaultAvatar from '!!raw-loader!icons/DefaultAvatar.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax
import PlusIcon from '!!raw-loader!icons/plus.svg';

const icons = {
  'home': HomeIcon,
  'DefaultAvatar': DefaultAvatar,
  'plus': PlusIcon,
};

export const viewBoxes = new Map();


// Do not use RegEx to parse XML
// const getViewBox = (xml) => xml?.match(/viewBox="((\d+(.\d+)? ?)+)"/)?.[1]
const getViewBox = (xml:string):string => {
  const doc = new DOMParser().parseFromString(xml, 'text/html');

  return doc?.querySelector('svg')?.getAttribute('viewBox') || '';
};

const xmlns = 'http://www.w3.org/2000/svg';

// eslint-disable-next-line @typescript-eslint/naming-convention
const __html = Object.entries(icons)
  .map(([name, icon]) => {
    viewBoxes.set(name, getViewBox(icon));

    return icon
      .replace(`xmlns="${xmlns}"`, `id="sprite-${name}"`)
      .replaceAll(/\bsvg\b/g, 'symbol');
  })
  .join('');

// eslint-disable-next-line @typescript-eslint/naming-convention
const Sprite: React.FC = () => <svg xmlns={ xmlns } display="none" dangerouslySetInnerHTML={ { __html } } />;

export default Sprite;

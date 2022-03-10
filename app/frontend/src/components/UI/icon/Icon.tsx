import React, { FC, SVGProps, useEffect, useRef } from 'react';

/**
 * Icon component props
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Name of the file containing svg icon
   */
  name: string;

  /**
   * CSS class name
   */
  className?: string
}

/**
 * Component that allows to dynamically import icons by name
 *
 * @param props - props of the component
 */
const Icon: FC<IconProps> = ({ name, ...rest }): JSX.Element | null => {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);

  useEffect((): () => void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        // Import path prefixes are flags to force generating ReactComponent named export
        // see https://github.com/facebook/create-react-app/issues/5276#issuecomment-665628393
        ImportedIconRef.current = (await import(`@svgr/webpack?-svgo,+titleProp,+ref!icons/${name}.svg`)).ReactComponent;
      } finally {
        setLoading(false);
      }
    };

    importIcon();

    return () => {
      setLoading(false);
    };
  }, [ name ]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;

    return <ImportedIcon { ...rest }/>;
  }

  return null;
};


export default Icon;

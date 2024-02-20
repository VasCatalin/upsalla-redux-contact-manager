const skins = {
  primary: 'bg-blue-500',
};

export const Button = ({
  element = 'button',
  children,
  skin = 'primary',
  className = '',
  ...props
}) => {
  const skinClasses = skins[skin];
  const Element = element;

  return (
    <Element className={`${skinClasses}`} {...props}>
      {' '}
      {children}{' '}
    </Element>
  );
};

// rafc

import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

export enum ButtonTheme {
  Primary = 'primary',
  Secondary = 'secondary',
};

interface ButtonProps extends TouchableOpacityProps {
  theme?: ButtonTheme,
};

const Button = ({
  children,
  theme = ButtonTheme.Primary,
  ...props
}: ButtonProps): JSX.Element => {

  const touchableClasses = `w-full h-[52px] justify-center items-center rounded-3xl shadow-md ${
    theme === ButtonTheme.Primary ? 'bg-brand-500' : 'bg-[#e6d8fa]'
  }`;
  
  const textClasses = `text-sm font-bold ${theme === ButtonTheme.Primary ? 'text-white' : 'text-brand-500'}`;

  return (
    <TouchableOpacity className={touchableClasses} {...props}>
      <Text className={textClasses}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

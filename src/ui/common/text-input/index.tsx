import { useController, Control } from 'react-hook-form';
import { TextInput as Input, TextInputProps, View } from 'react-native';

import ErrorMessage from '../error-message';


interface Props extends TextInputProps {
  name: string,
  control: Control<any>,
};

const TextInput = ({
  name,
  control,
  className,
  defaultValue,
  ...props
}: Props): JSX.Element => {

  const { field, fieldState: { error } } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <View className='mb-4'>
      <Input
        value={field.value}
        className={`
        bg-zinc-50 h-[52] px-4 mb-1 rounded-xl
          border ${error ? 'border-red-500' : 'border-gray-100'}
        focus:border-brand-500 focus:bg-[#f4edff]
          ${className}
        `}
        onChangeText={field.onChange}
        {...props}
      />
      {error && (
        <ErrorMessage
          message={error.message!}
        />
      )}
    </View>
  );
}

export default TextInput;

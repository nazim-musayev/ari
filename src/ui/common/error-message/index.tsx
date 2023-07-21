import { Text } from 'react-native';

interface ErrorProps {
  message: string,
};

function ErrorMessage({ message }: ErrorProps) {
  return (
    <Text className='text-xs font-medium text-red-500'>
      {message}
    </Text>
  );
}

export default ErrorMessage;

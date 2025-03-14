interface ButtonProps {
  appName: string;
}

export const Button = ({ appName }: ButtonProps) => {
  return (
    <button
      className='bg-red-700 text-white'
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Hello!
    </button>
  );
};

interface ButtonProps {
  appName: string;
}

export const Button = ({ appName }: ButtonProps) => {
  return (
    <button
      className='bg-red-100 text-red-700'
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Hello!
    </button>
  );
};

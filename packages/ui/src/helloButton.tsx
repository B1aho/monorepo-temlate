interface HelloButtonProps {
  appName: string;
}

export const HelloButton = ({ appName }: HelloButtonProps) => {
  return (
    <button
      className='p-2 bg-black text-white'
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      Tap!
    </button>
  );
};

export default function Divider({ centerText }: { centerText?: string }) {
  return (
    <span className="relative flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
      {centerText && (
        <span className="relative z-10 bg-gray-950 px-6">{centerText}</span>
      )}
    </span>
  );
}

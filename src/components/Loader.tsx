// components/Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-[#8CC63F] rounded-full animate-spin"></div>
    </div>
  );
}

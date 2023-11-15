export default function Footer() {
  return (
    <div className="sticky top-[100vh] bottom-0 left-0 mb-0 right-0 mt-10">
      <div className="text-gray-700 p-3 h-20 flex justify-between w-full">
        <div className="inline-flex justify-between"></div>
        <div className="block text-sm text-right">
          Copyright &copy; {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

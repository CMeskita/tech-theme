type ModalBaseProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export function ModalBase({
  isOpen,
  onClose,
  title,
  children,
}: ModalBaseProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen bg-black/50 backdrop-blur-sm p-8">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>

        {title && (
          <h2 className="text-xl font-bold mb-4">{title}</h2>
        )}

        {children}
      </div>
    </div>
  );
}

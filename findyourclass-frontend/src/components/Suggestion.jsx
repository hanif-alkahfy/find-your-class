import { useState } from "react";
import { Send, X } from "lucide-react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Suggestion = ({ isOpen, onClose }) => {
  const [suggestion, setSuggestion] = useState(""); // Menyimpan input user
  const [isSending, setIsSending] = useState(false); // Status pengiriman
  const [errorMessage, setErrorMessage] = useState(""); // Error message jika gagal

  const handleClose = () => {
    setSuggestion(""); // Kosongkan input saat modal ditutup
    setErrorMessage(""); // Reset error
    onClose(); // Tutup modal
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!suggestion.trim()) return; // Jangan kirim jika input kosong

    setIsSending(true); // Mulai status pengiriman
    setErrorMessage(""); // Reset error

    const emailParams = {
      message: suggestion, // Isi saran dari user
    };

    emailjs
      .send(
        "service_7evcnl4", // Ganti dengan Service ID dari EmailJS
        "template_njry1uz", // Ganti dengan Template ID dari EmailJS
        emailParams,
        "S3BvwJCKmIZT1dk3l" // Ganti dengan Public Key dari EmailJS
      )
      .then(
        () => {
          setIsSending(false);
          handleClose(); // Tutup modal setelah sukses mengirim
        },
        (error) => {
          setIsSending(false);
          setErrorMessage("Gagal mengirim saran. Coba lagi.");
          console.error("Gagal mengirim saran:", error);
        }
      );
  };

  if (!isOpen) return null; // Jangan render modal jika tidak dibuka

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 transition-opacity duration-300"
      onClick={handleClose}
    >
      <div 
        className="bg-white p-6 rounded-3xl shadow-lg w-[400px] h-[320px] relative border border-gray-300"
        onClick={(e) => e.stopPropagation()} // Agar modal tidak tertutup saat klik di dalamnya
      >
        {/* Tombol Close */}
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={handleClose}
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Kritik & Saran</h2>
        
        {/* Textbox */}
        <textarea
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring focus:ring-purple-100 resize-none text-gray-900 placeholder-gray-500"
          rows="4"
          placeholder="Masukkan kritik & saran anda..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          disabled={isSending} // Nonaktifkan saat sedang mengirim
        />

        {/* Pesan Error Jika Gagal */}
        {errorMessage && <p className="text-red-500 text-sm text-center mt-2">{errorMessage}</p>}

        {/* Tombol Kirim */}
        <div className="flex justify-center">
          <button 
            className={`mt-6 flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 text-white text-sm font-medium transition ${
              isSending ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
            onClick={handleSend}
            disabled={isSending} // Nonaktifkan tombol saat mengirim
          >
            {isSending ? "Mengirim..." : <>
              <Send className="w-5 h-5" />
              Send
            </>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

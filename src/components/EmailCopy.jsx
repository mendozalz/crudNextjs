"use client";

const EmailCopy = () => {
  const email = "mendoza124302@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert("¡Correo copiado al portapapeles!");
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 via-blue-500 to-purple-600 p-4 rounded-md">
      <p className="text-lg font-bold">¡Contáctame!</p>
      <p className="text-gray-900">{email}</p>
      <button
        onClick={copyToClipboard}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md"
      >
        Copiar Correo
      </button>
    </div>
  );
};

export default EmailCopy;

import { X, ExternalLink } from "lucide-react";

const CertificatePreviewModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Card */}
      <div className="relative z-50 w-full max-w-3xl mx-4 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-slate-700 animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className=" cursor-pointer absolute top-5 right-5 p-2 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-500 hover:text-stone-900 dark:text-slate-400 dark:hover:text-white transition"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Certificate Image */}
            <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
              <div
                className="rounded-2xl no-scrollbar max-h-[70vh] overflow-auto border border-stone-200/70 dark:border-slate-600 
  bg-white/90 dark:bg-slate-800/80 p-4 shadow-lg"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="cursor-zoom-in w-full h-auto object-contain rounded-xl hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => window.open(certificate.image, "_blank")}
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-stone-900 dark:text-white leading-tight">
                {certificate.title}
              </h2>

              <p className="mt-2 text-sm text-stone-500 dark:text-slate-400">
                {certificate.issuer} • {certificate.issueDate}
              </p>

              <p className="mt-4 text-stone-600 dark:text-slate-300 leading-relaxed">
                {certificate.description}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {certificate.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-slate-800 text-purple-700 dark:text-cyan-300 border border-purple-200 dark:border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            {certificate.has_verify && (
              <a
                href={certificate.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition"
              >
                Verify Certificate <ExternalLink size={16} />
              </a>
            )}

            <button
              onClick={onClose}
              className="cursor-pointer px-5 py-2.5 rounded-lg border border-stone-300 dark:border-slate-700 text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatePreviewModal;

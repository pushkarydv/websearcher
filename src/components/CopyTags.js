export default function CopyTags({
  name,
  description,
  url,
  banner,
  author,
  keywords,
}) {
  return (
    <button
      className="transition bg-teal-500 text-slate-900 font-medium py-2 px-3 text-lg mb-4 m-1 rounded-md  hover:bg-teal-300 hover:scale-110 hover:translate-x-2 outline-none"
      onClick={(e) => {
        navigator.clipboard.writeText(
          `<meta name="title" content="${name}" /> <meta name="description" content="${description}" /> <meta name="keywords" content="${keywords}" /> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  <meta name="language" content="English" /> <meta name="author" content="${author}" /> <meta property="og:type" content="website" /> <meta property="og:url" content="${url}" /> <meta property="og:title" content="${name}" /> <meta property="og:description" content="${description}" /> <meta property="og:image" content="${banner}" /> <meta property="twitter:card" content="summary_large_image" /> <meta property="twitter:url" content="${url}" /> <meta property="twitter:title" content="${name}" /> <meta property="twitter:description" content="${description}"/><meta property="twitter:image" content="${banner}"
        />`
        );
        e.target.innerText = "Copied";
        setInterval(() => {
          e.target.innerText = "Copy Tags";
        }, 1000);
      }}
    >
      Copy Tags
    </button>
  );
}

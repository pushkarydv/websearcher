export default function SocialLink({ to, children }) {
  return (
    <div className="inline-block w-fit  transition  px-4 py-2 text-2xl border-2 border-teal-400 text-teal-400 rounded-2xl hover:bg-teal-500 hover:border-teal-500 hover:text-white hover:scale-90 my-3 mx-2">
      <a href={to} className="no-underline">
        {children}
      </a>
    </div>
  );
}

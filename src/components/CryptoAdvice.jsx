import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'

export default function CryptoAdvice({ advice }) {
  const adviceRef = useRef(null);

  // Auto-scroll to advice when it changes
  useEffect(() => {
    if (advice && adviceRef.current) {
      adviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [advice]);

  return (
    <section
      ref={adviceRef}
      className="bg-gray-50 text-gray-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto mt-6 leading-relaxed"
      aria-live="polite"
    >
     <h2 className="text-2xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
        <FontAwesomeIcon icon={faChartLine} className="text-indigo-700" />
        CryptoCoach Recommends:
      </h2>

    <ReactMarkdown
  components={{
    h1: ({node, ...props}) => <h1 className="text-2xl font-bold" {...props} />,
    p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
    li: ({node, ...props}) => <li className="list-disc ml-5" {...props} />
  }}
>
  {advice}
</ReactMarkdown>
    </section>
  );
}

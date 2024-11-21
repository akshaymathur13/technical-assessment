import React, { useState } from "react";
import JsonEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import DarkModeToggle from "./components/DarkModeToggle";

const App: React.FC = () => {
  const [json, setJson] = useState(`{
    "formTitle": "Survey Form",
    "formDescription": "Fill out this form",
    "fields": []
  }`);

  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const schema = (() => {
    try {
      return JSON.parse(json);
    } catch {
      return null;
    }
  })();

  const handleCopyJson = () => {
    navigator.clipboard.writeText(json).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => {
          setCopySuccess(null);
        }, 2000);
      },
      (error) => {
        setCopySuccess("Failed to copy JSON");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Dynamic Form Generator
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          Generate and customize forms in real-time by editing JSON
        </p>
      </header>
      <div className="flex justify-between p-4">
        <DarkModeToggle />
        <button
          onClick={handleCopyJson}
          className="p-2 bg-blue-500 text-white rounded hover:bg-gray-600 hover:underline transition-all"
        >
          Copy JSON
        </button>
      </div>
      {copySuccess && (
        <div className="p-2 text-green-500 font-semibold mt-2">
          {copySuccess}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <JsonEditor json={json} setJson={setJson} />
        <FormPreview schema={schema} />
      </div>
    </div>
  );
};

export default App;

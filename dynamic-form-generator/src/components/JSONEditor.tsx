import React, { useState } from "react";

interface Props {
  json: string;
  setJson: (json: string) => void;
}

const JsonEditor: React.FC<Props> = ({ json, setJson }) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    try {
      JSON.parse(value);
      setError(null);
    } catch {
      setError("Invalid JSON");
    }
    setJson(value);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <textarea
        value={json}
        onChange={handleChange}
        className="w-full h-64 p-2 border rounded dark:bg-gray-800 dark:text-white"
        placeholder="Enter JSON schema here..."
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default JsonEditor;

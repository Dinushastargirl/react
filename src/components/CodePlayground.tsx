import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface CodePlaygroundProps {
  code: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({ code }) => {
  return (
    <div className="my-8 rounded-xl overflow-hidden border border-orange-200 dark:border-orange-900 shadow-xl">
      <LiveProvider code={code.trim()} noInline={true} scope={{ React }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#282c34] p-4 font-mono text-sm overflow-auto max-h-[400px]">
            <div className="text-gray-400 mb-2 text-xs uppercase tracking-widest font-bold">Editable Code</div>
            <LiveEditor className="outline-none" />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 border-l border-orange-100 dark:border-orange-900 min-h-[200px]">
            <div className="text-orange-500 mb-4 text-xs uppercase tracking-widest font-bold">Live Preview</div>
            <LivePreview />
            <LiveError className="mt-4 p-2 bg-red-100 text-red-600 text-xs rounded" />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default CodePlayground;

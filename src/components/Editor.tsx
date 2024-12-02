'use client'

import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function Editor({ content, onChange, placeholder }: EditorProps) {
  const editorRef = useRef<EditorJS>();

  useEffect(() => {
    let editor: EditorJS;

    const initEditor = async () => {
      try {
        editor = new EditorJS({
          holder: 'editor',
          placeholder: placeholder || 'Start writing...',
          onChange: async () => {
            try {
              const content = await editor.save();
              onChange(JSON.stringify(content));
            } catch (error) {
              console.error('Error saving editor content:', error);
            }
          },
          data: content ? JSON.parse(content) : undefined,
          tools: {
            // Add your editor.js tools configuration here
          }
        });

        await editor.isReady;
        editorRef.current = editor;
      } catch (error) {
        console.error('Error initializing editor:', error);
      }
    };

    initEditor();

    return () => {
      if (editorRef.current && typeof editorRef.current.destroy === 'function') {
        try {
          editorRef.current.destroy();
          editorRef.current = undefined;
        } catch (error) {
          console.error('Error destroying editor:', error);
        }
      }
    };
  }, []);

  return (
    <div 
      id="editor" 
      className="prose prose-invert max-w-none min-h-[500px] bg-[#2B3B37]/50 rounded-lg p-6"
    />
  );
} 
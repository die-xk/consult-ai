'use client'

import { useEffect, useRef } from 'react';

interface EditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export default function Editor({ content, onChange, placeholder }: EditorProps) {
  const editorRef = useRef<any>();

  useEffect(() => {
    let editor: any;

    const initEditor = async () => {
      try {
        const EditorJS = (await import('@editorjs/editorjs')).default;
        const Header = (await import('@editorjs/header')).default;
        const Paragraph = (await import('@editorjs/paragraph')).default;
        
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
            header: {
              class: Header,
              config: {
                placeholder: 'Enter a header',
                levels: [1, 2, 3],
                defaultLevel: 2
              }
            },
            paragraph: {
              class: Paragraph,
              inlineToolbar: true
            }
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
      if (editorRef.current?.destroy) {
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
import { useState, useRef, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import MonacoEditor from "@monaco-editor/react";
import { JoinProjectButton } from '../design-system/Button';

export default function HtmlCssEditor() {
    const [code, setCode] = useState(`
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          /* Some styles here */
        </style>
      </head>
      <body>
        <h1>This is h1</h1>
      </body>
    </html>
  `);

    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Update iframe content whenever code changes
    useEffect(() => {
        if (iframeRef.current) {
            const iframeDoc = iframeRef.current.contentDocument;
            if (iframeDoc) {
                iframeDoc.open();
                iframeDoc.write(code);
                iframeDoc.close();
            }
        }
    }, [code]);

    const handleFullscreen = () => {
        const elem = document.documentElement;
        if (!document.fullscreenElement) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex w-full h-full space-x-4">
                <ResizableBox
                    width={400}
                    height={500}
                    minConstraints={[200, 300]}
                    maxConstraints={[1000, 700]}
                    className="rounded-lg overflow-hidden bg-gray-800"
                >
                    <div className="p-2 h-full bg-gray-200">
                        <MonacoEditor
                            height="100%"
                            language="html"
                            theme="vs-dark"
                            value={code}
                            onChange={(value) => setCode(value || "")}
                            options={{ minimap: { enabled: false }, automaticLayout: true }}
                        />
                    </div>
                </ResizableBox>
                <ResizableBox
                    width={400}
                    height={500}
                    minConstraints={[200, 300]}
                    maxConstraints={[600, 500]}
                    className="rounded-lg overflow-hidden bg-white p-4"
                >
                    <iframe
                        ref={iframeRef}
                        className="w-full h-full border-0"
                        title="live-preview"
                    />
                </ResizableBox>
            </div>
            <div className="flex items-center justify-center mt-10">
                <JoinProjectButton name='Submit Challenge' />
            </div>
        </div>
    );
}

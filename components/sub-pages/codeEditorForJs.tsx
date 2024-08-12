import { useState, useRef, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import MonacoEditor from "@monaco-editor/react";
import { JoinProjectButton } from '../design-system/Button';

export default function JSEditor() {
    const [code, setCode] = useState(`
    alert('Hello World')
  `);

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
                    width={1000}
                    height={500}
                    minConstraints={[200, 300]}
                    maxConstraints={[1200, 700]}
                    className="rounded-lg overflow-hidden bg-gray-800"
                >
                    <div className="p-2 h-full bg-gray-200">
                        <MonacoEditor
                            height="100%"
                            language="javascript"
                            theme="vs-dark"
                            value={code}
                            onChange={(value) => setCode(value || "")}
                            options={{ minimap: { enabled: false }, automaticLayout: true }}
                        />
                    </div>
                </ResizableBox>
            </div>
            <div className="flex items-center justify-center mt-10">
                <JoinProjectButton name='Submit Challenge' />
            </div>
        </div>
    );
}

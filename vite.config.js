import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const ReactCompilerConfig = { /* ... */};
export default defineConfig(() => {
    return {
        plugins: [
            react({
                babel: {
                    plugins: [
                        ["babel-plugin-react-compiler", ReactCompilerConfig],
                    ],
                },
            }),
        ],
        resolve: {
            extensions: ['.js', '.ts', '.jsx', '.tsx'],
        },
        test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: './vitest.setup.ts',
            coverage: {
                exclude: ['**/node_modules/**']
            }
        }
    };
});

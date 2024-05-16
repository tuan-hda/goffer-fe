import { cpp } from '@codemirror/lang-cpp';
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { LiaJava } from 'react-icons/lia';
import { TbBrandCpp, TbBrandJavascript, TbBrandPython } from 'react-icons/tb';

export const languageOptions = [
    {
        id: 63,
        name: 'JavaScript (Node.js 12.14.0)',
        label: 'JavaScript (Node.js 12.14.0)',
        value: 'javascript',
        suffix: 'js',
        extension: javascript({ jsx: true }),
        icon: <TbBrandJavascript />,
    },
    {
        id: 54,
        name: 'C++ (GCC 9.2.0)',
        label: 'C++ (GCC 9.2.0)',
        value: 'cpp',
        suffix: 'cpp',
        extension: cpp(),
        icon: <TbBrandCpp />,
    },
    {
        id: 62,
        name: 'Java (OpenJDK 13.0.1)',
        label: 'Java (OpenJDK 13.0.1)',
        value: 'java',
        suffix: 'java',
        extension: java(),
        icon: <LiaJava />,
    },
    {
        id: 71,
        name: 'Python (3.8.1)',
        label: 'Python (3.8.1)',
        value: 'python3',
        suffix: 'py',
        extension: python(),
        icon: <TbBrandPython />,
    },
];

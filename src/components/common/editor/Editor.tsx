import 'katex/dist/katex.min.css';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import { Button } from '@nextui-org/react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import Document from '@tiptap/extension-document';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import FileHandler from '@tiptap-pro/extension-file-handler';
import Image from '@tiptap/extension-image';
import fileHandlerConfig from './configs/fileConfig';
import Mathematics from '@tiptap-pro/extension-mathematics';
import mathematicConfig from './configs/mathematicConfig';
import { TbBlockquote, TbBold, TbCode, TbH1, TbH2, TbH3, TbItalic, TbStrikethrough } from 'react-icons/tb';
import { HiMiniListBullet } from 'react-icons/hi2';
import { GoListOrdered } from 'react-icons/go';
import { PiCodeBlock, PiTextIndent, PiTextOutdent } from 'react-icons/pi';
import { BiRedo, BiUndo } from 'react-icons/bi';
import { CgFormatColor } from 'react-icons/cg';
import OrderedList from '@tiptap/extension-ordered-list';
import { orderedListConfig } from './configs/listConfig';

const MenuBar = () => {
    const { editor } = useCurrentEditor();

    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-row flex-wrap gap-1">
            <Button
                onPress={() => editor.chain().focus().toggleBold().run()}
                isDisabled={!editor.can().chain().focus().toggleBold().run()}
                variant={editor.isActive('bold') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbBold size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleItalic().run()}
                isDisabled={editor.can().chain().focus().toggleItalic().run()}
                variant={editor.isActive('italic') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbItalic size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleStrike().run()}
                isDisabled={!editor.can().chain().focus().toggleStrike().run()}
                variant={editor.isActive('strike') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbStrikethrough size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleCode().run()}
                isDisabled={!editor.can().chain().focus().toggleCode().run()}
                variant={editor.isActive('code') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbCode size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                variant={editor.isActive('heading', { level: 1 }) ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbH1 size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                variant={editor.isActive('heading', { level: 2 }) ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbH2 size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                variant={editor.isActive('heading', { level: 3 }) ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbH3 size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleBulletList().run()}
                variant={editor.isActive('bulletList') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <HiMiniListBullet size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleOrderedList().run()}
                variant={editor.isActive('orderedList') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <GoListOrdered size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().sinkListItem('listItem').run()}
                isDisabled={!editor.can().sinkListItem('listItem')}
                variant="light"
                size="sm"
                radius="sm"
                isIconOnly
            >
                <PiTextIndent size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().liftListItem('listItem').run()}
                isDisabled={!editor.can().liftListItem('listItem')}
                variant="light"
                size="sm"
                radius="sm"
                isIconOnly
            >
                <PiTextOutdent size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleCodeBlock().run()}
                variant={editor.isActive('codeBlock') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <PiCodeBlock size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().toggleBlockquote().run()}
                variant={editor.isActive('blockquote') ? 'solid' : 'light'}
                size="sm"
                radius="sm"
                isIconOnly
            >
                <TbBlockquote size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().undo().run()}
                isDisabled={!editor.can().chain().focus().undo().run()}
                variant="light"
                size="sm"
                radius="sm"
                isIconOnly
            >
                <BiUndo size={16} />
            </Button>
            <Button
                onPress={() => editor.chain().focus().redo().run()}
                isDisabled={!editor.can().chain().focus().redo().run()}
                variant="light"
                size="sm"
                radius="sm"
                isIconOnly
            >
                <BiRedo size={16} />
            </Button>
            <Button
                size="sm"
                radius="sm"
                isIconOnly
                onPress={() => editor.chain().focus().setColor('#958DF1').run()}
                variant={editor.isActive('textStyle', { color: '#958DF1' }) ? 'solid' : 'light'}
            >
                <CgFormatColor size={16} color="#958DF1" />
            </Button>
        </div>
    );
};

const extensions = [
    StarterKit,
    Color,
    ListItem,
    TextStyle,
    Document,
    Heading,
    Paragraph,
    Text,
    Image,
    OrderedList.configure(orderedListConfig),
    FileHandler.configure(fileHandlerConfig),
    Mathematics.configure(mathematicConfig),
];

const content = `
Did you know that $3 * 3 = 9$? Isn't that crazy? Also Pythagoras' theorem is $a^2 + b^2 = c^2$.
Also the square root of 2 is $\sqrt{2}$. If you want to know more about $\LaTeX$ visit katex.org.

<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const Editor = () => {
    return (
        <div className="p-10">
            <EditorProvider slotBefore={<MenuBar />} extensions={extensions} content={content}>
                <></>
            </EditorProvider>
        </div>
    );
};
export default Editor;

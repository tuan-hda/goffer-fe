// eslint-disable-next-line import/named
import { FileHandlePluginOptions } from '@tiptap-pro/extension-file-handler';

const fileHandlerConfig = {
    allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
    onDrop: (currentEditor, files, pos) => {
        files.forEach((file) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                currentEditor
                    .chain()
                    .insertContentAt(pos, {
                        type: 'image',
                        attrs: {
                            src: fileReader.result,
                        },
                    })
                    .focus()
                    .run();
            };
        });
    },
    onPaste: (currentEditor, files, htmlContent) => {
        files.forEach((file) => {
            if (htmlContent) {
                // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
                // you could extract the pasted file from this url string and upload it to a server for example
                console.log(htmlContent); // eslint-disable-line no-console
                return false;
            }

            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                currentEditor
                    .chain()
                    .insertContentAt(currentEditor.state.selection.anchor, {
                        type: 'image',
                        attrs: {
                            src: fileReader.result,
                        },
                    })
                    .focus()
                    .run();
            };
        });
    },
} as Partial<Omit<FileHandlePluginOptions, 'key' | 'editor'>> | undefined;

export default fileHandlerConfig;

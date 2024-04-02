import { withProps } from '@udecode/cn';
import {
    createPlugins,
    Plate,
    RenderAfterEditable,
    PlateLeaf,
    PlateElement,
    isBlockAboveEmpty,
    isSelectionAtBlockStart,
    someNode,
    PlateProps,
} from '@udecode/plate-common';
import { createParagraphPlugin, ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import {
    createHeadingPlugin,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    KEYS_HEADING,
} from '@udecode/plate-heading';
import { createBlockquotePlugin, ELEMENT_BLOCKQUOTE } from '@udecode/plate-block-quote';
import {
    createCodeBlockPlugin,
    ELEMENT_CODE_BLOCK,
    ELEMENT_CODE_LINE,
    ELEMENT_CODE_SYNTAX,
    isCodeBlockEmpty,
    isSelectionAtCodeBlockStart,
    unwrapCodeBlock,
} from '@udecode/plate-code-block';
import { createHorizontalRulePlugin, ELEMENT_HR } from '@udecode/plate-horizontal-rule';
import { createLinkPlugin, ELEMENT_LINK } from '@udecode/plate-link';
import { createImagePlugin, ELEMENT_IMAGE, createMediaEmbedPlugin, ELEMENT_MEDIA_EMBED } from '@udecode/plate-media';
import { createCaptionPlugin } from '@udecode/plate-caption';
import { createMentionPlugin, ELEMENT_MENTION, ELEMENT_MENTION_INPUT } from '@udecode/plate-mention';
import { createTodoListPlugin, ELEMENT_LI, ELEMENT_OL, ELEMENT_TODO_LI, ELEMENT_UL } from '@udecode/plate-list';
import { createExcalidrawPlugin, ELEMENT_EXCALIDRAW } from '@udecode/plate-excalidraw';
import { createTogglePlugin, ELEMENT_TOGGLE } from '@udecode/plate-toggle';
import { createTablePlugin, ELEMENT_TABLE, ELEMENT_TR, ELEMENT_TD, ELEMENT_TH } from '@udecode/plate-table';
import {
    createBoldPlugin,
    MARK_BOLD,
    createItalicPlugin,
    MARK_ITALIC,
    createUnderlinePlugin,
    MARK_UNDERLINE,
    createStrikethroughPlugin,
    MARK_STRIKETHROUGH,
    createCodePlugin,
    MARK_CODE,
    createSubscriptPlugin,
    MARK_SUBSCRIPT,
    createSuperscriptPlugin,
    MARK_SUPERSCRIPT,
} from '@udecode/plate-basic-marks';
import { createFontColorPlugin, createFontBackgroundColorPlugin, createFontSizePlugin } from '@udecode/plate-font';
import { createHighlightPlugin, MARK_HIGHLIGHT } from '@udecode/plate-highlight';
import { createKbdPlugin, MARK_KBD } from '@udecode/plate-kbd';
import { createAlignPlugin } from '@udecode/plate-alignment';
import { createIndentPlugin } from '@udecode/plate-indent';
import { KEY_LIST_STYLE_TYPE, createIndentListPlugin } from '@udecode/plate-indent-list';
import { createLineHeightPlugin } from '@udecode/plate-line-height';
import { createAutoformatPlugin } from '@udecode/plate-autoformat';
import { createBlockSelectionPlugin } from '@udecode/plate-selection';
import { createComboboxPlugin } from '@udecode/plate-combobox';
import { createDndPlugin } from '@udecode/plate-dnd';
import { createEmojiPlugin } from '@udecode/plate-emoji';
import { createExitBreakPlugin, createSoftBreakPlugin } from '@udecode/plate-break';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import { createResetNodePlugin } from '@udecode/plate-reset-node';
import { createDeletePlugin, createSelectOnBackspacePlugin } from '@udecode/plate-select';
import { createTabbablePlugin } from '@udecode/plate-tabbable';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';
import { createCommentsPlugin, CommentsProvider, MARK_COMMENT } from '@udecode/plate-comments';
import { createDeserializeDocxPlugin } from '@udecode/plate-serializer-docx';
import { createDeserializeCsvPlugin } from '@udecode/plate-serializer-csv';
import { createDeserializeMdPlugin } from '@udecode/plate-serializer-md';
import { createJuicePlugin } from '@udecode/plate-juice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { BlockquoteElement } from '@/components/plate-ui/blockquote-element';
import { CodeBlockElement } from '@/components/plate-ui/code-block-element';
import { CodeLineElement } from '@/components/plate-ui/code-line-element';
import { CodeSyntaxLeaf } from '@/components/plate-ui/code-syntax-leaf';
import { ExcalidrawElement } from '@/components/plate-ui/excalidraw-element';
import { HrElement } from '@/components/plate-ui/hr-element';
import { ImageElement } from '@/components/plate-ui/image-element';
import { LinkElement } from '@/components/plate-ui/link-element';
import { LinkFloatingToolbar } from '@/components/plate-ui/link-floating-toolbar';
import { ToggleElement } from '@/components/plate-ui/toggle-element';
import { HeadingElement } from '@/components/plate-ui/heading-element';
import { MediaEmbedElement } from '@/components/plate-ui/media-embed-element';
import { MentionElement } from '@/components/plate-ui/mention-element';
import { MentionInputElement } from '@/components/plate-ui/mention-input-element';
import { MentionCombobox } from '@/components/plate-ui/mention-combobox';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';
import { TableElement } from '@/components/plate-ui/table-element';
import { TableRowElement } from '@/components/plate-ui/table-row-element';
import { TableCellElement, TableCellHeaderElement } from '@/components/plate-ui/table-cell-element';
import { TodoListElement } from '@/components/plate-ui/todo-list-element';
import { CodeLeaf } from '@/components/plate-ui/code-leaf';
import { CommentLeaf } from '@/components/plate-ui/comment-leaf';
import { CommentsPopover } from '@/components/plate-ui/comments-popover';
import { HighlightLeaf } from '@/components/plate-ui/highlight-leaf';
import { KbdLeaf } from '@/components/plate-ui/kbd-leaf';
import { Editor } from '@/components/plate-ui/editor';
import { FixedToolbar } from '@/components/plate-ui/fixed-toolbar';
import { FixedToolbarButtons } from '@/components/plate-ui/fixed-toolbar-buttons';
import { FloatingToolbar } from '@/components/plate-ui/floating-toolbar';
import { FloatingToolbarButtons } from '@/components/plate-ui/floating-toolbar-buttons';
import { withPlaceholders } from '@/components/plate-ui/placeholder';
import { withDraggables } from '@/components/plate-ui/with-draggables';
import { EmojiCombobox } from '@/components/plate-ui/emoji-combobox';
import classNames from 'classnames';
import { ListElement } from '../plate-ui/list-element';
import { autoformatPlugin } from './autoformatPlugin';
import { TabbableElement } from './TabbaleElement';
import { dragOverCursorPlugin } from './dragOverCursorPlugin';

const resetBlockTypesCommonRule = {
    types: [ELEMENT_BLOCKQUOTE, ELEMENT_TODO_LI],
    defaultType: ELEMENT_PARAGRAPH,
};

const resetBlockTypesCodeBlockRule = {
    types: [ELEMENT_CODE_BLOCK],
    defaultType: ELEMENT_PARAGRAPH,
    onReset: unwrapCodeBlock,
};

export const plugins = createPlugins(
    [
        // Nodes
        createParagraphPlugin(),
        createHeadingPlugin(),
        createBlockquotePlugin(),
        createCodeBlockPlugin(),
        createHorizontalRulePlugin(),
        createLinkPlugin({
            renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
        }),
        createImagePlugin(),
        createMediaEmbedPlugin(),
        createCaptionPlugin({
            options: { pluginKeys: [ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED] },
        }),
        createMentionPlugin(),
        createTablePlugin(),
        createTodoListPlugin(),
        createExcalidrawPlugin(),

        // Marks
        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createStrikethroughPlugin(),
        createCodePlugin(),
        createSubscriptPlugin(),
        createSuperscriptPlugin(),
        createFontColorPlugin(),
        createFontBackgroundColorPlugin(),
        createFontSizePlugin(),
        createHighlightPlugin(),
        createKbdPlugin(),

        // Block Style
        createAlignPlugin({
            inject: {
                props: {
                    validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
                },
            },
        }),
        createIndentPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        ELEMENT_H1,
                        ELEMENT_H2,
                        ELEMENT_H3,
                        ELEMENT_BLOCKQUOTE,
                        ELEMENT_CODE_BLOCK,
                    ],
                },
            },
        }),
        createIndentListPlugin({
            inject: {
                props: {
                    validTypes: [
                        ELEMENT_PARAGRAPH,
                        ELEMENT_H1,
                        ELEMENT_H2,
                        ELEMENT_H3,
                        ELEMENT_BLOCKQUOTE,
                        ELEMENT_CODE_BLOCK,
                    ],
                },
            },
        }),
        createLineHeightPlugin({
            inject: {
                props: {
                    defaultNodeValue: 1.5,
                    validNodeValues: [1, 1.2, 1.5, 2, 3],
                    validTypes: [ELEMENT_PARAGRAPH, ELEMENT_H1, ELEMENT_H2, ELEMENT_H3],
                },
            },
        }),

        // Functionality
        createAutoformatPlugin(autoformatPlugin),
        createBlockSelectionPlugin({
            options: {
                sizes: {
                    top: 0,
                    bottom: 0,
                },
            },
        }),
        createComboboxPlugin(),
        createDndPlugin({
            options: { enableScroller: true },
        }),
        createEmojiPlugin({
            renderAfterEditable: EmojiCombobox as RenderAfterEditable,
        }),
        createExitBreakPlugin({
            options: {
                rules: [
                    {
                        hotkey: 'mod+enter',
                    },
                    {
                        hotkey: 'mod+shift+enter',
                        before: true,
                    },
                    {
                        hotkey: 'enter',
                        query: {
                            start: true,
                            end: true,
                            allow: KEYS_HEADING,
                        },
                        relative: true,
                        level: 1,
                    },
                ],
            },
        }),
        createNodeIdPlugin(),
        createResetNodePlugin({
            options: {
                rules: [
                    {
                        ...resetBlockTypesCommonRule,
                        hotkey: 'Enter',
                        predicate: isBlockAboveEmpty,
                    },
                    {
                        ...resetBlockTypesCommonRule,
                        hotkey: 'Backspace',
                        predicate: isSelectionAtBlockStart,
                    },
                    {
                        ...resetBlockTypesCodeBlockRule,
                        hotkey: 'Enter',
                        predicate: isCodeBlockEmpty,
                    },
                    {
                        ...resetBlockTypesCodeBlockRule,
                        hotkey: 'Backspace',
                        predicate: isSelectionAtCodeBlockStart,
                    },
                ],
            },
        }),
        createSelectOnBackspacePlugin({
            options: {
                query: {
                    allow: [ELEMENT_IMAGE, ELEMENT_HR],
                },
            },
        }),

        createSoftBreakPlugin({
            options: {
                rules: [
                    { hotkey: 'shift+enter' },
                    {
                        hotkey: 'enter',
                        query: {
                            allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE, ELEMENT_TD],
                        },
                    },
                ],
            },
        }),
        createTabbablePlugin({
            options: {
                query: (editor) => {
                    if (isSelectionAtBlockStart(editor)) return false;

                    return !someNode(editor, {
                        match: (n) => {
                            return !!(
                                n.type &&
                                ([ELEMENT_TABLE, ELEMENT_LI, ELEMENT_CODE_BLOCK].includes(n.type as string) ||
                                    n[KEY_LIST_STYLE_TYPE])
                            );
                        },
                    });
                },
            },
            plugins: [
                {
                    key: 'tabbable_element',
                    isElement: true,
                    isVoid: true,
                    component: TabbableElement,
                },
            ],
        }),
        createTrailingBlockPlugin({
            options: { type: ELEMENT_PARAGRAPH },
        }),
        dragOverCursorPlugin,

        // Collaboration
        createCommentsPlugin(),

        // Deserialization
        createDeserializeDocxPlugin(),
        createDeserializeMdPlugin(),
        createJuicePlugin(),
    ],
    {
        components: withDraggables(
            withPlaceholders({
                [ELEMENT_BLOCKQUOTE]: BlockquoteElement,
                [ELEMENT_CODE_BLOCK]: CodeBlockElement,
                [ELEMENT_CODE_LINE]: CodeLineElement,
                [ELEMENT_CODE_SYNTAX]: CodeSyntaxLeaf,
                [ELEMENT_HR]: HrElement,
                [ELEMENT_H1]: withProps(HeadingElement, { variant: 'h1' }),
                [ELEMENT_H2]: withProps(HeadingElement, { variant: 'h2' }),
                [ELEMENT_H3]: withProps(HeadingElement, { variant: 'h3' }),
                [ELEMENT_H4]: withProps(HeadingElement, { variant: 'h4' }),
                [ELEMENT_H5]: withProps(HeadingElement, { variant: 'h5' }),
                [ELEMENT_H6]: withProps(HeadingElement, { variant: 'h6' }),
                [ELEMENT_IMAGE]: ImageElement,
                [ELEMENT_LI]: withProps(PlateElement, { as: 'li' }),
                [ELEMENT_LINK]: LinkElement,
                [ELEMENT_MEDIA_EMBED]: MediaEmbedElement,
                [ELEMENT_MENTION]: MentionElement,
                [ELEMENT_MENTION_INPUT]: MentionInputElement,
                [ELEMENT_UL]: withProps(ListElement, { variant: 'ul' }),
                [ELEMENT_OL]: withProps(ListElement, { variant: 'ol' }),
                [ELEMENT_PARAGRAPH]: ParagraphElement,
                [ELEMENT_TABLE]: TableElement,
                [ELEMENT_TD]: TableCellElement,
                [ELEMENT_TH]: TableCellHeaderElement,
                [ELEMENT_TODO_LI]: TodoListElement,
                [ELEMENT_TR]: TableRowElement,
                [ELEMENT_EXCALIDRAW]: ExcalidrawElement,
                [MARK_BOLD]: withProps(PlateLeaf, { as: 'strong' }),
                [MARK_CODE]: CodeLeaf,
                [MARK_HIGHLIGHT]: HighlightLeaf,
                [MARK_ITALIC]: withProps(PlateLeaf, { as: 'em' }),
                [MARK_KBD]: KbdLeaf,
                [MARK_STRIKETHROUGH]: withProps(PlateLeaf, { as: 's' }),
                [MARK_SUBSCRIPT]: withProps(PlateLeaf, { as: 'sub' }),
                [MARK_SUPERSCRIPT]: withProps(PlateLeaf, { as: 'sup' }),
                [MARK_UNDERLINE]: withProps(PlateLeaf, { as: 'u' }),
                [MARK_COMMENT]: CommentLeaf,
            }),
        ),
    },
);

const initialValue = [
    {
        id: '1',
        type: 'p',
        children: [{ text: 'Hello, World!' }],
    },
];

type PlateEditorProps = Omit<PlateProps, 'children'>;

export function PlateEditor(props: PlateEditorProps) {
    return (
        <DndProvider backend={HTML5Backend}>
            <CommentsProvider>
                <Plate {...props} plugins={plugins}>
                    <div
                        className={classNames(
                            'relative',
                            // Block selection
                            'rounded-xl border [&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4',
                        )}
                    >
                        <FixedToolbar>
                            <FixedToolbarButtons />
                        </FixedToolbar>

                        <Editor className="px-6 py-4" autoFocus focusRing={false} variant="ghost" size="sm" />

                        <FloatingToolbar>
                            <FloatingToolbarButtons />
                        </FloatingToolbar>

                        {/* <MentionCombobox items={MENTIONABLES} /> */}

                        <CommentsPopover />

                        {/* <CursorOverlay containerRef={containerRef} /> */}
                    </div>
                </Plate>
            </CommentsProvider>
        </DndProvider>
    );
}

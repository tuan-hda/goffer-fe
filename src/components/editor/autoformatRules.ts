import {
    autoformatArrow,
    autoformatLegal,
    autoformatLegalHtml,
    autoformatMath,
    autoformatPunctuation,
    autoformatSmartQuotes,
} from '@udecode/plate-autoformat';
import { MyAutoformatRule } from './plate-types';
import { autoformatBlocks } from './autoformatBlocks';
import { autoformatIndentLists } from './autoformatIndentLists';
import { autoformatMarks } from './autoformatMarks';

export const autoformatRules = [
    ...autoformatBlocks,
    ...autoformatIndentLists,
    ...autoformatMarks,
    ...(autoformatSmartQuotes as MyAutoformatRule[]),
    ...(autoformatPunctuation as MyAutoformatRule[]),
    ...(autoformatLegal as MyAutoformatRule[]),
    ...(autoformatLegalHtml as MyAutoformatRule[]),
    ...(autoformatArrow as MyAutoformatRule[]),
    ...(autoformatMath as MyAutoformatRule[]),
];

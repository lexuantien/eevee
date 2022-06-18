/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useState, useEffect } from 'react';
import type { EditorView } from '@codemirror/view';

export type LintDiagnostic = {
  line: number;
  column: number;
  severity: 'warning' | 'error';
  message: string;
}[];

export const useSandpackLint = () => {
  const [lintErrors, setLintErrors] = useState<LintDiagnostic>([]);
  const [lintExtensions, setLintExtensions] = useState<any>([]);
  useEffect(() => {
    const loadLinter = async () => {
      // eslint-disable-next-line import/no-extraneous-dependencies
      const { linter } = await import('@codemirror/lint');
      const onLint = linter(async (props: EditorView) => {
        // This is intentionally delayed until CodeMirror calls it
        // so that we don't take away bandwidth from things loading early.
        const { runESLint } = await import('../runESLint/index');
        const editorState = props.state.doc;
        const { errors, codeMirrorErrors } = runESLint(editorState);
        // Ignore parsing or internal linter errors.
        const isReactRuleError = (error: any) => error.ruleId !== null;
        setLintErrors(errors.filter(isReactRuleError));
        return codeMirrorErrors.filter(isReactRuleError);
      });
      setLintExtensions([onLint]);
    };

    loadLinter();
  }, []);
  return { lintErrors, lintExtensions };
};

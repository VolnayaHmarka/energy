import katex from 'katex';
import { useMemo } from 'react';

interface MathProps {
  tex: string;
  display?: boolean;
  className?: string;
}

export function Math({ tex, display = false, className = '' }: MathProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
        trust: true,
        // Improve rendering quality
        output: 'html',
        strict: false,
        // Don't show error messages for unknown commands, just render the source
        // (avoid the broken "frac..." text in case of any rendering issues)
        macros: {
          '\\R': '\\mathbb{R}',
        },
      });
    } catch {
      // If rendering fails, return escaped text so it doesn't show raw LaTeX
      return `<span style="color:#dc2626;font-family:monospace">${tex.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`;
    }
  }, [tex, display]);

  if (display) {
    return (
      <div
        className={`math-display ${className}`}
        style={{ overflow: 'visible', overflowX: 'auto', padding: '4px 0' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={`math-inline ${className}`}
      style={{ overflow: 'visible', whiteSpace: 'nowrap' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

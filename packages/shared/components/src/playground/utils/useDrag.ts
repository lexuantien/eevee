import React, { useState, RefObject } from 'react';
import { throttle } from '@vaporeon/utils';

/**
 * NOTE: This implementation is hacky AF. It generates hard numbers,
 * but then uses them as percentages.
 */

interface IProps {
  rulerRef: RefObject<HTMLDivElement | undefined>;
  containerRef: RefObject<HTMLDivElement | undefined>;
  dividerRef: RefObject<HTMLButtonElement | undefined>;
  dividerWidth: number;
  defaultRatio: number;
}

type UseDragReturnProp = {
  leftWidth: number;
  rightWidth: number;
};

function useDrag({
  rulerRef,
  containerRef,
  dividerRef,
  dividerWidth,
  defaultRatio,
}: IProps): UseDragReturnProp {
  const [width, setWidth] = useState(782 * defaultRatio);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  React.useEffect(() => {
    const containerEl = rulerRef.current;

    const update = () => {
      if (containerEl) {
        const fullWidth = containerEl.clientWidth;
        const boundingClientRect = containerEl.getBoundingClientRect();

        setContainerRect(boundingClientRect);
        setWidth(fullWidth * defaultRatio - dividerWidth);
      }
    };

    update();

    const handleResize = throttle(update, 100);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const keepDragging = React.useCallback(
    (event: MouseEvent) => {
      const { clientX } = event;
      if (containerRect) {
        setWidth(clientX - containerRect.left);
      }
    },
    [containerRect]
  );

  const stopDrag = React.useCallback(() => {
    document.removeEventListener('mousemove', keepDragging);
    document.removeEventListener('mouseup', stopDrag);
    if (containerRef.current != null) {
      containerRef.current.style.pointerEvents = '';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keepDragging]);

  const startDrag = React.useCallback(() => {
    document.addEventListener('mousemove', keepDragging);
    document.addEventListener('mouseup', stopDrag);
    if (containerRef.current != null) {
      containerRef.current.style.pointerEvents = 'none';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keepDragging, stopDrag]);

  React.useEffect(() => {
    const dividerEl = dividerRef.current;

    function reset() {
      if (containerRect) {
        setWidth(containerRect.width * defaultRatio - dividerWidth);
      }
    }

    function handleKeypress(ev: KeyboardEvent) {
      if (ev.key === 'ArrowLeft') {
        setWidth((_width) => _width - 20);
      } else if (ev.key === 'ArrowRight') {
        setWidth((_width) => _width + 20);
      }
    }

    if (dividerEl) {
      dividerEl.addEventListener('mousedown', startDrag);
      dividerEl.addEventListener('dblclick', reset);
      dividerEl.addEventListener('keydown', handleKeypress);
    }

    return () => {
      if (dividerEl) {
        dividerEl.removeEventListener('mousedown', startDrag);
        dividerEl.removeEventListener('dblclick', reset);
        dividerEl.removeEventListener('keydown', handleKeypress);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDrag]);

  const maxWidth = containerRect ? containerRect.width - dividerWidth : 782;

  // Don't allow the user to stretch the playground wider than
  // the container.

  const leftWidth = Math.min(width, maxWidth);
  const rightWidth = maxWidth - leftWidth;

  return {
    leftWidth,
    rightWidth,
  } as UseDragReturnProp;
}

export default useDrag;
export { useDrag };
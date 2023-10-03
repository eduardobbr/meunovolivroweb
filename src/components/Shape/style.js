import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  ${({ $shape, $size }) => {
    return $shape === "triangle"
      ? `
    width: 0;
    height: 0;
    border-left: ${$size / 2}mm solid transparent;
    border-right: ${$size / 2}mm solid transparent;
    border-bottom: ${$size}mm solid var(--inputBgColorOpacity);
    `
      : $shape === "circle"
      ? `
    width: ${$size}mm;
    height: ${$size}mm;
    background: var(--inputBgColorOpacity);
    border-radius: 50%;
    `
      : `
    width: ${$size}mm;
    height: ${$size}mm;
    background: var(--inputBgColorOpacity);
`;
  }}

  ${({ $position }) =>
    `left: ${$position.horizontal}mm; top:${$position.vertical}mm`}
`;

import styled from "styled-components";

// export const Container = styled.div`
//   position: absolute;
//   ${({ $shape, $size }) => {
//     return $shape === "triangle"
//       ? `
//     width: 0;
//     height: 0;
//     border-left: ${$size / 2}mm solid transparent;
//     border-right: ${$size / 2}mm solid transparent;
//     border-bottom: ${$size}mm solid var(--inputBgColorOpacity);
//     `
//       : $shape === "circle"
//       ? `
//     width: ${$size}mm;
//     height: ${$size}mm;
//     background: var(--inputBgColorOpacity);
//     border-radius: 50%;
//     `
//       : `
//     width: ${$size}mm;
//     height: ${$size}mm;
//     background: var(--inputBgColorOpacity);
// `;
//   }}

//   ${({ $position }) =>
//     `left: ${$position.horizontal}mm; top:${$position.vertical}mm`}
// `;

export const Container = styled.div.attrs((props) => ({
  style: {
    width: props.$shape === "triangle" ? `0mm` : `${props.$size}mm`,
    height: props.$shape === "triangle" ? `0mm` : `${props.$size}mm`,
    borderLeft:
      props.$shape === "triangle"
        ? `${props.$size / 2}mm solid transparent`
        : undefined,
    borderRight:
      props.$shape === "triangle"
        ? `${props.$size / 2}mm solid transparent`
        : undefined,
    borderBottom:
      props.$shape === "triangle"
        ? `${props.$size}mm solid var(--inputBgColorOpacity)`
        : undefined,
    borderRadius: props.$shape === "circle" ? "50%" : undefined,
    backgroundColor:
      props.$shape === "triangle" ? undefined : `var(--inputBgColorOpacity)`,
    left: `${props.$position.horizontal}mm`,
    top: `${props.$position.vertical}mm`,
  },
}))`
  position: absolute;
`;

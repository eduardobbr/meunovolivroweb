export const styleHtml = `
.ql-container {
  box-sizing: border-box;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 13px;
  height: 100%;
  margin: 0px;
  position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
  visibility: hidden;
}

.ql-clipboard {
  left: -100000px;
  height: 1px;
  overflow-y: hidden;
  position: absolute;
  top: 50%;
}
.ql-clipboard p {
  margin: 0;
  padding: 0;
}
.ql-editor {
  box-sizing: border-box;
  line-height: 1.42;
  height: 100%;
  outline: none;
  overflow-y: auto;
  padding: 12px 15px;
  tab-size: 4;
  -moz-tab-size: 4;
  text-align: left;
  white-space: pre-wrap;
  word-wrap: break-word;
}
.ql-editor > * {
  cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
  margin: 0;
  padding: 0;
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
  padding-left: 1.5em;
}

.ql-editor ul[data-checked=true],
.ql-editor ul[data-checked=false] {
  pointer-events: none;
}

.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
  padding-left: 1.5em;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
  padding-right: 1.5em;
}
.ql-editor ol li {
  counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
  counter-increment: list-0;
}
@supports .ql-editor ol li::before {
  content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
  counter-increment: list-1;
}
@supports .ql-editor ol li.ql-indent-1::before {
  content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
  counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
  counter-increment: list-2;
}
@supports .ql-editor ol li.ql-indent-2::before {
  content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
  counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
  counter-increment: list-3;
}
@supports .ql-editor ol li.ql-indent-3::before {
  content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
  counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
  counter-increment: list-4;
}
@supports .ql-editor ol li.ql-indent-4::before {
  content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
  counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
  counter-increment: list-5;
}
@supports .ql-editor ol li.ql-indent-5::before {
  content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
  counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
  counter-increment: list-6;
}
@supports .ql-editor ol li.ql-indent-6::before {
  content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
  counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
  counter-increment: list-7;
}
@supports .ql-editor ol li.ql-indent-7::before {
  content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
  counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
  counter-increment: list-8;
}
@supports .ql-editor ol li.ql-indent-8::before {
  content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
  counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
  counter-increment: list-9;
}
@supports .ql-editor ol li.ql-indent-9::before {
  content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 3em;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
  padding-left: 4.5em;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 3em;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
  padding-right: 4.5em;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 6em;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
  padding-left: 7.5em;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 6em;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
  padding-right: 7.5em;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 9em;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
  padding-left: 10.5em;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 9em;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
  padding-right: 10.5em;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 12em;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
  padding-left: 13.5em;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 12em;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
  padding-right: 13.5em;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 15em;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
  padding-left: 16.5em;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 15em;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
  padding-right: 16.5em;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 18em;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
  padding-left: 19.5em;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 18em;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
  padding-right: 19.5em;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 21em;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
  padding-left: 22.5em;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 21em;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
  padding-right: 22.5em;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 24em;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
  padding-left: 25.5em;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 24em;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
  padding-right: 25.5em;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 27em;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
  padding-left: 28.5em;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 27em;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
  padding-right: 28.5em;
}
.ql-editor .ql-video {
  display: block;
  max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
  margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
  margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
  background-color: #000;
}
.ql-editor .ql-bg-red {
  background-color: #e60000;
}
.ql-editor .ql-bg-orange {
  background-color: #f90;
}
.ql-editor .ql-bg-yellow {
  background-color: #ff0;
}
.ql-editor .ql-bg-green {
  background-color: #008a00;
}
.ql-editor .ql-bg-blue {
  background-color: #06c;
}
.ql-editor .ql-bg-purple {
  background-color: #93f;
}
.ql-editor .ql-color-white {
  color: #fff;
}
.ql-editor .ql-color-red {
  color: #e60000;
}
.ql-editor .ql-color-orange {
  color: #f90;
}
.ql-editor .ql-color-yellow {
  color: #ff0;
}
.ql-editor .ql-color-green {
  color: #008a00;
}
.ql-editor .ql-color-blue {
  color: #06c;
}
.ql-editor .ql-color-purple {
  color: #93f;
}
.ql-editor .ql-font-serif {
  font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
  font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
  font-size: 0.75em;
}
.ql-editor .ql-size-large {
  font-size: 1.5em;
}
.ql-editor .ql-size-huge {
  font-size: 2.5em;
}
.ql-editor .ql-direction-rtl {
  direction: rtl;
  text-align: inherit;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
@supports .ql-editor.ql-blank::before {
  color: rgba(0,0,0,0.6);
  content: attr(data-placeholder);
  font-style: italic;
  left: 15px;
  pointer-events: none;
  position: absolute;
  right: 15px;
}
`;

export const styleHtmlTest = {
  ql_container: {
    boxSizing: "border-box",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "13px",
    height: "100%",
    margin: "0px",
    position: "relative",
  },
  ql_container_ql_disabled__ql_tooltip: {
    visibility: "hidden",
  },
  ql_clipboard: {
    left: "-100000px",
    height: "1px",
    overflowY: "hidden",
    position: "absolute",
    top: "50%",
  },
  ql_clipboard_p: {
    margin: "0",
    padding: "0",
  },
  ql_editor: {
    cursor: "text",
  },
  ql_editor_p: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_ol: {
    paddingLeft: "1.5em",
  },
  ql_editor_ul: {
    paddingLeft: "1.5em",
  },
  ql_editor_pre: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_blockquote: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_h1: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_h2: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_h3: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_h4: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_h5: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_h6: {
    margin: "0",
    padding: "0",
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_ul_data_checked_true: {
    pointerEvents: "none",
  },
  ql_editor_ul_data_checked_false: {
    pointerEvents: "none",
  },
  ql_editor_ol_li_not__ql_direction_rtl: {
    paddingLeft: "1.5em",
  },
  ql_editor_ul_li_not__ql_direction_rtl: {
    paddingLeft: "1.5em",
  },
  ql_editor_ol_li_ql_direction_rtl: {
    paddingRight: "1.5em",
  },
  ql_editor_ul_li_ql_direction_rtl: {
    paddingRight: "1.5em",
  },
  ql_editor_ol_li: {
    counterReset:
      "list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
    counterIncrement: "list-0",
  },
  ql_editor_ol_li__before: {
    content: "counter(list-0, decimal) '. '",
  },
  ql_editor_ol_li_ql_indent_1: {
    counterReset: "list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_1__before: {
    content: "counter(list-1, lower-alpha) '. '",
  },
  ql_editor_ol_li_ql_indent_2: {
    counterReset: "list-3 list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_2__before: {
    content: "counter(list-2, lower-roman) '. '",
  },
  ql_editor_ol_li_ql_indent_3: {
    counterReset: "list-4 list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_3__before: {
    content: "counter(list-3, decimal) '. '",
  },
  ql_editor_ol_li_ql_indent_4: {
    counterReset: "list-5 list-6 list-7 list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_4__before: {
    content: "counter(list-4, lower-alpha) '. '",
  },
  ql_editor_ol_li_ql_indent_5: {
    counterReset: "list-6 list-7 list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_5__before: {
    content: "counter(list-5, lower-roman) '. '",
  },
  ql_editor_ol_li_ql_indent_6: {
    counterReset: "list-7 list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_6__before: {
    content: "counter(list-6, decimal) '. '",
  },
  ql_editor_ol_li_ql_indent_7: {
    counterReset: "list-8 list-9",
  },
  ql_editor_ol_li_ql_indent_7__before: {
    content: "counter(list-7, lower-alpha) '. '",
  },
  ql_editor_ol_li_ql_indent_8: {
    counterReset: "list-9",
  },
  ql_editor_ol_li_ql_indent_8__before: {
    content: "counter(list-8, lower-roman) '. '",
  },
  ql_editor_ol_li_ql_indent_9: {
    counterIncrement: "list-9",
  },
  ql_editor_ol_li_ql_indent_9__before: {
    content: "counter(list-9, decimal) '. '",
  },
  ql_editor__ql_indent_1_not__ql_direction_rtl: {
    paddingLeft: "3em",
  },
  ql_editor_li_ql_indent_1_not__ql_direction_rtl: {
    paddingLeft: "4.5em",
  },
  ql_editor__ql_indent_1_ql_direction_rtl_ql_align_right: {
    paddingRight: "3em",
  },
  ql_editor_li_ql_indent_1_ql_direction_rtl_ql_align_right: {
    paddingRight: "4.5em",
  },
  ql_editor__ql_indent_2_not__ql_direction_rtl: {
    paddingLeft: "6em",
  },
  ql_editor_li_ql_indent_2_not__ql_direction_rtl: {
    paddingLeft: "7.5em",
  },
  ql_editor__ql_indent_2_ql_direction_rtl_ql_align_right: {
    paddingRight: "6em",
  },
  ql_editor_li_ql_indent_2_ql_direction_rtl_ql_align_right: {
    paddingRight: "7.5em",
  },
  ql_editor__ql_indent_3_not__ql_direction_rtl: {
    paddingLeft: "9em",
  },
  ql_editor_li_ql_indent_3_not__ql_direction_rtl: {
    paddingLeft: "10.5em",
  },
  ql_editor__ql_indent_3_ql_direction_rtl_ql_align_right: {
    paddingRight: "9em",
  },
  ql_editor_li_ql_indent_3_ql_direction_rtl_ql_align_right: {
    paddingRight: "10.5em",
  },
  ql_editor__ql_indent_4_not__ql_direction_rtl: {
    paddingLeft: "12em",
  },
  ql_editor_li_ql_indent_4_not__ql_direction_rtl: {
    paddingLeft: "13.5em",
  },
  ql_editor__ql_indent_4_ql_direction_rtl_ql_align_right: {
    paddingRight: "12em",
  },
  ql_editor_li_ql_indent_4_ql_direction_rtl_ql_align_right: {
    paddingRight: "13.5em",
  },
  ql_editor__ql_indent_5_not__ql_direction_rtl: {
    paddingLeft: "15em",
  },
  ql_editor_li_ql_indent_5_not__ql_direction_rtl: {
    paddingLeft: "16.5em",
  },
  ql_editor__ql_indent_5_ql_direction_rtl_ql_align_right: {
    paddingRight: "15em",
  },
  ql_editor_li_ql_indent_5_ql_direction_rtl_ql_align_right: {
    paddingRight: "16.5em",
  },
  ql_editor__ql_indent_6_not__ql_direction_rtl: {
    paddingLeft: "18em",
  },
  ql_editor_li_ql_indent_6_not__ql_direction_rtl: {
    paddingLeft: "19.5em",
  },
  ql_editor__ql_indent_6_ql_direction_rtl_ql_align_right: {
    paddingRight: "18em",
  },
  ql_editor_li_ql_indent_6_ql_direction_rtl_ql_align_right: {
    paddingRight: "19.5em",
  },
  ql_editor__ql_indent_7_not__ql_direction_rtl: {
    paddingLeft: "21em",
  },
  ql_editor_li_ql_indent_7_not__ql_direction_rtl: {
    paddingLeft: "22.5em",
  },
  ql_editor__ql_indent_7_ql_direction_rtl_ql_align_right: {
    paddingRight: "21em",
  },
  ql_editor_li_ql_indent_7_ql_direction_rtl_ql_align_right: {
    paddingRight: "22.5em",
  },
  ql_editor__ql_indent_8_not__ql_direction_rtl: {
    paddingLeft: "24em",
  },
  ql_editor_li_ql_indent_8_not__ql_direction_rtl: {
    paddingLeft: "25.5em",
  },
  ql_editor__ql_indent_8_ql_direction_rtl_ql_align_right: {
    paddingRight: "24em",
  },
  ql_editor_li_ql_indent_8_ql_direction_rtl_ql_align_right: {
    paddingRight: "25.5em",
  },
  ql_editor__ql_indent_9_not__ql_direction_rtl: {
    paddingLeft: "27em",
  },
  ql_editor_li_ql_indent_9_not__ql_direction_rtl: {
    paddingLeft: "28.5em",
  },
  ql_editor__ql_indent_9_ql_direction_rtl_ql_align_right: {
    paddingRight: "27em",
  },
  ql_editor_li_ql_indent_9_ql_direction_rtl_ql_align_right: {
    paddingRight: "28.5em",
  },
  ql_editor__ql_video: {
    display: "block",
    maxWidth: "100%",
  },
  ql_editor__ql_video_ql_align_center: {
    margin: "0 auto",
  },
  ql_editor__ql_video_ql_align_right: {
    margin: "0 0 0 auto",
  },
  ql_editor__ql_bg_black: {
    backgroundColor: "#000",
  },
  ql_editor__ql_bg_red: {
    backgroundColor: "#e60000",
  },
  ql_editor__ql_bg_orange: {
    backgroundColor: "#f90",
  },
  ql_editor__ql_bg_yellow: {
    backgroundColor: "#ff0",
  },
  ql_editor__ql_bg_green: {
    backgroundColor: "#008a00",
  },
  ql_editor__ql_bg_blue: {
    backgroundColor: "#06c",
  },
  ql_editor__ql_bg_purple: {
    backgroundColor: "#93f",
  },
  ql_editor__ql_color_white: {
    color: "#fff",
  },
  ql_editor__ql_color_red: {
    color: "#e60000",
  },
  ql_editor__ql_color_orange: {
    color: "#f90",
  },
  ql_editor__ql_color_yellow: {
    color: "#ff0",
  },
  ql_editor__ql_color_green: {
    color: "#008a00",
  },
  ql_editor__ql_color_blue: {
    color: "#06c",
  },
  ql_editor__ql_color_purple: {
    color: "#93f",
  },
  ql_editor__ql_font_serif: {
    fontFamily: "Georgia, Times New Roman, serif",
  },
  ql_editor__ql_font_monospace: {
    fontFamily: "Monaco, Courier New, monospace",
  },
  ql_editor__ql_size_small: {
    fontSize: "0.75em",
  },
  ql_editor__ql_size_large: {
    fontSize: "1.5em",
  },
  ql_editor__ql_size_huge: {
    fontSize: "2.5em",
  },
  ql_editor__ql_direction_rtl: {
    direction: "rtl",
    textAlign: "inherit",
  },
  ql_editor__ql_align_center: {
    textAlign: "center",
  },
  ql_editor__ql_align_justify: {
    textAlign: "justify",
  },
  ql_editor__ql_align_right: {
    textAlign: "right",
  },
  ql_editor_ql_blank__before: {
    color: "rgba(0,0,0,0.6)",
    content: "attr(data-placeholder)",
    fontStyle: "italic",
    left: "15px",
    pointerEvents: "none",
    position: "absolute",
    right: "15px",
  },
};

export const styleTest = `
h1 {
    font-size: 19px;
}
strong{
  font-weight: bold;
}
em{
  font-style: italic;
}
h2 {
    font-size: 13px;
}
p {
    font-size: 11px;
}

.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}

.ql-indent-1{
  padding-left: 3em;
}
`;

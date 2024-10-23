import { FONT_SIZE } from "../_constants/constants";

export default function EditorToolBar() {
  return (
    <div id="toolbar" className="ql-toolbar bg-white">
      <span className="ql-formats w-16">
        <select className="ql-size" defaultValue="16px">
          {FONT_SIZE.map((el, index) => (
            <option key={index} value={el}>
              {/* px을 제외한 숫자만 표시 */}
              {el.replace(/[^0-9]/g, "")}
            </option>
          ))}
        </select>
      </span>
      <span className="ql-formats">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-underline"></button>
        <button className="ql-strike"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-link"></button>
        <button className="ql-image"></button>
      </span>
      <span className="ql-formats">
        <button className="ql-list" value="ordered"></button>
        <button className="ql-list" value="bullet"></button>
      </span>
    </div>
  );
}

export function SidebarMenu({ selectedOption, handleOptionChange }) {
  return (
    <div className="sidebarMenu">
      <div className="poluttion">
        <ul>
          <h3>Pollution</h3>
          <div className="controls">
            <label>Select Data:</label>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="pollution1">déchets anarchiques</option>
              <option value="pollution2">déchets ménagers</option>
            </select>
          </div>
        </ul>
      </div>
      <div>
        <img src="../../public/histogramme.png" width="80%" alt="" />
      </div>
    </div>
  );
}

(function () {
  const container = document.getElementById("widget-container");
  if (!container) return;

  container.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center; margin-top: 20px;">
      <input type="text" placeholder="Enter value 1" style="padding: 8px;" />
      <input type="text" placeholder="Enter value 2" style="padding: 8px;" />
      <button style="padding: 8px 16px; cursor: pointer;">Submit</button>
    </div>
  `;
})();

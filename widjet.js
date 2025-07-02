(function () {
  const container = document.getElementById("widget-container");
  if (!container) return;

  container.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center; margin-top: 20px; padding: 30px; ">
      <input type="text" placeholder="Enter value 1" style="margin: 10px;" />
      <input type="text" placeholder="Enter value 2" style="margin: 10px;" />
      <button style="margin:10px;padding: 8px 16px; cursor: pointer; background-Color: #07a3eb; border-radius: 10px">Submit</button>
    </div>
  `;
})();

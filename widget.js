(function () {
  const container = document.getElementById("widget-container");
  if (!container) return;

  // Inject HTML
  container.innerHTML = `
    <div style="display: flex; gap: 10px; align-items: center; margin-top: 20px; padding: 30px;">
      <input type="text" placeholder="Enter value 1" style="margin: 10px;" />
      <input type="text" placeholder="Enter value 2" style="margin: 10px;" />
      <button id="my-submit-btn" style="margin:10px;padding: 8px 16px; cursor: pointer; background-color: #07a3eb; border-radius: 10px;">Submit</button>
    </div>
  `;

  // Define the function
  function handleSubmit() {
    console.log("hello");
  }

  // Attach event listener to the button
  const button = document.getElementById("my-submit-btn");
  if (button) {
    button.addEventListener("click", handleSubmit);
  }
})();

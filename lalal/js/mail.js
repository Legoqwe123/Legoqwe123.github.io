document.addEventListener("DOMContentLoaded", () => {
  const $form = document.querySelector("#contacts-form");

  $form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData($form);

    const response = await fetch("./smart.php", {
      method: "POST",
      body: "username=2",
    });

    console.log(data);
  });
});

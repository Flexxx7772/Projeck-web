async function uploadImage() {

    let file =
    document.getElementById("image").files[0];

    let formData = new FormData();

    formData.append("image", file);

    let response = await fetch(
    "/generate",
    {
        method: "POST",
        body: formData
    });

    let data = await response.json();

    document.getElementById("result")
    .innerHTML =
    `<textarea rows="20" cols="80">
${data.code}
</textarea>`;
}

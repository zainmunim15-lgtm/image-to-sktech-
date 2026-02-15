async function convert(){

const fileInput = document.getElementById("imageInput");
const loading = document.getElementById("loading");
const output = document.getElementById("output");
const downloadBtn = document.getElementById("downloadBtn");

if(!fileInput.files[0]){
    alert("Upload foto dulu!");
    return;
}

loading.style.display = "block";
output.style.display = "none";

let formData = new FormData();
formData.append("image", fileInput.files[0]);

const response = await fetch("https://api.deepai.org/api/toonify", {
    method: "POST",
    headers: {
        "api-key": "API_KEY_KAMU"
    },
    body: formData
});

const data = await response.json();

loading.style.display = "none";

output.src = data.output_url;
output.style.display = "block";

downloadBtn.href = data.output_url;
}
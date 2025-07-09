const qrCode = new QRCodeStyling({
  width: 256,
  height: 256,
  data: "",
  dotsOptions: {
    type: "rounded"
  },
  cornersSquareOptions: {
    type: "extra-rounded"
  }
});

const qrContainer = document.getElementById("qrcode");
const input = document.getElementById("text");
const btnGen = document.getElementById("generate");
const btnDwn = document.getElementById("download");

qrCode.append(qrContainer);
btnDwn.disabled = true;

btnGen.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) {
    alert("Please enter text or URL!");
    return;
  }
  qrCode.update({ data: text });
  btnDwn.disabled = false;
});

btnDwn.addEventListener("click", () => {
  qrCode.download({
    name: "qr-code",
    extension: "png"
  });
});

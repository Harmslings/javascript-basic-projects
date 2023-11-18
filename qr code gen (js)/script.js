let txtArea = document.getElementById('txtArea')
let qrImage = document.getElementsByClassName('qrImage')
let qrCode = document.getElementById('qrCode')

function generateQr(){
    if(txtArea.value.length>0){
        qrCode.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + txtArea.value;
        qrImage.classList.add ('showQr')
    } else{
        txtArea.classList.add ('error')
        setTimeout(() => {
            txtArea.classList.remove ('error')
        }, 1000);
    }
}























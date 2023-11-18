let imgBox = document.getElementById('imgBox')
let imgQr = document.getElementById('imgQr')
let qrText = document.getElementById('qrText')

function generateQr(){
    if(qrText.value.length>0){
        imgQr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
        imgBox.classList.add('show-img')
    } else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000)
    }
}










<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QR code</title>
</head>
<body>
    <div class="container">
        <p>QR code generator </p>
        <input type="text" placeholder="Enter Text or URL" id="qrText" required>

        <div id="imgBox">
            <img src="" id="imgQr" alt="">
        </div>
        <button onclick="generateQr()">Generate QR code</button>
    </div>

    <script src="script.js"></script>
</body>
</html>










* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: black;
}

.container {
    width: 400px;
    padding: 25px 25px;
    position: absolute;
    top :50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 10px;
}

.container p {
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 8px;
    text-transform: capitalize;
    text-align: center;
}
.container input::placeholder{
    text-align: center;
    font-size: larger;
}

.container input {
    width: 100%;
    height: 50px;
    border: 1px solid blue;
    outline: 0;
    padding: 10px;
    margin: 10px 0 20px;
    border-radius: 5px;
    font-size: larger;
}

.container button {
    width: 100%;
    height: 50px;
    background: #0096FF;
    font-size: larger;
    font-weight: bold;
    color: white;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin: 20px 0;
    font-weight: 500;
}

.container button:hover {
    background:	#3F00FF;
}

#imgBox {
    width: 200px;
    border-radius: 10px;
    max-height: 0;
    overflow: hidden;
}
#imgBox img {
    width: 100%;
    padding: 10px;
}
#imgBox.show-img{
    max-height: 300px;
    margin: 10px auto;
    border: 1px solid red;
}

.error {
    animation: shake 0.1s linear 10;
}
@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
































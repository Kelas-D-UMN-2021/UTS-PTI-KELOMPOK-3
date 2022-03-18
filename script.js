var nama;
$('.alert').hide();
$('#div_game').hide();
$(document).ready(function() {
    $("#play_button").click(function(nama){
        nama = $('#nama_pemain').val();
        $('#nama_pemain').val(nama);
        if(nama==""){
            nama="Player";
        }
        $('#salam').html(salam + " " + nama);
        $('#semester').html(sem);
        $("#div_intro").hide();
        $("footer").hide();
        $("#div_game").slideDown().show();
    });
});
var sem = 1;
var hari = 0;
const lapar = 20;
const stress = 20;
const capek = 20;

//AUDIO
var audio = new Audio('image/click.wav');
var maingame = new Audio('image/happy.mp3');
maingame.volume = 0.2;

function pause(element){
    var musik = document.getElementById(element);
    musik.pause();
}

//AUDIO END

//IMAGE
var charflag=0;
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'image/char1.png';

imgArray[1] = new Image();
imgArray[1].src = 'image/char3.png';

imgArray[2] = new Image();
imgArray[2].src = 'image/char4.png';

imgArray[3] = new Image();
imgArray[3].src = 'image/char5.png';

// imgArray[4] = new Image();
// imgArray[4].src = 'image/char5.png';

function nextimg(element)
{
    var img = document.getElementById(element);
    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) 
        {
            if(i == imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                document.getElementById('play_char').src = imgArray[0].src;
                charflag = 0;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            document.getElementById('play_char').src = imgArray[i+1].src;
            charflag = i + 1;
            break;
        }
    }
}
function previmg(element)
{
    var img = document.getElementById(element);
    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) 
        {
            if(i == imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                document.getElementById('play_char').src = imgArray[0].src;
                charflag = 0;
                break;
            }
            document.getElementById(element).src = imgArray[i-1].src;
            document.getElementById('play_char').src = imgArray[i-1].src;
            charflag = i - 1;
            break;
        }
    }
}
//IMAGE END

const today = new Date();
let hour = today.getHours();
let h = hour ;
let m = today.getMinutes();
let sec = m;

//UNTUK SALAM
if(h >= 0 && h <=11){
    salam = "Selamat Pagi, ";
    $("#div_game").css("background-image", "url('image/room_sore.png");
}
else if(h >=12 && h <=15){
    salam = "Selamat Siang, ";
    $("#div_game").css("background-image", "url('image/room_pagi.png");
}
else if(h >=16 && h <=18){
    salam = "Selamat Sore,";
    $("#div_game").css("background-image", "url('image/room_sore.png");
}
else if(h >=19 && h <= 23){
    salam = "Selamat Malam, ";
    $("#div_game").css("background-image", "url('image/room_malam.png");
}



function cekjam(h){
    nama = $('#nama_pemain').val();
        $('#nama_pemain').val(nama);
        if(nama==""){
            nama="Player";
        }
    if(h>=0 && h<=3){
        s = "Selamat Malam, ";
        $("#div_game").css("background-image", "url('image/room_malam.png");
        $('#salam').html(s + " " + nama);
    }
    else if(h >= 4 && h <=11){
        s = "Selamat Pagi, ";
        $("#div_game").css("background-image", "url('image/room_sore.png");
        $('#salam').html(s + " " + nama);
    }
    else if(h >=12 && h <=15){
        s = "Selamat Siang, ";
        $("#div_game").css("background-image", "url('image/room_pagi.png");
        $('#salam').html(s + " " + nama);
    }
    else if(h >=16 && h <=18){
        s = "Selamat Sore,";
        $("#div_game").css("background-image", "url('image/room_sore.png");
        $('#salam').html(s + " " + nama);
    }
    else if(h >=19 && h <= 23){
        s = "Selamat Malam, ";
        $("#div_game").css("background-image", "url('image/room_malam.png");
        $('#salam').html(s + " " + nama);
    }
}

// tombol makan

function memakan(element){
    document.getElementById('activity_makan').innerHTML = "-makan-";
    document.getElementById('activity_makan').disabled = true;
    document.getElementById('activity_tidur').disabled = true;
    document.getElementById('activity_main').disabled = true;
    document.getElementById('activity_belajar').disabled = true;
    var img = document.getElementById(element);
    if(img.src == imgArray[0].src){
        document.getElementById('play_char').src = 'image/makan/char1_makan.png';
        flag = 0;
    }
    if(img.src == imgArray[1].src){
        document.getElementById('play_char').src = 'image/makan/char3_makan.png';
        flag = 3;
    }
    if(img.src == imgArray[2].src){
        document.getElementById('play_char').src = 'image/makan/char4_makan.png';
        flag = 4;
    }
    if(img.src == imgArray[3].src){
        document.getElementById('play_char').src = 'image/makan/char5_makan.png';
        flag = 5;
    }
    setTimeout(function(){
        document.getElementById('activity_makan').disabled = false;
        document.getElementById('activity_main').disabled = false;
        document.getElementById('activity_tidur').disabled = false;
        document.getElementById('activity_belajar').disabled = false;
        document.getElementById('activity_makan').innerHTML = "Makan";
        if(flag == 0){
            document.getElementById('play_char').src = 'image/char1.png';
        }
        if(flag == 3){
            document.getElementById('play_char').src = 'image/char3.png';
        }
        if(flag == 4){
            document.getElementById('play_char').src = 'image/char4.png';
        }
        if(flag == 5){
            document.getElementById('play_char').src = 'image/char5.png';
        } 
        document.getElementById('sts_makan').value += 25;
        document.getElementById('sts_tidur').value += 5;
        document.getElementById('sts_main').value += 5;
        h += 1;
        startTime(h, m);
    }, 1000);
    return(false);
}

//tombol main

function memain(element){
    document.getElementById('activity_main').innerHTML = "-bermain-";
    document.getElementById('activity_makan').disabled = true;
    document.getElementById('activity_tidur').disabled = true;
    document.getElementById('activity_main').disabled = true;
    document.getElementById('activity_belajar').disabled = true;
    var img = document.getElementById(element);
    if(img.src == imgArray[0].src){
        document.getElementById('play_char').src = 'image/main/char1_main.png';
        flag = 0;
    }
    if(img.src == imgArray[1].src){
        document.getElementById('play_char').src = 'image/main/char3_main.png';
        flag = 3;
    }
    if(img.src == imgArray[2].src){
        document.getElementById('play_char').src = 'image/main/char4_main.png';
        flag = 4;
    }
    if(img.src == imgArray[3].src){
        document.getElementById('play_char').src = 'image/main/char5_main.png';
        flag = 5;
    }
    setTimeout(function(){
        document.getElementById('activity_makan').disabled = false;
        document.getElementById('activity_main').disabled = false;
        document.getElementById('activity_tidur').disabled = false;
        document.getElementById('activity_belajar').disabled = false;
        document.getElementById('activity_main').innerHTML = "Main";
        if(flag == 0){
            document.getElementById('play_char').src = 'image/char1.png';
        }
        if(flag == 3){
            document.getElementById('play_char').src = 'image/char3.png';
        }
        if(flag == 4){
            document.getElementById('play_char').src = 'image/char4.png';
        }
        if(flag == 5){
            document.getElementById('play_char').src = 'image/char5.png';
        } 
        document.getElementById('sts_main').value += 20;
        document.getElementById('sts_tidur').value -= 20;
        document.getElementById('sts_makan').value -= 10;
        h += 1;
        startTime(h, m);
    }, 1000);
    
}

//tombol tidur
function mentidur(element){
    document.getElementById('activity_tidur').innerHTML = "-tertidur-";
    document.getElementById('activity_makan').disabled = true;
    document.getElementById('activity_tidur').disabled = true;
    document.getElementById('activity_main').disabled = true;
    document.getElementById('activity_belajar').disabled = true;
    var img = document.getElementById(element);
    if(img.src == imgArray[0].src){
        document.getElementById('play_char').src = 'image/tidur/char1_tidur.png';
        flag = 0;
    }
    if(img.src == imgArray[1].src){
        document.getElementById('play_char').src = 'image/tidur/char3_tidur.png';
        flag = 3;
    }
    if(img.src == imgArray[2].src){
        document.getElementById('play_char').src = 'image/tidur/char4_tidur.png';
        flag = 4;
    }
    if(img.src == imgArray[3].src){
        document.getElementById('play_char').src = 'image/tidur/char5_tidur.png';
        flag = 5;
    }
    setTimeout(function(){
        document.getElementById('activity_makan').disabled = false;
        document.getElementById('activity_main').disabled = false;
        document.getElementById('activity_tidur').disabled = false;
        document.getElementById('activity_belajar').disabled = false;
        document.getElementById('activity_tidur').innerHTML = "Tidur";
        if(flag == 0){
            document.getElementById('play_char').src = 'image/char1.png';
        }
        if(flag == 3){
            document.getElementById('play_char').src = 'image/char3.png';
        }
        if(flag == 4){
            document.getElementById('play_char').src = 'image/char4.png';
        }
        if(flag == 5){
            document.getElementById('play_char').src = 'image/char5.png';
        } 
        document.getElementById('sts_tidur').value += 30;
        document.getElementById('sts_main').value += 5;
        document.getElementById('sts_makan').value -= 5;
        h += 4;
        startTime(h, m);
    }, 1000);
}


//Tombol Belajar
function membelajar(element){
    document.getElementById('activity_belajar').innerHTML = "-belajar-";
    document.getElementById('activity_makan').disabled = true;
    document.getElementById('activity_tidur').disabled = true;
    document.getElementById('activity_main').disabled = true;
    document.getElementById('activity_belajar').disabled = true;
    var img = document.getElementById(element);
    if(img.src == imgArray[0].src){
        document.getElementById('play_char').src = 'image/belajar/char1_belajar.png';
        flag = 0;
    }
    if(img.src == imgArray[1].src){
        document.getElementById('play_char').src = 'image/belajar/char3_belajar.png';
        flag = 3;
    }
    if(img.src == imgArray[2].src){
        document.getElementById('play_char').src = 'image/belajar/char4_belajar.png';
        flag = 4;
    }
    if(img.src == imgArray[3].src){
        document.getElementById('play_char').src = 'image/belajar/char5_belajar.png';
        flag = 5;
    }
    setTimeout(function(){
        document.getElementById('activity_makan').disabled = false;
        document.getElementById('activity_main').disabled = false;
        document.getElementById('activity_tidur').disabled = false;
        document.getElementById('activity_belajar').disabled = false;
        document.getElementById('activity_belajar').innerHTML = "Belajar";
        if(flag == 0){
            document.getElementById('play_char').src = 'image/char1.png';
        }
        if(flag == 3){
            document.getElementById('play_char').src = 'image/char3.png';
        }
        if(flag == 4){
            document.getElementById('play_char').src = 'image/char4.png';
        }
        if(flag == 5){
            document.getElementById('play_char').src = 'image/char5.png';
        } 
        document.getElementById('sts_belajar').value += 30;
        document.getElementById('sts_main').value -= 10;
        document.getElementById('sts_tidur').value -= 15;
        document.getElementById('sts_makan').value -= 10;
        h += 4;
        startTime(h, m);
    }, 1000);
}


function mulai() {
    const element1 = document.getElementById("sts_makan");
    const element2 = document.getElementById("sts_main");
    const element3 = document.getElementById("sts_tidur"); 
    const id = setInterval(frame, 3000);
    function frame() {
        let width1 = document.getElementById("sts_makan").value;
        let width2 = document.getElementById("sts_main").value;
        let width3 = document.getElementById("sts_tidur").value;
        width1 = width1 - 2;
        width2 = width2 - 2;
        width3--;
        element1.value = width1;
        element2.value = width2;
        element3.value = width3;
    }
}
const bar_makan = document.getElementById("sts_makan");
const bar_main = document.getElementById("sts_main");
const bar_tidur = document.getElementById("sts_tidur"); 
const bar_belajar = document.getElementById('sts_belajar');

const time=setInterval(proses, 1000);
function proses(){
    nama = $('#nama_pemain').val();
        $('#nama_pemain').val(nama);
        if(nama==""){
            nama="Player";
        }
    if(h>=0 && h<=3){
        ss = "Selamat Malam, ";
        $("#div_game").css("background-image", "url('image/room_malam.png");
        $('#salam').html(ss + " " + nama);
    }
    else if(h >= 4 && h <=11){
        ss = "Selamat Pagi, ";
        $("#div_game").css("background-image", "url('image/room_sore.png");
        $('#salam').html(ss + " " + nama);
    }
    else if(h >=12 && h <=15){
        ss = "Selamat Siang, ";
        $("#div_game").css("background-image", "url('image/room_pagi.png");
        $('#salam').html(ss + " " + nama);
    }
    else if(h >=16 && h <=18){
        ss = "Selamat Sore,";
        $("#div_game").css("background-image", "url('image/room_sore.png");
        $('#salam').html(ss + " " + nama);
    }
    else if(h >=19 && h <= 23){
        ss = "Selamat Malam, ";
        $("#div_game").css("background-image", "url('image/room_malam.png");
        $('#salam').html(ss + " " + nama);
    }
    const today = new Date();
    let d = today.getSeconds();
    
    if(d >= 59 || d == 60){
        d = 0;
        h++;
    }
    if(h >24 || h==24){
        extra = h-24;
        h=extra-0;
        hari++;
    }
    if(d<10){d = '0' + d};
    document.getElementById('jam').innerHTML =+ h + ":" + d;
    if (bar_belajar.value >= 100){
        sem = sem + 1;
        bar_belajar.value = 0;
        hari = 0;
    }
    if(hari==3){
        alert("Kamu Telah dikeluarkan dari Universitas");
    }

    if (bar_makan.value <= lapar){
        document.getElementById("pesan").innerHTML = "KAMU HARUS MAKAN";
        setTimeout(function(){document.getElementById("pesan").innerHTML = ""},2000);
    }
    if (bar_tidur.value <= capek){
        document.getElementById("pesan").innerHTML = "KAMU HARUS TIDUR";
        setTimeout(function(){document.getElementById("pesan").innerHTML = ""},2000);
    }
    if(bar_main.value <= stress){
        document.getElementById("pesan").innerHTML = "KAMU MULAI DEPRESI";
        setTimeout(function(){document.getElementById("pesan").innerHTML = ""},2000);
    }

    if (bar_makan.value == 0 || bar_tidur.value == 0 || bar_main.value == 0){
        alert("GAME OVER! kamu tidak menjaga diri kamu dengan baik!");
        window.location = "index.html";
    }
    if(sem==7){
        clearInterval(time);
        alert("KAMU LULUS CUMLAUDE, Kamu terlalu jenius!");
        window.location = "index.html";
    }
    document.getElementById('semester').innerHTML=sem;
}
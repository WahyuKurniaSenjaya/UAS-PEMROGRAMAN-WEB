function proses(){
 
    // Deklarasi
    var jk=document.getElementById("jk").value;
    var up=document.getElementById("up").value;
    var a=document.getElementById("a").value;

    // menghitung Gaji karyawan
    var g=jk*up;
    document.getElementById("g").value=g;

    // menghitung Tunjangan anak 10%
    var ta=g*.1*a;
    document.getElementById("ta").value=ta;

    // menghitung Total Gaji
    var tg=g+ta;
    document.getElementById("tg").value=tg
}

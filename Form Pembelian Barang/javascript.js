function proses(){

    // deklarasi
    var pilihan=document.getElementById("pilihan").value;
    var jumlah=document.getElementById("jumlah").value;

    // Proses
    switch(pilihan){
        case "monitor":
        var hm=2000000;
        document.getElementById("harga").value=hm;
        break;

        case "hardisk":
        var hv=3000000;
        document.getElementById("harga").value=hv;
        break;

        case "memory":
        var hc=5000000;
        document.getElementById("harga").value=hv;
        break;

        default:
        break;
    }
    // deklarasi dibawah agar nilai harga berubah
    var harga=document.getElementById("harga").value;
    // menghitung Total
    var total=jumlah*harga
    document.getElementById("total").value=total;
}

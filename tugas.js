//METHOD PROCEDURE
function datadiri(nama, asal, suku) {
    console.log(`Nama Saya ${nama}, saya berasal dari ${asal} dan saya bersuku ${suku}`)
}
function kampus(asalkampus, jurusan) {
    console.log(`Saya sedang berkuliah di ${asalkampus} dan di Jurusan ${jurusan}`+"\n\n")
}
let nama = "Alrico",
    asal = "Kota Semarang",
    suku = "Jawa",
    asalkampus = "Universitas Dian Nuswantoro",
    jurusan = "Teknik Informatika"

datadiri(nama,asal,suku)
kampus(asalkampus,jurusan)

//METHOD FUNCTION
let x = 2,
y =4

//1
console.log("Jika X = 2 & y = 4, Maka")
function f(x){
    console.log("Hasil f(x) =  x^2")
    return x ** 2
}
var hasil = f(x)
console.log(hasil+"\n")
//2
function a(x,y){
    console.log("Hasil f(x) =  (x*2)+(y*2)")
    return(x*2)+(y*2)
}
var hasil1 = a(x,y)
console.log(hasil1+"\n")
//3
function b(x,y){
    console.log("Hasil f(x) =  (x*y)/2 ")
    return (x*y)/2
}
var hasil2 = b(x,y)
console.log(hasil2+"\n")
//4
function c(x,y){
    console.log("Hasil f(x) = x*y")
    return x*y
}
var hasil3 = c(x,y)
console.log(hasil3+"\n")

//5
function d(x){
    console.log("Hasil f(x) = 22/7 *2*x ")
    return 22/7*2*x
}
var hasil4 = d(x,y)
console.log(hasil4+"\n")
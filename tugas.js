//METHOD PROCEDURE
function datadiri(nama, asal, suku) {
    console.log(`Nama Saya ${nama}, saya berasal dari ${asal} dan saya bersuku ${suku}`)
}
function kampus(asalkampus, jurusan) {
    console.log(`Saya sedang berkuliah di ${asalkampus} dan di Jurusan ${jurusan}`)
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
function f(x){
    return x ** 2
}
const hasil = f(x)
console.log(hasil)
//2
function f(x,y){
    return(x*2)+(y*2)
}
const hasil1 = f(x,y)
console.log(hasil1)
//3
function f(x,y){
    return (x*y)/2
}
const hasil2 = f(x,y)
console.log(hasil2)
//4
function f(x,y){
    return x*y
}
const hasil3 = f(x,y)
console.log(hasil3)

//5
function f(x){
    return 22/7*2*x
}
const hasil4 = f(x,y)
console.log(hasil4)


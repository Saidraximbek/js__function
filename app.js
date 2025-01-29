// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin va ularning yig’indisini     qaytarib bersin.
// function sum(a,b){
//   return a+b;
// }
// console.log(sum(-2,-5));

// 2.Minutlarni butun son sifatida qabul qilib, uni sekundlarga o’girib beradigan funksiya yasang.
// function calc(minutes){
//     return minutes*60;
// }
// console.log(calc(2));

// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun sondan keyingi sonni qaytarsin.
// function integer(int){
//     return int+1;
// }

// console.log(integer(5.4));

// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
//  Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
// function yuza(a ,h){
//     return (a*h)/2;
// }

// console.log(yuza(4, 6));

// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb oling.
// function yosh(y) {
//     return y*365;
// }

// console.log(yosh(21));

// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana qismini yozing.
// kub(3) ➞ 27

// kub(5) ➞ 125

// kub(10) ➞ 1000
// function kub(c) {
//     return c**3;
// }

// console.log(kub(3));

// 7.Massivni ichidan birinchi elementini qaytaradigan funksiya yasang.
// function firstElement(arr){
//     return arr[0];
// }
// console.log(firstElement([25,87,69,41]));

// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
// function calc(a, b){
//     return a*b;
// }
// console.log(calc(5,6));

// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan funksiya yasang.
// function secund(hour){
//     return hour*3600;
// }
// console.log(secund(2));

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1
// function max(tomon1, tomon2){
//     return (tomon1+tomon2)-1
// }
// console.log(max(4,3));

// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan funksiya yasang.
// function qoldiq(son1,son2){
//     return son1%son2
// }
// console.log(qoldiq(18,14));

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab qaytaradigan funksiya yasang. Formula S = bo’yi * eni
// function yuza(boy, eni){
//     return boy*eni
// }
// console.log(yuza(4,5));

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi. ushbu funksiya “Something” stringiga " " bo’sh joy va “a” stringini birlashtirib qaytarsin.
// function stringQoshish(a){
//     return `My name is ${a}`
// }
// console.log(stringQoshish("Saidraxim"));

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ➞ 25

// kvadrat(9) ➞ 81

// kvadrat(100) ➞ 10000
// function kvadrat(son){
//     return son**2;
// }
// console.log(kvadrat(6));

// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.
// function boolean(raqam){
//     if(raqam<=0){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(boolean(5));

// 16.Funksiya ko’p  burchakli shaklning burchaklar sonini qabul qiladi. Natijada funksiya ushbu shaklning ichki burchaklar yig’indisini qaytarsin. Formula (n - 2) x 180
// function kichikBurchak(burchaklar) {
//     return (burchaklar-2)*180
// }
// console.log(kichikBurchak(8));

// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar sonini va
// 2-argument sifatida uch ochkolik gollar sonini qabul qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
// function basketbol(ochko2, ochko3){
//     return ochko2*2+ochko3*3;
// }
// console.log(basketbol(5,2));

// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq funksiya yasang.
// Namuna:
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"
// function stringAdd(str){
//     return `${str}Edabit`
// }
// console.log(stringAdd("Hello"));

// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya yasang.
// function num(son1, son2){
//     if(son1+son2<100){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(num(98,1));

// 20.Quyidagi namunalarni kuzatgan holda unga muvofiq keladigan funksiya yasang.
// Namuna:
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// function printArray(arr){
//     return [arr]
// }
// console.log(printArray(5));

// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari nechta ekanligini hisoblab qaytarsin.
// Bunda funksiya birinchi argument sifatida tovuqlar sonini, ikkinchi argument sifatida qo’ylarni va uchinchi argument sifatida sigirlarning sonini qabul qiladi.
// function oyoqlar(tovuq, qoy, sigir){
//     return tovuq*2+qoy*4+sigir*4
// }
// console.log(oyoqlar(5,5,2));

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga muvofiq keladigan funskiya yasang.
// Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ➞ false

// and(true, true) ➞ true

// and(false, true) ➞ false

// and(false, false) ➞ false
// function boolean(boolean1, boolean2){
//     return boolean1*boolean2
// }
// console.log(boolean(true,false));

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala qiymatning ma’lumot turi bir xil bo’lsin.
// function tengmi(son1,son2){
//     if(son1===son2){
//         return true
//     } else{
//         return false
//     }
// }
// console.log(tengmi("string", "string"));

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini qabul qiladi.
// 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta mag’lubiyat = 0 ochko hisoblanadi.
// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//       return yutishlar*3+duranglar*1+maglubiyatlar*0;
// }
// console.log(futbolOchko(3,1,6));

// 25.Funskiya soatlar va minutlarni argument sifatida qabul qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib ularning yig’indisini qaytarsin.
// function sekundlar(soat, minut) {
//       return soat*3600+minut*60;
// }
// console.log(sekundlar(1,59));

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ➞ false

// fun(9) ➞ false

// fun(7) ➞ true
// function notKvadrat(son){
//     if(Math.sqrt(son)%1==0){
//         return false
//     }else{
//         return true
//     }
// }

// console.log(notKvadrat(101));

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi jihatidan teng bo’lsa rost,
//  aks holda funkisya yolg’on qiymat qaytarsin.
// function tengMi(x, y) {
//       if(x===y){
//         return true
//       }else{
//         return false
//       }
// }
// console.log(tengMi('3','3'));

// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya boolean qiymatni stringga o’girib qaytarib bersin.
// function booleanToString(bool) {
//       return `"${bool}"`
// }
// console.log(booleanToString(true));
// console.log(typeof(booleanToString(true) ));

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki berilgan qiymatni qaytarsin.
// Namuna:

// const arrowFunc = (qiymat) => {
//     return qiymat
// }
// console.log(arrowFunc("5"));
// console.log(typeof(arrowFunc("5")));

// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu 1 sekundda necha marta ko’rinishlar soni aylanishi.
// Funksiya minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini qaytarsin.
// function frameSoni(minut, frame) {
//       return minut*60*frame
// }
// console.log(frameSoni(10, 25));

// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin.
// function calc(str) {
//     return eval(str)
// }
// console.log(calc("3+5*8+6+7/8+6"));

// 32.Shunday funksiya yasangki, unda 2ta butun son argument qilib beriladi.
// Agar ushbu sonlardan birontasi 10ga teng bo’lsa yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat qaytaradi. Aks hold yolg’on.
// function teng10(a,b) {
//       if(a==10 || b==10 || a+b==10){
//         return true
//       } else{
//         return false
//       }
// }

// console.log(teng10(5,4));

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi. Agar masofa funksiyaga argument sifatida berilsa,
// ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi keraglini funksiya qaytarib bersin.
// function kkerak(yol){
//     if(yol/10<100){
//         return "Benzin yetarli"
//     }else {
//         return `${Math.abs(100-yol/10)} qo'shimcha benzin quyish kerak`
//     }
// }
// console.log(kkerak(20000));

// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) ➞ 7

// fun(-1, 0) ➞ 0

// fun(1000, 400) ➞ 1000
// function katta(a,b){
//     if(a>b){
//         return a
//     }else {
//         return b
//     }
// }

// console.log(katta(4,-8));

// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin.
// function arr(x, y) {
//       return [x,y]
// }
// console.log(arr([4,5]));

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni
//  bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold yolg’on.
// function tengStrings(str1, str2) {
//       if(str1.length==str2.length){
//         return true
//       }else{
//         return false
//       }
// }
// console.log(tengStrings("he", "hi"));

// 37.Shunday funksiya yasangki, unga string argument qilib beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi, aks holda false.
// function boshStr(str) {
//       if(str.trim().length==0){
//         return true
//       }else{
//         return false
//       }
// }
// console.log(boshStr(" f"));

// 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true qaytarsin, aks holda false.
// function bolinsin5(son) {
//       if(son%5==0){
//         return true
//       }else{
//         return false
//       }
// }
// console.log(bolinsin5(20));

// 39.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true qaytarsin, aks holda false.
// function bolinsin100(son) {
//       if(son%100==0){
//         return true
//       }else{
//         return false
//       }
// }
// console.log(bolinsin100(200));

// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang va rekursiv funksiya ishlating.
let counter = 0;
function uzunlik(str) {
  let oxirgi = str.at(-1);
  for (let i = 0; i <= str.lastIndexOf(oxirgi); i++) {
    counter++;
  }
  console.log(counter);
}
uzunlik("Saidraxim");

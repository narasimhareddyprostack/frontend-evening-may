class Central {
    tax = 18
    get_Benifits() {
        console.log("Proving Good Benifits")
    }
}
class KA extends Central {
    tax = 24
    get_Benifits() {
        console.log("Providing More Benifits for attracting industries")
    }
}
class GOA extends Central { }
let s1 = new KA()
let s2 = new GOA()
console.log(s1.tax)  //24
console.log(s2.tax)  //18
s1.get_Benifits()    
s2.get_Benifits()
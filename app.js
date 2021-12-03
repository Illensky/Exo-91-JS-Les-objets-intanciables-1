function personne (prenom, nom, age, sexe) {
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.sexe = sexe;

    this.getInfo = function () {
        return "Prenom : " + this.prenom + ", nom : " + this.nom + ", age : " + this.age + ", sexe : " + this.sexe
    }

    this.setAgeSexe = function (age, sexe) {
        this.age = age;
        this.sexe = sexe;
    }
}

const jean = new personne("Jean", "Pastissier", 27, "Homme");
const toma = new personne("Toma", "Walle", 28, "Homme");

const perso1 = document.querySelector("#perso1").children
const perso2 = document.querySelector("#perso2").children

perso1[0].innerHTML = toma.prenom
perso1[1].innerHTML = toma.nom
perso1[2].innerHTML = toma.age
perso1[3].innerHTML = toma.sexe
perso1[4].innerHTML = toma.getInfo()
toma.setAgeSexe(32,"Femme")
perso1[5].innerHTML = toma.getInfo()

perso2[0].innerHTML = jean.prenom
perso2[1].innerHTML = jean.nom
perso2[2].innerHTML = jean.age
perso2[3].innerHTML = jean.sexe
perso2[4].innerHTML = jean.getInfo()
jean.setAgeSexe(21,"Hélicoptaire de combat ... on est en 2021 je m'identifie comme je veux tfassons")
perso2[5].innerHTML = jean.getInfo()
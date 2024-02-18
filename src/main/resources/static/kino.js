
let BillettArr=[] //Billetter array

function isEmpty(film,antall,fornavn,etternavn,telefon,epost){ //Checks if input are empty and displays message if they are.

  result=true;

  if (film=="Velg film her"){
    alert("Vennligst velg en film")
    return false
  }

  if (!antall){
    document.getElementById('tomtAntall').innerHTML = "Må skrive noe inn i antall";
    result=false;
  }
  else {
    document.getElementById('tomtAntall').innerHTML = "";
  }

  if (fornavn==""){
    document.getElementById('tomtFornavn').innerHTML = "Må skrive noe inn i fornavn";
    result=false;
  }
  else {
    document.getElementById('tomtFornavn').innerHTML = "";
  }

  if (etternavn==""){
    document.getElementById('tomtEtternavn').innerHTML = "Må skrive noe inn i etternavn";
    result=false;
  }
  else {
    document.getElementById('tomtEtternavn').innerHTML = "";
  }

  if (telefon==""){
    document.getElementById('tomTlf').innerHTML = "Må skrive noe inn i telefonnr";
    result=false;
  }
  else {
    document.getElementById('tomTlf').innerHTML = "";
  }

  if (epost==""){
    document.getElementById('tomEpost').innerHTML = "Må skrive noe inn i epost";
    result=false;
  }
  else {
    document.getElementById('tomEpost').innerHTML = "";
  }

  return result
}

function validateNavn(navn){ //Checks if name is valid
  return /^[a-zA-Z()]+$/.test(navn);
}

function validateTlf(tlf){ //Checks if tlf is valid
  return /^-?\d+$/.test(tlf) && tlf.length>=8;
}

function validateEmail(epost){

}

function validerInput(antall,fornavn,etternavn,telefon,epost){ //Checks if input is valid

  result=true;

  if (antall<1){
    document.getElementById('tomtAntall').innerHTML = "antall må være minst 1";
    result=false;
  }
  else {
    document.getElementById('tomtAntall').innerHTML = "";
  }

  if (!validateNavn(fornavn)){
    document.getElementById('tomtFornavn').innerHTML = "Skriv inn et gyldig fornavn";
    result=false;
  }
  else {
    document.getElementById('tomtFornavn').innerHTML = "";
  }

  if (!validateNavn(etternavn)){
    document.getElementById('tomtEtternavn').innerHTML = "Skriv inn et gyldig etternavn";
    result=false;
  }
  else {
    document.getElementById('tomtEtternavn').innerHTML = "";
  }

  if (!validateTlf(telefon)){
    document.getElementById('tomTlf').innerHTML = "Skriv inn et gyldig telefonnr";
    result=false;
  }
  else {
    document.getElementById('tomTlf').innerHTML = "";
  }

  return result
}

function clearField(){ // Clears all fields and sets film menu to default
  document.getElementById("film").selectedIndex=0;
  document.getElementById("antall").value="";
  document.getElementById("fornavn").value="";
  document.getElementById("etternavn").value="";
  document.getElementById("telefonnr").value="";
  document.getElementById("epost").value="";
}

function kjopBillett(){ //Function for buying billett

  //Reads content for all
  let film = document.getElementById("film").value;
  let antall = document.getElementById("antall").value;
  let fornavn = document.getElementById("fornavn").value;
  let etternavn = document.getElementById("etternavn").value;
  let telefon = document.getElementById("telefonnr").value;
  let epost = document.getElementById("epost").value;

  if (isEmpty(film,antall,fornavn,etternavn,telefon,epost)){ //Continues if input is not empty
    if (validerInput(antall,fornavn,etternavn,telefon,epost)){ //Continues if Input is valid
      let Billett=[] //Array for a single billett
      Billett.push("Film: " + film + ", ", antall+" billetter, ", "navn: " + fornavn, etternavn, "tlf: " + telefon, "epost: " + epost) //Pushes content to billett array
      BillettArr.push(Billett.join("  ")) //pushes billett to the array of billetter
      for (i=0;i>BillettArr.length;i++){

      }
      document.getElementById("billetter").innerHTML = BillettArr.join("<br/>"); //Prints billetter
      clearField()
    }
  }

  
}

function slettBillett(){ //Function for deleting billett
  BillettArr=[] //Empties array
  document.getElementById("billetter").innerHTML = BillettArr; //Wipes billetter from page
}
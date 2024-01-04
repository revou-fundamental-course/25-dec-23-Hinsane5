  function resetAngkaLuas() {
    // Reset the number input field by setting its value to an empty string
    document.getElementById("bar_tinggi").value = "";
    document.getElementById("bar_alas").value = "";
  }

  function resetAngkaKeliling(){
    document.getElementById("sisi_a").value = "";
    document.getElementById("sisi_b").value = "";
    document.getElementById("sisi_c").value = "";
  }

  function hitungluas(){
    var tinggi = parseFloat(document.getElementById("bar_tinggi").value);
    var alas = parseFloat(document.getElementById("bar_alas").value);

    var result = 0.5 * tinggi * alas;

    console.log("Luas segitaga :", result)
    document.getElementById("resultluas").innerHTML = "Luas Segitiga :" + " " + result;

    if(isNaN(tinggi)){
      tinggi.value = "";  
    }

    if(isNaN(alas)){
      alas.value = "";    
    }
  } 

  function hitungKeliling(){
    var sisiA = parseFloat(document.getElementById("sisi_a").value);
    var sisiB = parseFloat(document.getElementById("sisi_b").value);
    var sisiC = parseFloat(document.getElementById("sisi_c").value);

    var result = sisiA + sisiB + sisiC;

    console.log(result)
    document.getElementById("resultkeliling").innerHTML = "Keliling segitiga :" + " " + result;
  }

  function validateInput(input){
    input.value = input.value.replace(/[^0-9-]/g)
  }

  function tampilLayar (idTampilan){
    var hilanglayar = document.getElementsByClassName("section_part");
    for(var i = 0; i < hilanglayar.length; i++){
      hilanglayar[i].style.display = "none";
    }

    var tampilanId = document.getElementById(idTampilan);
    if(tampilanId){
      tampilanId.style.display = "block";
    }
  }
  
window.addEventListener("DOMContentLoaded", function() {

    Default_Value();

});
function Change_Character(){

    let Select =
        document.getElementById("Character_Select");

    let Type =
        Select.options[Select.selectedIndex].dataset.type;


    let Physical =
        document.querySelectorAll('[data-type="input-physical"]');

    let Magic =
        document.querySelectorAll('[data-type="input-magic"]');


    if(Type === "XWL"){
        Physical.forEach(function(element){
            element.style.display = "";
        });
        Magic.forEach(function(element){
            element.style.display = "";
        });
    }

    if(Type === "AERI"){
        Physical.forEach(function(element){
            element.style.display = "none";
        });
        Magic.forEach(function(element){
            element.style.display = "";
        });
    }

    if(Type === "physical"){

        Physical.forEach(function(element){

            element.style.display = "";

        });

        Magic.forEach(function(element){

            element.style.display = "none";

        });

    }


    else if(Type === "magic"){

        Physical.forEach(function(element){

            element.style.display = "none";

        });

        Magic.forEach(function(element){

            element.style.display = "";

        });

    }


    else if(Type === "hybrid"){

        Physical.forEach(function(element){

            element.style.display = "";

        });

        Magic.forEach(function(element){

            element.style.display = "";

        });

    }

}
function Start(){
    let Phys_Atk = Number(document.getElementById("Phys_Atk").value);
    let Phys_Atk2 = Number(document.getElementById("Phys_Atk2").value);
    let Magic_Atk = Number(document.getElementById("Magic_Atk").value);
    let Magic_Atk2 = Number(document.getElementById("Magic_Atk2").value);
    let Weapon_Base_Atk = Number(document.getElementById("Weapon_Base_Atk").value);
    let Phys_Crit = Number(document.getElementById("Phys_Crit").value);
    let Magic_Crit = Number(document.getElementById("Magic_Crit").value);
    let Aerial_Crit = Number(document.getElementById("Aerial_Crit").value);
    let Back_Crit = Number(document.getElementById("Back_Crit").value);
    let Chase_Crit = Number(document.getElementById("Chase_Crit").value);
    let Wake_Dmg = Number(document.getElementById("Wake_Dmg").value);
    let Aerial_Dmg = Number(document.getElementById("Aerial_Dmg").value);
    let Back_Dmg = Number(document.getElementById("Back_Dmg").value);
    let Chase_Dmg = Number(document.getElementById("Chase_Dmg").value);
    let Race_Dmg = Number(document.getElementById("Race_Dmg").value);
    let Crit_Resist = Number(document.getElementById("Crit_Resist").value);
    let Select = document.getElementById("Character_Select");
    let Character = Select.options[Select.selectedIndex].value;
        if(Character==="AERI"){
            Back_Crit *=1.15;
        }
        else if(Character==="XWL"){
            Aerial_Crit *=1.15;
        }
    let Percent_Phys_Atk = (Phys_Atk-Phys_Atk2)/1000;
    let Percent_Magic_Atk = (Magic_Atk-Magic_Atk2)/1000;
    let Base_Phys_Atk = (Phys_Atk-Weapon_Base_Atk)/Percent_Phys_Atk;
    let Base_Magic_Atk = (Magic_Atk-Weapon_Base_Atk)/Percent_Magic_Atk;
    let total_Phys_Crit = Phys_Crit+Aerial_Crit+Back_Crit+Chase_Crit-Crit_Resist;
    let total_Magic_Crit = Magic_Crit+Aerial_Crit+Back_Crit+Chase_Crit-Crit_Resist;
    let total_Dmg = Wake_Dmg+Aerial_Dmg+Back_Dmg+Chase_Dmg+Race_Dmg;
    
    let Percent_Phys_Atk_Ratio = (0.01/(Percent_Phys_Atk+1))*100;
    let Percent_Magic_Atk_Ratio = (0.01/(Percent_Magic_Atk+1))*100;
    let Base_Phys_Atk_Ratio = (100/Base_Phys_Atk)*100;
    let Base_Magic_Atk_Ratio = (100/Base_Magic_Atk)*100;
    let total_Phys_Crit_Ratio = (10/(total_Phys_Crit+100))*100;
    let total_Magic_Crit_Ratio = (10/(total_Magic_Crit+100))*100;
    let total_Dmg_Ratio = (10/(total_Dmg+100))*100;


    document.getElementById("Base_Phys_Atk").innerHTML = "基礎物理攻擊:" + (Base_Phys_Atk).toFixed(2);
    document.getElementById("Percent_Phys_Atk").innerHTML = "總物理攻擊力:" + (Percent_Phys_Atk).toFixed(2);
    document.getElementById("Base_Magic_Atk").innerHTML = "基礎魔法攻擊:" + (Base_Magic_Atk).toFixed(2);
    document.getElementById("Percent_Magic_Atk").innerHTML = "總魔法攻擊力:" + (Percent_Magic_Atk).toFixed(2);
    document.getElementById("Total_Phys_Crit").innerHTML = "物理暴傷:" + (total_Phys_Crit).toFixed(2);
    document.getElementById("Total_Magic_Crit").innerHTML = "魔法暴傷:" + (total_Magic_Crit).toFixed(2);
    document.getElementById("Total_Dmg").innerHTML = "總增傷:" + (total_Dmg).toFixed(2);
    document.getElementById("Percent_Phys_Atk_Ratio").innerHTML = "1%總物理攻擊提升:" + (Percent_Phys_Atk_Ratio).toFixed(4) + "%";
    document.getElementById("Percent_Magic_Atk_Ratio").innerHTML = "1%總魔法攻擊提升:" + (Percent_Magic_Atk_Ratio).toFixed(4) + "%";
    document.getElementById("Base_Phys_Atk_Ratio").innerHTML = "100點基礎物理攻擊提升:" + (Base_Phys_Atk_Ratio).toFixed(4) + "%";
    document.getElementById("Base_Magic_Atk_Ratio").innerHTML = "100點基礎魔法攻擊提升:" + (Base_Magic_Atk_Ratio).toFixed(4) + "%";
    document.getElementById("total_Phys_Crit_Ratio").innerHTML = "10%物理暴傷提升:" + (total_Phys_Crit_Ratio).toFixed(4) + "%";
    document.getElementById("total_Magic_Crit_Ratio").innerHTML = "10%魔法暴傷提升:" + (total_Magic_Crit_Ratio).toFixed(4) + "%";
    document.getElementById("total_Dmg_Ratio").innerHTML = "10%增傷提升:" + (total_Dmg_Ratio).toFixed(4) + "%";
}
 function Clear_Input(){
    Default_Value();
}
function Default_Value(){
    document.getElementById("Phys_Atk").value = 0;
    document.getElementById("Phys_Atk2").value = 0;
    document.getElementById("Magic_Atk").value = 0;
    document.getElementById("Magic_Atk2").value = 0;
    document.getElementById("Weapon_Base_Atk").value = 0;
    document.getElementById("Phys_Crit").value = 0;
    document.getElementById("Magic_Crit").value = 0;
    document.getElementById("Aerial_Crit").value = 0;
    document.getElementById("Back_Crit").value = 0;
    document.getElementById("Chase_Crit").value = 0;
    document.getElementById("Wake_Dmg").value = 0;
    document.getElementById("Aerial_Dmg").value = 0;
    document.getElementById("Back_Dmg").value = 0;
    document.getElementById("Chase_Dmg").value = 0;
    document.getElementById("Race_Dmg").value = 0;
    document.getElementById("Crit_Resist").value = 0;
}
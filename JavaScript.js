window.addEventListener("DOMContentLoaded", function() {

    Default_Value();

});
// function Change_Character(){

//     let Select =
//         document.getElementById("Character_Select");

//     let Type =
//         Select.options[Select.selectedIndex].dataset.type;


//     let Physical =
//         document.querySelectorAll('[data-type="input-physical"]');

//     let Magic =
//         document.querySelectorAll('[data-type="input-magic"]');


//     if(Type === "XWL"){
//         Physical.forEach(function(element){
//             element.style.display = "";
//         });
//         Magic.forEach(function(element){
//             element.style.display = "";
//         });
//     }

//     if(Type === "AERI"){
//         Physical.forEach(function(element){
//             element.style.display = "none";
//         });
//         Magic.forEach(function(element){
//             element.style.display = "";
//         });
//     }

//     if(Type === "physical"){

//         Physical.forEach(function(element){

//             element.style.display = "";

//         });

//         Magic.forEach(function(element){

//             element.style.display = "none";

//         });

//     }


//     else if(Type === "magic"){

//         Physical.forEach(function(element){

//             element.style.display = "none";

//         });

//         Magic.forEach(function(element){

//             element.style.display = "";

//         });

//     }


//     else if(Type === "hybrid"){

//         Physical.forEach(function(element){

//             element.style.display = "";

//         });

//         Magic.forEach(function(element){

//             element.style.display = "";

//         });

//     }

// }
// function Start(){

    // let Default_Buff =
    //     document.getElementById("Default_dungeon_checkbox").checked;

    // if(Default_Buff){

    //     // 有勾選預設 Buff
    //     // 直接計算
    //     Calculate();

    // }
    // else{

    //     // 沒有勾選
    //     // 打開 Buff 選擇視窗
    //     let modal =
    //         new bootstrap.Modal(
    //             document.getElementById("BuffModal")
    //         );

    //     modal.show();

    // }

// }
function Calculate(){
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
    // let Character = Select.options[Select.selectedIndex].value;
    //     if(Character==="AERI"){
    //         Back_Crit *=1.15;
    //     }
    //     else if(Character==="XWL"){
    //         Aerial_Crit *=1.15;
    //     }
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
    let Phy_Stats_1Eskill = (10000000000/Phys_Atk).toFixed(2)
    let Magic_Stats_1Eskill = (10000000000/Magic_Atk).toFixed(2)


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
    document.getElementById("Phy_Stats_1Eskill").innerHTML = "1E物理能力值等效技能倍率: " + Phy_Stats_1Eskill + "%";
    document.getElementById("Magic_Stats_1Eskill").innerHTML = "1E魔法能力值等效倍率: " + Magic_Stats_1Eskill + "%";

}
function Clear_Input(){
    Default_Value();
}

function Change_weapon(){

    let Weapon = document.getElementById("choose_weapon");
    let Weapon_Type = Weapon.options[Weapon.selectedIndex].dataset.type;
    let Upgrade = document.getElementById("choose_weapon_upgrade");
    let Upgrade_18 = Upgrade.querySelector('[data-upgrade="18"]');
    let Upgrade_22 = Upgrade.querySelector('[data-upgrade="22"]');
    let Whip_Box = document.getElementById("whip_layer_box");
    // =========================
    // 橘武器
    // =========================

    if(Weapon_Type === "Orange_weapon"){

        Upgrade_18.style.display = "";

        Upgrade_22.style.display = "none";

        // 如果原本選的是 +22
        // 自動改回 +18以下

        if(Upgrade.value === "+22_weapon"){

            Upgrade.value = "non_up_weapon";

        }

    }


    // =========================
    // 紅武器
    // =========================

    else if(Weapon_Type === "Red_weapon"){

        Upgrade_18.style.display = "";

        Upgrade_22.style.display = "";

    }


    // =========================
    // 沒有特殊武器
    // =========================

    else{

        Upgrade_18.style.display = "none";

        Upgrade_22.style.display = "none";

        Upgrade.value = "non_up_weapon";

    }


    // =========================
    // 龍鞭
    // =========================

    let Weapon_Value = Weapon.value;

    if(Weapon_Value === "O_Hecaton_A" || Weapon_Value === "R_Hecaton_A"){
        Whip_Box.style.display = "";
    }
    else{
        Whip_Box.style.display = "none";
    }

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
    // Change_Character();
    document.getElementById("choose_weapon").value = "non_value_weapon";
    document.getElementById("choose_weapon").Upgrade = "non_up_weapon";
    Change_weapon();
}
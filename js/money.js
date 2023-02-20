
function inputValueById(inputId){
    const FieldValue= document.getElementById(inputId);
    const FieldValueString=FieldValue.value ; 
    const input=parseFloat(FieldValueString);
    FieldValue.value='';
    return input;
}


document.getElementById('btn-calculator').addEventListener('click',function(){
    // console.log('click')

    //income
const income=inputValueById('input-income');
  //  console.log(income);

//expence
//food

const food=inputValueById('input-food');

// console.log(food);

//rent
const rent= inputValueById('input-rent');
// console.log(rent);

//cloth
const cloth= inputValueById('input-cloth');
// console.log(cloth);

const expenceField=document.getElementById('total-expence');
const balanceField=document.getElementById('balance');


const expenceTotal=food + rent +cloth;
const balanceTotal=income - expenceTotal;
// console.log(expenceTotal);
// console.log(balanceTotal);
expenceField.innerText=expenceTotal;
balanceField.innerText = balanceTotal;

})

//saving part
document.getElementById('btn_save').addEventListener('click',function(){
    
  const balanceField=document.getElementById('balance');
   const balanceFieldString= balanceField.innerText ;
   const balance=parseFloat(balanceFieldString);

  
    //save inputField
    const save= inputValueById('input-save');
    // console.log(save);
    
    const savingAmount=balance *  (save/100);
    // console.log(savingAmount);

    const savingAmountField=document.getElementById('saving-amount');
    savingAmountField.innerText=savingAmount;


    const remainingBalance=balance - savingAmount;
    // console.log(remainingBalance);
    const remainingBalanceField=document.getElementById('remaining-balance');
    remainingBalanceField.innerText=remainingBalance;

    })
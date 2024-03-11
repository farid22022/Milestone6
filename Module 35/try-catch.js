function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "Not allowed"
        }
        errorTag.innerHTML = ' ';
    }
    catch(err){
        console.log('Error :',err)
        errorTag.innerHTML='ERROR:'+err;
    }
    finally{
        console.log('Finally all done')
    }

    console.log(11111);
}
checkAge()
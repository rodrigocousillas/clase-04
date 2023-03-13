class Boton {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text=text
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        myApp.innerHTML += `<button> ${this.text}</button>`; // VAmos a escribir el html para que se 
        
    }
}



class input {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text=text
    }

    render(){
        let myApp = document.getElementById(this.parentID);

        myApp.innerHTML += `<input type='text' value=' ${this.text}' />`; // VAmos a escribir el html para que se 
        
    }
}

let miBoton=new Boton('placeHolder', 'mi primer boton')
miBoton.render();

let inputText=new input('placeHolder', 'valor inicial')
inputText.render();
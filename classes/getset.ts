// Getters and Setters
class Plant {
    private _species: string = 'default';
    
    set species(value: string){
        if(value.length > 3){
            this._species = value;
        }else{
            this._species = "default";
        }
    }   

    get species(){
        return this._species;
    }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "abcd";
console.log(plant.species);

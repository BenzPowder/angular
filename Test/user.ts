
export class User{
  
    // name: string;
    get name(){
        return this._name;
    }
    set name(value: string){
        // if(value){
        //     this._name = value;
        // } else{
        //     this._name = 'Someone';
        // }
        this._name = value ?
        value : 'Someone';
    }
    constructor( public _name: string) 
    {
        // this.name = name;
        console.log('I am created');
    }
    talk() {
        console.log(`I am ${this.name}`);
    }

}
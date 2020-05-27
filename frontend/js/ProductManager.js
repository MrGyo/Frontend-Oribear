class ProductManager {

    constructor(){
        this.teddies = [];
    }

    importTeddies(teddies) {
        this.teddies = teddies;
    }

    selectTeddy(id){
        return teddies.find(teddy => teddy._id == id);
    }
    
}



class ProductManager {

    constructor(){
        this.cameras = [];
    }

    importCameras(cameras) {
        this.cameras = cameras;
    }

    selectCamera(id){
        return cameras.find( camera => camera._id == id);
    }

}



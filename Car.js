AFRAME.registerComponent("car", {
    schema: {
        pos_x: { type: 'number', default: '0' },
        pos_y: { type: 'number', default: '0.2' },
        pos_z: { type: 'number', default: '-3.5' },
        rot_y: { type: 'number', default: '-90' },
        rot_x: { type: 'number', default: '0' },
        rot_z: { type: 'number', default: '0' },
        counter : {type : "number", default :"0" }
    },
    init: function () {
        this.el.setAttribute("position", {
            x: this.data.pos_x, y: this.data.pos_y, z: this.data.pos_z,
        })

        this.el.setAttribute("rotation", {
            x: this.data.rot_x, y: this.data.rot_y, z: this.data.rot_z,
        })
        
    },
    update : function(){
        window.addEventListener("click",e=>{
            this.data.counter = this.data.counter + 1;
            console.log(this.data.counter)

            if(this.data.counter === 0){
                const rotation = {x :0, y: -90 , z : 0}
                this.el.setAttribute("rotation",{x :0, y: -90 , z : 0})
                console.log("hellp")
            }
            else if(this.data.counter === 1){
                const rotation = {x :0, y: -190 , z : 0}
                this.el.setAttribute("rotation",rotation)
            }
            else if(this.data.counter === 2){
                const rotation = {x :0, y: -260 , z : 0}
                this.el.setAttribute("rotation",rotation)
               
            }

            else if(this.data.counter === 3){
                const rotation = {x :0, y: -330 , z : 0}
                this.el.setAttribute("rotation",rotation)
                this.data.counter = 0
            }
            
            
        })
    }

})

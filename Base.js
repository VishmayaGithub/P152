AFRAME.registerComponent("base",{
    schema: {
        radius : {type: 'number', default: '5'},
        height : {type: 'number', default: '0.06'}
      },
    init : function(){
        this.el.setAttribute("geometry",{
            primitive : "cylinder",
            radius : this.data.radius,
            height : this.data.height
        })

        this.el.setAttribute("material",{color : "#082c6c"})
    }  
})
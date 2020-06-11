<template>
    <div>
        <div id="MovingDiv" @mouseup="mouseUpDiv"
         @mousedown="mouseDownDiv" @mousemove="moveDiv">
            <p>X : {{divX}}</p>
            <p>Y : {{divY}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                clickState : false,
                divX: "0px",
                divY: "0px",
            }
        },
        methods:{
            mouseUpDiv(){
                this.clickState= false
            },
            mouseDownDiv(){
                this.clickState = true
            },
            moveDiv(e){
                if(this.clickState){
                    const div = document.querySelector("#MovingDiv");
                    div.style.left= e.clientX-50+"px"
                    div.style.top = e.clientY-50+"px"
                    this.divX = div.style.left;
                    this.divY = div.style.top;

                }
            }
        }
    }
</script>

<style scoped>
#MovingDiv{
    text-align: center;
    width:100px;
    height: 100px;
    background: rgb(182, 92, 255);
    border-radius: 20px;
    left: 0px;
    top: 0px;
    position: absolute;
    cursor: pointer;
    box-shadow: 0 0 0 5px rgb(248, 173, 255);
}
p{
    font-weight: 500;
}
</style>
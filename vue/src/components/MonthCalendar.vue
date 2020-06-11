<template>
    <div id="monthPicker">
        <select v-model="Year">
            <option v-for="year in 150" :key="year" :value="year+1900">
                {{year+1900}}년
            </option>
        </select>
        <select v-model="Month">
            <option v-for="month in 12" :key="month" :value="month">
                {{month}}월
            </option>
        </select>

        <div id="answer">{{getAnswer}}</div>

        <div id="calendar">
            <ul id="yearHeader">
                <li @click="prevYear" class="arrow material-icons">keyboard_arrow_left</li>
                <li>{{Year}}</li>
                <li @click="nextYear" class="arrow material-icons">keyboard_arrow_right</li>
            </ul>
            <ul id="monthBoard_ul">
                <li class="monthBoard_li" v-for="(month,index) in monthList" :key="index">
                    <button :value='month.value' @click="selectedMonth(index+1)" 
                    :class="Month!==index+1 ? 'monthBtn' : 'clickMonth'">
                    {{month.title}}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        computed:{
            getAnswer(){
                let answer =  this.Year + " - " + (this.Month < 10 ? "0"+this.Month : this.Month)
                return answer
            }
        },

        data(){
            return{
                Year: new Date().getFullYear(),
                Month: new Date().getMonth(),
                monthList : [
                    {
                        title:'1 월',
                        value:1,
                    },
                    {
                        title:'2 월',
                        value:2,
                    },
                    {
                        title:'3 월',
                        value:3,
                    },
                    {
                        title:'4 월',
                        value:4,
                    },
                    {
                        title:'5 월',
                        value:5,
                    },
                    {
                        title:'6 월',
                        value:6,
                    },
                    {
                        title:'7 월',
                        value:7,
                    },
                    {
                        title:'8 월',
                        value:8,
                    },
                    {
                        title:'9 월',
                        value:9,
                    },
                    {
                        title:'10 월',
                        value:10,
                    },
                    {
                        title:'11 월',
                        value:11,
                    },
                    {
                        title:'12 월',
                        value:12,
                    },

                ],
            }
        },

        methods:{
            nextYear(){
                this.Year+=1;
            },
            prevYear(){
                this.Year-=1;
            },
            selectedMonth(idx){
                this.Month = idx;
            }
        }
    }
</script>

<style scoped>
#monthPicker{
    margin-top: 30px;
    text-align: center;
}
#calendar{
    width: 300px;
    height: 250px;
    background: rgb(255, 218, 203);
    color: white;
    border-radius: 20px;
    margin: auto;
}
#yearHeader{
    display: flex;
    justify-content: space-between;
    height: 55px;
    background-color: rgb(255, 155, 115);
    border-radius: 20px 20px 0 0;
    font-weight: bold;
    font-size: 22px;
    padding: 0 10px 0 10px;
}
.arrow{
    cursor: pointer;
}
#monthBoard_ul{
    margin-top: 10px;
}
.monthBoard_li{
    display: inline-block;
}

.monthBtn{
    width: 100px;
    height: 40px;
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    color: rgb(54, 54, 54);
}
.clickMonth{
    width: 100px;
    height: 40px;
    border: none;
    background: transparent;
    font-weight: 500;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    color: rgb(54, 54, 54);
    border: 2px solid white;
    border-radius: 7px;
}
#answer{
    text-align: center;
    border: none;
    font-size: 30px;
    font-weight: bold;
}
ul{
    padding: 0;
    margin: 0;
}
li{
    list-style: none;
    margin-top: auto;
    margin-bottom: auto;
}
select{
    width: 100px;
    font-size: 20px;
    font-weight: 500;
}
</style>
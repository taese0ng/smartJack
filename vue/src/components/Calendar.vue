<template>
    <div class="calendar">
        <div id="solution">Select Date : {{selectDate}} </div>
        <SingleDatePicker @selectDate="selectedDate" class="singleDatePicker"/>
    </div>
</template>

<script>
import SingleDatePicker from 'vue-single-date-picker';
export default {
    data(){
        return{
            selectDate: "notSelect"
        }
    },
    components:{
        SingleDatePicker
    },
    methods:{
        selectedDate(props){
            this.selectDate=
            props.year+"-"+
            `${props.month < 10 ? "0"+props.month : props.month }`+"-"+
            `${props.date < 10 ? "0"+props.date : props.date }`
        }
    }
}
</script>

<style scoped>
@import '~vue-single-date-picker/dist/vue-single-date-picker.css';
.calendar{
    text-align: center;
}
#solution{
    font-weight: bold;
    font-size: 1.5rem;
    margin: 30px 0 30px 0;
}
.singleDatePicker{
    margin: auto;
}
</style>
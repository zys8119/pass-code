<template>
    <div class="Home">
       <div class="card">
           <div class="cardContent">
               <div>{{dayStr}}</div>
               <div>{{timeStr}}</div>
           </div>
       </div>
        <img class="bj" :src="`./images/a.jpg`" alt="">
    </div>
</template>

<script setup lang="ts">
import dayjs,{Dayjs} from "dayjs"
const day = ref<Dayjs>(dayjs())
const dayStr = computed(()=>(day.value as Dayjs).format("MM月DD日"))
const timeStr = computed(()=>(day.value as Dayjs).format("HH:mm:ss"))
onMounted(()=>{
    setInterval(()=>{
        day.value = dayjs()
    },1000)
})
</script>

<style scoped lang="less">
.Home {
    .card{
        background-color: #01a95b;
        padding: 0 15px;
        margin-bottom: 30px;
        .cardContent{
            background-color: #ffffff;
            transform: translateY(12px);
            border-radius: 5px;
            box-shadow: 0 0 10px #d2d2d2;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 3px;
            padding: 15px 0;
            div{
                color: #01a95b;
                font-family:黑体, 微软雅黑;
                font-weight: bold;
                &:nth-child(1){
                    font-size: 28px;
                }
                &:nth-child(2){
                    font-size: 49px;
                }
            }
        }
    }
    .bj{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        opacity: 0.1;
        transform: translateY(-80px);
    }
}
</style>
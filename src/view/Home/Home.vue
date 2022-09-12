<template>
    <div class="Home" ref="el">
        <div class="card">
            <div class="cardContent">
                <div>{{ dayStr }}</div>
                <div>{{ timeStr }}</div>
                <div>已扫码 <span></span></div>
            </div>
        </div>
        <div class="centerBox">
            <div class="centerBoxContent">
                <div class="_top">{{user_name}} <span @click="show = !show">{{show ? '隐藏' : '显示'}}</span> </div>
                <div class="_unit_name">{{userInfo.unit_name}}</div>
                <div class="_qr_code">
                    <div class="_left">
                        <div>
                            <canvas ref="canvas"></canvas>
                        </div>
                        <div>宁波健康码</div>
                        <div>绿码：健康状态为低风险</div>
                    </div>
                    <div class="_right" @click="goxck">
                        <div>疫情重点地区核验</div>
                        <div>查看7天是否到过疫情重点地区</div>
                        <div>
                            <div>
                                立即查看
                                <svg t="1662737611470" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2368" width="200" height="200"><path d="M724 511.4L361 947.6c-12.2 14.6-33.9 16.6-48.5 4.4-14.6-12.2-16.6-33.9-4.4-48.5l326.2-392-326.3-391c-12.2-14.6-10.2-36.3 4.4-48.5 14.6-12.2 36.3-10.2 48.5 4.4l363.1 435z" p-id="2369"></path></svg>
                            </div>
                            <div>行程卡详情</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footerCpntent">
                <div>
                    <div class="_title">
                        <div class="icon">
                            <svg t="1662739892246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3265" width="200" height="200"><path d="M964.693333 229.333333a55.466667 55.466667 0 0 1 0 78.08L472.106667 794.666667a56.533333 56.533333 0 0 1-33.92 16h-7.466667a55.253333 55.253333 0 0 1-37.546667-16.213334L59.093333 464.853333a55.253333 55.253333 0 0 1 0-77.866666 55.893333 55.893333 0 0 1 78.933334 0l294.4 289.706666 453.333333-448a56.32 56.32 0 0 1 78.933333 0.64z" p-id="3266"></path></svg>
                        </div>
                        <span>核酸检测采样</span>
                    </div>
                    <div class="_number">
                        <div>24</div>
                        <div>小时内</div>
                    </div>
                    <div class="_result">阴性</div>
                    <div class="_result_msg">
                        <div>距离72小时剩余</div>
                        <div>20时26分</div>
                    </div>
                </div>
                <div>
                    <div class="_title">
                        <div class="icon">
                            <svg t="1662739892246" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3265" width="200" height="200"><path d="M964.693333 229.333333a55.466667 55.466667 0 0 1 0 78.08L472.106667 794.666667a56.533333 56.533333 0 0 1-33.92 16h-7.466667a55.253333 55.253333 0 0 1-37.546667-16.213334L59.093333 464.853333a55.253333 55.253333 0 0 1 0-77.866666 55.893333 55.893333 0 0 1 78.933334 0l294.4 289.706666 453.333333-448a56.32 56.32 0 0 1 78.933333 0.64z" p-id="3266"></path></svg>
                        </div>
                        <span>疫苗接种记录</span>
                    </div>
                    <div class="_number">已接种3针</div>
                    <div class="_result_msg">
                        <div>2022-02-07 00:00:00</div>
                        <div>潘火街道社区卫生服务中心</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_msg">
            <div>本服务由宁波市人民政府提供</div>
            <div>服务热线： 0574-12345</div>
        </div>
<!--        <img class="bj" :src="`./images/a.jpg`" alt="">-->
    </div>
</template>

<script setup lang="ts">
import dayjs, {Dayjs} from "dayjs"
import {toCanvas} from "qrcode"

const day = ref<Dayjs>(dayjs())
const dayStr = computed(() => (day.value as Dayjs).format("MM月DD日"))
const timeStr = computed(() => (day.value as Dayjs).format("HH:mm:ss"))
const userInfo = ref({
    name:"张云山",
    unit_name:"浙江省宁波市鄞州区邱隘镇引发幼儿园（东雅园）"
})
const show = ref(false)
const user_name = computed(()=>userInfo.value.name.replace(/(.)(.)(.*)/,`$1${show.value ? '$2' :'*'}$3`))
const canvas = ref()
onMounted(() => {
    setInterval(() => {
        day.value = dayjs()
    }, 1000)
    toCanvas(canvas.value,"https://h5.dingtalk.com/healthAct/index.html?qrCode=V2befdaeb652d32121d8650bb3297a7659#/result", {
        color:{
            dark:"#01a95b"
        },
        width:155,
        margin:2
    })
})
const el = ref()
const goxck = ()=>{
    window.open("weixin://app/wxd930ea5d5a258f4f/jumpWxa/?userName=gh_0ed5d82fd775")
}
</script>

<style scoped lang="less">
.Home {
    @borderRadius:10px;
    @boxShadow:0 0 10px #d2d2d2;
    @color:#ffffff;
    @themeColor:#01a95b;
    @unit:15px;
    font-family: 黑体, 微软雅黑;
    background-color: #f8f8f8;
    min-height: 100%;
    .footer_msg{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 10px;
        margin-bottom: 50px;
        &>div{
            font-size: 14px;
            font-weight: bold;
            color: #313131;
            &:nth-child(2){
                font-weight: initial;
                color: #313131;
            }
        }
    }
    .footer{
        padding:  0 15px;
        margin-top: 10px;
        .footerCpntent{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 10px;
            &>div{
                flex: 1;
                background-color: @color;
                box-shadow: @boxShadow;
                border-radius: @borderRadius;
                width: calc(50% - 20px);
                padding: 5px;
                margin-top: 10px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                ._title{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    gap: 5px;
                    margin-top: 5px;
                    .icon{
                        color: @themeColor;
                        fill: currentColor;
                        flex: initial;
                        width: 15px;
                        height: 15px;
                        background-color: #daece5;
                        border-radius: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        overflow: hidden;
                        font-size: 10px;
                        svg{
                            width: 1em;
                            height: 1em;
                        }
                    }
                    span{
                    }
                }
                &:nth-child(1),&:nth-child(2){
                    ._number{
                        background-color: @themeColor;
                        width: 90px;
                        height: 90px;
                        border-radius: 100%;
                        margin-top: 10px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        &>div{
                            color: #ffffff;
                            &:nth-child(1){
                                font-size: 46px;
                                line-height: 46px;
                            }
                            &:nth-child(2){
                                font-size: 16px;
                                font-weight: bold;
                            }
                        }
                    }
                    ._result{
                        margin-top: 5px;
                        color: @themeColor;
                    }
                    ._result_msg{
                        font-size: 14px;
                        margin-top: 10px;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                }
                &:nth-child(2){
                    ._number{
                        width: 100%;
                        border-radius: 0;
                        height: 120px;
                        background-color: transparent;
                        color: @themeColor;
                        font-size: 25px;
                        font-weight: bold;
                    }
                    ._result_msg{
                       div{
                           &:nth-child(2){
                               white-space: nowrap;
                               overflow: hidden;
                               text-overflow: ellipsis;
                               width: 85%;
                           }
                       }
                    }
                }
            }
        }
    }

    .centerBox{
        padding: 0 @unit;
        .centerBoxContent{
            padding: 10px @unit;
            border-radius: @borderRadius;
            background-color: @color;
            box-shadow: @boxShadow;
            ._top{
                font-size: 12px;
                letter-spacing: 2px;
                font-weight: bold;
                span{
                    color: #0083ff;
                    font-weight: initial;
                }
            }
            ._unit_name{
                text-align: center;
                margin: auto;
                font-weight: bold;
                font-size: 17px;
                padding: 5px 0 0 0;
            }
            ._qr_code{
                display: flex;
                align-items: flex-start;
                margin-top: 4px;
                gap: 15px;
                ._left{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    div{
                        &:nth-child(1){
                            @s:155px;
                            width: @s;
                            height: @s+10px;
                            border:5px solid @themeColor;
                            canvas{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        &:nth-child(2){
                            font-size: 14px;
                            margin-top: 10px;
                            font-weight: bold;
                        }
                        &:nth-child(3){
                            font-size: 12px;
                            margin-top: 2px;
                            color: @themeColor;
                        }
                    }
                }
                ._right{
                    font-size: 14px;
                    text-align: center;
                    div{
                        &:nth-child(1){
                            margin-top: 38px;
                            font-size: 15px;
                            font-weight: bold;
                        }
                        &:nth-child(2){
                            width: 85%;
                            margin: auto;
                            font-size: 14px;
                            margin-top: 8px;
                            line-height: 17px;
                            color: #818181;
                            font-weight: initial;
                        }
                        &:nth-child(3){
                            border-left:2px solid #ececec;
                            div{
                                &:nth-child(1){
                                    background-color: #469cf6;
                                    color: #ffffff;
                                    font-size: 12px;
                                    font-weight: initial;
                                    width: 70%;
                                    margin: auto;
                                    margin-top: 15px;
                                    line-height: 20px;
                                    border-radius: 20px;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    fill: currentColor;
                                    gap: 5px;
                                    svg{
                                        width: 1em;
                                        height: 1em;
                                    }
                                }
                                &:nth-child(2){
                                    color: @themeColor;
                                    width: 70%;
                                    margin: auto;
                                    margin-top: 55px;
                                    border:1px solid @themeColor;
                                    line-height: 30px;
                                    font-weight: bold;
                                    border-radius: 2px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .card {
        background-color: @themeColor;
        padding: 0 @unit;
        margin-bottom: @unit+10px;
        .cardContent {
            background-color: @color;
            transform: translateY(@unit);
            border-radius: @borderRadius;
            box-shadow: @boxShadow;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding: @unit 0 5px 0;

            div {
                color: @themeColor;
                font-weight: bold;
                position: relative;

                &:nth-child(1) {
                    font-size: 28px;
                }

                &:nth-child(2) {
                    font-size: 50px;
                    z-index: 1;
                    position: relative;
                }

                &:nth-child(3) {
                    @themeColor:#92c8a8;
                    color: @themeColor;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top:5px;
                    right: 5px;
                    border:4px solid @themeColor;
                    border-radius: 100%;
                    @s:80px;
                    width: @s;
                    height: @s;
                    transform: rotate(45deg);
                    font-size: 22px;
                    &:before{
                        content: "";
                        width: calc(100% - 10px);
                        height: calc(100% - 10px);
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        border:2px solid @themeColor;
                        border-radius: 100%;
                        z-index: -2;
                    }
                    &::after{
                        content: "";
                        width: calc(100%);
                        height: calc(100% - 30px);
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        background-color: #ffffff;
                        z-index: -1;
                    }
                    span{
                        border:4px solid @themeColor;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 100%;
                        height: 100%;
                        border-radius: 100%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
    }

    .bj {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        opacity: 0.2;
        transform: translateY(-80px);
        pointer-events: none;
    }
}
</style>

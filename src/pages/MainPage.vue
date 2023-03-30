<template>
    <div>Main page</div>
    <h2>User address: {{ $store.state.wallet.address }}</h2>
    <h2>User chain: {{ $store.state.wallet.chain }}</h2>
    <h2>User chain id: {{ $store.state.wallet.chainId }}</h2>
    <button @click="connectWallet">Connect wallet</button>

    <div>
        <input v-model="to" placeholder="To" />
    </div>
    <div>
        <input v-model="value" placeholder="Value" />
    </div>
    <button @click="sendTx">Send</button>

    <div>
        <button @click="deployContract">Deploy Contract</button>
    </div>

    <div>
        <input v-model="number" placeholder="Set x" />
    </div>
    <button @click="setToX">Set x</button>

    <div>
        <input v-model="string" placeholder="Set str" />
    </div>
    <button @click="setToStr">Set str</button>

    <div>
        <input v-model="numberForData" placeholder="Add Elem to data" />
    </div>
    <button @click="addElemToData">Add elem</button>

    <div>
        <button @click="getXPage">Get x</button>
        <button @click="getStrPage">Get str</button>
    </div>
    <div>
        <input v-model="index" placeholder="Enter index for data" />
        <button @click="getDataPage">Get data</button>
    </div>

    <div>
        <h2>X: {{ x }}</h2>
        <h2>String: {{ str }}</h2>
        <h2>Data: {{ data }}</h2>
    </div>

    <div>
        Tx hash:  <a :href="`/transactions/${$store.state.txHash}`">{{ $store.state.txHash }}</a>
    </div>


</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            to:"",
            value:"",
            number: 0,
            string: "",
            numberForData: 0,
            index: 0,

            x: 0,
            str: "",
            data: 0
        }
    },
    methods:{
        ...mapActions({
            connectWallet: "connectWallet",
            sendTransaction: "sendTransaction",
            deployContract: "deployContract",
            setX: "setX",
            setStr: "setStr",
            addElem: "addElem",
            getX: "getX",
            getStr: "getStr",
            getData: "getData"
        }),
        async sendTx(){
            await this.sendTransaction(this.to, this.value)
            this.to = ""
            this.value = ""
        },
        async setToX(){
            await this.setX(this.number)
        },
        async setToStr(){
            await this.setStr(this.string)
        },
        async addElemToData(){
            await this.addElem(this.numberForData)
        },

        async getXPage(){
            this.x = await this.getX()
        },

        async getStrPage(){
            this.str = await this.getStr()
        },

        async getDataPage(){
            this.data = await this.getData(this.index)
        }
    }
}
</script>
<style scoped>
</style>
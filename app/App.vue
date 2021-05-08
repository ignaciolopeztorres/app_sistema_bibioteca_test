<template>
    <div class="ui container">
        <div class="ui secondary menu">
            <a class="active item"> Home </a>
            <a class="item">project</a>
            <a class="item"> profile </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Buscar..">
                        <i class="search link icon"></i>
                    </div>
                </div>
                <a class="item"> login </a>
            </div>
        </div>
        <h1> {{ message }} </h1>
        <HelloWorld msg="asdasd" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
    name: 'App',
    components:{
        HelloWorld
    },
    data() {
        return{
            message: 'App Sistema Biblioteca'
        }
    }
}
</script>
<template>
    <div class="ui container">
        <div class="ui secondary menu">
            <a class="item"> Home </a>
            <a class="active item">project</a>
            <a class="item"> profile </a>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Buscar..">
                        <i class="search link icon"></i>
                    </div>
                </div>
            </div>
        </div>
        <h1> {{ message }} </h1>

    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return{
            message: 'App Sistema Biblioteca'
        }
    }
}
</script>
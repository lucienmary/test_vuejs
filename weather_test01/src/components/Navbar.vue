<template>
    <div class="">
        <ul>
            <li><router-link to="/">Config</router-link></li>
            <li><router-link to="/results">Résultats</router-link></li>
            <li><router-link to="/settings">Paramètres</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped lang="scss">
    ul{
        list-style: none;
        padding: inherit;
        li{

        }
    }
</style>

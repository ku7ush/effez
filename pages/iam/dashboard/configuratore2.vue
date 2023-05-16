<template>
    <div>
    Configuratore Step 2
    </div>

    <div>
        <button @click="back">Indietro</button>
        <button @click="next">Fine</button>
    </div>

</template>

<script>
export default {
    methods: {
        back() {
            this.$router.push('/iam/dashboard/configuratore')
        },
        next() {
            this.$router.push('/iam/dashboard')
        }
    }
}
</script>
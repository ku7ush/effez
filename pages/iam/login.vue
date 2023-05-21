<template>
  <div class="logincontainer">
    <iamLogin />
  </div>
</template>

<script>
import { connect } from '@/plugins/mssql'
import { parseConnectionUrl } from 'nodemailer/lib/shared';

async function fetchDataFromSql() {
  await connect()
  try {
    const result = await connection.query('Query di esempio')
    console.log('Query:', result)
  } catch (error) {
    console.error('Errore query:', error)
  }
}
</script>

<style scoped>
.logincontainer {
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}

</style>
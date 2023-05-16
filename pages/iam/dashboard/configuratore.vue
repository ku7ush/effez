<template>

    <div class="card">
        <h5 class="card-header">Crea un nuovo ordine</h5>
        <div class="card-body d-flex border mx-4 mt-4">
            <div class="col-6">
                <div class="px-4">
                    <h5 class="card-title">Anagrafica del cliente</h5>
                    <div class="form-container mt-4 mb-4">
                        <form>
                            <div class="form-floating">
                            <input type="text" id="nome" class="form-control" placeholder="Nome">
                            <label for="nome">Nome</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                            <input type="text" id="cognome" class="form-control" placeholder="Cognome">
                            <label for="cognome">Cognome</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                            <input type="text" id="indirizzo" class="form-control" placeholder="Indirizzo">
                            <label for="indirizzo">Indirizzo</label>
                            </div>
                            <br/>
                            <div class="form-floating">
                            <input type="text" id="fiscal" class="form-control" placeholder="Codice Fiscale">
                            <label for="fiscal">Codice Fiscale</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>    
        </div>
        <div class="card-body d-flex border mx-4 my-4 flex-wrap">
            <div class="col-12">
                <table class="table px-4">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Prodotto</th>
                    <th scope="col">Altezza</th>
                    <th scope="col">Larghezza</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Zanzariera</td>
                    <td>195</td>
                    <td>165</td>
                    <td><button class="btn btn-warning">Elimina</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
        <div class="card-body d-flex border mx-4 mb-4 flex-wrap">
            <div class="col-12">
                <div class="px-4">
                    <h5 class="card-title">Aggiungi un prodotto</h5>
                    <div class="form-container mt-4 mb-4">
                        <form class="d-flex">
                            <div class="col-5">
                                <div class="form-floating">
                                <input type="text" id="altezza" class="form-control" placeholder="Altezza">
                                <label for="altezza">Altezza</label>
                                </div>
                                <br/>
                                <div class="form-floating">
                                <input type="text" id="larghezza" class="form-control" placeholder="Larghezza">
                                <label for="larghezza">Larghezza</label>
                                </div>
                            </div>
                            <div class="col-2"></div>
                            <div class="col-5">
                                <div class="form-floating">
                                <input type="text" id="colore" class="form-control" placeholder="Colore">
                                <label for="colore">Colore</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br/>
                    <div class="d-flex justify-content-between align-items-center">
                        <button class="btn btn-primary invisible" @click="cancel">Annulla</button>
                        <button class="btn btn-primary" @click="next">Avanti</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    

</template>

<script>
export default {
    methods: {
        next() {
            this.$router.push('/iam/dashboard/configuratore2')
        },
        cancel() {
            this.$router.push('/iam/dashboard')
        }
    }
}
</script>
const PROXY_CONFIG=[
    {
        context: [
            '/buscarTipos',
            '/buscarNomeMedicamentos',
            '/buscarMedicamentosAnoMes',
            '/buscarMedicamentosCEAF',
            '/consolidadoValor',
            '/consolidadoTipoValorAno'
        ],
        target: "https://estoqueapi-o44p.onrender.com/",
        secure: false,
        changeOrigin: true,
        pathRewrite:{
            "^/":""
        }
    }
]

module.exports = PROXY_CONFIG;
class Nivell {
    constructor(preguntes){
        this.preguntes = preguntes;
        this.iniciarNivellInicial();
    }

    iniciarNivellInicial(){
        var oracio = "Quanta estona pot estar passant de tu el Balú?";
        var imatge = "https://cdn.royalcanin-weshare-online.io/TD9-7XoBRYZmsWpc-Lca/v3/bp-lot-2-beagle-couleur-human";
        var resposta1 = "Tot el dia";
        var resposta2 = "Fins que me'n canso i l'abandono";
        var resposta3 = "Balú cabron";
        var resposta4 ="Em dona igual si passa de mi, me'l estimo igual"
        var pregunta1 = new Pregunta(oracio, imatge, resposta1, resposta2, resposta3, resposta4);
    }
}
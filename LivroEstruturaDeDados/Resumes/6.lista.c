typedef struct elemento {
    char valor;
    struct elemento *proximo;
} Elemento;
    typedef struct lista {
    Elemento *inicio;
    int tamanho;
} Lista;
    Lista* iniciar() {
    Lista *l = malloc(sizeof(Lista));
    l->inicio = NULL;
    l->tamanho = 0;
    return l;
}

// ADD
void add(Lista *l, char caractere) {
    if (empty(l)) {
        Elemento *e = malloc(sizeof(Elemento)); 
        e->valor = caractere;
        e->proximo = NULL;
        l->inicio = e;
    } else {
        Elemento *e = malloc(sizeof(Elemento)); 
        e->valor = caractere;
        Elemento *antigo_inicio = l->inicio;
        l->inicio = e;
        e->proximo = antigo_inicio;
    }

l->tamanho = l->tamanho + 1;
}

// EMPTY
int empty(Lista *l){
    return l->tamanho == 0;
}

int empty(Lista *l){
    return l->inicio == NULL;
}

// ADD com posição
void add_pos(Lista *l, char caractere, int posicao) {
    if (empty(l)) { 
        printf("Lista vazia. Não é possivél adicionar!\n");
        return;
}
    if (posicao > l->tamanho || posicao <= 0) { 
        printf("Posição inválida!\n");
        return;
}
    if (posicao == 1) { 
        add(l, caractere);
        return;
}
    Elemento *e_atual = l->inicio; 
    Elemento *e_anterior;
    Elemento *e = malloc(sizeof(Elemento)); 
    e->valor = caractere;
    int i; 

    for (i = 1; i < posicao ; i++) {
        e_anterior = e_atual;
        e_atual = e_atual->proximo;
    }
    e_anterior->proximo = e; 
    e->proximo = e_atual;
    l->tamanho = l->tamanho + 1; 
}

// GET
char get(Lista *l, int posicao) {
    if (empty(l)) { 
        printf("Lista está vazia.\n");
        return '\0';
}
    if (posicao > l->tamanho || posicao <= 0) { 
        printf("Posição inválida!\n");
        return '\0';
}
    int i = 1; 
    Elemento *e = l->inicio;

    while (e->proximo != NULL) {
        if (i == posicao) {
        return e->valor;
} else {
    e = e->proximo;
    i++;
}}
    return '\0'; 
}

// SET
void set(Lista *l, char caractere, int posicao) {
    if (empty(l)) { 
        printf("Lista vazia. Set não permitido!\n");
        return;
    }
    if (posicao > l->tamanho || posicao <= 0) {
        printf("Posição inválida!\n");
        return;
    }

    int i = 1;
    Elemento *e = l->inicio;

    while (e->proximo != NULL) {
        if (i == posicao) {
        e->valor = caractere;
        return;
    } else {
        e = e->proximo;
        i++;
}}}

// DELETE
char delete(Lista *l, int posicao) {
    if (empty(l)) { 
        printf("Lista vazia. não há como deletar!\n");
        return '\0';
    }
    if (posicao > l->tamanho || posicao <= 0) { 
        printf("Posição inválida!\n");
        return '\0';
    }
    if (posicao == 1) { 
        Elemento *e = l->inicio;
        char caracter = e->valor;
        l->inicio = l->inicio->proximo;
        free(e);
        l->tamanho = l->tamanho - 1;

        return caracter;
    } else {
        Elemento *e_atual = l->inicio;
        Elemento *e_anterior;
        int i;
        for(i = 1; i < posicao ; i++){
        e_anterior = e_atual;
        e_atual = e_atual->proximo;
    }
        e_anterior->proximo = e_atual->proximo; 
        char caracter = e_atual->valor;
        free(e_atual);
        l->tamanho = l->tamanho - 1;

        return caracter;
    }
}        

// SIZE
int size(Lista *l){
    return l->tamanho;
}
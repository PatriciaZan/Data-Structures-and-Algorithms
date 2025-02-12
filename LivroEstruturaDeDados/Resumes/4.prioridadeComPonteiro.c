typedef struct elemento {
    char valor;
    int prioridade;
    struct elemento *proximo;
} Elemento;

void enqueue(Fila *f, char caractere, int prioridade) {
    Elemento *e = malloc(sizeof(Elemento));
    e->valor = caractere;
    e->prioridade = prioridade; 
    e->proximo = NULL;

    if (f->cabeca == NULL) { 
        f->cabeca = e;
        f->fim = e;
        f->tamanho = f->tamanho + 1;
    } else {
        if (e->prioridade > f->fim->prioridade) { 
        f->fim->proximo = e;
        f->fim = e;
        f->tamanho = f->tamanho + 1;
        return;
    }
    if (e->prioridade < f->cabeca->prioridade) { 
        e->proximo = f->cabeca;
        f->cabeca = e;
        f->tamanho = f->tamanho + 1;
        return;
}
    Elemento *controle = f->cabeca; 
    Elemento *anterior;

    while (controle->proximo != NULL) { 
        if (e->prioridade < controle->prioridade) { 
        e->proximo = controle;
        anterior->proximo = e;
        f->tamanho = f->tamanho + 1;
        return;
    } else { 
        anterior = controle;
        controle = controle->proximo;
    }
}
    free(anterior);
    free(controle);
    anterior = NULL;
    controle = NULL;
    }
}
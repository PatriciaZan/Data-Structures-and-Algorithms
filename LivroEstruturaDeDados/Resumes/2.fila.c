typedef struct elemento {
    char valor;
    struct elemento *proximo;

} Elemento;
    typedef struct fila {
    Elemento *cabeca;
    Elemento *fim;
    int tamanho;

} Fila;
    Fila* iniciar() {
    Fila *f = malloc(sizeof(Fila));
    f->cabeca = NULL;
    f->fim = NULL;
    f->tamanho = 0;
    return f;
}

// ENQUEUE
void enqueue(Fila *f, char caractere) { 
    Elemento *e = malloc(sizeof(Elemento)); 
    e->valor = caractere;
    e->proximo = NULL;

if (f->fim != NULL) { 
    f->fim->proximo = e;
} else {
    f->cabeca = e;
}

f->fim = e; 
f->tamanho = f->tamanho + 1; 
}

// SIZE
int size(Fila *f){
    return f->tamanho;
}

// HEAD
char head(Fila *f){
    return f->cabeca->valor;
}

// DEQUEUE
char dequeue(Fila *f) {
    Elemento *e;
    char caracter;

    if (!empty(f)) { 
        e = f->cabeca; 
        caracter = e->valor;
        f->cabeca = e->proximo; 

    if (empty(f)) { 
        f->fim = NULL;
    }
        f->tamanho = f->tamanho - 1; 
        free(e);
        return caracter; 
    } else {
        printf("Fila vazia.");
        return '\0';
}}

// EMPTY
int empty(Fila *f) {
    return f->tamanho == 0; // se está vazia retorn TRUE 1
}
    int empty(Fila *f) {
    return f->cabeca == null; /*I*/
}
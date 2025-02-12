typedef struct elemento {
    char valor;
    struct elemento *proximo;
} Elemento;
    typedef struct pilha {
    Elemento *topo;
    int tamanho;
} Pilha;
    Pilha* iniciar() {
    Pilha *p = malloc(sizeof(Pilha));
    p->topo = NULL;
    p->tamanho = 0;
    return p;
}

// PUSH
void push(Pilha *p, char caractere) { 
    Elemento *e = malloc(sizeof(Elemento)); 
    e->valor = caractere; 
    e->proximo = p->topo; 
    p->topo = e;
    p->tamanho = p->tamanho + 1;
}

//TOP
char top(Pilha *p) {
    if(empty(p)) { 
        printf("Pilha vazia!\n\n");
    return '\0';
    }
    return p->topo->valor;
}

// SIZE
int size(Pilha *p) {
    return p->tamanho;
}

// EMPTY
int empty(Pilha *p) {
    return p->tamanho == 0;
}

int empty(Pilha *p) {
    return p->topo == null;
}

// POP
char pop(Pilha *p){
    Elemento *e;
    char C;

    if(!empty(p)){
        e = p->top;
        c = e->valor;
        p ->topo = p->topo->proximo;

        p->tamanho = p->tamanho - 1;

        free(e);
        e = NULL;

        return c;
    }else{
        printf("A pilha está vazia. \n\n");
        return '\0';
    }
}
#define TAMANHO 8
int fila[TAMANHO];

int quantidade, cabeca, fim;

void iniciar() {
    quantidade = 0;
    cabeca = 0;
    fim = 0;
}

// ENQUEUE
void enqueue(char caractere) {
    if (!full()) { 
        fila[fim] = caractere; 
        fim++;
        quantidade++;

    if (fim == TAMANHO) { 
    fim = 0;
}} else {
    printf("Fila cheia.");
}}

// SIZE
int size(){
    return quantidade;
}

// HEAD
char head(){
    return fila[cabeça];
}

// DEQUEUE
char dequeue() {
    char caractere;

    if (!empty()) { /
        caractere = fila[cabeca]; 
        fila[cabeca] = '\0';
        cabeca++;
        quantidade--;
    if (cabeca == TAMANHO){ 
        cabeca = 0;
    }
    return caractere; 
    } else {
    printf("Fila vazia.");
    }
}    

// EMPTY
int empty(){
    return quantidade == 0;
}

// FULL
int full(){
    return quantidade == TAMANHO;
}
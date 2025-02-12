void iniciar() {
    quantidade = 0;
    cabeca, fim = -1;
}

void enqueue_head(char caractere) {
    if (full()) { 
    printf("Fila cheia!");

    } else {
        if (empty()) { 
            cabeca = 0;
            fim = 0;
    } else {
        if (cabeca == 0) { 
            cabeca = TAMANHO - 1;
    } else {
        cabeca = cabeca - 1;
    }
}

quantidade = quantidade + 1;
fila[cabeca] = caractere;
}}

char dequeue_fim() {
    char caractere;
    if (empty()) { /*I*/
    printf("Fila vazia!");
    return '\0';

    } else {
        caractere = fila[fim]; /*II*/
        fila[fim] = '\0';
            if (cabeca == fim) { /*III*/
                cabeca = -1;
                fim = -1;
        } else {
            if (fim == 0) { /*IV*/
                fim = TAMANHO - 1;
        } else {
                fim = fim + 1;
        }
    }

    quantidade = quantidade - 1;
    return caractere;
    }}
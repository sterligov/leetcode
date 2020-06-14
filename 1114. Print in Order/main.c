#include "stdio.h"
#include "stdlib.h"
#include "pthread.h"

typedef struct {
    // User defined data may be declared here.
    pthread_mutex_t *mu2;
    pthread_mutex_t *mu3;
} Foo;

Foo* fooCreate() {
    Foo* obj = (Foo*) malloc(sizeof(Foo));

    obj->mu2 = (pthread_mutex_t*) malloc(sizeof(pthread_mutex_t));
    pthread_mutex_init(obj->mu2, NULL);

    obj->mu3 = (pthread_mutex_t*) malloc(sizeof(pthread_mutex_t));
    pthread_mutex_init(obj->mu3, NULL);

    pthread_mutex_lock(obj->mu2);
    pthread_mutex_lock(obj->mu3);
    
    return obj;
}

void first(Foo* obj) {
    // printFirst() outputs "first". Do not change or remove this line.
    printFirst();
    
    pthread_mutex_unlock(obj->mu2);
}

void second(Foo* obj) {
    pthread_mutex_lock(obj->mu2);
    // printSecond() outputs "second". Do not change or remove this line.
    printSecond();

    pthread_mutex_unlock(obj->mu2);
    pthread_mutex_unlock(obj->mu3);
}

void third(Foo* obj) {
    pthread_mutex_lock(obj->mu3);
    // printThird() outputs "third". Do not change or remove this line.
    printThird();
    pthread_mutex_unlock(obj->mu3);
}

void fooFree(Foo* obj) {
    // User defined data may be cleaned up here.
    pthread_mutex_destroy(obj->mu2);
    pthread_mutex_destroy(obj->mu3);
    free(obj->mu2);
    free(obj->mu3);
    free(obj);
}
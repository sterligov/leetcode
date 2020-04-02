import threading

class ZeroEvenOdd:
    def __init__(self, n):        
        self.n = n
        self.zero_mutex = threading.Lock()
        self.even_mutex = threading.Lock()
        self.odd_mutex = threading.Lock()
        self.even_mutex.acquire()
        self.odd_mutex.acquire()
        
        
	# printNumber(x) outputs "x", where x is an integer.
    def zero(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n + 1):
            self.zero_mutex.acquire()
            printNumber(0)
            if i % 2 == 0:
                self.even_mutex.release()
            else:
                self.odd_mutex.release()
        
        
    def even(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(2, self.n + 1, 2):
            self.even_mutex.acquire()
            printNumber(i)
            self.zero_mutex.release()
        
        
    def odd(self, printNumber: 'Callable[[int], None]') -> None:
        for i in range(1, self.n + 1, 2):
            self.odd_mutex.acquire()
            printNumber(i)
            self.zero_mutex.release()
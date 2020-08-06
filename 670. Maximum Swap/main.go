func maximumSwap(num int) int {
    b := toArray(num)
    for i := len(b) - 1; i >= 0; i-- {
        max := i
        for j := i - 1; j >= 0; j-- {
            if b[j] >= b[max] {
                max = j
            }
        }
        if b[max] != b[i] {
            b[i], b[max] = b[max], b[i]
            return toNum(b)
        }
    }
    return num
}

func toArray(num int) []byte {
    b := make([]byte, 0, 10)
    for num != 0 {
        b = append(b, byte(num % 10))
        num /= 10
    }
    if len(b) == 0 {
        b = append(b, byte(0))
    }
    return b
}

func toNum(b []byte) int {
    num := int(b[0])
    pow := 10
    for i := 1; i < len(b); i++ {
       num += int(b[i]) * pow
       pow *= 10 
    }
    return num
}
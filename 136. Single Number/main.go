package main

func singleNumber(nums []int) int {
	x := 0
	for _, v := range nums {
		x = x ^ v
	}
	return x
}

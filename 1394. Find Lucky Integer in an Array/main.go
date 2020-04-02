package main

func findLucky(arr []int) int {
	m := make(map[int]int, len(arr))
	for _, v := range arr {
		m[v]++
	}
	max := -1
	for k, v := range m {
		if k == v && v > max {
			max = v
		}
	}
	return max
}

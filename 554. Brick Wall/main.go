package main

func leastBricks(wall [][]int) int {
	m := make(map[int]int, 0)
	ans := len(wall)
	for i := 0; i < len(wall); i++ {
		sum := 0
		for j := 0; j < len(wall[i]); j++ {
			sum += wall[i][j]
			m[sum]++
			if len(wall)-m[sum] < ans && j != len(wall[i])-1 {
				ans = len(wall) - m[sum]
			}
		}
	}

	return ans
}

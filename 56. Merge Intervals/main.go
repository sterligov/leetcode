package main

import "sort"

func merge(intervals [][]int) [][]int {
	if len(intervals) == 0 {
		return [][]int{}
	}
	sort.Slice(intervals, func(i, j int) bool {
		if intervals[i][0] == intervals[j][0] {
			return intervals[i][1] < intervals[j][1]
		}
		return intervals[i][0] < intervals[j][0]
	})
	ans := make([][]int, 0)
	ans = append(ans, intervals[0])
	i := 1
	last := ans[len(ans)-1]
	for i < len(intervals) {
		if last[1] >= intervals[i][0] {
			if last[1] <= intervals[i][1] {
				last[1] = intervals[i][1]
			}
		} else {
			ans[len(ans)-1] = last
			ans = append(ans, intervals[i])
			last = ans[len(ans)-1]
		}
		i++
	}
	return ans
}

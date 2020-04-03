package main

func numIslands(grid [][]byte) int {
    visited := make(map[string]struct{}, 0)
    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid); j++ {
            if grid[i][j] == 0 {
                continue
            }
            c := cell(i, j)
            if _, ok := visited[c]; ok {
                continue
            }
            visited[c] = struct{}{}
        }
    }
}

func cell(i, j) string {
    n1, _ := strconv.Itoa(i)
    n2, _ := strconv.Itoa(j)
    return i + j
}

func adjs(i, j) []int {
    m := make([])
    if i - 1 >= 0 {
        
    }
}
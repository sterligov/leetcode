package main

import "strings"

func findDuplicate(paths []string) [][]string {
	m := make(map[string][]string, 0)
	for _, path := range paths {
		files := strings.Split(path, " ")
		path = files[0]
		for _, f := range files[1:] {
			contents := strings.Split(f, "(")
			filename, body := contents[0], contents[1]
			if _, ok := m[body]; !ok {
				m[body] = make([]string, 0)
			}
			m[body] = append(m[body], path+"/"+filename)
		}
	}
	ans := make([][]string, 0)
	for _, v := range m {
		if len(v) > 1 {
			ans = append(ans, v)
		}
	}

	return ans
}

package main

type Vector2D struct {
	nums   [][]int
	p1, p2 int
}

func Constructor(v [][]int) Vector2D {
	return Vector2D{v, 0, -1}
}

func (this *Vector2D) Next() int {
	if this.p2+1 < len(this.nums[this.p1]) {
		this.p2++
		return this.nums[this.p1][this.p2]
	}
	for i := this.p1 + 1; i < len(this.nums); i++ {
		if len(this.nums[i]) > 0 {
			this.p1 = i
			this.p2 = 0
			return this.nums[i][0]
		}
	}
	return 0
}

func (this *Vector2D) HasNext() bool {
	if this.p1 < len(this.nums) && this.p2+1 < len(this.nums[this.p1]) {
		return true
	}
	for i := this.p1 + 1; i < len(this.nums); i++ {
		if len(this.nums[i]) > 0 {
			return true
		}
	}
	return false
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * obj := Constructor(v);
 * param_1 := obj.Next();
 * param_2 := obj.HasNext();
 */

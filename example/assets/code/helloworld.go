package main

import (
	"fmt"
	"time"
)

// greeting returns a pleasant, semi-useful greeting.
func greeting() string {
	return "Hello world, the time is: " + time.Now().String()
}

func main() {
	fmt.Println(greeting())
}

package main

import (
    "net/http"
	"os"
)

type HTMLDir struct {
    d http.Dir
}

func main() {
  fs := http.FileServer(HTMLDir{http.Dir("public/")})
  http.Handle("/", http.StripPrefix("/", fs))
  http.ListenAndServe(":3000", nil)
}

func (d HTMLDir) Open(name string) (http.File, error) {
    // Try name with added extension
    f, err := d.d.Open(name + ".html")
    if os.IsNotExist(err) {
        // Not found, try again with name as supplied.
        if f, err := d.d.Open(name); err == nil {
            return f, nil
        }
    }
    return f, err
}
